/**
 * Represents a ReadonlyMap converted from an expected array of entries.
 *
 * @since 1.0.2
 */
import { apS } from 'fp-ts/Apply'
import * as E from 'fp-ts/Either'
import { flow, pipe, tuple } from 'fp-ts/function'
import * as RA from 'fp-ts/ReadonlyArray'
import * as RM from 'fp-ts/ReadonlyMap'

import * as P from '../../../base/PrinterBase'
import * as PE from '../../../PrintingError'
import { WithMap2 } from '../definition'

const apSV = apS(P.printerValidation)

/**
 * @since 1.0.2
 * @category Instances
 */
export const Printer: WithMap2<P.URI> = {
  mapFromEntries: (ordK, sk, sa) => ({
    print: flow(
      RM.toReadonlyArray(ordK),
      RA.traverseWithIndex(P.printerValidation)((i, [k, a]) =>
        pipe(
          E.Do,
          apSV('k', sk.print(k)),
          apSV('a', sa.print(a)),
          E.bimap(
            err => new PE.ErrorAtIndex(i, err),
            ({ k, a }) => tuple(k, a),
          ),
        ),
      ),
    ),
    printLeft: RA.traverseWithIndex(P.printerValidation)((i, [k, a]) =>
      pipe(
        E.Do,
        apSV('k', sk.printLeft(k)),
        apSV('a', sa.printLeft(a)),
        E.bimap(
          err => new PE.ErrorAtIndex(i, err),
          ({ k, a }) => tuple(k, a),
        ),
      ),
    ),
  }),
}
