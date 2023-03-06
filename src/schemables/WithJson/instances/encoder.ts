/**
 * A basal schemable for Json and JsonString
 *
 * @since 1.1.0
 */
import { unsafeCoerce } from 'fp-ts/function'
import * as Enc from 'schemata-ts/Encoder'
import { WithJson } from 'schemata-ts/schemables/WithJson/definition'

/**
 * @since 1.1.0
 * @category Instances
 */
export const Encoder: WithJson<Enc.SchemableLambda> = {
  json: { encode: unsafeCoerce },
  jsonString: Enc.id(),
}
