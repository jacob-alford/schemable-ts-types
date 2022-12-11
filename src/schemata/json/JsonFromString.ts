/**
 * Represents Json values converted from strings
 *
 * @since 1.0.2
 */
import { pipe } from 'fp-ts/function'
import * as J from 'fp-ts/Json'

import { getGuard } from '../../Guard'
import { JsonString } from '../../schemables/WithJson/definition'
import { make, SchemaExt } from '../../SchemaExt'
import { Json } from '../../schemata'

/**
 * @since 1.0.2
 * @category Model
 */
export type JsonFromStringS = SchemaExt<string, J.Json>

/**
 * @since 1.0.2
 * @category Schema
 */
export const JsonFromString: JsonFromStringS = make(S =>
  pipe(
    S.jsonString,
    S.imap(getGuard(Json.json), 'Json')(
      jsonString => JSON.parse(jsonString) as J.Json,
      json => JSON.stringify(json, null, 2) as JsonString,
    ),
  ),
)
