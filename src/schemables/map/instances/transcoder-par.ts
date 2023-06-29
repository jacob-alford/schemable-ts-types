import * as Ap from 'fp-ts/Apply'
import { flow } from 'fp-ts/function'
import * as RA from 'fp-ts/ReadonlyArray'
import * as RM from 'fp-ts/ReadonlyMap'
import * as RTup from 'fp-ts/ReadonlyTuple'
import * as Sg from 'fp-ts/Semigroup'
import * as TE from 'fp-ts/TaskEither'
import * as TCP from 'schemata-ts/internal/transcoder-par'
import { ArrayTranscoderPar } from 'schemata-ts/schemables/array/instances/transcoder-par'
import { type WithMap } from 'schemata-ts/schemables/map/definition'

export const MapTranscoderPar: WithMap<TCP.SchemableLambda> = {
  mapFromEntries: (ordK, sk, sa, arrayExpected, tupleExpected) => ({
    decode: flow(
      ArrayTranscoderPar.array({ errorName: arrayExpected })(
        ArrayTranscoderPar.tuple(tupleExpected, sk, sa),
      ).decode,
      TE.map(RM.fromFoldable(ordK, Sg.last(), RA.Foldable)),
    ),
    encode: flow(
      RM.toReadonlyArray(ordK),
      RA.traverse(TCP.applicativeValidationPar)(
        flow(RTup.bimap(sa.encode, sk.encode), tup =>
          Ap.sequenceT(TCP.applicativeValidationPar)(...tup),
        ),
      ),
    ),
  }),
}
