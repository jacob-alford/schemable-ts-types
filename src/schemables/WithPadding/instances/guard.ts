/**
 * Adds a character to the right or left of a string until it reaches a certain length.
 *
 * @since 1.0.0
 */
import * as G from 'schemata-ts/Guard'
import { WithPadding } from 'schemata-ts/schemables/WithPadding/definition'
import { foldUnion, match } from 'schemata-ts/schemables/WithPadding/utils'

/**
 * @since 1.0.0
 * @category Instances
 */
export const Guard: WithPadding<G.SchemableLambda> = {
  padLeft: match({
    MaxLength: ({ maxLength }) =>
      G.refine((s: string): s is string => s.length <= foldUnion(maxLength)(s)),
    ExactLength: ({ exactLength }) =>
      G.refine((s: string): s is string => s.length === foldUnion(exactLength)(s)),
  }),
  padRight: match({
    MaxLength: ({ maxLength }) =>
      G.refine((s: string): s is string => s.length <= foldUnion(maxLength)(s)),
    ExactLength: ({ exactLength }) =>
      G.refine((s: string): s is string => s.length === foldUnion(exactLength)(s)),
  }),
}
