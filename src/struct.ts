/**
 * A meta definition for a struct for use with `StructM` schema
 *
 * @since 1.3.0
 */
import { identity } from 'fp-ts/function'
import { SchemableKind, SchemableLambda } from 'schemata-ts/HKT'
import { camelCase } from 'schemata-ts/internal/camelcase'
import type { CamelCase } from 'type-fest'

/**
 * @since 1.3.0
 * @category Model
 */
export type OptionalKeyFlag = 'Optional'
const OptionalKeyFlag: OptionalKeyFlag = 'Optional'

/**
 * @since 1.3.0
 * @category Model
 */
export type RequiredKeyFlag = 'Required'
const RequiredKeyFlag: RequiredKeyFlag = 'Required'

/**
 * @since 1.3.0
 * @category Model
 */
export type KeyNotMapped = typeof KeyNotMapped
const KeyNotMapped = Symbol.for('schemata-ts/struct/KeyNotMapped')

/**
 * @since 1.3.0
 * @category Model
 */
export type KeyFlag = OptionalKeyFlag | RequiredKeyFlag

/**
 * Meta information for an HKT2 for if the key is optional or required, and if the key is remapped
 *
 * @since 1.3.0
 * @category Model
 */
export interface Prop<
  Flag extends KeyFlag,
  S extends SchemableLambda,
  Val extends SchemableKind<S, any, any>,
  K extends string | KeyNotMapped,
> {
  readonly _flag: Flag
  readonly _keyRemap: K
  readonly _val: Val
}

/**
 * Indicates that a property is required
 *
 * @since 1.3.0
 * @category Constructors
 */
export const required: <
  S extends SchemableLambda,
  Val extends SchemableKind<S, any, any>,
>(
  val: Val,
) => Prop<RequiredKeyFlag, S, Val, KeyNotMapped> = val => ({
  _flag: RequiredKeyFlag,
  _keyRemap: KeyNotMapped,
  _val: val,
})

/**
 * @since 1.3.0
 * @category Guards
 */
export const isRequiredFlag = (flag: KeyFlag): flag is RequiredKeyFlag =>
  flag === RequiredKeyFlag

/**
 * Indicates that a property is optional
 *
 * @since 1.3.0
 * @category Constructors
 */
export const optional: <
  S extends SchemableLambda,
  Val extends SchemableKind<S, any, any>,
>(
  val: Val,
) => Prop<OptionalKeyFlag, S, Val, KeyNotMapped> = val => ({
  _flag: OptionalKeyFlag,
  _keyRemap: KeyNotMapped,
  _val: val,
})

/**
 * @since 1.3.0
 * @category Guards
 */
export const isOptionalFlag = (flag: KeyFlag): flag is OptionalKeyFlag =>
  flag === OptionalKeyFlag

/**
 * Used to remap a property's key to a new key in the output type
 *
 * @since 1.3.0
 * @category Combinators
 * @example
 *   import * as fc from 'fast-check'
 *   import * as S from 'schemata-ts/schemata'
 *   import * as s from 'schemata-ts/struct'
 *   import { getArbitrary } from 'schemata-ts/Arbitrary'
 *   import { getGuard } from 'schemata-ts/Guard'
 *
 *   const databasePerson = s.defineStruct({
 *     first_name: s.mapKeyTo('firstName')(s.required(S.String)),
 *     last_name: s.mapKeyTo('lastName')(s.required(S.String)),
 *     age: s.required(S.Number),
 *     is_married: s.mapKeyTo('isMarried')(s.required(S.BooleanFromString)),
 *   })
 *
 *   const DatabasePerson = S.StructM(databasePerson)
 *
 *   // DatabasePerson will have the type:
 *   // Schema<
 *   //   { first_name: string, last_name: string, age: number, is_married: string },
 *   //   { firstName: string, lastName: string, age: number, isMarried: boolean }
 *   // >
 *
 *   const arbitrary = getArbitrary(DatabasePerson).arbitrary(fc)
 *   const guard = getGuard(DatabasePerson)
 *
 *   fc.assert(fc.property(arbitrary, guard.is))
 */
export const mapKeyTo: <K extends string>(
  mapTo: K,
) => <
  Flag extends KeyFlag,
  S extends SchemableLambda,
  Val extends SchemableKind<S, any, any>,
>(
  prop: Prop<Flag, S, Val, KeyNotMapped>,
) => Prop<Flag, S, Val, K> = mapTo => prop => ({
  ...prop,
  _keyRemap: mapTo,
})

/**
 * @since 1.3.0
 * @category Guards
 */
export const keyIsNotMapped = (key: string | KeyNotMapped): key is KeyNotMapped =>
  key === KeyNotMapped

/**
 * A type-level key remap provider
 *
 * @since 1.4.0
 * @category Models
 */
export interface KeyRemapLambda {
  readonly input: string
  readonly output: string
}

/**
 * Applies a remap type-level function to a remap lambda
 *
 * @since 1.4.0
 * @category Models
 */
export type ApplyKeyRemap<R extends KeyRemapLambda, Val extends string> = R extends {
  readonly input: string
}
  ? (R & {
      readonly input: Val
    })['output']
  : {
      readonly R: R
      readonly input: (val: Val) => Val
    }

/**
 * Used to remap a struct's keys using a provided type-level function and equivalent string mapper
 *
 * @since 1.4.0
 */
type MapKeysWith = <R extends KeyRemapLambda>(
  mapping: <S extends string>(s: S) => ApplyKeyRemap<KeyRemapLambda, S>,
) => <
  S extends SchemableLambda,
  Props extends Record<
    string,
    Prop<KeyFlag, S, SchemableKind<S, any, any>, string | KeyNotMapped>
  >,
>(
  props: Props,
) => {
  [K in keyof Props]: Props[K] extends Prop<infer Flag, any, infer Val, infer Remap>
    ? Remap extends KeyNotMapped
      ? Prop<Flag, S, Val, ApplyKeyRemap<R, K & string>>
      : Prop<Flag, S, Val, ApplyKeyRemap<R, Remap & string>>
    : never
}

/**
 * Remap a struct's keys using provided RemapLambda, and string-mapping function
 *
 * @since 1.4.0
 * @category Combinators
 * @example
 *   import * as E from 'fp-ts/Either'
 *   import { pipe } from 'fp-ts/function'
 *   import { getDecoder } from 'schemata-ts/Decoder'
 *   import * as S from 'schemata-ts/schemata'
 *   import * as s from 'schemata-ts/struct'
 *
 *   interface CapitalizeLambda extends s.KeyRemapLambda {
 *     readonly output: Capitalize<this['input']>
 *   }
 *
 *   const capitalize: (s: string) => string = s =>
 *     `${s.substring(0, 1).toUpperCase()}${s.substring(1)}`
 *
 *   const MappedStructDecoder = pipe(
 *     s.defineStruct({
 *       foo: s.required(S.String),
 *       bar: s.optional(S.Number),
 *       qux: s.optional(S.Boolean),
 *     }),
 *     s.mapKeysWith<CapitalizeLambda>(capitalize),
 *     S.StructM,
 *     getDecoder,
 *   )
 *
 *   assert.deepStrictEqual(
 *     MappedStructDecoder.decode({ foo: 'foo', bar: 1 }),
 *     E.right({ Foo: 'foo', Bar: 1 }),
 *   )
 */
export const mapKeysWith: MapKeysWith =
  mapping => (props: Record<string, Prop<KeyFlag, any, any, any>>) => {
    const remappedProps: any = {}
    for (const key in props) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const prop = props[key]!
      remappedProps[key] = {
        ...prop,
        _keyRemap: keyIsNotMapped(prop._keyRemap)
          ? mapping(key)
          : mapping(prop._keyRemap),
      }
    }
    return remappedProps
  }

/**
 * A KeyRemapLambda for remapping keys to camelCase
 *
 * @since 1.4.0
 * @category Combinators
 */
export interface CamelCaseLambda extends KeyRemapLambda {
  readonly output: CamelCase<this['input'], { preserveConsecutiveUppercase: true }>
}

/**
 * Remap a struct's non-camel-cased-keys into camelCase
 *
 * @since 1.4.0
 * @category Combinators
 * @example
 *   import * as S from 'schemata-ts/schemata'
 *   import * as s from 'schemata-ts/struct'
 *   import { getEncoder } from 'schemata-ts/Encoder'
 *
 *   const databasePerson = s.struct({
 *     first_name: S.String,
 *     last_name: S.String,
 *     age: S.Number,
 *     is_married: S.BooleanFromString,
 *   })
 *
 *   const DatabasePerson = S.StructM(s.camelCaseKeys(databasePerson))
 *
 *   // DatabasePerson will have the type:
 *   // Schema<
 *   //   { first_name: string, last_name: string, age: number, is_married: string },
 *   //   { firstName: string, lastName: string, age: number, isMarried: boolean }
 *   // >
 *
 *   const encoder = getEncoder(DatabasePerson)
 *
 *   assert.deepStrictEqual(
 *     encoder.encode({
 *       firstName: 'John',
 *       lastName: 'Doe',
 *       age: 42,
 *       isMarried: false,
 *     }),
 *     {
 *       first_name: 'John',
 *       last_name: 'Doe',
 *       age: 42,
 *       is_married: 'false',
 *     },
 *   )
 */
export const camelCaseKeys = mapKeysWith<CamelCaseLambda>(camelCase)

/**
 * @since 1.3.0
 * @category Constructors
 * @example
 *   import * as fc from 'fast-check'
 *   import * as S from 'schemata-ts/schemata'
 *   import * as s from 'schemata-ts/struct'
 *   import { getGuard } from 'schemata-ts/Guard'
 *   import { getArbitrary } from 'schemata-ts/Arbitrary'
 *
 *   const someDomainType = s.defineStruct({
 *     a: s.required(S.String),
 *     b: s.required(S.BooleanFromNumber),
 *   })
 *
 *   const SomeDomainTypeSchema = S.StructM(someDomainType)
 *
 *   // SomeDomainType will have the type:
 *   // Schema<{ a: string, b: number }, { a: string, b: boolean }>
 *
 *   const arbitrary = getArbitrary(SomeDomainTypeSchema).arbitrary(fc)
 *   const guard = getGuard(SomeDomainTypeSchema)
 *
 *   fc.assert(fc.property(arbitrary, guard.is))
 */
export const defineStruct: <
  S extends SchemableLambda,
  Props extends Record<
    string,
    Prop<KeyFlag, S, SchemableKind<S, any, any>, string | KeyNotMapped>
  >,
>(
  props: Props,
) => Props = identity

/**
 * Defines a StructM declaration where all keys are required
 *
 * @since 1.4.0
 * @category Constructors
 * @example
 *   import * as S from 'schemata-ts/schemata'
 *   import * as s from 'schemata-ts/struct'
 *   import { getEncoder } from 'schemata-ts/Encoder'
 *
 *   const someDomainType = s.struct({
 *     a: S.String,
 *     b: S.BooleanFromNumber,
 *   })
 *
 *   const SomeDomainTypeSchema = S.StructM(someDomainType)
 *
 *   // SomeDomainTypeSchema will have the type:
 *   // Schema<{ a: string, b: number }, { a: string, b: boolean }>
 *
 *   const encoder = getEncoder(SomeDomainTypeSchema)
 *
 *   assert.deepStrictEqual(
 *     encoder.encode({
 *       a: 'foo',
 *       b: false,
 *     }),
 *     {
 *       a: 'foo',
 *       b: 0,
 *     },
 *   )
 */
export const struct: <
  S extends SchemableLambda,
  Props extends Record<string, SchemableKind<S, any, any>>,
>(
  props: Props,
) => {
  [K in keyof Props]: Prop<RequiredKeyFlag, S, Props[K], KeyNotMapped>
} = props => {
  const remappedProps: Record<
    string,
    Prop<RequiredKeyFlag, any, SchemableKind<any, any, any>, KeyNotMapped>
  > = {}
  for (const key in props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const prop = props[key]!
    remappedProps[key] = required(prop)
  }
  return remappedProps as any
}

type Partial = <
  S extends SchemableLambda,
  Props extends Record<
    string,
    Prop<KeyFlag, S, SchemableKind<S, unknown, unknown>, string | KeyNotMapped>
  >,
>(
  props: Props,
) => {
  [K in keyof Props]: Props[K] extends Prop<any, any, infer Val, infer Remap>
    ? Prop<OptionalKeyFlag, S, Val, Remap>
    : never
}

/**
 * Marks all properties as optional
 *
 * @since 1.3.0
 * @category Utilities
 */
export const partial: Partial = props => {
  const result: Record<
    string,
    Prop<KeyFlag, any, SchemableKind<any, unknown, unknown>, string | KeyNotMapped>
  > = {}
  for (const key in props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const prop = props[key]!
    result[key] = { ...prop, _flag: OptionalKeyFlag }
  }
  return result as any
}

type Complete = <
  S extends SchemableLambda,
  Props extends Record<
    string,
    Prop<KeyFlag, S, SchemableKind<S, unknown, unknown>, string | KeyNotMapped>
  >,
>(
  props: Props,
) => {
  [K in keyof Props]: Props[K] extends Prop<any, any, infer Val, infer Remap>
    ? Prop<RequiredKeyFlag, S, Val, Remap>
    : never
}

/**
 * Marks all properties as required.
 *
 * @since 1.3.0
 * @category Utilities
 */
export const complete: Complete = props => {
  const result: Record<
    string,
    Prop<KeyFlag, any, SchemableKind<any, unknown, unknown>, string | KeyNotMapped>
  > = {}
  for (const key in props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const prop = props[key]!
    result[key] = { ...prop, _flag: RequiredKeyFlag }
  }
  return result as any
}

/**
 * Include only a specified set of keys of an object. Built for StructM but works with any struct
 *
 * @since 1.3.0
 * @category Utilities
 */
export const pick =
  <
    A extends Record<string, unknown>,
    Keys extends [keyof A, ...ReadonlyArray<Exclude<keyof A, Keys[0]>>],
  >(
    ...keys: Keys
  ) =>
  (obj: A): { [K in Keys[number]]: A[K] } => {
    const result: any = {}
    for (const key of keys) {
      result[key] = obj[key]
    }
    return result
  }

/**
 * Exclude a set of keys from an object. Built for StructM but works with any struct
 *
 * @since 1.3.0
 * @category Utilities
 */
export const omit: <
  A extends Record<string, unknown>,
  Keys extends [keyof A, ...ReadonlyArray<Exclude<keyof A, Keys[0]>>],
>(
  ...omittedKeys: Keys
) => (obj: A) => { [K in Exclude<keyof A, Keys[number]>]: A[K] } = (...omittedKeys) => {
  return obj => {
    const result: any = {}
    for (const key in obj) {
      if (omittedKeys.includes(key)) continue
      result[key] = obj[key]
    }
    return result
  }
}