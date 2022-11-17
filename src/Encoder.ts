/**
 * SchemableExt instances for Encoder
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 1.0.0
 */
export type { Encoder } from './base/EncoderBase'
import * as Enc from './base/EncoderBase'
import { SchemableExt2 } from './SchemableExt'

/** Schemables */
import * as WithBrand from './schemables/WithBrand'
import * as WithCheckDigit from './schemables/WithCheckDigit'
import * as WithDate from './schemables/WithDate'
import * as WithFloat from './schemables/WithFloat'
import * as WithInt from './schemables/WithInt'
import * as WithInvariant from './schemables/WithInvariant'
import * as WithMap from './schemables/WithMap'
import * as WithOption from './schemables/WithOption'
import * as WithOptional from './schemables/WithOptional'
import * as WithPadding from './schemables/WithPadding'
import * as WithPattern from './schemables/WithPattern'
import * as WithRefine from './schemables/WithRefine'
import * as WithUnknownContainers from './schemables/WithUnknownContainers'

/**
 * @since 1.0.0
 * @category Instances
 */
export const Schemable: SchemableExt2<Enc.URI> = {
  ...Enc.Schemable,
  ...WithBrand.Encoder,
  ...WithCheckDigit.Encoder,
  ...WithDate.Encoder,
  ...WithFloat.Encoder,
  ...WithInt.Encoder,
  ...WithInvariant.Encoder,
  ...WithMap.Encoder,
  ...WithOption.Encoder,
  ...WithOptional.Encoder,
  ...WithPadding.Encoder,
  ...WithPattern.Encoder,
  ...WithRefine.Encoder,
  ...WithUnknownContainers.Encoder,
}
