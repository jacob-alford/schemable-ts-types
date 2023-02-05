/**
 * SchemableExt instances for Eq
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 1.0.0
 */
import * as Eq from 'schemata-ts/base/EqBase'
import { SchemableExt1 } from 'schemata-ts/SchemableExt'
import * as WithAnnotate from 'schemata-ts/schemables/WithAnnotate/instances/eq'
import * as WithBrand from 'schemata-ts/schemables/WithBrand/instances/eq'
import * as WithCheckDigit from 'schemata-ts/schemables/WithCheckDigit/instances/eq'
import * as WithDate from 'schemata-ts/schemables/WithDate/instances/eq'
import * as WithFloat from 'schemata-ts/schemables/WithFloat/instances/eq'
import * as WithInt from 'schemata-ts/schemables/WithInt/instances/eq'
import * as WithInvariant from 'schemata-ts/schemables/WithInvariant/instances/eq'
import * as WithJson from 'schemata-ts/schemables/WithJson/instances/eq'
import * as WithMap from 'schemata-ts/schemables/WithMap/instances/eq'
import * as WithOption from 'schemata-ts/schemables/WithOption/instances/eq'
import * as WithOptional from 'schemata-ts/schemables/WithOptional/instances/eq'
import * as WithPadding from 'schemata-ts/schemables/WithPadding/instances/eq'
import * as WithPattern from 'schemata-ts/schemables/WithPattern/instances/eq'
import * as WithRefine from 'schemata-ts/schemables/WithRefine/instances/eq'
import * as WithStructM from 'schemata-ts/schemables/WithStructM/instances/eq'
import * as WithUnknownContainers from 'schemata-ts/schemables/WithUnknownContainers/instances/eq'
import { interpret } from 'schemata-ts/SchemaExt'
export type {
  /**
   * @since 1.0.0
   * @category Model
   */
  Eq,
} from 'schemata-ts/base/EqBase'

/**
 * @since 1.0.0
 * @category Instances
 */
export const Schemable: SchemableExt1<Eq.URI> = {
  ...Eq.Schemable,
  ...WithAnnotate.Eq,
  ...WithBrand.Eq,
  ...WithCheckDigit.Eq,
  ...WithDate.Eq,
  ...WithFloat.Eq,
  ...WithInt.Eq,
  ...WithInvariant.Eq,
  ...WithJson.Eq,
  ...WithMap.Eq,
  ...WithOption.Eq,
  ...WithOptional.Eq,
  ...WithPadding.Eq,
  ...WithPattern.Eq,
  ...WithRefine.Eq,
  ...WithStructM.Eq,
  ...WithUnknownContainers.Eq,
}

/**
 * @since 1.0.0
 * @category Interpreters
 */
export const getEq = interpret(Schemable)
