/**
 * SchemableExt instances for Type
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.1
 */
import * as t from 'io-ts/Type'
import { SchemableExt1 } from './SchemableExt'

/** Number */
import * as Int from './number/Int'
import * as Natural from './number/Natural'
import * as NegativeFloat from './number/NegativeFloat'
import * as NegativeInt from './number/NegativeInt'
import * as NonNegativeFloat from './number/NonNegativeFloat'
import * as PositiveFloat from './number/PositiveFloat'
import * as PositiveInt from './number/PositiveInt'

/** String */
import * as ASCII from './string/ASCII'
import * as Base64 from './string/Base64'
import * as Base64Url from './string/Base64Url'
import * as BtcAddress from './string/BtcAddress'
import * as CreditCard from './string/CreditCard'
import * as EmailAddress from './string/EmailAddress'
import * as HexColor from './string/HexColor'
import * as Hexadecimal from './string/Hexadecimal'
import * as HslColor from './string/HslColor'
import * as ISODateString from './string/ISODateString'
import * as IntString from './string/IntString'
import * as JWT from './string/JWT'
import * as NaturalString from './string/NaturalString'
import * as NegativeFloatString from './string/NegativeFloatString'
import * as NegativeIntString from './string/NegativeIntString'
import * as NonNegativeFloatString from './string/NonNegativeFloatString'
import * as NonemptyString from './string/NonemptyString'
import * as PositiveFloatString from './string/PositiveFloatString'
import * as PositiveIntString from './string/PositiveIntString'
import * as UUID from './string/UUID'

/** Date */
import * as SafeDate from './date/SafeDate'

/**
 * @since 0.0.1
 * @category Instances
 */
export const Schemable: SchemableExt1<t.URI> = {
  ...t.Schemable,
  Int: Int.Type,
  Natural: Natural.Type,
  NegativeFloat: NegativeFloat.Type,
  NegativeInt: NegativeInt.Type,
  NonNegativeFloat: NonNegativeFloat.Type,
  PositiveFloat: PositiveFloat.Type,
  PositiveInt: PositiveInt.Type,
  ASCII: ASCII.Type,
  Base64: Base64.Type,
  Base64Url: Base64Url.Type,
  BtcAddress: BtcAddress.Type,
  CreditCard: CreditCard.Type,
  EmailAddress: EmailAddress.Type,
  HexColor: HexColor.Type,
  Hexadecimal: Hexadecimal.Type,
  HslColor: HslColor.Type,
  ISODateString: ISODateString.Type,
  IntString: IntString.Type,
  JWT: JWT.Type,
  NaturalString: NaturalString.Type,
  NegativeFloatString: NegativeFloatString.Type,
  NegativeIntString: NegativeIntString.Type,
  NonNegativeFloatString: NonNegativeFloatString.Type,
  NonemptyString: NonemptyString.Type,
  PositiveFloatString: PositiveFloatString.Type,
  PositiveIntString: PositiveIntString.Type,
  UUID: UUID.Type,
  SafeDate: SafeDate.Type,
}
