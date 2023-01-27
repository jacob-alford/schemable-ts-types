/**
 * SchemableExt instances for JsonSchema
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 1.2.0
 */
import * as JS from 'schemata-ts/base/JsonSchemaBase'
import { SchemableExt2 } from 'schemata-ts/SchemableExt'
import * as WithAnnotate from 'schemata-ts/schemables/WithAnnotate/instances/json-schema'
import * as WithBrand from 'schemata-ts/schemables/WithBrand/instances/json-schema'
import * as WithCheckDigit from 'schemata-ts/schemables/WithCheckDigit/instances/json-schema'
import * as WithDate from 'schemata-ts/schemables/WithDate/instances/json-schema'
import * as WithFloat from 'schemata-ts/schemables/WithFloat/instances/json-schema'
import * as WithInt from 'schemata-ts/schemables/WithInt/instances/json-schema'
import * as WithInvariant from 'schemata-ts/schemables/WithInvariant/instances/json-schema'
import * as WithJson from 'schemata-ts/schemables/WithJson/instances/json-schema'
import * as WithMap from 'schemata-ts/schemables/WithMap/instances/json-schema'
import * as WithOption from 'schemata-ts/schemables/WithOption/instances/json-schema'
import * as WithOptional from 'schemata-ts/schemables/WithOptional/instances/json-schema'
import * as WithPadding from 'schemata-ts/schemables/WithPadding/instances/json-schema'
import * as WithPattern from 'schemata-ts/schemables/WithPattern/instances/json-schema'
import * as WithRefine from 'schemata-ts/schemables/WithRefine/instances/json-schema'
import * as WithUnknownContainers from 'schemata-ts/schemables/WithUnknownContainers/instances/json-schema'
import { interpret } from 'schemata-ts/SchemaExt'
export type {
  /**
   * @since 1.2.0
   * @category Model
   */
  JsonSchema,
} from 'schemata-ts/base/JsonSchemaBase'

/**
 * @since 1.2.0
 * @category Instances
 */
export const Schemable: SchemableExt2<JS.URI> = {
  ...JS.Schemable,
  ...WithAnnotate.JsonSchema,
  ...WithBrand.JsonSchema,
  ...WithCheckDigit.JsonSchema,
  ...WithDate.JsonSchema,
  ...WithFloat.JsonSchema,
  ...WithInt.JsonSchema,
  ...WithInvariant.JsonSchema,
  ...WithJson.JsonSchema,
  ...WithMap.JsonSchema,
  ...WithOption.JsonSchema,
  ...WithOptional.JsonSchema,
  ...WithPadding.JsonSchema,
  ...WithPattern.JsonSchema,
  ...WithRefine.JsonSchema,
  ...WithUnknownContainers.JsonSchema,
}

/**
 * @since 1.2.0
 * @category Interpreters
 */
export const getJsonSchema = interpret(Schemable)