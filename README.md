<div align="center">
  <img src="./assets/the-school-of-athens-crop-2.jpg" style="margin-top: 48px; width: 100%; max-width: 846px; border: 5px solid rgba(205,127,50,0.5); filter: drop-shadow(0 0 0.5rem rgba(0,0,0,0.5));"/>
</div>

<h1 align="center" style="margin: 12px 0px 12px 0px; padding-bottom: 12px;">
schemata-ts
</h1>

<p align="center" style="margin-bottom: 12px;">
Write domain types once.  A collection of Schemata inspired by io-ts-types and validators.js.
</p>

<div align="center">

![Build Status](https://github.com/jacob-alford/schemata-ts/actions/workflows/build.yml/badge.svg)
[![NPM Version](https://badge.fury.io/js/schemata-ts.svg)](https://badge.fury.io/js/schemata-ts)
[![Coverage Status](https://coveralls.io/repos/github/jacob-alford/schemata-ts/badge.svg?branch=main)](https://coveralls.io/github/jacob-alford/schemata-ts?branch=main)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/schemata-ts)
![License](https://img.shields.io/github/license/jacob-alford/schemata-ts)

</div>

## Welcome

A schema is an expression of a type structure that can be used to generate typeclass instances from a single declaration. Typeclass instances can perform a variety of tasks, for instance `Decoder` can take a pesky `unknown` value and give you an Either in return where the success case abides by the `schema` that generated it. The example below constructs a `User` schema.

## Installation

Uses `fp-ts`, and `io-ts` as peer dependencies. Read more about peer dependencies at [nodejs.org](https://nodejs.org/en/blog/npm/peer-dependencies/).

Also contains `fast-check` as a soft peer dependency. Soft peer dependency implies that usage of the `Arbitrary` module requires fast-check as a peer-dependency.

### Yarn

```bash
yarn add schemata-ts
```

### NPM

```bash
npm install schemata-ts
```

## Codec

A codec is a typeclass that contains the methods of `Decoder`, `Encoder`, `JsonSerializer`, `JsonDeserializer`, and `Guard`. Decoder and encoder are lossless when composed together. This means that for all domain types for which an encoder encodes to, a decoder will return a valid `E.Right` value.

Likewise, `JsonSerializer` and `JsonDeserializer` are lossless when composed together. Certain data types in Javascript like `NaN`, `undefined`, `Infinity`, and others are not part of the JSON specification, and `JSON.stringify` will turn these values into something different. This means that if you stringify these types and attempt to parse, you will get a different object than you originally started with. Additionally, JSON cannot stringify `bigint`, and cannot contain circular references. Under these circumstances `JSON.stringify` may throw an error.

`JsonSerializer` and `JsonDeserializer` are typeclasses included in a Codec which are lossless when composed together. So anything that successfully stringifies using `JsonSerializer` will successfully parse with `JsonDeserializer` and be equivalent objects. This is useful to avoid bugs when using JSON strings for storing data. Additionally, `JsonDeserializer` will decode the Json string into a domain type for immediate use in your program.

### User Document Example

This is a live example found in `src/Codec.ts` type-checked and tested with [docs-ts](https://github.com/gcanti/docs-ts).

```typescript
import * as fc from 'fast-check'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import { getArbitrary } from 'schemata-ts/Arbitrary'
import { getCodec } from 'schemata-ts/Codec'
import * as S from 'schemata-ts/schemata'

export const User = S.Struct({
  id: S.UUID(5),
  created_at: S.DateFromIsoString({ requireTime: 'None' }),
  updated_at: S.DateFromIsoString({ requireTime: 'TimeAndOffset' }),
  email: S.EmailAddress,
  name: S.NonEmptyString,
  username: S.Ascii,
  age: S.PositiveInt,
  favorite_color: S.OptionFromNullable(S.HexColor),
})

export type User = S.TypeOf<typeof User>
export type UserInput = S.InputOf<typeof User>

export const userArbitrary = getArbitrary(User).arbitrary(fc)
export const userCodec = getCodec(User)

const validInput = {
  id: '987FBC97-4BED-5078-AF07-9141BA07C9F3',
  created_at: '+002021-10-31',
  updated_at: '2022-11-22T18:30Z',
  name: 'Johnathan Doe',
  email: 'jdoe22@probably-doesnt-exist.com',
  username: 'jdoe22',
  age: 52,
  favorite_color: null,
}

const expectedOutput = {
  id: '987FBC97-4BED-5078-AF07-9141BA07C9F3',
  created_at: new Date('+002021-10-31'),
  updated_at: new Date('2022-11-22T18:30Z'),
  name: 'Johnathan Doe',
  email: 'jdoe22@probably-doesnt-exist.com',
  username: 'jdoe22',
  age: 52,
  favorite_color: O.none,
}

const invalidInput = {
  // not a UUID
  id: 123,
  // Not ISO 8601 compliant, though parsable with `new Date()`
  created_at: 'October 31, 2021',
  updated_at: 'November 22, 2022 12:30',
  // Empty string not allowed
  name: '',
  // Non-ASCII characters not allowed
  username: '😂😂😂',
  // Positive Ints only
  age: 0,
  // hex color values only
  favorite_color: 'rgb(105, 190, 239)',
}

// Using Decoders

assert.deepStrictEqual(userCodec.decode(validInput), E.right(expectedOutput))
assert.deepStrictEqual(userCodec.decode(invalidInput)._tag, 'Left')

// Using Arbitraries, Encoders, and Decoders

const testUsers = fc.sample(userArbitrary, 10)

assert.deepStrictEqual(
  pipe(
    testUsers,
    // Encode the users generated using Arbitrary
    RA.map(userCodec.encode),
    // Decode the encoded users back to their original form, collecting any errors
    E.traverseArray(userCodec.decode),
  ),
  E.right(testUsers),
)
```

## Documentation

- [schemata-ts](https://jacob-alford.github.io/schemata-ts/docs/modules)
- [fp-ts](https://gcanti.github.io/fp-ts/modules/)
- [io-ts](https://gcanti.github.io/io-ts)

## Exported Schemata

| Schema                | Type           |
| --------------------- | -------------- |
| `Date.date`           | Base Schemable |
| `Date.dateFromString` | Base Schemable |
| `Int.int`             | Base Schemable |
| `Float.float`         | Base Schemable |
| `Json.json`           | Base Schemable |
| `Json.jsonFromString` | Base Schemable |
| BooleanFromString     | Conversion     |
| BooleanFromNumber     | Conversion     |
| DateFromInt           | Conversion     |
| DateFromIsoString     | Conversion     |
| DateFromUnixTime      | Conversion     |
| OptionFromNullable    | Conversion     |
| OptionFromUndefined   | Conversion     |
| BigIntFromString      | Conversion     |
| FloatFromString       | Conversion     |
| IntFromString         | Conversion     |
| JsonFromString        | Conversion     |
| NonEmptyArray         | Generic        |
| Natural               | Number         |
| NegativeFloat         | Number         |
| NegativeInt           | Number         |
| NonNegativeFloat      | Number         |
| NonPositiveFloat      | Number         |
| NonPositiveInt        | Number         |
| PositiveFloat         | Number         |
| PositiveInt           | Number         |
| Ascii                 | String         |
| Base64                | String         |
| Base64Url             | String         |
| BitcoinAddress        | String         |
| CreditCard            | String         |
| EmailAddress          | String         |
| Ethereum Address      | String         |
| Hexadecimal           | String         |
| HexColor              | String         |
| HslColor              | String         |
| Jwt                   | String         |
| LatLong               | String         |
| NonEmptyString        | String         |
| RGB                   | String         |
| UUID                  | String         |

Additionally, there are more unlisted base schemable schemata also exported from `schemata-ts/schemata`. These can be used to construct more complex schemata. There are many examples of custom schemata in `src/schemata` to use as a reference.

## fp-ts next

`Schemata-ts`'s implementation of Schema is built on io-ts `Schemable`. This library wraps schemable with a schema-based API. The future of io-ts is likewise a schema system: [@fp-ts/schema](https://github.com/fp-ts/schema). The approach of `@fp-ts/schema` is for all schemata to be represented as an abstract syntax tree (AST), and then compiled using `Provider`s. This mechanism searches for the AST's instance within a nested map of symbols. This approach is similar to the Schemable method in that they both are a collection of instructions, and ways to compose those instructions together. The upside to the schemable system is that all the available instructions are known to the type system and do not require key-lookups.

## Future Features

schemata-ts is planned to support the following features in various 1.x and 2.x versions in the near future:

- ~~JsonSerializer and JsonDeserializer: encoding / decoding from Json strings~~ Added in 1.1.0
- Json Schema: generating JSON-Schema from schemata ([#137](https://github.com/jacob-alford/schemata-ts/issues/137))
- Optic Schema: generating optics from schemata ([#134](https://github.com/jacob-alford/schemata-ts/issues/134))
- Mapped Structs: conversions between struct types, i.e. `snake-case` keys to `camelCase` keys
- More generic schemata: (SetFromArray, ~~NonEmptyArray~~ Added in 1.1.0)
- More validator.js branded schemata
