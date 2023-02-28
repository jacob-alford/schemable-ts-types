import { flow, pipe } from 'fp-ts/function'
import * as Arb from 'schemata-ts/Arbitrary'
import { WithPadding } from 'schemata-ts/schemables/WithPadding/definition'
import {
  foldUnion,
  match,
  stripLeftWhile,
  stripRightWhile,
} from 'schemata-ts/schemables/WithPadding/utils'

export const WithPaddingArbitrary: WithPadding<Arb.SchemableLambda> = {
  padLeft: (length, char) => aS => ({
    arbitrary: fc =>
      pipe(
        length,
        match({
          MaxLength: ({ maxLength }) => maxLength,
          ExactLength: ({ exactLength }) => exactLength,
        }),
        length =>
          aS.arbitrary(fc).map(
            flow(
              stripLeftWhile(c => c === char),
              s =>
                s.length > foldUnion(length)(s)
                  ? s.slice(0, foldUnion(length)(s))
                  : s.padStart(foldUnion(length)(s), char),
            ),
          ),
      ),
  }),
  padRight: (length, char) => aS => ({
    arbitrary: fc =>
      pipe(
        length,
        match({
          MaxLength: ({ maxLength }) => maxLength,
          ExactLength: ({ exactLength }) => exactLength,
        }),
        length =>
          aS.arbitrary(fc).map(
            flow(
              stripRightWhile(c => c === char),
              s =>
                s.length > foldUnion(length)(s)
                  ? s.slice(0, foldUnion(length)(s))
                  : s.padEnd(foldUnion(length)(s), char),
            ),
          ),
      ),
  }),
}
