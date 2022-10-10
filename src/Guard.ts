/**
 * SchemableExt instances for Guard
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.1
 */
import * as G from 'io-ts/Guard'
import { SchemableExt1 } from './SchemableExt'

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
import * as hexadecimal from './string/hexadecimal'
import * as hslColor from './string/hslColor'
import * as intString from './string/intString'
import * as isoDateString from './string/isoDateString'
import * as jwt from './string/jwt'
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
export const Schemable: SchemableExt1<G.URI> = {
  ...G.Schemable,
  int: int.Guard,
  natural: natural.Guard,
  negativeFloat: negativeFloat.Guard,
  negativeInt: negativeInt.Guard,
  nonNegativeFloat: nonNegativeFloat.Guard,
  nonPositiveFloat: nonPositiveFloat.Guard,
  nonPositiveInt: nonPositiveInt.Guard,
  positiveFloat: positiveFloat.Guard,
  positiveInt: positiveInt.Guard,
  ascii: ascii.Guard,
  base64: base64.Guard,
  base64Url: base64Url.Guard,
  bigIntString: bigIntString.Guard,
  btcAddress: btcAddress.Guard,
  creditCard: creditCard.Guard,
  emailAddress: emailAddress.Guard,
  hexColor: hexColor.Guard,
  hexadecimal: hexadecimal.Guard,
  hslColor: hslColor.Guard,
  intString: intString.Guard,
  isoDateString: isoDateString.Guard,
  jwt: jwt.Guard,
  naturalString: naturalString.Guard,
  negativeFloatString: negativeFloatString.Guard,
  negativeIntString: negativeIntString.Guard,
  nonNegativeFloatString: nonNegativeFloatString.Guard,
  nonPositiveFloatString: nonPositiveFloatString.Guard,
  nonPositiveIntString: nonPositiveIntString.Guard,
  nonemptyString: nonemptyString.Guard,
  positiveFloatString: positiveFloatString.Guard,
  positiveIntString: positiveIntString.Guard,
  rgb: rgb.Guard,
  uuid: uuid.Guard,
  safeDate: safeDate.Guard,
}
