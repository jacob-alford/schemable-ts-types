import * as G from 'schemata-ts/Guard'
import { WithDate } from 'schemata-ts/schemables/WithDate/definition'
import { isSafeDate } from 'schemata-ts/schemables/WithDate/utils'

export const WithDateGuard: WithDate<G.SchemableLambda> = {
  date: {
    is: isSafeDate,
  },
  dateFromString: {
    is: isSafeDate,
  },
}
