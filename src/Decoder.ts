/**
 * SchemableExt instances for Decoder
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.1
 */
import * as D from './internal/DecoderBase'
import { SchemableExt2C } from './SchemableExt'

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
import * as base64 from './string/base64'
import * as base64Url from './string/base64Url'
import * as creditCard from './string/creditCard'
import * as hslColor from './string/hslColor'
import * as jwt from './string/jwt'
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
export const Schemable: SchemableExt2C<D.URI> = {
  ...D.Schemable,
  ...D.WithBrand,
  ...D.WithPattern,
  ...D.WithInvariant,
  ...D.WithRefine,
  ...D.WithUnknownContainers,
  mapFromEntries: mapFromEntries.Decoder,
  optionFromExclude: optionFromExclude.Decoder,
  optionFromNullable: optionFromNullable.Decoder,
  optionFromUndefined: optionFromUndefined.Decoder,
  bigIntFromString: bigIntFromString.Decoder,
  float: float.Decoder,
  floatFromString: floatFromString.Decoder,
  int: int.Decoder,
  intFromString: intFromString.Decoder,
  base64: base64.Decoder,
  base64Url: base64Url.Decoder,
  creditCard: creditCard.Decoder,
  hslColor: hslColor.Decoder,
  jwt: jwt.Decoder,
  latLong: latLong.Decoder,
  rgb: rgb.Decoder,
  uuid: uuid.Decoder,
  date: date.Decoder,
  dateFromIsoString: dateFromIsoString.Decoder,
}
