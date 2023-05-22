import * as RA from 'fp-ts/ReadonlyArray'
import * as Arb from 'schemata-ts/internal/arbitrary'
import { WithArray } from 'schemata-ts/schemables/array/definition'

export const ArrayArbitrary: WithArray<Arb.SchemableLambda> = {
  array: item => ({
    arbitrary: fc => fc.array(item.arbitrary(fc)),
  }),
  tuple: (...components) => ({
    arbitrary: fc => {
      if (components.length === 0) {
        return fc.constant(RA.zero())
      }
      return fc.tuple(...components.map(arb => arb.arbitrary(fc))) as any
    },
  }),
}