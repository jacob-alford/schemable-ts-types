import * as SC from 'schemata-ts/Schema'
import { WithPattern } from 'schemata-ts/schemables/WithPattern/definition'

export const WithPatternSchema: WithPattern<Schem.SchemableLambda>['pattern'] = (
  pattern,
  description,
) => SC.make(S => S.pattern(pattern, description))
