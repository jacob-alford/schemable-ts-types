import { paramCase as kebabCase } from 'change-case'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import * as TE from 'fp-ts/TaskEither'
import path from 'path'

import { type Build } from './build'
import { autogeneratedDocs, SCHEMA_OUT_DIR } from './docs-config'

const removeExt = (file: string): string => file.replace(/\.([^/.].*)?[^/.]+$/, '')

const rewriteParent =
  (replacement: O.Option<string>, extras?: string) =>
  (fileContents: string): string =>
    fileContents.replace(
      /parent: Modules\n---/g,
      pipe(
        replacement,
        O.fold(
          () => `${extras ?? ''}\n---`,
          r => `${extras ?? ''}parent: ${r}\n---`,
        ),
      ),
    )

const rewriteSchemaTitle =
  (file: string) =>
  (fileContents: string): string =>
    fileContents.replace(/title: (.*)\n/g, () => `title: ${removeExt(file)}\n`)

export const docsPack: Build<void> = _ =>
  pipe(
    TE.Do,
    TE.bind('schemas', () => _.readFiles(path.resolve('./docs/modules/schemata'))),
    TE.let('docs', () => autogeneratedDocs),
    TE.chainFirst(({ schemas }) =>
      pipe(
        schemas,
        RA.filter(file => !file.includes('index')),
        TE.traverseArray(file =>
          pipe(
            _.readFile(path.join(`./docs/modules/schemata`, file)),
            TE.map(rewriteParent(O.some('schemata'))),
            TE.map(rewriteSchemaTitle(file)),
            TE.chain(contents =>
              _.writeFile(path.join(SCHEMA_OUT_DIR, `${removeExt(file)}.md`), contents),
            ),
          ),
        ),
      ),
    ),
    TE.chainFirst(({ docs }) =>
      pipe(
        docs,
        TE.traverseArray(file =>
          pipe(
            _.readFile(path.resolve('./docs/modules', `${file}.md`)),
            TE.map(rewriteParent(O.none, `permalink: /${kebabCase(removeExt(file))}/`)),
            TE.chain(contents =>
              _.writeFile(path.resolve(`./docs`, `${removeExt(file)}.md`), contents),
            ),
          ),
        ),
      ),
    ),
    TE.asUnit,
  )
