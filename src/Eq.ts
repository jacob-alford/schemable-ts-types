/**
 * SchemableExt instances for Eq
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 1.0.0
 */
import * as Eq from './base/EqBase'
import { SchemableExt1 } from './SchemableExt'

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
export const Schemable: SchemableExt1<Eq.URI> = {
  ...Eq.Schemable,
  ...WithBrand.Eq,
  ...WithCheckDigit.Eq,
  ...WithDate.Eq,
  ...WithFloat.Eq,
  ...WithInt.Eq,
  ...WithInvariant.Eq,
  ...WithMap.Eq,
  ...WithOption.Eq,
  ...WithOptional.Eq,
  ...WithPadding.Eq,
  ...WithPattern.Eq,
  ...WithRefine.Eq,
  ...WithUnknownContainers.Eq,
}
