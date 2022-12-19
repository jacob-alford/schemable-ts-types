/**
 * A basal schemable for Json and JsonString
 *
 * @since 1.1.0
 */
import { unsafeCoerce } from 'fp-ts/function'

import * as Enc from '../../../base/EncoderBase'
import { WithJson2 } from '../definition'

/**
 * @since 1.1.0
 * @category Instances
 */
export const Encoder: WithJson2<Enc.URI> = {
  json: { encode: unsafeCoerce },
  jsonString: Enc.id(),
}