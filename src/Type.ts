/**
 * SchemableExt instances for Type
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.1
 */
import * as t from './internal/TypeBase'
import { SchemableExt1 } from './SchemableExt'

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
export const Schemable: SchemableExt1<t.URI> = {
  ...t.Schemable,
  ...t.WithBrand,
  ...t.WithPattern,
  ...t.WithRefine,
  ...t.WithUnknownContainers,
  mapFromEntries: mapFromEntries.Type,
  optionFromExclude: optionFromExclude.Type,
  optionFromNullable: optionFromNullable.Type,
  optionFromUndefined: optionFromUndefined.Type,
  float: float.Type,
  floatFromString: floatFromString.Type,
  int: int.Type,
  intFromString: intFromString.Type,
  base64: base64.Type,
  base64Url: base64Url.Type,
  bigIntString: bigIntString.Type,
  btcAddress: btcAddress.Type,
  creditCard: creditCard.Type,
  emailAddress: emailAddress.Type,
  hexColor: hexColor.Type,
  hslColor: hslColor.Type,
  isoDateString: isoDateString.Type,
  jwt: jwt.Type,
  latLong: latLong.Type,
  nonemptyString: nonemptyString.Type,
  rgb: rgb.Type,
  uuid: uuid.Type,
  safeDate: safeDate.Type,
}
