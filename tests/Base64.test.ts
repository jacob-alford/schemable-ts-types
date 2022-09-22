import * as RA from 'fp-ts/ReadonlyArray'

import { tuple } from 'fp-ts/function'

import { Decoder, Eq, Guard, isBase64, TaskDecoder, Type } from '../src/string/Base64'

import { cat, combineExpected } from '../test-utils'

const validStrings = [
  '',
  'Zg==',
  'Zm8=',
  'Zm9v',
  'Zm9vYg==',
  'Zm9vYmE=',
  'Zm9vYmFy',
  'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4=',
  'Vml2YW11cyBmZXJtZW50dW0gc2VtcGVyIHBvcnRhLg==',
  'U3VzcGVuZGlzc2UgbGVjdHVzIGxlbw==',
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuMPNS1Ufof9EW/M98FNw' +
    'UAKrwflsqVxaxQjBQnHQmiI7Vac40t8x7pIb8gLGV6wL7sBTJiPovJ0V7y7oc0Ye' +
    'rhKh0Rm4skP2z/jHwwZICgGzBvA0rH8xlhUiTvcwDCJ0kc+fh35hNt8srZQM4619' +
    'FTgB66Xmp4EtVyhpQV+t02g6NzK72oZI0vnAvqhpkxLeLiMCyrI416wHm5Tkukhx' +
    'QmcL2a6hNOyu0ixX/x2kSFXApEnVrJ+/IxGyfyw8kf4N2IZpW5nEP847lpfj0SZZ' +
    'Fwrd1mnfnDbYohX2zRptLy2ZUn06Qo9pkG5ntvFEPo9bfZeULtjYzIl6K8gJ2uGZ' +
    'HQIDAQAB',
]

const invalidStrings = [
  '12345',
  'Vml2YW11cyBmZXJtZtesting123',
  'Zg=',
  'Z===',
  'Zm=8',
  '=m9vYg==',
  'Zm9vYmFy====',
]

describe('Base64', () => {
  describe('Decoder', () => {
    test.each(
      cat(combineExpected(validStrings, 'Right'), combineExpected(invalidStrings, 'Left'))
    )('validates valid strings, and catches bad strings', (num, expectedTag) => {
      const result = Decoder.decode(num)

      expect(result._tag).toBe(expectedTag)
    })
  })

  describe('Eq', () => {
    test.each(RA.zipWith(validStrings, validStrings, tuple))(
      'determines two strings are equal',

      (num1, num2) => {
        const guard = Guard.is
        const eq = Eq.equals

        if (!guard(num1) || !guard(num2)) {
          throw new Error('Unexpected result')
        }

        expect(eq(num1, num2)).toBe(true)
      }
    )
  })

  describe('Guard', () => {
    test.each(
      cat(combineExpected(validStrings, true), combineExpected(invalidStrings, false))
    )('validates valid strings, and catches bad strings', (num, expectedTag) => {
      const result = Guard.is(num)

      expect(result).toBe(expectedTag)
    })
  })

  describe('TaskDecoder', () => {
    test.each(
      cat(combineExpected(validStrings, 'Right'), combineExpected(invalidStrings, 'Left'))
    )('validates valid strings, and catches bad strings', async (num, expectedTag) => {
      const result = await TaskDecoder.decode(num)()

      expect(result._tag).toBe(expectedTag)
    })
  })

  describe('Type', () => {
    test.each(
      cat(combineExpected(validStrings, 'Right'), combineExpected(invalidStrings, 'Left'))
    )('validates valid strings, and catches bad strings', (num, expectedTag) => {
      const result = Type.decode(num)

      expect(result._tag).toBe(expectedTag)
    })
  })

  describe('Very long, non-url safe string', () => {
    for (let i = 0, str = '', encoded; i < 1000; i++) {
      str += String.fromCharCode((Math.random() * 26) | 97)
      encoded = Buffer.from(str).toString('base64')

      if (!isBase64(encoded)) {
        const msg = `validator.isBase64() failed with "${encoded}"`
        throw new Error(msg)
      }
    }
  })

  describe('isBase64', () => {
    const str = `hQGkA8uYb/u24XuEAQzAh5dH2QUPv5rQ+uHwVQQShCgmgJzlOAq+L6Ld4l4P0MOeUYK7Zvt7HiYM
MzH5Pdi+VfiW0JWDqTdvQZS6o0SfBzoZqwqplAofLH+7hlu8qS0n6FFxXk2b4N5InMf/zWlqpDb6
oeGZQBbLJy69drKzpJYvqMM+OuzLUA4Wwv/WfwGtHo/fQ3H2JSFwPJz3QHuqvTrnIhO23fZa8Qpd
M36LBbX3yqrmrJo63NHy9QL9eF6+/WU7qsKOxGSm2QlDaREKx6ZlXgZ+FY7SEt1C6PHPXhggf4Ts
EF5rb+0goEniDbgiofYpUt0+aLkwsNnMYHx0+yAelPP45ZbCKxQe1Tk3gq5oAspWvUAvt6SqmNW5
CrakBXYSIpNqHWdjdW75yeUYPKIi1X1SZi1mVGy0ayrOGoPbOY6C77JwGMxqEOZtDLBiy/u9g1II
Zy1dm3UxhX/Tir2Cg+5kTAVQ6qqliklhGSCcYw0rNMfl+q151zKu4/j9id5pHnrkjnjrV1odz3u/
aBKxLpzf8cf2BlYdRooqvFIbdJULftmn0lABukKc0eaPclSdz//DzTU318fpHnFbzlUpi82UVNL4
IUqUviQNw7SX41v90N39iNP3JmczkN8J70+o7NLYlcvp4xXIFOcRaDrinbCcXT1WfQ==`

    expect(isBase64(str)).toBeTruthy
  })
})