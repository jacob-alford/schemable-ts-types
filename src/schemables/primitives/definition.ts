import { ReadonlyNonEmptyArray } from 'fp-ts/ReadonlyNonEmptyArray'
import { Float, MaxNegativeFloat, MaxPositiveFloat } from 'schemata-ts/float'
import { SchemableKind, SchemableLambda } from 'schemata-ts/HKT'
import { Integer, MaxSafeInt, MinSafeInt } from 'schemata-ts/integer'

/** @since 2.0.0 */
export type BoundedParams<
  Min extends number | undefined,
  Max extends number | undefined,
> = {
  readonly min?: Min
  readonly max?: Max
}

/** @since 2.0.0 */
export type StringParams = {
  readonly minLength?: number
  readonly maxLength?: number
}

export interface WithPrimitives<S extends SchemableLambda> {
  readonly string: (params?: StringParams) => SchemableKind<S, string, string>
  readonly int: <
    Min extends number | undefined = undefined,
    Max extends number | undefined = undefined,
  >(
    params?: BoundedParams<Min, Max>,
  ) => SchemableKind<
    S,
    number,
    Integer<
      Min extends undefined ? MinSafeInt : Min,
      Max extends undefined ? MaxSafeInt : Max
    >
  >
  readonly float: <
    Min extends number | undefined = undefined,
    Max extends number | undefined = undefined,
  >(
    params?: BoundedParams<Min, Max>,
  ) => SchemableKind<
    S,
    number,
    Float<
      Min extends undefined ? MaxNegativeFloat : Min,
      Max extends undefined ? MaxPositiveFloat : Max
    >
  >
  readonly boolean: SchemableKind<S, boolean, boolean>
  readonly unknown: SchemableKind<S, unknown, unknown>
  readonly literal: <
    Literals extends ReadonlyNonEmptyArray<string | number | boolean | null>,
  >(
    ...values: Literals
  ) => SchemableKind<S, Literals[number], Literals[number]>
}