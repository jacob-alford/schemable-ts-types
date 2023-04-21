import * as JS from 'schemata-ts/internal/json-schema'
import { WithArray } from 'schemata-ts/schemables/WithArray/definition'

export const WithArrayJsonSchema: WithArray<JS.SchemableLambda> = {
  array: item => JS.make(new JS.JsonArray(item)),
  tuple: (...items) => JS.make(new JS.JsonArray(items, items.length, items.length)),
}
