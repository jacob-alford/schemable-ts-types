/**
 * Schemable for annotating a JSON Schema. Interpretation using interpreters other than
 * JsonSchema will not change the derivation.
 *
 * @since 1.2.0
 */
import { pipe } from 'fp-ts/function'
import * as RR from 'fp-ts/ReadonlyRecord'
import { getJsonSchema } from 'schemata-ts/derivations/json-schema-schemable'
import * as JS from 'schemata-ts/internal/json-schema'
import * as SC from 'schemata-ts/Schema'

/**
 * Note: references must be specified for all "Lazy" schemas, and must occur after the
 * declaration of the primary schema. This is because Lazy for json-schema is implemented
 * as a ref, and that ref must be specified in the parent using `Annotate`
 *
 * @since 1.2.0
 * @category Combinators
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import * as S from 'schemata-ts'
 *   import * as JS from 'schemata-ts/JsonSchema'
 *   import { Schema } from 'schemata-ts/Schema'
 *
 *   type One = {
 *     two: Two
 *   }
 *
 *   type Two = {
 *     one?: One | null
 *   }
 *
 *   const One_: Schema<One, One> = S.Struct({
 *     two: S.Lazy('two', () => Two_),
 *   })
 *
 *   const Two_ = S.Struct({
 *     one: S.Lazy('one', () => One_),
 *   })
 *
 *   const One = pipe(
 *     One_,
 *     S.Annotate({
 *       references: {
 *         one: One_,
 *         two: Two_,
 *       },
 *     }),
 *   )
 *
 *   const Two = pipe(
 *     Two_,
 *     S.Annotate({
 *       references: {
 *         one: One_,
 *         two: Two_,
 *       },
 *     }),
 *   )
 *
 *   const jsonSchemaOne = JS.getJsonSchema(One)
 *   const jsonSchemaTwo = JS.getJsonSchema(Two)
 *
 *   assert.deepStrictEqual(jsonSchemaOne, {
 *     properties: {
 *       two: {
 *         $ref: 'two',
 *       },
 *     },
 *     required: ['two'],
 *     type: 'object',
 *     $defs: {
 *       one: {
 *         properties: {
 *           two: {
 *             $ref: 'two',
 *           },
 *         },
 *         required: ['two'],
 *         type: 'object',
 *       },
 *       two: {
 *         properties: {
 *           one: {
 *             $ref: 'one',
 *           },
 *         },
 *         required: ['one'],
 *         type: 'object',
 *       },
 *     },
 *   })
 *
 *   assert.deepStrictEqual(jsonSchemaTwo, {
 *     properties: {
 *       one: {
 *         $ref: 'one',
 *       },
 *     },
 *     required: ['one'],
 *     type: 'object',
 *     $defs: {
 *       one: {
 *         properties: {
 *           two: {
 *             $ref: 'two',
 *           },
 *         },
 *         required: ['two'],
 *         type: 'object',
 *       },
 *       two: {
 *         properties: {
 *           one: {
 *             $ref: 'one',
 *           },
 *         },
 *         required: ['one'],
 *         type: 'object',
 *       },
 *     },
 *   })
 */
export const Annotate =
  (params: {
    title?: string
    description?: string
    references?: RR.ReadonlyRecord<string, SC.Schema<unknown, unknown>>
  }) =>
  <O, A>(schema: SC.Schema<O, A>): SC.Schema<O, A> => {
    const mappedRefs: RR.ReadonlyRecord<string, JS.JsonSchema> = pipe(
      params.references ?? {},
      RR.map(getJsonSchema),
    )
    return SC.make(s =>
      s.annotate(
        params === undefined
          ? undefined
          : {
              ...(params.title === undefined ? {} : { title: params.title }),
              ...(params.description === undefined
                ? {}
                : { description: params.description }),
              ...(params.references === undefined ? {} : { references: mappedRefs }),
            },
      )(schema(s)),
    )
  }
