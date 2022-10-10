/**
 * Positive integer branded newtype.
 *
 * Represents positive integers:
 *
 * ```math
 *  { z | z ∈ ℤ, z > 0, z <= 2 ** 53 - 1 }
 * ```
 *
 * @since 0.0.1
 */
import { Kind, Kind2, URIS, URIS2, HKT2 } from 'fp-ts/HKT'
import * as D from 'io-ts/Decoder'
import * as Enc from 'io-ts/Encoder'
import * as Eq_ from 'fp-ts/Eq'
import * as G from 'io-ts/Guard'
import * as TD from 'io-ts/TaskDecoder'
import * as t from 'io-ts/Type'
import * as N from 'fp-ts/number'
import { pipe } from 'fp-ts/function'
import * as fc from 'fast-check'

import * as Arb from '../internal/ArbitraryBase'
import { isInt } from './int'

/**
 * @since 0.0.1
 * @internal
 */
interface PositiveIntBrand {
  readonly PositiveInt: unique symbol
}

/**
 * Positive integer branded newtype.
 *
 * Represents positive integers:
 *
 * ```math
 *  { z | z ∈ ℤ, z > 0, z <= 2 ** 53 - 1 }
 * ```
 *
 * @since 0.0.1
 * @category Model
 */
export type PositiveInt = number & PositiveIntBrand

/**
 * @since 0.0.1
 * @category Model
 */
export type SchemableParams<S> = HKT2<S, number, PositiveInt>

/**
 * @since 0.0.1
 * @category Model
 */
export type SchemableParams1<S extends URIS> = Kind<S, PositiveInt>

/**
 * @since 0.0.3
 * @category Model
 */
export type SchemableParams2<S extends URIS2> = Kind2<S, number, PositiveInt>

/**
 * @since 0.0.1
 * @category Model
 */
export type SchemableParams2C<S extends URIS2> = Kind2<S, unknown, PositiveInt>

/**
 * @since 0.0.1
 * @category Refinements
 */
export function isPositiveInt(n: number): n is PositiveInt {
  return isInt(n) && n > 0
}

/**
 * @since 0.0.1
 * @category Instances
 */
export const Decoder: SchemableParams2C<D.URI> = pipe(
  D.number,
  D.refine(isPositiveInt, 'PositiveInt')
)

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: SchemableParams1<Eq_.URI> = N.Eq

/**
 * @since 0.0.1
 * @category Instances
 */
export const Guard: SchemableParams1<G.URI> = pipe(G.number, G.refine(isPositiveInt))

/**
 * @since 0.0.1
 * @category Instances
 */
export const TaskDecoder: SchemableParams2C<TD.URI> = pipe(
  TD.number,
  TD.refine(isPositiveInt, 'PositiveInt')
)

/**
 * @since 0.0.1
 * @category Instances
 */
export const Type: SchemableParams1<t.URI> = pipe(
  t.number,
  t.refine(isPositiveInt, 'PositiveInt')
)

/**
 * @since 0.0.3
 * @category Instances
 */
export const Encoder: SchemableParams2<Enc.URI> = Enc.id()

/**
 * @since 0.0.3
 * @category Instances
 */
export const Arbitrary: SchemableParams1<Arb.URI> = fc
  .integer({ min: 1, max: Number.MAX_SAFE_INTEGER })
  .filter(isPositiveInt)
