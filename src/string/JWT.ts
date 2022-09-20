/**
 * A valid, Base64-encoded JWT.
 *
 * Inspired by validator.js' [JWT
 * module](https://github.com/validatorjs/validator.js/blob/master/src/lib/isJWT.js).
 *
 * @since 0.0.2
 */
import { Kind, Kind2, URIS, URIS2, HKT } from 'fp-ts/HKT'
import * as D from 'io-ts/Decoder'
import * as Eq_ from 'fp-ts/Eq'
import * as G from 'io-ts/Guard'
import * as Str from 'fp-ts/string'
import * as TD from 'io-ts/TaskDecoder'
import * as t from 'io-ts/Type'
import { pipe } from 'fp-ts/function'
import { isBase64Url } from './Base64Url'

/**
 * @since 0.0.2
 * @category Internal
 */
interface JWTBrand {
  readonly JWT: unique symbol
}

/**
 * A valid, Base64-encoded JWT.
 *
 * Inspired by validator.js' [JWT
 * module](https://github.com/validatorjs/validator.js/blob/master/src/lib/isJWT.js).
 *
 * @since 0.0.2
 * @category Model
 */
export type JWT = string & JWTBrand

/**
 * @since 0.0.2
 * @category Model
 */
export type SchemableParams<S> = HKT<S, JWT>

/**
 * @since 0.0.2
 * @category Model
 */
export type SchemableParams1<S extends URIS> = Kind<S, JWT>

/**
 * @since 0.0.2
 * @category Model
 */
export type SchemableParams2C<S extends URIS2> = Kind2<S, unknown, JWT>

/**
 * @since 0.0.2
 * @category Refinements
 */
export const isJWT = (s: string): s is JWT => {
  const dotSplit = s.split('.')
  const len = dotSplit.length

  if (len > 3 || len < 2) {
    return false
  }

  return dotSplit.reduce((acc, currElem) => acc && isBase64Url(currElem), true)
}

/**
 * @since 0.0.2
 * @category Instances
 */
export const Decoder: SchemableParams2C<D.URI> = pipe(D.string, D.refine(isJWT, 'JWT'))

/**
 * @since 0.0.2
 * @category Instances
 */
export const Eq: SchemableParams1<Eq_.URI> = Str.Eq

/**
 * @since 0.0.2
 * @category Instances
 */
export const Guard: SchemableParams1<G.URI> = pipe(G.string, G.refine(isJWT))

/**
 * @since 0.0.2
 * @category Instances
 */
export const TaskDecoder: SchemableParams2C<TD.URI> = pipe(
  TD.string,
  TD.refine(isJWT, 'JWT')
)

/**
 * @since 0.0.2
 * @category Instances
 */
export const Type: SchemableParams1<t.URI> = pipe(t.string, t.refine(isJWT, 'JWT'))
