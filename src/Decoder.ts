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
import * as int from './number/int'
import * as natural from './number/natural'
import * as negativeFloat from './number/negativeFloat'
import * as negativeInt from './number/negativeInt'
import * as nonNegativeFloat from './number/nonNegativeFloat'
import * as nonPositiveFloat from './number/nonPositiveFloat'
import * as nonPositiveInt from './number/nonPositiveInt'
import * as positiveFloat from './number/positiveFloat'
import * as positiveInt from './number/positiveInt'

/** String */
import * as ascii from './string/ascii'
import * as base64 from './string/base64'
import * as base64Url from './string/base64Url'
import * as bigIntString from './string/bigIntString'
import * as btcAddress from './string/btcAddress'
import * as creditCard from './string/creditCard'
import * as emailAddress from './string/emailAddress'
import * as hexColor from './string/hexColor'
import * as hslColor from './string/hslColor'
import * as intString from './string/intString'
import * as isoDateString from './string/isoDateString'
import * as jwt from './string/jwt'
import * as latLong from './string/latLong'
import * as naturalString from './string/naturalString'
import * as negativeFloatString from './string/negativeFloatString'
import * as negativeIntString from './string/negativeIntString'
import * as nonNegativeFloatString from './string/nonNegativeFloatString'
import * as nonPositiveFloatString from './string/nonPositiveFloatString'
import * as nonPositiveIntString from './string/nonPositiveIntString'
import * as nonemptyString from './string/nonemptyString'
import * as positiveFloatString from './string/positiveFloatString'
import * as positiveIntString from './string/positiveIntString'
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
  int: int.Decoder,
  natural: natural.Decoder,
  negativeFloat: negativeFloat.Decoder,
  negativeInt: negativeInt.Decoder,
  nonNegativeFloat: nonNegativeFloat.Decoder,
  nonPositiveFloat: nonPositiveFloat.Decoder,
  nonPositiveInt: nonPositiveInt.Decoder,
  positiveFloat: positiveFloat.Decoder,
  positiveInt: positiveInt.Decoder,
  ascii: ascii.Decoder,
  base64: base64.Decoder,
  base64Url: base64Url.Decoder,
  bigIntString: bigIntString.Decoder,
  btcAddress: btcAddress.Decoder,
  creditCard: creditCard.Decoder,
  emailAddress: emailAddress.Decoder,
  hexColor: hexColor.Decoder,
  hslColor: hslColor.Decoder,
  intString: intString.Decoder,
  isoDateString: isoDateString.Decoder,
  jwt: jwt.Decoder,
  latLong: latLong.Decoder,
  naturalString: naturalString.Decoder,
  negativeFloatString: negativeFloatString.Decoder,
  negativeIntString: negativeIntString.Decoder,
  nonNegativeFloatString: nonNegativeFloatString.Decoder,
  nonPositiveFloatString: nonPositiveFloatString.Decoder,
  nonPositiveIntString: nonPositiveIntString.Decoder,
  nonemptyString: nonemptyString.Decoder,
  positiveFloatString: positiveFloatString.Decoder,
  positiveIntString: positiveIntString.Decoder,
  rgb: rgb.Decoder,
  uuid: uuid.Decoder,
  safeDate: safeDate.Decoder,
}
