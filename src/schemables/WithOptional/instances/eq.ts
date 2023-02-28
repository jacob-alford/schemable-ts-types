import * as Eq_ from 'schemata-ts/Eq'
import { WithOptional } from 'schemata-ts/schemables/WithOptional/definition'
import { makeImplicitOptional } from 'schemata-ts/struct'

export const WithOptionalEq: WithOptional<Eq_.SchemableLambda> = {
  optional: eqA =>
    makeImplicitOptional(
      {
        equals: (x, y) =>
          x === undefined ? y === undefined : y !== undefined && eqA.equals(x, y),
      },
      val => Object.assign({}, val),
    ),
}
