/**
 * Schemable for annotating a JSON Schema. Interpretation using interpreters other than
 * JsonSchema will not change the derivation.
 *
 * @since 1.2.0
 */
import { constant, identity } from 'fp-ts/function'
import * as TD from 'schemata-ts/TaskDecoder'
import { WithAnnotate2C } from 'schemata-ts/schemables/WithAnnotate/definition'

/**
 * @since 1.2.0
 * @category Instances
 */
export const TaskDecoder: WithAnnotate2C<TD.URI, unknown> = {
  annotate: constant(identity),
}
