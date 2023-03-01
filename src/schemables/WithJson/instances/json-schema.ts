/**
 * A basal schemable for Json and JsonString
 *
 * @since 1.2.0
 */
import * as JS from 'schemata-ts/JsonSchema'
import { WithJson2 } from 'schemata-ts/schemables/WithJson/definition'

/**
 * @since 1.2.0
 * @category Instances
 */
export const JsonSchema: WithJson2<JS.URI> = {
  json: JS.emptySchema,
  jsonString: JS.makeStringSchema({ contentMediaType: 'application/json' }),
}
