import * as E from 'fp-ts/Either'
import * as PB from 'schemata-ts/PatternBuilder'
import * as P from 'schemata-ts/Printer'
import * as PE from 'schemata-ts/PrintError'
import { WithPattern } from 'schemata-ts/schemables/WithPattern/definition'

export const WithPatternPrinter: WithPattern<P.SchemableLambda> = {
  pattern: (pattern, description, caseSensitive) => ({
    domainToJson: E.fromPredicate(
      (value): value is string => PB.regexFromPattern(pattern, caseSensitive).test(value),
      value => new PE.NamedError(description, new PE.InvalidValue(value)),
    ),
    codomainToJson: P.string.codomainToJson,
  }),
}
