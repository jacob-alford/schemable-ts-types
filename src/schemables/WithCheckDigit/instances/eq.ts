import { identity } from 'fp-ts/function'
import * as Eq_ from 'schemata-ts/Eq'
import { WithCheckDigit } from 'schemata-ts/schemables/WithCheckDigit/definition'

export const WithCheckDigitEq: WithCheckDigit<Eq_.SchemableLambda> = {
  checkDigit: () => identity,
}
