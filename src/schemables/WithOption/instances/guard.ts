/**
 * Represents an exclusion of a supplied value where the exclusion is mapped to `None`.
 * Requires an inner schemable, and an Eq instance which defaults to strict equality.
 *
 * @since 1.0.0
 */
import * as G from 'schemata-ts/Guard'
import { WithOption } from 'schemata-ts/schemables/WithOption/definition'

/**
 * @since 1.0.0
 * @category Instances
 */
export const Guard: WithOption<G.SchemableLambda> = {
  optionFromExclude: (_, guardA) =>
    G.union(
      G.struct({
        _tag: G.literal('None'),
      }),
      G.struct({
        _tag: G.literal('Some'),
        value: guardA,
      }),
    ),
}
