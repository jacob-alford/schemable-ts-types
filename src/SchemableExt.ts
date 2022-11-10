/**
 * The extended Schemable typeclass
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.1
 */
import { URIS, URIS2 } from 'fp-ts/HKT'
import { Schemable1, Schemable2C } from 'io-ts/Schemable'
import { Schemable2, SchemableHKT2 } from './internal/Schemable2'
import {
  WithBrand1,
  WithBrand2,
  WithBrand2C,
  WithBrandHKT2,
} from './schemables/WithBrand'
import {
  WithCheckDigit1,
  WithCheckDigit2,
  WithCheckDigit2C,
  WithCheckDigitHKT2,
} from './schemables/WithCheckDigit'
import {
  WithInvariant1,
  WithInvariant2,
  WithInvariant2C,
  WithInvariantHKT2,
} from './schemables/WithInvariant'
import {
  WithPadding1,
  WithPadding2,
  WithPadding2C,
  WithPaddingHKT2,
} from './schemables/WithPadding'
import {
  WithPattern1,
  WithPattern2,
  WithPattern2C,
  WithPatternHKT2,
} from './schemables/WithPattern'
import {
  WithRefine1,
  WithRefine2,
  WithRefine2C,
  WithRefineHKT2,
} from './schemables/WithRefine'
import {
  WithUnknownContainers1,
  WithUnknownContainers2,
  WithUnknownContainers2C,
  WithUnknownContainersHKT2,
} from './schemables/WithUnknownContainers'

/** Generic */
import * as mapFromEntries from './generic/mapFromEntries'
import * as optionFromExclude from './generic/optionFromExclude'
import * as optionFromNullable from './generic/optionFromNullable'
import * as optionFromUndefined from './generic/optionFromUndefined'

/** Number */
import * as bigIntFromString from './number/bigIntFromString'
import * as float from './number/float'
import * as floatFromString from './number/floatFromString'
import * as int from './number/int'
import * as intFromString from './number/intFromString'

/** String */
import * as hslColor from './string/hslColor'
import * as uuid from './string/uuid'

/** Date */
import * as date from './date/date'
import * as dateFromIsoString from './date/dateFromIsoString'

/**
 * @since 0.0.1
 * @category Instances
 */
export interface SchemableExt<S>
  extends SchemableHKT2<S>,
    WithBrandHKT2<S>,
    WithCheckDigitHKT2<S>,
    WithInvariantHKT2<S>,
    WithPaddingHKT2<S>,
    WithPatternHKT2<S>,
    WithRefineHKT2<S>,
    WithUnknownContainersHKT2<S> {
  /**
   * Represents a ReadonlyMap converted from an expected array of entries.
   *
   * @since 1.0.0
   */
  readonly mapFromEntries: mapFromEntries.SchemableParams<S>

  /**
   * Represents an exclusion of a supplied value where the exclusion is mapped to `None`.
   * Requires an inner schemable, and an Eq instance which defaults to strict equality.
   *
   * @since 1.0.0
   */
  readonly optionFromExclude: optionFromExclude.SchemableParams<S>

  /**
   * Represents a conversion from a nullable value to an Optional type
   *
   * @since 1.0.0
   */
  readonly optionFromNullable: optionFromNullable.SchemableParams<S>

  /**
   * Represents a conversion from an value that can be undefined to an Optional type
   *
   * @since 0.0.4
   */
  readonly optionFromUndefined: optionFromUndefined.SchemableParams<S>

  /**
   * Represents bigints converted from strings
   *
   * @since 1.0.0
   */
  readonly bigIntFromString: bigIntFromString.SchemableParams<S>

  /**
   * Floating point branded newtype. Parameters: min, max are inclusive.
   *
   * Represents floating point numbers:
   *
   * ```math
   *  { f | f ∈ ℝ, f >= -Number.MAX_VALUE, f <= Number.MAX_VALUE }
   * ```
   *
   * @since 1.0.0
   */
  readonly float: float.SchemableParams<S>

  /**
   * Floating point branded newtype from strings. Parameters: min, max are inclusive.
   *
   * Represents string floating point numbers:
   *
   * ```math
   *  { f | f ∈ ℝ, f >= -Number.MAX_VALUE, f <= Number.MAX_VALUE }
   * ```
   *
   * @since 1.0.0
   */
  readonly floatFromString: floatFromString.SchemableParams<S>

  /**
   * Integer branded newtype. Parameters: min, max are inclusive.
   *
   * Represents integers:
   *
   * ```math
   *  { z | z ∈ ℤ, z >= -2 ** 53 + 1, z <= 2 ** 53 - 1 }
   * ```
   *
   * @since 1.0.0
   */
  readonly int: int.SchemableParams<S>

  /**
   * Integer branded newtype from string. Parameters: min, max are inclusive.
   *
   * Note: has an optional `encodeToBase` parameter that controls the output base of the
   * encoded string. Currently only accepts 2, 8, 10, and 16 due to constraints using
   * `Number` as a parser. It does not decode in this specified base, and accepts any base
   * as input: 2, 8, 10, or 16.
   *
   * Represents string-integers:
   *
   * ```math
   *  { z | z ∈ ℤ, z >= -2 ** 53 + 1, z <= 2 ** 53 - 1 }
   * ```
   *
   * @since 1.0.0
   */
  readonly intFromString: intFromString.SchemableParams<S>

  /**
   * An HSL string. Commonly in CSS.
   *
   * @since 0.0.3
   * @example
   *   import { Guard } from 'schemata-ts/string/hslColor'
   *
   *   const hue = 270
   *   const saturation = 60
   *   const lightness = 70
   *   const alpha = 0.7
   *
   *   const hslString = `hsl(${hue} ${saturation}% ${lightness}% / ${alpha})`
   *
   *   assert.equal(Guard.is(hslString), true)
   */
  readonly hslColor: hslColor.SchemableParams<S>

  /**
   * Represents strings that are UUIDs.
   *
   * This is heavily inspired by the `validator.js` module
   * [`isUUID`](https://github.com/validatorjs/validator.js/blob/master/src/lib/isUUID.js).
   *
   * @since 0.0.1
   */
  readonly uuid: uuid.SchemableParams<S>

  /**
   * Represents valid Date objects
   *
   * @since 1.0.0
   */
  readonly date: date.SchemableParams<S>

  /**
   * Represents a conversion from a valid dateString according to
   * [ECMA262](https://tc39.es/ecma262/#sec-date-time-string-format) which is a particular
   * subset of ISO8601 parsable with `Date.parse()`.
   *
   * @since 1.0.0
   */
  readonly dateFromIsoString: dateFromIsoString.SchemableParams<S>
}

/**
 * @since 0.0.1
 * @category Instances
 */
export interface SchemableExt1<S extends URIS>
  extends Schemable1<S>,
    WithBrand1<S>,
    WithCheckDigit1<S>,
    WithInvariant1<S>,
    WithPadding1<S>,
    WithPattern1<S>,
    WithRefine1<S>,
    WithUnknownContainers1<S> {
  /**
   * Represents a ReadonlyMap converted from an expected array of entries.
   *
   * @since 1.0.0
   */
  readonly mapFromEntries: mapFromEntries.SchemableParams1<S>

  /**
   * Represents an exclusion of a supplied value where the exclusion is mapped to `None`.
   * Requires an inner schemable, and an Eq instance which defaults to strict equality.
   *
   * @since 1.0.0
   */
  readonly optionFromExclude: optionFromExclude.SchemableParams1<S>

  /**
   * Represents a conversion from a nullable value to an Optional type
   *
   * @since 1.0.0
   */
  readonly optionFromNullable: optionFromNullable.SchemableParams1<S>

  /**
   * Represents a conversion from an value that can be undefined to an Optional type
   *
   * @since 0.0.4
   */
  readonly optionFromUndefined: optionFromUndefined.SchemableParams1<S>

  /**
   * Represents bigints converted from strings
   *
   * @since 1.0.0
   */
  readonly bigIntFromString: bigIntFromString.SchemableParams1<S>

  /**
   * Floating point branded newtype. Parameters: min, max are inclusive.
   *
   * Represents floating point numbers:
   *
   * ```math
   *  { f | f ∈ ℝ, f >= -Number.MAX_VALUE, f <= Number.MAX_VALUE }
   * ```
   *
   * @since 1.0.0
   */
  readonly float: float.SchemableParams1<S>

  /**
   * Floating point branded newtype from strings. Parameters: min, max are inclusive.
   *
   * Represents string floating point numbers:
   *
   * ```math
   *  { f | f ∈ ℝ, f >= -Number.MAX_VALUE, f <= Number.MAX_VALUE }
   * ```
   *
   * @since 1.0.0
   */
  readonly floatFromString: floatFromString.SchemableParams1<S>

  /**
   * Integer branded newtype. Parameters: min, max are inclusive.
   *
   * Represents integers:
   *
   * ```math
   *  { z | z ∈ ℤ, z >= -2 ** 53 + 1, z <= 2 ** 53 - 1 }
   * ```
   *
   * @since 1.0.0
   */
  readonly int: int.SchemableParams1<S>

  /**
   * Integer branded newtype from string. Parameters: min, max are inclusive.
   *
   * Note: has an optional `encodeToBase` parameter that controls the output base of the
   * encoded string. Currently only accepts 2, 8, 10, and 16 due to constraints using
   * `Number` as a parser. It does not decode in this specified base, and accepts any base
   * as input: 2, 8, 10, or 16.
   *
   * Represents string-integers:
   *
   * ```math
   *  { z | z ∈ ℤ, z >= -2 ** 53 + 1, z <= 2 ** 53 - 1 }
   * ```
   *
   * @since 1.0.0
   */
  readonly intFromString: intFromString.SchemableParams1<S>

  /**
   * An HSL string. Commonly in CSS.
   *
   * @since 0.0.3
   * @example
   *   import { Guard } from 'schemata-ts/string/hslColor'
   *
   *   const hue = 270
   *   const saturation = 60
   *   const lightness = 70
   *   const alpha = 0.7
   *
   *   const hslString = `hsl(${hue} ${saturation}% ${lightness}% / ${alpha})`
   *
   *   assert.equal(Guard.is(hslString), true)
   */
  readonly hslColor: hslColor.SchemableParams1<S>

  /**
   * Represents strings that are UUIDs.
   *
   * This is heavily inspired by the `validator.js` module
   * [`isUUID`](https://github.com/validatorjs/validator.js/blob/master/src/lib/isUUID.js).
   *
   * @since 0.0.1
   */
  readonly uuid: uuid.SchemableParams1<S>

  /**
   * Represents valid Date objects
   *
   * @since 1.0.0
   */
  readonly date: date.SchemableParams1<S>

  /**
   * Represents a conversion from a valid dateString according to
   * [ECMA262](https://tc39.es/ecma262/#sec-date-time-string-format) which is a particular
   * subset of ISO8601 parsable with `Date.parse()`.
   *
   * @since 1.0.0
   */
  readonly dateFromIsoString: dateFromIsoString.SchemableParams1<S>
}

/**
 * @since 0.0.1
 * @category Instances
 */
export interface SchemableExt2<S extends URIS2>
  extends Schemable2<S>,
    WithBrand2<S>,
    WithCheckDigit2<S>,
    WithInvariant2<S>,
    WithPadding2<S>,
    WithPattern2<S>,
    WithRefine2<S>,
    WithUnknownContainers2<S> {
  /**
   * Represents a ReadonlyMap converted from an expected array of entries.
   *
   * @since 1.0.0
   */
  readonly mapFromEntries: mapFromEntries.SchemableParams2<S>

  /**
   * Represents an exclusion of a supplied value where the exclusion is mapped to `None`.
   * Requires an inner schemable, and an Eq instance which defaults to strict equality.
   *
   * @since 1.0.0
   */
  readonly optionFromExclude: optionFromExclude.SchemableParams2<S>

  /**
   * Represents a conversion from a nullable value to an Optional type
   *
   * @since 1.0.0
   */
  readonly optionFromNullable: optionFromNullable.SchemableParams2<S>

  /**
   * Represents a conversion from an value that can be undefined to an Optional type
   *
   * @since 0.0.4
   */
  readonly optionFromUndefined: optionFromUndefined.SchemableParams2<S>

  /**
   * Represents bigints converted from strings
   *
   * @since 1.0.0
   */
  readonly bigIntFromString: bigIntFromString.SchemableParams2<S>

  /**
   * Floating point branded newtype. Parameters: min, max are inclusive.
   *
   * Represents floating point numbers:
   *
   * ```math
   *  { f | f ∈ ℝ, f >= -Number.MAX_VALUE, f <= Number.MAX_VALUE }
   * ```
   *
   * @since 1.0.0
   */
  readonly float: float.SchemableParams2<S>

  /**
   * Floating point branded newtype from strings. Parameters: min, max are inclusive.
   *
   * Represents string floating point numbers:
   *
   * ```math
   *  { f | f ∈ ℝ, f >= -Number.MAX_VALUE, f <= Number.MAX_VALUE }
   * ```
   *
   * @since 1.0.0
   */
  readonly floatFromString: floatFromString.SchemableParams2<S>

  /**
   * Integer branded newtype. Parameters: min, max are inclusive.
   *
   * Represents integers:
   *
   * ```math
   *  { z | z ∈ ℤ, z >= -2 ** 53 + 1, z <= 2 ** 53 - 1 }
   * ```
   *
   * @since 1.0.0
   */
  readonly int: int.SchemableParams2<S>

  /**
   * Integer branded newtype from string. Parameters: min, max are inclusive.
   *
   * Note: has an optional `encodeToBase` parameter that controls the output base of the
   * encoded string. Currently only accepts 2, 8, 10, and 16 due to constraints using
   * `Number` as a parser. It does not decode in this specified base, and accepts any base
   * as input: 2, 8, 10, or 16.
   *
   * Represents string-integers:
   *
   * ```math
   *  { z | z ∈ ℤ, z >= -2 ** 53 + 1, z <= 2 ** 53 - 1 }
   * ```
   *
   * @since 1.0.0
   */
  readonly intFromString: intFromString.SchemableParams2<S>

  /**
   * An HSL string. Commonly in CSS.
   *
   * @since 0.0.3
   * @example
   *   import { Guard } from 'schemata-ts/string/hslColor'
   *
   *   const hue = 270
   *   const saturation = 60
   *   const lightness = 70
   *   const alpha = 0.7
   *
   *   const hslString = `hsl(${hue} ${saturation}% ${lightness}% / ${alpha})`
   *
   *   assert.equal(Guard.is(hslString), true)
   */
  readonly hslColor: hslColor.SchemableParams2<S>

  /**
   * Represents strings that are UUIDs.
   *
   * This is heavily inspired by the `validator.js` module
   * [`isUUID`](https://github.com/validatorjs/validator.js/blob/master/src/lib/isUUID.js).
   *
   * @since 0.0.1
   */
  readonly uuid: uuid.SchemableParams2<S>

  /**
   * Represents valid Date objects
   *
   * @since 1.0.0
   */
  readonly date: date.SchemableParams2<S>

  /**
   * Represents a conversion from a valid dateString according to
   * [ECMA262](https://tc39.es/ecma262/#sec-date-time-string-format) which is a particular
   * subset of ISO8601 parsable with `Date.parse()`.
   *
   * @since 1.0.0
   */
  readonly dateFromIsoString: dateFromIsoString.SchemableParams2<S>
}

/**
 * @since 0.0.1
 * @category Instances
 */
export interface SchemableExt2C<S extends URIS2>
  extends Schemable2C<S, unknown>,
    WithBrand2C<S, unknown>,
    WithCheckDigit2C<S, unknown>,
    WithInvariant2C<S, unknown>,
    WithPadding2C<S, unknown>,
    WithPattern2C<S, unknown>,
    WithRefine2C<S, unknown>,
    WithUnknownContainers2C<S, unknown> {
  /**
   * Represents a ReadonlyMap converted from an expected array of entries.
   *
   * @since 1.0.0
   */
  readonly mapFromEntries: mapFromEntries.SchemableParams2C<S>

  /**
   * Represents an exclusion of a supplied value where the exclusion is mapped to `None`.
   * Requires an inner schemable, and an Eq instance which defaults to strict equality.
   *
   * @since 1.0.0
   */
  readonly optionFromExclude: optionFromExclude.SchemableParams2C<S>

  /**
   * Represents a conversion from a nullable value to an Optional type
   *
   * @since 1.0.0
   */
  readonly optionFromNullable: optionFromNullable.SchemableParams2C<S>

  /**
   * Represents a conversion from an value that can be undefined to an Optional type
   *
   * @since 0.0.4
   */
  readonly optionFromUndefined: optionFromUndefined.SchemableParams2C<S>

  /**
   * Represents bigints converted from strings
   *
   * @since 1.0.0
   */
  readonly bigIntFromString: bigIntFromString.SchemableParams2C<S>

  /**
   * Floating point branded newtype. Parameters: min, max are inclusive.
   *
   * Represents floating point numbers:
   *
   * ```math
   *  { f | f ∈ ℝ, f >= -Number.MAX_VALUE, f <= Number.MAX_VALUE }
   * ```
   *
   * @since 1.0.0
   */
  readonly float: float.SchemableParams2C<S>

  /**
   * Floating point branded newtype from strings. Parameters: min, max are inclusive.
   *
   * Represents string floating point numbers:
   *
   * ```math
   *  { f | f ∈ ℝ, f >= -Number.MAX_VALUE, f <= Number.MAX_VALUE }
   * ```
   *
   * @since 1.0.0
   */
  readonly floatFromString: floatFromString.SchemableParams2C<S>

  /**
   * Integer branded newtype. Parameters: min, max are inclusive.
   *
   * Represents integers:
   *
   * ```math
   *  { z | z ∈ ℤ, z >= -2 ** 53 + 1, z <= 2 ** 53 - 1 }
   * ```
   *
   * @since 1.0.0
   */
  readonly int: int.SchemableParams2C<S>

  /**
   * Integer branded newtype from string. Parameters: min, max are inclusive.
   *
   * Note: has an optional `encodeToBase` parameter that controls the output base of the
   * encoded string. Currently only accepts 2, 8, 10, and 16 due to constraints using
   * `Number` as a parser. It does not decode in this specified base, and accepts any base
   * as input: 2, 8, 10, or 16.
   *
   * Represents string-integers:
   *
   * ```math
   *  { z | z ∈ ℤ, z >= -2 ** 53 + 1, z <= 2 ** 53 - 1 }
   * ```
   *
   * @since 1.0.0
   */
  readonly intFromString: intFromString.SchemableParams2C<S>

  /**
   * An HSL string. Commonly in CSS.
   *
   * @since 0.0.3
   * @example
   *   import { Guard } from 'schemata-ts/string/hslColor'
   *
   *   const hue = 270
   *   const saturation = 60
   *   const lightness = 70
   *   const alpha = 0.7
   *
   *   const hslString = `hsl(${hue} ${saturation}% ${lightness}% / ${alpha})`
   *
   *   assert.equal(Guard.is(hslString), true)
   */
  readonly hslColor: hslColor.SchemableParams2C<S>

  /**
   * Represents strings that are UUIDs.
   *
   * This is heavily inspired by the `validator.js` module
   * [`isUUID`](https://github.com/validatorjs/validator.js/blob/master/src/lib/isUUID.js).
   *
   * @since 0.0.1
   */
  readonly uuid: uuid.SchemableParams2C<S>

  /**
   * Represents valid Date objects
   *
   * @since 1.0.0
   */
  readonly date: date.SchemableParams2C<S>

  /**
   * Represents a conversion from a valid dateString according to
   * [ECMA262](https://tc39.es/ecma262/#sec-date-time-string-format) which is a particular
   * subset of ISO8601 parsable with `Date.parse()`.
   *
   * @since 1.0.0
   */
  readonly dateFromIsoString: dateFromIsoString.SchemableParams2C<S>
}
