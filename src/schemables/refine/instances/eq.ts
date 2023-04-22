/** @since 1.0.0 */
import { identity } from 'fp-ts/function'
import * as Eq_ from 'schemata-ts/Eq'
import { WithRefine } from 'schemata-ts/schemables/refine/definition'

export const RefineEq: WithRefine<Eq_.SchemableLambda> = {
  refine: () => identity,
}
