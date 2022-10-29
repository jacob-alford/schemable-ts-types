import * as ts from 'typescript'
import * as Cons from 'fp-ts/Console'
import { flow, pipe, tuple } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as Str from 'fp-ts/string'
import * as TE from 'fp-ts/TaskEither'
import { FileSystem, fileSystem } from './FS'
import { cli, CLI } from './CLI'
import { run } from './run'
import { makeDestructureImport, makeModuleStarImport } from './ts-helpers'

interface Build<A> extends RTE.ReaderTaskEither<FileSystem & CLI, Error, A> {}

const _ = ts.factory

/**
 * Types that are injected into SchemableExt, follows:
 *
 * Category: List TypeName
 */
type SchemableCombinators = {
  generic: ReadonlyArray<readonly [string, string]>
  date: ReadonlyArray<readonly [string, string]>
  number: ReadonlyArray<readonly [string, string]>
  string: ReadonlyArray<readonly [string, string]>
}

// #region SchemableExt

export const schemableExtHeaderComment: ts.JSDoc = _.createJSDocComment(
  `The extended Schemable typeclass\n\n**Warning: DO NOT EDIT, this module is autogenerated**\n\n@since 0.0.1`
)

type Suffix = '' | '1' | '2' | '2C'

const suffixToURIS = (suffix: Suffix) => {
  switch (suffix) {
    case '':
      return undefined
    case '1':
      return _.createTypeReferenceNode(_.createIdentifier('URIS'))
    case '2':
      return _.createTypeReferenceNode(_.createIdentifier('URIS2'))
    case '2C':
      return _.createTypeReferenceNode(_.createIdentifier('URIS2'))
  }
}

export const makeSchemableExtTypeclass: (
  combinators: SchemableCombinators,
  suffix: Suffix
) => ts.InterfaceDeclaration = (combinators, suffix) =>
  _.createInterfaceDeclaration(
    [_.createModifier(ts.SyntaxKind.ExportKeyword)],
    _.createIdentifier(`SchemableExt${suffix}`),
    [
      _.createTypeParameterDeclaration(
        undefined,
        _.createIdentifier('S'),
        suffixToURIS(suffix),
        undefined
      ),
    ],
    [
      _.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        _.createExpressionWithTypeArguments(
          _.createIdentifier(`Schemable${suffix === '' ? 'HKT2' : suffix}`),
          [
            _.createTypeReferenceNode(_.createIdentifier('S'), undefined),
            ...(suffix === '2C'
              ? [_.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)]
              : []),
          ]
        ),
        _.createExpressionWithTypeArguments(
          _.createIdentifier(`WithBrand${suffix === '' ? 'HKT2' : suffix}`),
          [
            _.createTypeReferenceNode(_.createIdentifier('S'), undefined),
            ...(suffix === '2C'
              ? [_.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)]
              : []),
          ]
        ),
        _.createExpressionWithTypeArguments(
          _.createIdentifier(`WithPattern${suffix === '' ? 'HKT2' : suffix}`),
          [
            _.createTypeReferenceNode(_.createIdentifier('S'), undefined),
            ...(suffix === '2C'
              ? [_.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)]
              : []),
          ]
        ),
        _.createExpressionWithTypeArguments(
          _.createIdentifier(`WithIso${suffix === '' ? 'HKT2' : suffix}`),
          [
            _.createTypeReferenceNode(_.createIdentifier('S'), undefined),
            ...(suffix === '2C'
              ? [_.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)]
              : []),
          ]
        ),
        _.createExpressionWithTypeArguments(
          _.createIdentifier(`WithRefine${suffix === '' ? 'HKT2' : suffix}`),
          [
            _.createTypeReferenceNode(_.createIdentifier('S'), undefined),
            ...(suffix === '2C'
              ? [_.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)]
              : []),
          ]
        ),
        _.createExpressionWithTypeArguments(
          _.createIdentifier(`WithUnknownContainers${suffix === '' ? 'HKT2' : suffix}`),
          [
            _.createTypeReferenceNode(_.createIdentifier('S'), undefined),
            ...(suffix === '2C'
              ? [_.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)]
              : []),
          ]
        ),
      ]),
    ],
    [
      ...pipe(
        combinators.generic,
        RA.map(([combinator, comment]) =>
          ts.addSyntheticLeadingComment(
            _.createPropertySignature(
              [_.createModifier(ts.SyntaxKind.ReadonlyKeyword)],
              _.createIdentifier(combinator),
              undefined,
              _.createTypeReferenceNode(
                _.createQualifiedName(
                  _.createIdentifier(combinator),
                  _.createIdentifier(`SchemableParams${suffix}`)
                ),
                [_.createTypeReferenceNode(_.createIdentifier('S'), undefined)]
              )
            ),
            ts.SyntaxKind.MultiLineCommentTrivia,
            `* ${comment}`,
            true
          )
        )
      ),
      ...pipe(
        combinators.number,
        RA.map(([combinator, comment]) =>
          ts.addSyntheticLeadingComment(
            _.createPropertySignature(
              [_.createModifier(ts.SyntaxKind.ReadonlyKeyword)],
              _.createIdentifier(combinator),
              undefined,
              _.createTypeReferenceNode(
                _.createQualifiedName(
                  _.createIdentifier(combinator),
                  _.createIdentifier(`SchemableParams${suffix}`)
                ),
                [_.createTypeReferenceNode(_.createIdentifier('S'), undefined)]
              )
            ),
            ts.SyntaxKind.MultiLineCommentTrivia,
            `* ${comment}`,
            true
          )
        )
      ),
      ...pipe(
        combinators.string,
        RA.map(([combinator, comment]) =>
          ts.addSyntheticLeadingComment(
            _.createPropertySignature(
              [_.createModifier(ts.SyntaxKind.ReadonlyKeyword)],
              _.createIdentifier(combinator),
              undefined,
              _.createTypeReferenceNode(
                _.createQualifiedName(
                  _.createIdentifier(combinator),
                  _.createIdentifier(`SchemableParams${suffix}`)
                ),
                [_.createTypeReferenceNode(_.createIdentifier('S'), undefined)]
              )
            ),
            ts.SyntaxKind.MultiLineCommentTrivia,
            `* ${comment}`,
            true
          )
        )
      ),
      ...pipe(
        combinators.date,
        RA.map(([combinator, comment]) =>
          ts.addSyntheticLeadingComment(
            _.createPropertySignature(
              [_.createModifier(ts.SyntaxKind.ReadonlyKeyword)],
              _.createIdentifier(combinator),
              undefined,
              _.createTypeReferenceNode(
                _.createQualifiedName(
                  _.createIdentifier(combinator),
                  _.createIdentifier(`SchemableParams${suffix}`)
                ),
                [_.createTypeReferenceNode(_.createIdentifier('S'), undefined)]
              )
            ),
            ts.SyntaxKind.MultiLineCommentTrivia,
            `* ${comment}`,
            true
          )
        )
      ),
    ]
  )

/** Generate TS code for SchemableExt.ts */
const makeSchemableExtContents: (
  schemableCombinators: SchemableCombinators
) => string = combinators => {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  const sourceFile = ts.createSourceFile(
    `${module}.ts`,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  )

  return pipe(
    [
      schemableExtHeaderComment,
      makeDestructureImport(['URIS', 'URIS2'], 'fp-ts/HKT'),
      makeDestructureImport(
        [
          'Schemable1',
          'Schemable2C',
          'WithRefine1',
          'WithRefine2C',
          'WithUnknownContainers1',
          'WithUnknownContainers2C',
        ],
        'io-ts/Schemable'
      ),
      makeDestructureImport(
        [
          'Schemable2',
          'SchemableHKT2',
          'WithRefine2',
          'WithRefineHKT2',
          'WithUnknownContainers2',
          'WithUnknownContainersHKT2',
        ],
        './internal/Schemable2'
      ),
      makeDestructureImport(
        ['WithBrand1', 'WithBrand2', 'WithBrand2C', 'WithBrandHKT2'],
        './internal/WithBrand'
      ),
      makeDestructureImport(
        ['WithPattern1', 'WithPattern2', 'WithPattern2C', 'WithPatternHKT2'],
        './internal/WithPattern'
      ),
      makeDestructureImport(
        ['WithIso1', 'WithIso2', 'WithIso2C', 'WithIsoHKT2'],
        './internal/WithIso'
      ),
      _.createJSDocComment('generic'),
      ...pipe(
        combinators.generic,
        RA.map(([combinator]) =>
          makeModuleStarImport(combinator, `./generic/${combinator}`)
        )
      ),
      _.createJSDocComment('number'),
      ...pipe(
        combinators.number,
        RA.map(([combinator]) =>
          makeModuleStarImport(combinator, `./number/${combinator}`)
        )
      ),
      _.createJSDocComment('string'),
      ...pipe(
        combinators.string,
        RA.map(([combinator]) =>
          makeModuleStarImport(combinator, `./string/${combinator}`)
        )
      ),
      _.createJSDocComment('date'),
      ...pipe(
        combinators.date,
        RA.map(([combinator]) => makeModuleStarImport(combinator, `./date/${combinator}`))
      ),

      instanceComment,
      makeSchemableExtTypeclass(combinators, ''),

      instanceComment,
      makeSchemableExtTypeclass(combinators, '1'),

      instanceComment,
      makeSchemableExtTypeclass(combinators, '2'),

      instanceComment,
      makeSchemableExtTypeclass(combinators, '2C'),
    ],
    _.createNodeArray,
    nodes => printer.printList(ts.ListFormat.MultiLine, nodes, sourceFile),
    Str.replace(/\/\*\*/gm, '\n/**')
  )
}

// #endregion

type SchemableTypeclass<
  Name extends string,
  Accessor extends string,
  Arity extends `SchemableExt${'1' | '2' | '2C'}`,
  Version extends string
> = [name: Name, accessor: Accessor, arity: Arity, version: Version]

/** Different typeclasses which express a Schemable instance */
export type SchemableTypeclasses =
  | SchemableTypeclass<'Decoder', 'D', 'SchemableExt2C', '0.0.1'>
  | SchemableTypeclass<'Eq', 'Eq', 'SchemableExt1', '0.0.1'>
  | SchemableTypeclass<'Guard', 'G', 'SchemableExt1', '0.0.1'>
  | SchemableTypeclass<'TaskDecoder', 'TD', 'SchemableExt2C', '0.0.1'>
  | SchemableTypeclass<'Type', 't', 'SchemableExt1', '0.0.1'>
  | SchemableTypeclass<'Encoder', 'Enc', 'SchemableExt2', '0.0.3'>
  | SchemableTypeclass<'Arbitrary', 'Arb', 'SchemableExt1', '0.0.3'>

// #region Typeclass modules

export const moduleHeaderComment: (module: string, version: string) => ts.JSDoc = (
  module,
  version
) =>
  _.createJSDocComment(
    `SchemableExt instances for ${module}\n\n**Warning: DO NOT EDIT, this module is autogenerated**\n\n@since ${version}`
  )

export const instanceComment: ts.JSDoc = _.createJSDocComment(
  `@since 0.0.1\n@category Instances`
)

const makeSchemableInstance: (
  tc: SchemableTypeclasses
) => (schemableCombinators: SchemableCombinators) => ts.VariableStatement =
  ([instanceName, accessor, schemableInstance]) =>
  schemableCombinators =>
    _.createVariableStatement(
      [_.createModifier(ts.SyntaxKind.ExportKeyword)],
      _.createVariableDeclarationList(
        [
          _.createVariableDeclaration(
            _.createIdentifier('Schemable'),
            undefined,
            _.createTypeReferenceNode(_.createIdentifier(schemableInstance), [
              _.createTypeReferenceNode(
                _.createQualifiedName(
                  _.createIdentifier(accessor),
                  _.createIdentifier('URI')
                ),
                undefined
              ),
            ]),
            _.createObjectLiteralExpression(
              [
                _.createSpreadAssignment(
                  _.createPropertyAccessExpression(
                    _.createIdentifier(accessor),
                    _.createIdentifier('Schemable')
                  )
                ),
                _.createSpreadAssignment(
                  _.createPropertyAccessExpression(
                    _.createIdentifier(accessor),
                    _.createIdentifier('WithBrand')
                  )
                ),
                _.createSpreadAssignment(
                  _.createPropertyAccessExpression(
                    _.createIdentifier(accessor),
                    _.createIdentifier('WithPattern')
                  )
                ),
                _.createSpreadAssignment(
                  _.createPropertyAccessExpression(
                    _.createIdentifier(accessor),
                    _.createIdentifier('WithIso')
                  )
                ),
                _.createSpreadAssignment(
                  _.createPropertyAccessExpression(
                    _.createIdentifier(accessor),
                    _.createIdentifier('WithRefine')
                  )
                ),
                _.createSpreadAssignment(
                  _.createPropertyAccessExpression(
                    _.createIdentifier(accessor),
                    _.createIdentifier('WithUnknownContainers')
                  )
                ),
                ...pipe(
                  schemableCombinators.generic,
                  RA.map(([schemableCombinatorName]) =>
                    _.createPropertyAssignment(
                      _.createIdentifier(schemableCombinatorName),
                      _.createPropertyAccessExpression(
                        _.createIdentifier(schemableCombinatorName),
                        _.createIdentifier(instanceName)
                      )
                    )
                  )
                ),
                ...pipe(
                  schemableCombinators.number,
                  RA.map(([schemableCombinatorName]) =>
                    _.createPropertyAssignment(
                      _.createIdentifier(schemableCombinatorName),
                      _.createPropertyAccessExpression(
                        _.createIdentifier(schemableCombinatorName),
                        _.createIdentifier(instanceName)
                      )
                    )
                  )
                ),
                ...pipe(
                  schemableCombinators.string,
                  RA.map(([schemableCombinatorName]) =>
                    _.createPropertyAssignment(
                      _.createIdentifier(schemableCombinatorName),
                      _.createPropertyAccessExpression(
                        _.createIdentifier(schemableCombinatorName),
                        _.createIdentifier(instanceName)
                      )
                    )
                  )
                ),
                ...pipe(
                  schemableCombinators.date,
                  RA.map(([schemableCombinatorName]) =>
                    _.createPropertyAssignment(
                      _.createIdentifier(schemableCombinatorName),
                      _.createPropertyAccessExpression(
                        _.createIdentifier(schemableCombinatorName),
                        _.createIdentifier(instanceName)
                      )
                    )
                  )
                ),
              ],
              true
            )
          ),
        ],
        ts.NodeFlags.Const
      )
    )

/** Generate TS code for Decoder, Eq, Guard, TaskDecoder, Type, or Encoder */
const makeSchemableInstanceModuleContents: (
  typeclass: SchemableTypeclasses
) => (combinators: SchemableCombinators) => string = typeclass => combinators => {
  const [module, accessor, schemableInstance, sinceVersion] = typeclass

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  const sourceFile = ts.createSourceFile(
    `${module}.ts`,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  )

  return pipe(
    [
      moduleHeaderComment(module, sinceVersion),
      makeModuleStarImport(accessor, `./internal/${module}Base`),
      makeDestructureImport([schemableInstance], './SchemableExt'),
      _.createJSDocComment('generic'),
      ...pipe(
        combinators.generic,
        RA.map(([combinator]) =>
          makeModuleStarImport(combinator, `./generic/${combinator}`)
        )
      ),
      _.createJSDocComment('number'),
      ...pipe(
        combinators.number,
        RA.map(([combinator]) =>
          makeModuleStarImport(combinator, `./number/${combinator}`)
        )
      ),
      _.createJSDocComment('string'),
      ...pipe(
        combinators.string,
        RA.map(([combinator]) =>
          makeModuleStarImport(combinator, `./string/${combinator}`)
        )
      ),
      _.createJSDocComment('date'),
      ...pipe(
        combinators.date,
        RA.map(([combinator]) => makeModuleStarImport(combinator, `./date/${combinator}`))
      ),
      instanceComment,
      makeSchemableInstance(typeclass)(combinators),
    ],
    _.createNodeArray,
    nodes => printer.printList(ts.ListFormat.MultiLine, nodes, sourceFile),
    Str.replace(/\/\*\*/gm, '\n/**')
  )
}

const writeToDisk: (path: string) => (contents: string) => Build<void> =
  path => contents => C =>
    C.writeFile(path, contents)

// #endregion

/** Strips JSDoc comment's leading ** and trailing * */
export const extractJSDocHeaderTextFromFileContents: (
  fileContents: string
) => string = fileContents =>
  pipe(
    fileContents,
    Str.split('*/'),
    RNEA.head,
    Str.split('/**'),
    RNEA.tail,
    RA.head,
    O.getOrElse(() => '')
  )

const getModuleJSDocComment: (filePath: string) => Build<string> = filePath => C =>
  pipe(
    C.readFile(filePath),
    TE.filterOrElse(
      file => file.startsWith('/**'),
      () => new Error(`File ${filePath} does not start with a JSDoc comment`)
    ),
    TE.map(extractJSDocHeaderTextFromFileContents)
  )

/** Extracts module name, e.g. ASCII.ts -> ASCII */
const getModuleName: (file: string) => string = flow(Str.split('.'), RNEA.head)

/** Retrieve modules found in category folders */
const getSchemableCombinators: Build<SchemableCombinators> = C =>
  pipe(
    TE.Do,
    TE.apS(
      'date',
      pipe(
        C.readFiles('./src/date'),
        TE.chain(
          TE.traverseArray(file =>
            pipe(
              C,
              getModuleJSDocComment(`./src/date/${file}`),
              TE.map(comment => tuple(getModuleName(file), comment))
            )
          )
        )
      )
    ),
    TE.apS(
      'number',
      pipe(
        C.readFiles('./src/number'),
        TE.chain(
          TE.traverseArray(file =>
            pipe(
              C,
              getModuleJSDocComment(`./src/number/${file}`),
              TE.map(comment => tuple(getModuleName(file), comment))
            )
          )
        )
      )
    ),
    TE.apS(
      'string',
      pipe(
        C.readFiles('./src/string'),
        TE.chain(
          TE.traverseArray(file =>
            pipe(
              C,
              getModuleJSDocComment(`./src/string/${file}`),
              TE.map(comment => tuple(getModuleName(file), comment))
            )
          )
        )
      )
    ),
    TE.apS(
      'generic',
      pipe(
        C.readFiles('./src/generic'),
        TE.chain(
          TE.traverseArray(file =>
            pipe(
              C,
              getModuleJSDocComment(`./src/generic/${file}`),
              TE.map(comment => tuple(getModuleName(file), comment))
            )
          )
        )
      )
    )
  )

const schemableTypeclasses: ReadonlyArray<SchemableTypeclasses> = [
  ['Decoder', 'D', 'SchemableExt2C', '0.0.1'],
  ['Eq', 'Eq', 'SchemableExt1', '0.0.1'],
  ['Guard', 'G', 'SchemableExt1', '0.0.1'],
  ['TaskDecoder', 'TD', 'SchemableExt2C', '0.0.1'],
  ['Type', 't', 'SchemableExt1', '0.0.1'],
  ['Encoder', 'Enc', 'SchemableExt2', '0.0.3'],
  ['Arbitrary', 'Arb', 'SchemableExt1', '0.0.3'],
]

const main: Build<void> = pipe(
  getSchemableCombinators,
  RTE.bindTo('combinators'),
  RTE.chainFirstIOK(() => Cons.log('Writing `Schemable` instance modules...')),
  RTE.chainFirst(({ combinators }) =>
    pipe(
      schemableTypeclasses,
      RTE.traverseArray(typeclass =>
        pipe(
          combinators,
          makeSchemableInstanceModuleContents(typeclass),
          writeToDisk(`./src/${typeclass[0]}.ts`),
          RTE.chainFirstIOK(() => Cons.log(`  - Writing src/${typeclass[0]}.ts...`))
        )
      )
    )
  ),
  RTE.chainFirstIOK(() => Cons.log('Writing `SchemableExt`...')),
  RTE.chainFirst(({ combinators }) =>
    pipe(makeSchemableExtContents(combinators), writeToDisk(`./src/SchemableExt.ts`))
  ),
  RTE.chainIOK(() => Cons.log('Done!'))
)

run(
  main({
    ...fileSystem,
    ...cli,
  })
)
