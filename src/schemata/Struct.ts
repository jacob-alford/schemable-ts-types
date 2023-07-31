/** @since 1.4.0 */
import { unsafeCoerce } from 'fp-ts/function'
import * as Sg from 'fp-ts/Semigroup'
import { deriveGuard } from 'schemata-ts/derivations/guard-schemable'
import { deriveInformation } from 'schemata-ts/derivations/information-schemable'
import { deriveTypeString } from 'schemata-ts/derivations/type-string-schemable'
import {
  type OptionalInputProps,
  type OutputProps,
  type RequiredInputProps,
  type RestInput,
  type RestOutput,
  make,
} from 'schemata-ts/internal/schema'
import { type SchemableKind, type SchemableLambda } from 'schemata-ts/internal/schemable'
import type * as TS from 'schemata-ts/internal/type-string'
import { hasOwn } from 'schemata-ts/internal/util'
import { type Schema } from 'schemata-ts/Schema'
import { StructTypeString } from 'schemata-ts/schemables/struct/instances/type-string'
import type * as s from 'schemata-ts/schemables/struct/type-utils'
import { type Simplify } from 'type-fest'

/**
 * Used to construct a struct schema with enumerated keys.
 *
 * **Note:** Index signatures must accomodate the input/output types for all other
 * enumerated keys. It will decode properly otherwise, but TypeScript will not permit
 * construction of such a type
 *
 * @since 1.0.0
 * @category Combinators
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
 */
export const Struct = <
  T extends Record<string, Schema<any, any>>,
  IndexSignature extends Schema<any, any> | undefined,
>(
  props: T,
  extraProps: 'strip' | 'error' | IndexSignature = 'strip',
): Schema<
  Simplify<RestInput<IndexSignature> & RequiredInputProps<T> & OptionalInputProps<T>>,
  Simplify<RestOutput<IndexSignature> & OutputProps<T>>
> =>
  unsafeCoerce(
    make(_ => {
      const struct: Record<string, s.StructProp<SchemableLambda>> = {}
      const structName: Record<string, s.StructProp<TS.SchemableLambda>> = {}

      for (const key in props) {
        if (!hasOwn(props, key)) continue
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const schema = props[key]!
        const schemable: SchemableKind<SchemableLambda, unknown, unknown> =
          schema.runSchema(_)
        const guard = deriveGuard(schema)
        const information = deriveInformation(schema)
        const name = deriveTypeString(schema)
        struct[key] = {
          schemable,
          guard,
          information,
          semigroup: Sg.last(),
          name: name[0],
        }
        structName[key] = {
          schemable: name,
          guard,
          information,
          semigroup: Sg.last(),
          name: name[0],
        }
      }

      const extraProps_ =
        typeof extraProps === 'string' ? extraProps : extraProps.runSchema(_)
      const extraPropsName_ =
        typeof extraProps === 'string' ? extraProps : deriveTypeString(extraProps)

      const wholeName = StructTypeString.struct(structName, extraPropsName_, '')
      return _.struct(struct as any, extraProps_, wholeName[0])
    }),
  )
