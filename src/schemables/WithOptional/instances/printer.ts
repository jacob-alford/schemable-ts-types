/**
 * Schemable for widening a type to include undefined. Similar to nullable but for undefined.
 *
 * @since 1.1.0
 */
import * as E from 'fp-ts/Either'

import * as P from '../../../base/PrinterBase'
import * as PE from '../../../PrintError'
import { WithOptional2 } from '../definition'

/**
 * @since 1.1.0
 * @category Instances
 */
export const Printer: WithOptional2<P.URI> = {
  optional: ea => ({
    domainToJson: a =>
      a === undefined ? E.left(new PE.InvalidValue(a)) : ea.domainToJson(a),
    codomainToJson: e =>
      e === undefined ? E.left(new PE.InvalidValue(e)) : ea.codomainToJson(e),
  }),
}
