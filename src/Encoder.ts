/**
 * SchemableExt instances for Encoder
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.3
 */
import * as Enc from './internal/EncoderBase'
import { SchemableExt2 } from './SchemableExt'

/** Generic */
import * as optionFromNullable from './generic/optionFromNullable'
import * as optionFromUndefined from './generic/optionFromUndefined'

/** Number */
import * as Int from './number/Int'
import * as Natural from './number/Natural'
import * as NegativeFloat from './number/NegativeFloat'
import * as NegativeInt from './number/NegativeInt'
import * as NonNegativeFloat from './number/NonNegativeFloat'
import * as NonPositiveFloat from './number/NonPositiveFloat'
import * as NonPositiveInt from './number/NonPositiveInt'
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
import * as NonPositiveFloatString from './string/NonPositiveFloatString'
import * as NonPositiveIntString from './string/NonPositiveIntString'
import * as NonemptyString from './string/NonemptyString'
import * as PositiveFloatString from './string/PositiveFloatString'
import * as PositiveIntString from './string/PositiveIntString'
import * as RGB from './string/RGB'
import * as UUID from './string/UUID'

/** Date */
import * as SafeDate from './date/SafeDate'

/**
 * @since 0.0.1
 * @category Instances
 */
export const Schemable: SchemableExt2<Enc.URI> = {
  ...Enc.Schemable,
  optionFromNullable: optionFromNullable.Encoder,
  optionFromUndefined: optionFromUndefined.Encoder,
  Int: Int.Encoder,
  Natural: Natural.Encoder,
  NegativeFloat: NegativeFloat.Encoder,
  NegativeInt: NegativeInt.Encoder,
  NonNegativeFloat: NonNegativeFloat.Encoder,
  NonPositiveFloat: NonPositiveFloat.Encoder,
  NonPositiveInt: NonPositiveInt.Encoder,
  PositiveFloat: PositiveFloat.Encoder,
  PositiveInt: PositiveInt.Encoder,
  ASCII: ASCII.Encoder,
  Base64: Base64.Encoder,
  Base64Url: Base64Url.Encoder,
  BtcAddress: BtcAddress.Encoder,
  CreditCard: CreditCard.Encoder,
  EmailAddress: EmailAddress.Encoder,
  HexColor: HexColor.Encoder,
  Hexadecimal: Hexadecimal.Encoder,
  HslColor: HslColor.Encoder,
  ISODateString: ISODateString.Encoder,
  IntString: IntString.Encoder,
  JWT: JWT.Encoder,
  NaturalString: NaturalString.Encoder,
  NegativeFloatString: NegativeFloatString.Encoder,
  NegativeIntString: NegativeIntString.Encoder,
  NonNegativeFloatString: NonNegativeFloatString.Encoder,
  NonPositiveFloatString: NonPositiveFloatString.Encoder,
  NonPositiveIntString: NonPositiveIntString.Encoder,
  NonemptyString: NonemptyString.Encoder,
  PositiveFloatString: PositiveFloatString.Encoder,
  PositiveIntString: PositiveIntString.Encoder,
  RGB: RGB.Encoder,
  UUID: UUID.Encoder,
  SafeDate: SafeDate.Encoder,
}
