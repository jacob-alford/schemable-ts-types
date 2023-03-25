import { pipe } from 'fp-ts/function'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import * as Eq_ from 'schemata-ts/Eq'
import {
  ordGuardedPrecedentedUnionMember,
  WithGuardedUnion,
} from 'schemata-ts/schemables/WithGuardedUnion/definition'

/** @since 2.0.0 */
export const Eq: WithGuardedUnion<Eq_.SchemableLambda> = {
  guardedUnion: (_name, ...members) => {
    const sortedMembers = pipe(members, RNEA.sort(ordGuardedPrecedentedUnionMember))
    return {
      equals: (x, y) => {
        for (const m of sortedMembers) {
          const { member, guard } = m
          if (guard.is(x) && guard.is(y)) {
            return member.equals(x, y)
          }
        }
        return false
      },
    }
  },
}
