/**
 * A basal schemable for Json and JsonString
 *
 * @since 1.1.0
 */
import * as E from 'fp-ts/Either'
import { flow } from 'fp-ts/function'
import * as P from 'schemata-ts/Printer'
import { WithJson } from 'schemata-ts/schemables/WithJson/definition'

/**
 * @since 1.1.0
 * @category Instances
 */
export const Printer: WithJson<P.SchemableLambda> = {
  json: {
    domainToJson: E.right,
    codomainToJson: P.toJson,
  },
  jsonString: {
    domainToJson: flow(P.safeParse, E.right),
    codomainToJson: P.string.codomainToJson,
  },
}
