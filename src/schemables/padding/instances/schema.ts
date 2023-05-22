import * as SC from 'schemata-ts/Schema'
import { WithPadding } from 'schemata-ts/schemables/padding/definition'

export const PaddingSchema: WithPadding<SC.SchemableLambda> = {
  padLeft: (modulus, char) => sS => SC.make(S => S.padLeft(modulus, char)(sS(S))),
  padRight: (modulus, char) => sS => SC.make(S => S.padRight(modulus, char)(sS(S))),
}