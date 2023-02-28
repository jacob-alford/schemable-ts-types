import * as RM from 'fp-ts/ReadonlyMap'
import * as Eq_ from 'schemata-ts/Eq'
import { WithMap } from 'schemata-ts/schemables/WithMap/definition'

export const WithMapEq: WithMap<Eq_.SchemableLambda> = {
  mapFromEntries: (_, sk, sa) => RM.getEq(sk, sa),
}
