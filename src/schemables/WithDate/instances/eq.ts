import * as Eq_ from 'schemata-ts/Eq'
import { WithDate } from 'schemata-ts/schemables/WithDate/definition'

export const WithDateEq: WithDate<Eq_.SchemableLambda> = {
  date: {
    equals: (x, y) => x.getTime() === y.getTime(),
  },
  dateFromString: {
    equals: (x, y) => x.getTime() === y.getTime(),
  },
}
