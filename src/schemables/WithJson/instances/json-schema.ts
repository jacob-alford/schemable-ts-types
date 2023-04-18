/**
 * A basal schemable for Json and JsonString
 *
 * @since 1.2.0
 */
import * as JS from 'schemata-ts/internal/json-schema'
import { WithJson } from 'schemata-ts/schemables/WithJson/definition'

/**
 * @since 1.2.0
 * @category Instances
 */
export const JsonSchema: WithJson<JS.SchemableLambda> = {
  json: JS.make(new JS.JsonEmpty()),
  jsonString: JS.make(
    new JS.JsonString(undefined, undefined, undefined, undefined, 'application/json'),
  ),
}
