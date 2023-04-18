import * as fc from 'fast-check'
import { pipe, tuple, unsafeCoerce } from 'fp-ts/function'
import * as Mn from 'fp-ts/Monoid'
import * as N from 'fp-ts/number'
import * as RA from 'fp-ts/ReadonlyArray'

import * as Arb from '../src/Arbitrary'
import * as D from '../src/internal/decoder'
import * as E from '../src/Encoder'
import * as Eq from '../src/Eq'
import * as G from '../src/Guard'
import * as JS from '../src/JsonSchema'
import * as P from '../src/Printer'
import { Schema } from '../src/Schema'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any

export const combineExpected: <A, B>(
  input: ReadonlyArray<A>,
  expectedOutcome: B,
) => ReadonlyArray<readonly [A, B]> = (as, b) => RA.comprehension([as, RA.of(b)], tuple)

export const cat = <A>(...args: ReadonlyArray<ReadonlyArray<A>>): ReadonlyArray<A> =>
  pipe(args, RA.flatten)

export const validateArbitrary: <T, A extends T>(
  t: { Arbitrary: Arb.Arbitrary<A> },
  check: (a: T) => a is A,
) => void = ({ Arbitrary }, check) =>
  fc.assert(fc.property(Arbitrary.arbitrary(fc), check))

type ZipN = {
  <A, B>(as: ReadonlyArray<A>, bs: ReadonlyArray<B>): ReadonlyArray<[A, B]>
  <A, B, C>(
    as: ReadonlyArray<A>,
    bs: ReadonlyArray<B>,
    cs: ReadonlyArray<C>,
  ): ReadonlyArray<[A, B, C]>
  <A, B, C, D>(
    as: ReadonlyArray<A>,
    bs: ReadonlyArray<B>,
    cs: ReadonlyArray<C>,
    ds: ReadonlyArray<D>,
  ): ReadonlyArray<[A, B, C, D]>
}

export const zipN: ZipN = (...args: ReadonlyArray<ReadonlyArray<Any>>) => {
  const smallestLength = pipe(
    args,
    RA.foldMap(Mn.min(N.Bounded))(a => a.length),
  )
  const _: <A>(xs: ReadonlyArray<A>, i: number) => A = (xs, i) => unsafeCoerce(xs[i])
  const zipped = []
  for (let i = 0; i < smallestLength; ++i) {
    const tupleN = []
    for (const arrN of args) {
      tupleN.push(_(arrN, i))
    }
    zipped.push(tupleN)
  }
  return RA.fromArray(zipped) as Any
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAllInstances = <E, A>(schema: Schema<E, A>) => ({
  Arbitrary: Arb.getArbitrary(schema),
  Decoder: D.getDecoder(schema),
  Encoder: E.getEncoder(schema),
  Eq: Eq.getEq(schema),
  Guard: G.getGuard(schema),
  Printer: P.getPrinter(schema),
})
