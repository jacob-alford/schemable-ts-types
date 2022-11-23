import * as Cons from 'fp-ts/Console'
import * as E from 'fp-ts/Either'
import { flow, pipe, tuple, unsafeCoerce } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as RA from 'fp-ts/ReadonlyArray'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import * as Str from 'fp-ts/string'
import * as TE from 'fp-ts/TaskEither'
import * as ts from 'typescript'

import { CLI, cli } from './CLI'
import { FileSystem, fileSystem } from './FS'
import { run } from './run'

interface Build<A> extends RTE.ReaderTaskEither<FileSystem & CLI, Error, A> {}

const _ = ts.factory

type Schemable = [
  name: `With${string}`,
  nameWithout: string,
  path: string,
  moduleComment: string,
]

type Schema = [name: string, moduleComment: string]

type Schemata = {
  readonly date: ReadonlyArray<Schema>
  readonly generic: ReadonlyArray<Schema>
  readonly number: ReadonlyArray<Schema>
  readonly string: ReadonlyArray<Schema>
}

type SchemableTypeclass<
  Name extends string,
  Accessor extends string,
  Arity extends `SchemableExt${'1' | '2' | '2C'}`,
  Version extends string,
> = [name: Name, accessor: Accessor, arity: Arity, version: Version]

/** Different typeclasses which express a Schemable instance */
export type SchemableTypeclasses =
  | SchemableTypeclass<'Decoder', 'D', 'SchemableExt2C', '1.0.0'>
  | SchemableTypeclass<'Eq', 'Eq', 'SchemableExt1', '1.0.0'>
  | SchemableTypeclass<'Guard', 'G', 'SchemableExt1', '1.0.0'>
  | SchemableTypeclass<'TaskDecoder', 'TD', 'SchemableExt2C', '1.0.0'>
  | SchemableTypeclass<'Type', 't', 'SchemableExt1', '1.0.0'>
  | SchemableTypeclass<'Encoder', 'Enc', 'SchemableExt2', '1.0.0'>
  | SchemableTypeclass<'Arbitrary', 'Arb', 'SchemableExt1', '1.0.0'>

const makeSchemableSchemaExport = ([
  nameWith,
  name,
  ,
  comment,
]: Schemable): ts.ExportDeclaration =>
  _.createExportDeclaration(
    undefined,
    false,
    _.createNamedExports([
      ts.addSyntheticLeadingComment(
        _.createExportSpecifier(
          false,
          _.createIdentifier('Schema'),
          _.createIdentifier(name),
        ),
        ts.SyntaxKind.MultiLineCommentTrivia,
        `* ${comment}`,
        false,
      ),
    ]),
    _.createStringLiteral(`./schemables/${nameWith}/instances/schema`),
    undefined,
  )

const makeSchemaExport = (
  category: string,
  name: string,
  comment: string,
): ts.ExportDeclaration =>
  _.createExportDeclaration(
    undefined,
    false,
    _.createNamedExports([
      ts.addSyntheticLeadingComment(
        _.createExportSpecifier(false, undefined, _.createIdentifier(name)),
        ts.SyntaxKind.MultiLineCommentTrivia,
        `* ${comment} `,
        true,
      ),
    ]),
    _.createStringLiteral(`./schemata/${category}/${name}`),
    undefined,
  )

const typeUtilityReexports = _.createExportDeclaration(
  undefined,
  false,
  _.createNamedExports([
    ts.addSyntheticLeadingComment(
      _.createExportSpecifier(false, undefined, _.createIdentifier('TypeOf')),
      ts.SyntaxKind.MultiLineCommentTrivia,
      `* @since 1.0.0`,
      true,
    ),
    ts.addSyntheticLeadingComment(
      _.createExportSpecifier(false, undefined, _.createIdentifier('InputOf')),
      ts.SyntaxKind.MultiLineCommentTrivia,
      `* @since 1.0.0`,
      true,
    ),
    ts.addSyntheticLeadingComment(
      _.createExportSpecifier(false, undefined, _.createIdentifier('OutputOf')),
      ts.SyntaxKind.MultiLineCommentTrivia,
      `* @since 1.0.0`,
      true,
    ),
  ]),
  _.createStringLiteral('./SchemaExt'),
  undefined,
)

const makeSchemaExportsFile: (
  schemables: ReadonlyArray<Schemable>,
  schemata: Schemata,
) => string = (schemables, schemata) => {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  const sourceFile = ts.createSourceFile(
    `${module}.ts`,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS,
  )

  return pipe(
    [
      _.createJSDocComment(
        `Re-exports for all schemata-ts Schemata\n\n**Warning: DO NOT EDIT, this module is autogenerated**\n\n@since 1.0.0`,
      ),
      _.createJSDocComment('Type utilities'),
      typeUtilityReexports,
      _.createJSDocComment('base schemata'),
      _.createExportDeclaration(
        undefined,
        false,
        undefined,
        _.createStringLiteral('./base/SchemaBase'),
        undefined,
      ),
      _.createJSDocComment('schemables'),
      ...pipe(schemables, RA.map(makeSchemableSchemaExport)),
      _.createJSDocComment('schemata > date'),
      ...pipe(
        schemata.date,
        RA.map(([name, comment]) => makeSchemaExport('date', name, comment)),
      ),
      _.createJSDocComment('schemata > generic'),
      ...pipe(
        schemata.generic,
        RA.map(([name, comment]) => makeSchemaExport('generic', name, comment)),
      ),
      _.createJSDocComment('schemata > number'),
      ...pipe(
        schemata.number,
        RA.map(([name, comment]) => makeSchemaExport('number', name, comment)),
      ),
      _.createJSDocComment('schemata > string'),
      ...pipe(
        schemata.string,
        RA.map(([name, comment]) => makeSchemaExport('string', name, comment)),
      ),
    ],
    _.createNodeArray,
    nodes => printer.printList(ts.ListFormat.MultiLine, nodes, sourceFile),
    Str.replace(/\/\*\*/gm, '\n/**'),
    Str.replace(/export/gm, '\nexport'),
  )
}

const writeToDisk: (path: string) => (contents: string) => Build<void> =
  path => contents => C =>
    C.writeFile(path, contents)

// #endregion

/** Extracts module name, e.g. ASCII.ts -> ASCII */
const getModuleName: (file: string) => string = flow(Str.split('.'), RNEA.head)

const getSchemableName: (schmable: `With${string}`) => `With${string}` =
  unsafeCoerce(getModuleName)

const getSchemableModuleComment: (path: string) => Build<string> = path => C =>
  pipe(
    C.readFile(path),
    TE.filterOrElse(
      file => file.startsWith('/**'),
      () => new Error(`File ${path} does not start with a JSDoc comment`),
    ),
  )

const getSchemables: Build<ReadonlyArray<Schemable>> = C =>
  pipe(
    C.readFiles('./src/schemables'),
    TE.chain(
      TE.traverseArray<string, `With${string}`, Error>(
        TE.fromPredicate(
          (file): file is `With${string}` => file.length > 4 && file.startsWith('With'),
          file => E.toError(`File ${file} does not start with \`With\``),
        ),
      ),
    ),
    TE.map(
      RA.map(file => {
        const schemable = getSchemableName(file)
        return tuple(schemable, schemable.slice(4), `./schemables/${schemable}`)
      }),
    ),
    TE.chain(
      TE.traverseArray(([nameWith, name, path]) =>
        pipe(
          getSchemableModuleComment(`./src/schemables/${nameWith}/definition.ts`)(C),
          TE.map(comment =>
            tuple(nameWith, name, path, extractJSDocHeaderTextFromFileContents(comment)),
          ),
        ),
      ),
    ),
  )

/** Strips JSDoc comment's leading ** and trailing * */
export const extractJSDocHeaderTextFromFileContents: (
  fileContents: string,
) => string = fileContents =>
  pipe(
    fileContents,
    Str.split('*/'),
    RNEA.head,
    Str.split('/**'),
    RNEA.tail,
    RA.head,
    O.getOrElse(() => ''),
  )

const getSchema: (name: string, path: string) => Build<Schema> = (name, path) => C =>
  pipe(
    C.readFile(path),
    TE.filterOrElse(
      file => file.startsWith('/**'),
      () => new Error(`File ${path} does not start with a JSDoc comment`),
    ),
    TE.map(contents =>
      tuple(getModuleName(name), extractJSDocHeaderTextFromFileContents(contents)),
    ),
  )

const getSchemata: Build<Schemata> = C =>
  pipe(
    TE.Do,
    TE.apS(
      'date',
      pipe(
        C.readFiles('./src/schemata/date'),
        TE.chain(
          TE.traverseArray(fileName =>
            getSchema(fileName, `./src/schemata/date/${fileName}`)(C),
          ),
        ),
      ),
    ),
    TE.apS(
      'generic',
      pipe(
        C.readFiles('./src/schemata/generic'),
        TE.chain(
          TE.traverseArray(fileName =>
            getSchema(fileName, `./src/schemata/generic/${fileName}`)(C),
          ),
        ),
      ),
    ),
    TE.apS(
      'number',
      pipe(
        C.readFiles('./src/schemata/number'),
        TE.chain(
          TE.traverseArray(fileName =>
            getSchema(fileName, `./src/schemata/number/${fileName}`)(C),
          ),
        ),
      ),
    ),
    TE.apS(
      'string',
      pipe(
        C.readFiles('./src/schemata/string'),
        TE.chain(
          TE.traverseArray(fileName =>
            getSchema(fileName, `./src/schemata/string/${fileName}`)(C),
          ),
        ),
      ),
    ),
  )

const format: Build<void> = C => C.exec('yarn format')

const main: Build<void> = pipe(
  getSchemables,
  RTE.bindTo('schemables'),
  RTE.apS('schemata', getSchemata),
  RTE.chainFirstIOK(() => Cons.log('Writing `schemata.ts` reexports...')),
  RTE.chainFirst(({ schemables, schemata }) =>
    pipe(makeSchemaExportsFile(schemables, schemata), writeToDisk('./src/schemata.ts')),
  ),
  RTE.chainFirstIOK(() => Cons.log('Formatting with Prettier...')),
  RTE.chainFirst(() => format),
  RTE.chainIOK(() => Cons.log('Done!')),
)

run(
  main({
    ...fileSystem,
    ...cli,
  }),
)
