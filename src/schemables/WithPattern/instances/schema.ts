/**
 * Schemable construction based on Regex combinators
 *
 * @since 1.0.0
 */
import * as SC from 'schemata-ts/Schema'
import { WithPattern } from 'schemata-ts/schemables/WithPattern/definition'

/**
 * @since 1.0.0
 * @category Instances
 */
export const Schema: WithPattern<Schem.SchemableLambda>['pattern'] = (
  pattern,
  description,
) => SC.make(S => S.pattern(pattern, description))
