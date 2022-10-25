---
title: date/safeDate.ts
nav_order: 2
parent: Modules
---

## safeDate overview

Represents Date objects which are not invalid dates

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Instances](#instances)
  - [Arbitrary](#arbitrary)
  - [Decoder](#decoder)
  - [Encoder](#encoder)
  - [Eq](#eq)
  - [Guard](#guard)
  - [TaskDecoder](#taskdecoder)
  - [Type](#type)
- [Model](#model)
  - [SafeDate (type alias)](#safedate-type-alias)
  - [SchemableParams (type alias)](#schemableparams-type-alias)
  - [SchemableParams1 (type alias)](#schemableparams1-type-alias)
  - [SchemableParams2 (type alias)](#schemableparams2-type-alias)
  - [SchemableParams2C (type alias)](#schemableparams2c-type-alias)
- [Refinements](#refinements)
  - [isSafeDate](#issafedate)

---

# Instances

## Arbitrary

**Signature**

```ts
export declare const Arbitrary: Arb.Arbitrary<SafeDate>
```

Added in v0.0.3

## Decoder

**Signature**

```ts
export declare const Decoder: D.Decoder<unknown, SafeDate>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: Enc.Encoder<Date, SafeDate>
```

Added in v0.0.3

## Eq

**Signature**

```ts
export declare const Eq: Eq_.Eq<SafeDate>
```

Added in v0.0.1

## Guard

**Signature**

```ts
export declare const Guard: G.Guard<unknown, SafeDate>
```

Added in v0.0.1

## TaskDecoder

**Signature**

```ts
export declare const TaskDecoder: TD.TaskDecoder<unknown, SafeDate>
```

Added in v0.0.1

## Type

**Signature**

```ts
export declare const Type: t.Type<SafeDate>
```

Added in v0.0.1

# Model

## SafeDate (type alias)

**Signature**

```ts
export type SafeDate = Date & SafeDateBrand
```

Added in v0.0.1

## SchemableParams (type alias)

**Signature**

```ts
export type SchemableParams<S> = HKT2<S, Date, SafeDate>
```

Added in v0.0.1

## SchemableParams1 (type alias)

**Signature**

```ts
export type SchemableParams1<S extends URIS> = Kind<S, SafeDate>
```

Added in v0.0.1

## SchemableParams2 (type alias)

**Signature**

```ts
export type SchemableParams2<S extends URIS2> = Kind2<S, Date, SafeDate>
```

Added in v0.0.3

## SchemableParams2C (type alias)

**Signature**

```ts
export type SchemableParams2C<S extends URIS2> = Kind2<S, unknown, SafeDate>
```

Added in v0.0.1

# Refinements

## isSafeDate

**Signature**

```ts
export declare function isSafeDate(d: unknown): d is SafeDate
```

Added in v0.0.1