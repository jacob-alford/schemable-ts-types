/**
 * Non-negative floating point branded newtype.
 *
 * Represents non-negative floating point numbers:
 *
 * ```math
 *  { f | f ∈ ℝ, f >= 0, f <= 2 ** 53 - 1 }
 * ```
 *
 * @since 0.0.2
 */
import { Kind, Kind2, URIS, URIS2, HKT } from 'fp-ts/HKT'
import * as D from 'io-ts/Decoder'
import * as Eq_ from 'fp-ts/Eq'
import * as G from 'io-ts/Guard'
import * as N from 'fp-ts/number'
import * as TD from 'io-ts/TaskDecoder'
import * as t from 'io-ts/Type'
import { pipe } from 'fp-ts/function'

/**
 * @since 0.0.2
 * @category Internal
 */
interface NonNegativeFloatBrand {
  readonly NonNegativeFloat: unique symbol
}

/**
 * Non-negative floating point branded newtype.
 *
 * Represents non-negative floating point numbers:
 *
 * ```math
 *  { f | f ∈ ℝ, f >= 0, f <= 2 ** 53 - 1 }
 * ```
 *
 * @since 0.0.2
 * @category Model
 */
export type NonNegativeFloat = number & NonNegativeFloatBrand

/**
 * @since 0.0.2
 * @category Model
 */
export type SchemableParams<S> = HKT<S, NonNegativeFloat>

/**
 * @since 0.0.2
 * @category Model
 */
export type SchemableParams1<S extends URIS> = Kind<S, NonNegativeFloat>

/**
 * @since 0.0.2
 * @category Model
 */
export type SchemableParams2C<S extends URIS2> = Kind2<S, unknown, NonNegativeFloat>

/**
 * @since 0.0.2
 * @category Refinements
 */
export const isNonNegativeFloat = (n: number): n is NonNegativeFloat =>
  typeof n === 'number' && G.number.is(n) && n >= 0 && n <= Number.MAX_SAFE_INTEGER

/**
 * @since 0.0.2
 * @category Instances
 */
export const Decoder: SchemableParams2C<D.URI> = pipe(
  D.number,
  D.refine(isNonNegativeFloat, 'NonNegativeFloat')
)

/**
 * @since 0.0.2
 * @category Instances
 */
export const Eq: SchemableParams1<Eq_.URI> = N.Eq

/**
 * @since 0.0.2
 * @category Instances
 */
export const Guard: SchemableParams1<G.URI> = pipe(G.number, G.refine(isNonNegativeFloat))

/**
 * @since 0.0.2
 * @category Instances
 */
export const TaskDecoder: SchemableParams2C<TD.URI> = pipe(
  TD.number,
  TD.refine(isNonNegativeFloat, 'NonNegativeFloat')
)

/**
 * @since 0.0.2
 * @category Instances
 */
export const Type: SchemableParams1<t.URI> = pipe(
  t.number,
  t.refine(isNonNegativeFloat, 'NonNegativeFloat')
)
