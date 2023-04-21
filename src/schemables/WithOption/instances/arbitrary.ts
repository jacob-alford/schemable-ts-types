import * as Arb from 'schemata-ts/Arbitrary'
import { WithOption } from 'schemata-ts/schemables/WithOption/definition'

export const WithOptionArbitrary: WithOption<Arb.SchemableLambda> = {
  optionFromExclude: (_, arbA) => ({
    arbitrary: fc =>
      fc.oneof(
        Arb.struct({ _tag: Arb.literal('None') }).arbitrary(fc),
        Arb.struct({
          _tag: Arb.literal('Some'),
          value: arbA,
        }).arbitrary(fc),
      ),
  }),
}
