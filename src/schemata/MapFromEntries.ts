/** @since 1.0.0 */
import type * as Ord from 'fp-ts/Ord'
import { type Schema, make } from 'schemata-ts/Schema'

/**
 * A Schema for converting an array of key/value pairs to a map
 *
 * @since 1.0.0
 * @category Combinators
 */
export const MapFromEntries = <EK, EA, K extends EK, A extends EA>(
  ordK: Ord.Ord<K>,
  sK: Schema<EK, K>,
  sA: Schema<EA, A>,
): Schema<ReadonlyArray<readonly [EK, EA]>, ReadonlyMap<K, A>> =>
  make(S => S.mapFromEntries(ordK, sK.runSchema(S), sA.runSchema(S)))