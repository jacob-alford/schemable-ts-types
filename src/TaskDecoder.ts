/**
 * SchemableExt instances for TaskDecoder
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.1
 */
import * as TD from './internal/TaskDecoderBase'
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
export const Schemable: SchemableExt2C<TD.URI> = {
  ...TD.Schemable,
  ...TD.WithBrand,
  ...TD.WithPattern,
  ...TD.WithRefine,
  ...TD.WithUnknownContainers,
  mapFromEntries: mapFromEntries.TaskDecoder,
  optionFromExclude: optionFromExclude.TaskDecoder,
  optionFromNullable: optionFromNullable.TaskDecoder,
  optionFromUndefined: optionFromUndefined.TaskDecoder,
  bigIntFromString: bigIntFromString.TaskDecoder,
  float: float.TaskDecoder,
  floatFromString: floatFromString.TaskDecoder,
  int: int.TaskDecoder,
  intFromString: intFromString.TaskDecoder,
  base64: base64.TaskDecoder,
  base64Url: base64Url.TaskDecoder,
  creditCard: creditCard.TaskDecoder,
  hexColor: hexColor.TaskDecoder,
  hslColor: hslColor.TaskDecoder,
  isoDateString: isoDateString.TaskDecoder,
  jwt: jwt.TaskDecoder,
  latLong: latLong.TaskDecoder,
  nonemptyString: nonemptyString.TaskDecoder,
  rgb: rgb.TaskDecoder,
  uuid: uuid.TaskDecoder,
  safeDate: safeDate.TaskDecoder,
}
