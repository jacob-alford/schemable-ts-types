/**
 * SchemableExt instances for Type
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 1.0.0
 */
import * as t from './base/TypeBase'
import { SchemableExt1 } from './SchemableExt'
import * as WithBrand from './schemables/WithBrand/instances/type'
import * as WithCheckDigit from './schemables/WithCheckDigit/instances/type'
import * as WithDate from './schemables/WithDate/instances/type'
import * as WithFloat from './schemables/WithFloat/instances/type'
import * as WithInt from './schemables/WithInt/instances/type'
import * as WithInvariant from './schemables/WithInvariant/instances/type'
import * as WithMap from './schemables/WithMap/instances/type'
import * as WithOption from './schemables/WithOption/instances/type'
import * as WithOptional from './schemables/WithOptional/instances/type'
import * as WithPadding from './schemables/WithPadding/instances/type'
import * as WithPattern from './schemables/WithPattern/instances/type'
import * as WithRefine from './schemables/WithRefine/instances/type'
import * as WithUnknownContainers from './schemables/WithUnknownContainers/instances/type'
import { interpret } from './SchemaExt'
export type {
  /**
   * @since 1.0.0
   * @category Model
   */
  Type,
} from './base/TypeBase'

/**
 * @since 1.0.0
 * @category Instances
 */
export const Schemable: SchemableExt1<t.URI> = {
  ...t.Schemable,
  ...WithBrand.Type,
  ...WithCheckDigit.Type,
  ...WithDate.Type,
  ...WithFloat.Type,
  ...WithInt.Type,
  ...WithInvariant.Type,
  ...WithMap.Type,
  ...WithOption.Type,
  ...WithOptional.Type,
  ...WithPadding.Type,
  ...WithPattern.Type,
  ...WithRefine.Type,
  ...WithUnknownContainers.Type,
}

/**
 * @since 1.0.0
 * @category Interpreters
 */
export const getType = interpret(Schemable)
