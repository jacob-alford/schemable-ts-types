/**
 * The extended Schemable typeclass
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 1.0.0
 */
import { SchemableLambda } from 'schemata-ts/HKT'
import { WithAnnotate } from 'schemata-ts/schemables/annotate/definition'
import { WithArray } from 'schemata-ts/schemables/array/definition'
import { WithCheckDigit } from 'schemata-ts/schemables/check-digit/definition'
import { WithClone } from 'schemata-ts/schemables/clone/definition'
import { WithDate } from 'schemata-ts/schemables/date/definition'
import { WithGuardedUnion } from 'schemata-ts/schemables/guarded-union/definition'
import { WithInvariant } from 'schemata-ts/schemables/invariant/definition'
import { WithLazy } from 'schemata-ts/schemables/lazy/definition'
import { WithMap } from 'schemata-ts/schemables/map/definition'
import { WithOptional } from 'schemata-ts/schemables/optional/definition'
import { WithPadding } from 'schemata-ts/schemables/padding/definition'
import { WithParser } from 'schemata-ts/schemables/parser/definition'
import { WithPattern } from 'schemata-ts/schemables/pattern/definition'
import { WithPrimitives } from 'schemata-ts/schemables/primitives/definition'
import { WithRefine } from 'schemata-ts/schemables/refine/definition'
import { WithStruct } from 'schemata-ts/schemables/struct/definition'

/**
 * @since 2.0.0
 * @category Instances
 */
export interface Schemable<S extends SchemableLambda>
  extends WithAnnotate<S>,
    WithArray<S>,
    WithCheckDigit<S>,
    WithClone<S>,
    WithDate<S>,
    WithGuardedUnion<S>,
    WithInvariant<S>,
    WithLazy<S>,
    WithMap<S>,
    WithOptional<S>,
    WithPadding<S>,
    WithParser<S>,
    WithPattern<S>,
    WithPrimitives<S>,
    WithRefine<S>,
    WithStruct<S> {}
