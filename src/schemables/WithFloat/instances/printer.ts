/**
 * Floating point branded newtype. Parameters: min, max are inclusive.
 *
 * Represents floating point numbers:
 *
 * ```math
 *  { f | f ∈ ℝ, f >= -Number.MAX_VALUE, f <= Number.MAX_VALUE }
 * ```
 *
 * @since 1.1.0
 */
import * as P from '../../../base/PrinterBase'
import { WithFloat2 } from '../definition'

/**
 * @since 1.1.0
 * @category Instances
 */
export const Printer: WithFloat2<P.URI> = {
  float: () => ({
    domainToJson: P.toJson,
    codomainToJson: P.number.codomainToJson,
  }),
}