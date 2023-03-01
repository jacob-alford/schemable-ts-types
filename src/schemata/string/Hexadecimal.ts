/**
 * A string of hexadecimal characters.
 *
 * @since 1.0.0
 */
import { pipe } from 'fp-ts/function'
import { Branded } from 'schemata-ts/brand'
import * as PB from 'schemata-ts/PatternBuilder'
import { make, Schema } from 'schemata-ts/Schema'

interface HexadecimalBrand {
  readonly Hexadecimal: unique symbol
}

/**
 * A string of hexadecimal characters.
 *
 * @since 1.0.0
 * @category Model
 */
export type Hexadecimal = Branded<string, HexadecimalBrand>

/**
 * @since 1.0.0
 * @category Model
 */
export type HexadecimalS = Schema<string, Hexadecimal>

/**
 * @since 1.0.0
 * @category Pattern
 */
export const hexadecimal: PB.Pattern = pipe(
  PB.exactString('0x'),
  PB.or(PB.exactString('0X')),
  PB.or(PB.exactString('0h')),
  PB.or(PB.exactString('0H')),
  PB.subgroup,
  PB.maybe,
  PB.then(
    pipe(PB.characterClass(false, ['0', '9'], ['A', 'F'], ['a', 'f']), PB.atLeastOne()),
  ),
)

/**
 * A string of hexadecimal characters.
 *
 * @since 1.0.0
 * @category Schema
 */
export const Hexadecimal: HexadecimalS = make(s =>
  s.brand<HexadecimalBrand>()(s.pattern(hexadecimal, 'Hexadecimal')),
)
