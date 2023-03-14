/**
 * Schemable for widening a type to include undefined. Similar to nullable but for undefined.
 *
 * @since 1.0.0
 */
import * as Eq_ from 'schemata-ts/Eq'
import { WithOptional } from 'schemata-ts/schemables/WithOptional/definition'
import { makeImplicitOptional } from 'schemata-ts/struct'

/**
 * @since 1.0.0
 * @category Instances
 */
export const Eq: WithOptional<Eq_.SchemableLambda> = {
  optional: eqA =>
    makeImplicitOptional(
      {
        equals: (x, y) =>
          x === undefined ? y === undefined : y !== undefined && eqA.equals(x, y),
      },
      val => Object.assign({}, val),
    ),
}
