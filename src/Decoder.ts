/**
 * SchemableExt instances for Decoder
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 1.0.0
 */
export type {
  /**
   * @since 1.0.0
   * @category Model
   */
  Decoder,
} from './base/DecoderBase'
import * as D from './base/DecoderBase'
import { SchemableExt2C } from './SchemableExt'

/** Schemables */
import * as WithBrand from './schemables/WithBrand/instances/decoder'
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
import * as WithRefine from './schemables/WithRefine/instances/decoder'
import * as WithUnknownContainers from './schemables/WithUnknownContainers/instances/decoder'

/**
 * @since 1.0.0
 * @category Instances
 */
export const Schemable: SchemableExt2C<D.URI> = {
  ...D.Schemable,
  ...WithBrand.Decoder,
  ...WithCheckDigit.Decoder,
  ...WithDate.Decoder,
  ...WithFloat.Decoder,
  ...WithInt.Decoder,
  ...WithInvariant.Decoder,
  ...WithMap.Decoder,
  ...WithOption.Decoder,
  ...WithOptional.Decoder,
  ...WithPadding.Decoder,
  ...WithPattern.Decoder,
  ...WithRefine.Decoder,
  ...WithUnknownContainers.Decoder,
}
