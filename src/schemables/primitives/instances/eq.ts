import * as B from 'fp-ts/boolean'
import { constant } from 'fp-ts/function'
import * as N from 'fp-ts/number'
import * as Str from 'fp-ts/string'
import * as Eq from 'schemata-ts/internal/eq'
import { type WithPrimitives } from 'schemata-ts/schemables/primitives/definition'

/** @since 2.0.0 */
export const PrimitivesEq: WithPrimitives<Eq.SchemableLambda> = {
  string: constant(Str.Eq),
  int: constant(N.Eq),
  float: constant(N.Eq),
  boolean: B.Eq,
  unknown: Eq.eqStrict,
  literal: constant(Eq.eqStrict),
}