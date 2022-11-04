/**
 * SchemableExt instances for Encoder
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.3
 */
import * as Enc from './internal/EncoderBase'
import { SchemableExt2 } from './SchemableExt'

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
import * as latLong from './string/latLong'
import * as rgb from './string/rgb'
import * as uuid from './string/uuid'

/** Date */
import * as date from './date/date'
import * as dateFromIsoString from './date/dateFromIsoString'

/**
 * @since 0.0.1
 * @category Instances
 */
export const Schemable: SchemableExt2<Enc.URI> = {
  ...Enc.Schemable,
  ...WithBrand.Encoder,
  ...WithCheckDigit.Encoder,
  ...WithInvariant.Encoder,
  ...WithPadding.Encoder,
  ...WithPattern.Encoder,
  ...WithRefine.Encoder,
  ...WithUnknownContainers.Encoder,
  mapFromEntries: mapFromEntries.Encoder,
  optionFromExclude: optionFromExclude.Encoder,
  optionFromNullable: optionFromNullable.Encoder,
  optionFromUndefined: optionFromUndefined.Encoder,
  bigIntFromString: bigIntFromString.Encoder,
  float: float.Encoder,
  floatFromString: floatFromString.Encoder,
  int: int.Encoder,
  intFromString: intFromString.Encoder,
  hslColor: hslColor.Encoder,
  latLong: latLong.Encoder,
  rgb: rgb.Encoder,
  uuid: uuid.Encoder,
  date: date.Encoder,
  dateFromIsoString: dateFromIsoString.Encoder,
}
