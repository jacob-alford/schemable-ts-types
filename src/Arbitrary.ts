/**
 * SchemableExt instances for Arbitrary
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.3
 */
import * as Arb from './internal/ArbitraryBase'
import { SchemableExt1 } from './SchemableExt'

/** Schemables */
import * as WithBrand from './schemables/WithBrand'
import * as WithCheckDigit from './schemables/WithCheckDigit'
import * as WithInvariant from './schemables/WithInvariant'
import * as WithPadding from './schemables/WithPadding'
import * as WithPattern from './schemables/WithPattern'
import * as WithRefine from './schemables/WithRefine'
import * as WithUnknownContainers from './schemables/WithUnknownContainers'

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
export const Schemable: SchemableExt1<Arb.URI> = {
  ...Arb.Schemable,
  ...WithBrand.Arbitrary,
  ...WithCheckDigit.Arbitrary,
  ...WithInvariant.Arbitrary,
  ...WithPadding.Arbitrary,
  ...WithPattern.Arbitrary,
  ...WithRefine.Arbitrary,
  ...WithUnknownContainers.Arbitrary,
  mapFromEntries: mapFromEntries.Arbitrary,
  optionFromExclude: optionFromExclude.Arbitrary,
  optionFromNullable: optionFromNullable.Arbitrary,
  optionFromUndefined: optionFromUndefined.Arbitrary,
  bigIntFromString: bigIntFromString.Arbitrary,
  float: float.Arbitrary,
  floatFromString: floatFromString.Arbitrary,
  int: int.Arbitrary,
  intFromString: intFromString.Arbitrary,
  hslColor: hslColor.Arbitrary,
  uuid: uuid.Arbitrary,
  date: date.Arbitrary,
  dateFromIsoString: dateFromIsoString.Arbitrary,
}
