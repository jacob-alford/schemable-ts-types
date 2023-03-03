/**
 * Schemable instances for Guard
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 2.0.0
 */
import * as G from 'schemata-ts/Guard'
import { interpret } from 'schemata-ts/Schema'
import { Schemable } from 'schemata-ts/Schemable'
import * as WithAnnotate from 'schemata-ts/schemables/WithAnnotate/instances/guard'
import * as WithCheckDigit from 'schemata-ts/schemables/WithCheckDigit/instances/guard'
import * as WithDate from 'schemata-ts/schemables/WithDate/instances/guard'
import * as WithFloat from 'schemata-ts/schemables/WithFloat/instances/guard'
import * as WithInt from 'schemata-ts/schemables/WithInt/instances/guard'
import * as WithInvariant from 'schemata-ts/schemables/WithInvariant/instances/guard'
import * as WithJson from 'schemata-ts/schemables/WithJson/instances/guard'
import * as WithMap from 'schemata-ts/schemables/WithMap/instances/guard'
import * as WithOption from 'schemata-ts/schemables/WithOption/instances/guard'
import * as WithOptional from 'schemata-ts/schemables/WithOptional/instances/guard'
import * as WithPadding from 'schemata-ts/schemables/WithPadding/instances/guard'
import * as WithPattern from 'schemata-ts/schemables/WithPattern/instances/guard'
import * as WithRefine from 'schemata-ts/schemables/WithRefine/instances/guard'
import * as WithStructM from 'schemata-ts/schemables/WithStructM/instances/guard'
import * as WithUnknown from 'schemata-ts/schemables/WithUnknown/instances/guard'

/**
 * @since 2.0.0
 * @category Instances
 */
const GuardSchemable: Schemable<G.SchemableLambda> = {
  ...WithAnnotate.Guard,
  ...WithCheckDigit.Guard,
  ...WithDate.Guard,
  ...WithFloat.Guard,
  ...WithInt.Guard,
  ...WithInvariant.Guard,
  ...WithJson.Guard,
  ...WithMap.Guard,
  ...WithOption.Guard,
  ...WithOptional.Guard,
  ...WithPadding.Guard,
  ...WithPattern.Guard,
  ...WithRefine.Guard,
  ...WithStructM.Guard,
  ...WithUnknown.Guard,
}

/**
 * @since 2.0.0
 * @category Interpreters
 */
export const getGuard = interpret(GuardSchemable)
