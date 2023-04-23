import * as Enc from 'schemata-ts/Encoder'
import { WithPrimitives } from 'schemata-ts/schemables/primitives/definition'

/** @since 2.0.0 */
export const PrimitivesEncoder: WithPrimitives<Enc.SchemableLambda> = {
  string: Enc.id,
  int: Enc.id,
  float: Enc.id,
  boolean: Enc.id(),
  unknown: Enc.id(),
  literal: Enc.id,
}