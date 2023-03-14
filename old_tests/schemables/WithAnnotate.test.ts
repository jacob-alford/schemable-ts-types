import { makeIntegerSchema } from '../../src/base/JsonSchemaBase'
import { getJsonSchema } from '../../src/JsonSchema'
import * as S from '../../src/schemata'

describe('annotation', () => {
  it('annotates', () => {
    const schema = S.Annotate({ title: 'root' })(S.BigIntFromString())
    const jsonSchema = getJsonSchema(schema)
    expect(jsonSchema).toEqual({
      type: 'string',
      pattern: '^((0b)[0-1]+?|(0o)[0-7]+?|-?\\d+?|(0x)[0-9A-Fa-f]+?)$',
      title: 'root',
      description: 'BigIntFromString',
    })
  })
  it('doesnt trample class names', () => {
    const schema = S.Annotate()(S.Natural)
    const jsonSchema = getJsonSchema(schema)
    expect(jsonSchema).toStrictEqual(
      makeIntegerSchema({ minimum: 0, maximum: 9007199254740991 }),
    )
  })
})
