import * as O from 'fp-ts/Option'
import * as G from 'schemata-ts/internal/guard'
import { WithOption } from 'schemata-ts/schemables/option/definition'

export const OptionGuard: WithOption<G.SchemableLambda> = {
  optionFromExclude: (_, guardA) => ({
    is: (u): u is O.Option<typeof _> =>
      typeof u === 'object' &&
      u !== null &&
      !Array.isArray(u) &&
      '_tag' in u &&
      (u._tag === 'None' || (u._tag === 'Some' && 'value' in u && guardA.is(u.value))),
  }),
}
