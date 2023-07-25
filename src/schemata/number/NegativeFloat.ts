/**
 * Negative floating point branded newtype.
 *
 * Represents negative floating point numbers:
 *
 * ```math
 *  { f | f ∈ ℝ, f < 0, f >= -Number.MAX_VALUE }
 * ```
 *
 * @since 1.0.0
 */
import { pipe } from 'fp-ts/function'
import { Branded } from 'schemata-ts/brand'
import { make, Schema } from 'schemata-ts/Schema'

interface NegativeFloatBrand {
  readonly NegativeFloat: unique symbol
}

/**
 * Negative floating point branded newtype.
 *
 * Represents negative floating point numbers:
 *
 * ```math
 *  { f | f ∈ ℝ, f < 0, f >= -Number.MAX_VALUE }
 * ```
 *
 * @since 1.0.0
 * @category Model
 */
export type NegativeFloat = Branded<number, NegativeFloatBrand>

/**
 * @since 1.0.0
 * @category Model
 */
export type NegativeFloatS = Schema<number, NegativeFloat>

/**
 * Negative floating point branded newtype.
 *
 * Represents negative floating point numbers:
 *
 * ```math
 *  { f | f ∈ ℝ, f < 0, f >= -Number.MAX_VALUE }
 * ```
 *
 * @since 1.0.0
 * @category Schema
 */
export const NegativeFloat: NegativeFloatS = make(S =>
  pipe(S.float({ max: -Number.MIN_VALUE }), S.brand<NegativeFloatBrand>()),
)
