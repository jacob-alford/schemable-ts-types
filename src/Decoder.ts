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
import * as float from './number/float'
import * as floatFromString from './number/floatFromString'
import * as int from './number/int'
import * as intFromString from './number/intFromString'

/** String */
import * as base64 from './string/base64'
import * as base64Url from './string/base64Url'
import * as bigIntString from './string/bigIntString'
import * as btcAddress from './string/btcAddress'
import * as creditCard from './string/creditCard'
import * as emailAddress from './string/emailAddress'
import * as hexColor from './string/hexColor'
import * as hslColor from './string/hslColor'
import * as isoDateString from './string/isoDateString'
import * as jwt from './string/jwt'
import * as latLong from './string/latLong'
import * as nonemptyString from './string/nonemptyString'
import * as rgb from './string/rgb'
import * as uuid from './string/uuid'

/** Date */
import * as safeDate from './date/safeDate'

/**
 * @since 0.0.1
 * @category Instances
 */
export const Schemable: SchemableExt2C<D.URI> = {
  ...D.Schemable,
  ...D.WithBrand,
  ...D.WithPattern,
  ...D.WithRefine,
  ...D.WithUnknownContainers,
  mapFromEntries: mapFromEntries.Decoder,
  optionFromExclude: optionFromExclude.Decoder,
  optionFromNullable: optionFromNullable.Decoder,
  optionFromUndefined: optionFromUndefined.Decoder,
  float: float.Decoder,
  floatFromString: floatFromString.Decoder,
  int: int.Decoder,
  intFromString: intFromString.Decoder,
  base64: base64.Decoder,
  base64Url: base64Url.Decoder,
  bigIntString: bigIntString.Decoder,
  btcAddress: btcAddress.Decoder,
  creditCard: creditCard.Decoder,
  emailAddress: emailAddress.Decoder,
  hexColor: hexColor.Decoder,
  hslColor: hslColor.Decoder,
  isoDateString: isoDateString.Decoder,
  jwt: jwt.Decoder,
  latLong: latLong.Decoder,
  nonemptyString: nonemptyString.Decoder,
  rgb: rgb.Decoder,
  uuid: uuid.Decoder,
  safeDate: safeDate.Decoder,
}
