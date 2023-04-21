import * as TC from 'schemata-ts/internal/Transcoder'
import { WithOptional } from 'schemata-ts/schemables/WithOptional/definition'
import { makeImplicitOptional } from 'schemata-ts/struct'

export const WithOptionalTranscoder: WithOptional<TC.SchemableLambda> = {
  optional: da =>
    makeImplicitOptional(
      {
        decode: u => (u === undefined ? D.success<any>(u) : da.decode(u)),
      },
      decoder => Object.assign({}, decoder),
    ),
}
