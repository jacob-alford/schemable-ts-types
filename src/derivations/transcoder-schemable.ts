/**
 * Schemable instances for Transcoder
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 2.0.0
 */
import type * as TC from 'schemata-ts/internal/transcoder'
import { interpret } from 'schemata-ts/Schema'
import { type Schemable } from 'schemata-ts/Schemable'
import * as annotate from 'schemata-ts/schemables/annotate/instances/transcoder'
import * as array from 'schemata-ts/schemables/array/instances/transcoder'
import * as checkDigit from 'schemata-ts/schemables/check-digit/instances/transcoder'
import * as clone from 'schemata-ts/schemables/clone/instances/transcoder'
import * as date from 'schemata-ts/schemables/date/instances/transcoder'
import * as guardedUnion from 'schemata-ts/schemables/guarded-union/instances/transcoder'
import * as invariant from 'schemata-ts/schemables/invariant/instances/transcoder'
import * as lazy from 'schemata-ts/schemables/lazy/instances/transcoder'
import * as map from 'schemata-ts/schemables/map/instances/transcoder'
import * as optional from 'schemata-ts/schemables/optional/instances/transcoder'
import * as padding from 'schemata-ts/schemables/padding/instances/transcoder'
import * as parser from 'schemata-ts/schemables/parser/instances/transcoder'
import * as pattern from 'schemata-ts/schemables/pattern/instances/transcoder'
import * as primitives from 'schemata-ts/schemables/primitives/instances/transcoder'
import * as refine from 'schemata-ts/schemables/refine/instances/transcoder'
import * as struct from 'schemata-ts/schemables/struct/instances/transcoder'

/**
 * @since 2.0.0
 * @category Instances
 */
const TranscoderSchemable: Schemable<TC.SchemableLambda> = {
  ...annotate.AnnotateTranscoder,
  ...array.ArrayTranscoder,
  ...checkDigit.CheckDigitTranscoder,
  ...clone.CloneTranscoder,
  ...date.DateTranscoder,
  ...guardedUnion.GuardedUnionTranscoder,
  ...invariant.InvariantTranscoder,
  ...lazy.LazyTranscoder,
  ...map.MapTranscoder,
  ...optional.OptionalTranscoder,
  ...padding.PaddingTranscoder,
  ...parser.ParserTranscoder,
  ...pattern.PatternTranscoder,
  ...primitives.PrimitivesTranscoder,
  ...refine.RefineTranscoder,
  ...struct.StructTranscoder,
}

/**
 * @since 2.0.0
 * @category Interpreters
 */
export const getTranscoder = interpret(TranscoderSchemable)
