import * as E from 'fp-ts/Either'
import { flow, pipe, unsafeCoerce } from 'fp-ts/function'
import * as RA from 'fp-ts/ReadonlyArray'
import * as TC from 'schemata-ts/internal/transcoder'
import { WithArray } from 'schemata-ts/schemables/array/definition'
import * as TCE from 'schemata-ts/TranscodeError'

const validateArray = E.fromPredicate(
  (u): u is Array<unknown> => Array.isArray(u),
  u => TC.transcodeErrors(TC.typeMismatch('array', u)),
)

const applicativeValidation = E.getApplicativeValidation(TCE.Semigroup)

export const ArrayTranscoder: WithArray<TC.SchemableLambda> = {
  array: item => ({
    encode: flow(E.traverseArray(item.encode)),
    decode: flow(
      validateArray,
      E.chain(
        RA.traverseWithIndex(applicativeValidation)((i, u) =>
          pipe(
            item.decode(u),
            E.mapLeft(errs => TC.transcodeErrors(TC.errorAtIndex(i, errs))),
          ),
        ),
      ),
    ),
  }),
  tuple: (...components) => ({
    encode: out =>
      unsafeCoerce(
        RA.sequence(applicativeValidation)(
          RA.zipWith(out, components, (a, encoderA) => encoderA.encode(a)),
        ),
      ),
    decode: flow(
      validateArray,
      E.filterOrElse(
        u => u.length === components.length,
        u =>
          TC.transcodeErrors(TC.typeMismatch(`tuple of length ${components.length}`, u)),
      ),
      E.chain(
        RA.traverseWithIndex(applicativeValidation)((i, u) =>
          pipe(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            components[i]!.decode(u),
            E.mapLeft(err => TC.transcodeErrors(TC.errorAtIndex(i, err))),
          ),
        ),
      ),
      E.map(a => unsafeCoerce(a)),
    ),
  }),
}
