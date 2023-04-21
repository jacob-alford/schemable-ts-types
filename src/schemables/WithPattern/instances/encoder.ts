import * as Enc from 'schemata-ts/Encoder'
import { WithPattern } from 'schemata-ts/schemables/WithPattern/definition'

export const WithPatternEncoder: WithPattern<Enc.SchemableLambda> = {
  pattern: () => Enc.id(),
}
