import { identity, pipe } from 'fp-ts/function'
import * as TC from 'schemata-ts/internal/Transcoder'
import { WithDate } from 'schemata-ts/schemables/WithDate/definition'
import { WithDateGuard as Guard } from 'schemata-ts/schemables/WithDate/instances/guard'
import { isValidDateString } from 'schemata-ts/schemables/WithDate/utils'

export const WithDateTranscoder: WithDate<TC.SchemableLambda> = {
  date: pipe(
    Guard.date,
    TC.fromGuard(identity, u => TC.transcodeErrors(TC.typeMismatch('Date', u))),
  ),
  dateFromString: pipe(
    TC.fromPredicate(isValidDateString, identity, u =>
      TC.transcodeErrors(TC.typeMismatch(String(u), 'Date.dateFromString')),
    ),
    TC.imap(
      d => new Date(d),
      d => d.toISOString(),
    ),
  ),
}
