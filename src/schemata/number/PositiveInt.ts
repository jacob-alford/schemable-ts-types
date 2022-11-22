/**
 * Positive integer branded newtype.
 *
 * Represents positive integers:
 *
 * ```math
 *  { z | z ∈ ℤ, z > 0, z <= 2 ** 53 - 1 }
 * ```
 *
 * @since 1.0.0
 */
import { SchemaExt, make } from '../../SchemaExt'
import { pipe } from 'fp-ts/function'
import { Branded } from 'io-ts'

/** @internal */
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
 * @since 1.0.0
 * @category Model
 */
export type PositiveInt = Branded<number, PositiveIntBrand>

/**
 * @since 1.0.0
 * @category Model
 */
export type PositiveIntS = SchemaExt<number, PositiveInt>

/**
 * Positive integer branded newtype.
 *
 * Represents positive integers:
 *
 * ```math
 *  { z | z ∈ ℤ, z > 0, z <= 2 ** 53 - 1 }
 * ```
 *
 * @since 1.0.0
 * @category Schema
 */
export const PositiveInt: PositiveIntS = make(S =>
  pipe(S.int({ min: 0 }), S.brand<PositiveIntBrand>()),
)
