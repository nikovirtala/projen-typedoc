# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TypeDoc <a name="TypeDoc" id="@nikovirtala/projen-typedoc.TypeDoc"></a>

TypeDoc component for projen projects.

#### Initializers <a name="Initializers" id="@nikovirtala/projen-typedoc.TypeDoc.Initializer"></a>

```typescript
import { TypeDoc } from '@nikovirtala/projen-typedoc'

new TypeDoc(project: NodeProject, options?: TypeDocOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-typedoc.TypeDocOptions">TypeDocOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-typedoc.TypeDoc.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-typedoc.TypeDoc.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-typedoc.TypeDocOptions">TypeDocOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-typedoc.TypeDoc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-typedoc.TypeDoc.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-typedoc.TypeDoc.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-typedoc.TypeDoc.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-typedoc.TypeDoc.isConstruct"></a>

```typescript
import { TypeDoc } from '@nikovirtala/projen-typedoc'

TypeDoc.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-typedoc.TypeDoc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-typedoc.TypeDoc.isComponent"></a>

```typescript
import { TypeDoc } from '@nikovirtala/projen-typedoc'

TypeDoc.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-typedoc.TypeDoc.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-typedoc.TypeDoc.of"></a>

```typescript
import { TypeDoc } from '@nikovirtala/projen-typedoc'

TypeDoc.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-typedoc.TypeDoc.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.property.file">file</a></code> | <code>projen.JsonFile</code> | TypeDoc configuration file. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDoc.property.task">task</a></code> | <code>projen.Task</code> | TypeDoc task. |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-typedoc.TypeDoc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-typedoc.TypeDoc.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `file`<sup>Required</sup> <a name="file" id="@nikovirtala/projen-typedoc.TypeDoc.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* projen.JsonFile

TypeDoc configuration file.

---

##### `task`<sup>Required</sup> <a name="task" id="@nikovirtala/projen-typedoc.TypeDoc.property.task"></a>

```typescript
public readonly task: Task;
```

- *Type:* projen.Task

TypeDoc task.

---


## Structs <a name="Structs" id="Structs"></a>

### TypeDocConfiguration <a name="TypeDocConfiguration" id="@nikovirtala/projen-typedoc.TypeDocConfiguration"></a>

TypeDoc configuration.

> [https://typedoc.org/options/](https://typedoc.org/options/)

#### Initializer <a name="Initializer" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.Initializer"></a>

```typescript
import { TypeDocConfiguration } from '@nikovirtala/projen-typedoc'

const typeDocConfiguration: TypeDocConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.basePath">basePath</a></code> | <code>string</code> | Specify the base path for all urls. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.cacheBust">cacheBust</a></code> | <code>boolean</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.categorizeByGroup">categorizeByGroup</a></code> | <code>boolean</code> | Specify the categories that will be used to group reflections. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.cleanOutputDir">cleanOutputDir</a></code> | <code>boolean</code> | Prevent TypeDoc from cleaning the output directory specified with --out. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.commentStyle">commentStyle</a></code> | <code><a href="#@nikovirtala/projen-typedoc.CommentStyle">CommentStyle</a></code> | Specify the documentation mode TypeDoc should use. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.defaultCategory">defaultCategory</a></code> | <code>string</code> | Specify the default category for reflections without a category. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.defaultGroup">defaultGroup</a></code> | <code>string</code> | Specify the default group for reflections without a group. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.defaultVisibility">defaultVisibility</a></code> | <code><a href="#@nikovirtala/projen-typedoc.Visibility">Visibility</a></code> | Specify the default visibility for members without a visibility tag. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.disableGit">disableGit</a></code> | <code>boolean</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.disableSources">disableSources</a></code> | <code>boolean</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.entryPoints">entryPoints</a></code> | <code>string[]</code> | Specifies the entry points to be documented by TypeDoc. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.entryPointStrategy">entryPointStrategy</a></code> | <code><a href="#@nikovirtala/projen-typedoc.EntryPointStrategy">EntryPointStrategy</a></code> | Specifies the strategy to be used to convert entry points into documentation. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.exclude">exclude</a></code> | <code>string[]</code> | Define patterns to be excluded when expanding directories. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.excludeExternals">excludeExternals</a></code> | <code>boolean</code> | Prevent externally resolved symbols from being documented. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.excludeInternal">excludeInternal</a></code> | <code>boolean</code> | Prevent symbols that are not exported from being documented. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.excludePrivate">excludePrivate</a></code> | <code>boolean</code> | Prevent private members from being included in the generated documentation. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.excludeProtected">excludeProtected</a></code> | <code>boolean</code> | Prevent protected members from being included in the generated documentation. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.externalPattern">externalPattern</a></code> | <code>string[]</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.externalSymbolLinkMappings">externalSymbolLinkMappings</a></code> | <code>{[ key: string ]: {[ key: string ]: string}}</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.gitRemote">gitRemote</a></code> | <code>string</code> | Specify the git remote that should be used to link to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.gitRevision">gitRevision</a></code> | <code>string</code> | Specify the git revision that should be used to link to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.hideGenerator">hideGenerator</a></code> | <code>boolean</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.hideParameterTypesInTitle">hideParameterTypesInTitle</a></code> | <code>boolean</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.includes">includes</a></code> | <code>string</code> | Specify the location to look for included documents. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.intentionallyNotExported">intentionallyNotExported</a></code> | <code>string[]</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.json">json</a></code> | <code>string</code> | Specify the location the documentation should be written to. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.logLevel">logLevel</a></code> | <code><a href="#@nikovirtala/projen-typedoc.LogLevel">LogLevel</a></code> | Specify the logger that should be used. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.media">media</a></code> | <code>string</code> | Specify the location with media files that should be copied to the output directory. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.name">name</a></code> | <code>string</code> | Set the name of the project that will be used in the header of the template. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.out">out</a></code> | <code>string</code> | Specifies the output directory the documentation should be written to. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.packageJson">packageJson</a></code> | <code>string</code> | Specify the package.json file that should be used to determine the package name. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.readme">readme</a></code> | <code>string</code> | Specify the readme file that should be displayed on the index page. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.requiredToBeDocumented">requiredToBeDocumented</a></code> | <code>string[]</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.searchCategoryBoosts">searchCategoryBoosts</a></code> | <code>{[ key: string ]: number}</code> | Specify the search category boosts. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.searchGroupBoosts">searchGroupBoosts</a></code> | <code>{[ key: string ]: number}</code> | Specify the search group boosts. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.searchInComments">searchInComments</a></code> | <code>boolean</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.searchInDocuments">searchInDocuments</a></code> | <code>boolean</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.sort">sort</a></code> | <code>string[]</code> | Specify the sort strategy for documented values. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.sortEntryPoints">sortEntryPoints</a></code> | <code>boolean</code> | Specify the sort strategy for static and instance members. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.sourceUrlTemplate">sourceUrlTemplate</a></code> | <code>string</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.theme">theme</a></code> | <code>string</code> | Specify a theme name to use. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.treatValidationWarningsAsErrors">treatValidationWarningsAsErrors</a></code> | <code>boolean</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.treatWarningsAsErrors">treatWarningsAsErrors</a></code> | <code>boolean</code> | Specify the base URL for links to source files. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.tsBuildInfo">tsBuildInfo</a></code> | <code>string</code> | Specify the location and filename a .tsbuildinfo file should be written to. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.tsconfig">tsconfig</a></code> | <code>string</code> | Specify a TypeScript config file that should be used to load TypeScript configuration. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration.property.validation">validation</a></code> | <code><a href="#@nikovirtala/projen-typedoc.ValidationOptions">ValidationOptions</a></code> | Specify the base URL for links to source files. |

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

Specify the base path for all urls.

> [https://typedoc.org/options/output/#basepath](https://typedoc.org/options/output/#basepath)

---

##### `cacheBust`<sup>Optional</sup> <a name="cacheBust" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.cacheBust"></a>

```typescript
public readonly cacheBust: boolean;
```

- *Type:* boolean

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `categorizeByGroup`<sup>Optional</sup> <a name="categorizeByGroup" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.categorizeByGroup"></a>

```typescript
public readonly categorizeByGroup: boolean;
```

- *Type:* boolean

Specify the categories that will be used to group reflections.

> [https://typedoc.org/options/organization/#categorizebygroup](https://typedoc.org/options/organization/#categorizebygroup)

---

##### `cleanOutputDir`<sup>Optional</sup> <a name="cleanOutputDir" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.cleanOutputDir"></a>

```typescript
public readonly cleanOutputDir: boolean;
```

- *Type:* boolean

Prevent TypeDoc from cleaning the output directory specified with --out.

> [https://typedoc.org/options/output/#cleanoutputdir](https://typedoc.org/options/output/#cleanoutputdir)

---

##### `commentStyle`<sup>Optional</sup> <a name="commentStyle" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.commentStyle"></a>

```typescript
public readonly commentStyle: CommentStyle;
```

- *Type:* <a href="#@nikovirtala/projen-typedoc.CommentStyle">CommentStyle</a>

Specify the documentation mode TypeDoc should use.

> [https://typedoc.org/options/comments/#commentstyle](https://typedoc.org/options/comments/#commentstyle)

---

##### `defaultCategory`<sup>Optional</sup> <a name="defaultCategory" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.defaultCategory"></a>

```typescript
public readonly defaultCategory: string;
```

- *Type:* string

Specify the default category for reflections without a category.

> [https://typedoc.org/options/organization/#defaultcategory](https://typedoc.org/options/organization/#defaultcategory)

---

##### `defaultGroup`<sup>Optional</sup> <a name="defaultGroup" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.defaultGroup"></a>

```typescript
public readonly defaultGroup: string;
```

- *Type:* string

Specify the default group for reflections without a group.

> [https://typedoc.org/options/organization/#defaultgroup](https://typedoc.org/options/organization/#defaultgroup)

---

##### `defaultVisibility`<sup>Optional</sup> <a name="defaultVisibility" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.defaultVisibility"></a>

```typescript
public readonly defaultVisibility: Visibility;
```

- *Type:* <a href="#@nikovirtala/projen-typedoc.Visibility">Visibility</a>

Specify the default visibility for members without a visibility tag.

> [https://typedoc.org/options/comments/#defaultvisibility](https://typedoc.org/options/comments/#defaultvisibility)

---

##### `disableGit`<sup>Optional</sup> <a name="disableGit" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.disableGit"></a>

```typescript
public readonly disableGit: boolean;
```

- *Type:* boolean

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `disableSources`<sup>Optional</sup> <a name="disableSources" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.disableSources"></a>

```typescript
public readonly disableSources: boolean;
```

- *Type:* boolean

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `entryPoints`<sup>Optional</sup> <a name="entryPoints" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.entryPoints"></a>

```typescript
public readonly entryPoints: string[];
```

- *Type:* string[]

Specifies the entry points to be documented by TypeDoc.

> [https://typedoc.org/options/input/#entrypoints](https://typedoc.org/options/input/#entrypoints)

---

##### `entryPointStrategy`<sup>Optional</sup> <a name="entryPointStrategy" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.entryPointStrategy"></a>

```typescript
public readonly entryPointStrategy: EntryPointStrategy;
```

- *Type:* <a href="#@nikovirtala/projen-typedoc.EntryPointStrategy">EntryPointStrategy</a>

Specifies the strategy to be used to convert entry points into documentation.

> [https://typedoc.org/options/input/#entrypointstrategy](https://typedoc.org/options/input/#entrypointstrategy)

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

Define patterns to be excluded when expanding directories.

> [https://typedoc.org/options/input/#exclude](https://typedoc.org/options/input/#exclude)

---

##### `excludeExternals`<sup>Optional</sup> <a name="excludeExternals" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.excludeExternals"></a>

```typescript
public readonly excludeExternals: boolean;
```

- *Type:* boolean

Prevent externally resolved symbols from being documented.

> [https://typedoc.org/options/input/#excludeexternals](https://typedoc.org/options/input/#excludeexternals)

---

##### `excludeInternal`<sup>Optional</sup> <a name="excludeInternal" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.excludeInternal"></a>

```typescript
public readonly excludeInternal: boolean;
```

- *Type:* boolean

Prevent symbols that are not exported from being documented.

> [https://typedoc.org/options/input/#excludeinternal](https://typedoc.org/options/input/#excludeinternal)

---

##### `excludePrivate`<sup>Optional</sup> <a name="excludePrivate" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.excludePrivate"></a>

```typescript
public readonly excludePrivate: boolean;
```

- *Type:* boolean

Prevent private members from being included in the generated documentation.

> [https://typedoc.org/options/input/#excludeprivate](https://typedoc.org/options/input/#excludeprivate)

---

##### `excludeProtected`<sup>Optional</sup> <a name="excludeProtected" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.excludeProtected"></a>

```typescript
public readonly excludeProtected: boolean;
```

- *Type:* boolean

Prevent protected members from being included in the generated documentation.

> [https://typedoc.org/options/input/#excludeprotected](https://typedoc.org/options/input/#excludeprotected)

---

##### `externalPattern`<sup>Optional</sup> <a name="externalPattern" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.externalPattern"></a>

```typescript
public readonly externalPattern: string[];
```

- *Type:* string[]

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `externalSymbolLinkMappings`<sup>Optional</sup> <a name="externalSymbolLinkMappings" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.externalSymbolLinkMappings"></a>

```typescript
public readonly externalSymbolLinkMappings: {[ key: string ]: {[ key: string ]: string}};
```

- *Type:* {[ key: string ]: {[ key: string ]: string}}

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `gitRemote`<sup>Optional</sup> <a name="gitRemote" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.gitRemote"></a>

```typescript
public readonly gitRemote: string;
```

- *Type:* string

Specify the git remote that should be used to link to source files.

> [https://typedoc.org/options/comments/#gitremote](https://typedoc.org/options/comments/#gitremote)

---

##### `gitRevision`<sup>Optional</sup> <a name="gitRevision" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.gitRevision"></a>

```typescript
public readonly gitRevision: string;
```

- *Type:* string

Specify the git revision that should be used to link to source files.

> [https://typedoc.org/options/comments/#gitrevision](https://typedoc.org/options/comments/#gitrevision)

---

##### `hideGenerator`<sup>Optional</sup> <a name="hideGenerator" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.hideGenerator"></a>

```typescript
public readonly hideGenerator: boolean;
```

- *Type:* boolean

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `hideParameterTypesInTitle`<sup>Optional</sup> <a name="hideParameterTypesInTitle" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.hideParameterTypesInTitle"></a>

```typescript
public readonly hideParameterTypesInTitle: boolean;
```

- *Type:* boolean

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.includes"></a>

```typescript
public readonly includes: string;
```

- *Type:* string

Specify the location to look for included documents.

> [https://typedoc.org/options/output/#includes](https://typedoc.org/options/output/#includes)

---

##### `intentionallyNotExported`<sup>Optional</sup> <a name="intentionallyNotExported" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.intentionallyNotExported"></a>

```typescript
public readonly intentionallyNotExported: string[];
```

- *Type:* string[]

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `json`<sup>Optional</sup> <a name="json" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

Specify the location the documentation should be written to.

> [https://typedoc.org/options/output/#json](https://typedoc.org/options/output/#json)

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.logLevel"></a>

```typescript
public readonly logLevel: LogLevel;
```

- *Type:* <a href="#@nikovirtala/projen-typedoc.LogLevel">LogLevel</a>

Specify the logger that should be used.

> [https://typedoc.org/options/other/#loglevel](https://typedoc.org/options/other/#loglevel)

---

##### `media`<sup>Optional</sup> <a name="media" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.media"></a>

```typescript
public readonly media: string;
```

- *Type:* string

Specify the location with media files that should be copied to the output directory.

> [https://typedoc.org/options/output/#media](https://typedoc.org/options/output/#media)

---

##### `name`<sup>Optional</sup> <a name="name" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Set the name of the project that will be used in the header of the template.

> [https://typedoc.org/options/output/#name](https://typedoc.org/options/output/#name)

---

##### `out`<sup>Optional</sup> <a name="out" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.out"></a>

```typescript
public readonly out: string;
```

- *Type:* string

Specifies the output directory the documentation should be written to.

> [https://typedoc.org/options/output/#out](https://typedoc.org/options/output/#out)

---

##### `packageJson`<sup>Optional</sup> <a name="packageJson" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.packageJson"></a>

```typescript
public readonly packageJson: string;
```

- *Type:* string

Specify the package.json file that should be used to determine the package name.

> [https://typedoc.org/options/input/#packagejson](https://typedoc.org/options/input/#packagejson)

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.readme"></a>

```typescript
public readonly readme: string;
```

- *Type:* string

Specify the readme file that should be displayed on the index page.

> [https://typedoc.org/options/input/#readme](https://typedoc.org/options/input/#readme)

---

##### `requiredToBeDocumented`<sup>Optional</sup> <a name="requiredToBeDocumented" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.requiredToBeDocumented"></a>

```typescript
public readonly requiredToBeDocumented: string[];
```

- *Type:* string[]

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `searchCategoryBoosts`<sup>Optional</sup> <a name="searchCategoryBoosts" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.searchCategoryBoosts"></a>

```typescript
public readonly searchCategoryBoosts: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Specify the search category boosts.

> [https://typedoc.org/options/organization/#searchcategoryboosts](https://typedoc.org/options/organization/#searchcategoryboosts)

---

##### `searchGroupBoosts`<sup>Optional</sup> <a name="searchGroupBoosts" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.searchGroupBoosts"></a>

```typescript
public readonly searchGroupBoosts: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Specify the search group boosts.

> [https://typedoc.org/options/organization/#searchgroupboosts](https://typedoc.org/options/organization/#searchgroupboosts)

---

##### `searchInComments`<sup>Optional</sup> <a name="searchInComments" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.searchInComments"></a>

```typescript
public readonly searchInComments: boolean;
```

- *Type:* boolean

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `searchInDocuments`<sup>Optional</sup> <a name="searchInDocuments" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.searchInDocuments"></a>

```typescript
public readonly searchInDocuments: boolean;
```

- *Type:* boolean

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.sort"></a>

```typescript
public readonly sort: string[];
```

- *Type:* string[]

Specify the sort strategy for documented values.

> [https://typedoc.org/options/organization/#sort](https://typedoc.org/options/organization/#sort)

---

##### `sortEntryPoints`<sup>Optional</sup> <a name="sortEntryPoints" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.sortEntryPoints"></a>

```typescript
public readonly sortEntryPoints: boolean;
```

- *Type:* boolean

Specify the sort strategy for static and instance members.

> [https://typedoc.org/options/organization/#sortentrypoints](https://typedoc.org/options/organization/#sortentrypoints)

---

##### `sourceUrlTemplate`<sup>Optional</sup> <a name="sourceUrlTemplate" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.sourceUrlTemplate"></a>

```typescript
public readonly sourceUrlTemplate: string;
```

- *Type:* string

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

Specify a theme name to use.

> [https://typedoc.org/options/output/#theme](https://typedoc.org/options/output/#theme)

---

##### `treatValidationWarningsAsErrors`<sup>Optional</sup> <a name="treatValidationWarningsAsErrors" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.treatValidationWarningsAsErrors"></a>

```typescript
public readonly treatValidationWarningsAsErrors: boolean;
```

- *Type:* boolean

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `treatWarningsAsErrors`<sup>Optional</sup> <a name="treatWarningsAsErrors" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.treatWarningsAsErrors"></a>

```typescript
public readonly treatWarningsAsErrors: boolean;
```

- *Type:* boolean

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

##### `tsBuildInfo`<sup>Optional</sup> <a name="tsBuildInfo" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.tsBuildInfo"></a>

```typescript
public readonly tsBuildInfo: string;
```

- *Type:* string

Specify the location and filename a .tsbuildinfo file should be written to.

> [https://typedoc.org/options/input/#tsbuildinfo](https://typedoc.org/options/input/#tsbuildinfo)

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.tsconfig"></a>

```typescript
public readonly tsconfig: string;
```

- *Type:* string

Specify a TypeScript config file that should be used to load TypeScript configuration.

> [https://typedoc.org/options/input/#tsconfig](https://typedoc.org/options/input/#tsconfig)

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@nikovirtala/projen-typedoc.TypeDocConfiguration.property.validation"></a>

```typescript
public readonly validation: ValidationOptions;
```

- *Type:* <a href="#@nikovirtala/projen-typedoc.ValidationOptions">ValidationOptions</a>

Specify the base URL for links to source files.

> [https://typedoc.org/options/comments/#sourceurltemplate](https://typedoc.org/options/comments/#sourceurltemplate)

---

### TypeDocOptions <a name="TypeDocOptions" id="@nikovirtala/projen-typedoc.TypeDocOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-typedoc.TypeDocOptions.Initializer"></a>

```typescript
import { TypeDocOptions } from '@nikovirtala/projen-typedoc'

const typeDocOptions: TypeDocOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocOptions.property.typeDocConfig">typeDocConfig</a></code> | <code><a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration">TypeDocConfiguration</a></code> | Full TypeDoc configuration. |
| <code><a href="#@nikovirtala/projen-typedoc.TypeDocOptions.property.version">version</a></code> | <code>string</code> | Version of TypeDoc to use. |

---

##### `typeDocConfig`<sup>Optional</sup> <a name="typeDocConfig" id="@nikovirtala/projen-typedoc.TypeDocOptions.property.typeDocConfig"></a>

```typescript
public readonly typeDocConfig: TypeDocConfiguration;
```

- *Type:* <a href="#@nikovirtala/projen-typedoc.TypeDocConfiguration">TypeDocConfiguration</a>

Full TypeDoc configuration.

This configuration will be merged with the default configuration

---

##### `version`<sup>Optional</sup> <a name="version" id="@nikovirtala/projen-typedoc.TypeDocOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "^0.28"

Version of TypeDoc to use.

---

### ValidationOptions <a name="ValidationOptions" id="@nikovirtala/projen-typedoc.ValidationOptions"></a>

Validation options.

> [https://typedoc.org/options/validation/](https://typedoc.org/options/validation/)

#### Initializer <a name="Initializer" id="@nikovirtala/projen-typedoc.ValidationOptions.Initializer"></a>

```typescript
import { ValidationOptions } from '@nikovirtala/projen-typedoc'

const validationOptions: ValidationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.ValidationOptions.property.invalidLink">invalidLink</a></code> | <code>boolean</code> | If set, TypeDoc will produce warnings about \@link tags which will produce broken links. |
| <code><a href="#@nikovirtala/projen-typedoc.ValidationOptions.property.notDocumented">notDocumented</a></code> | <code>boolean</code> | If set, TypeDoc will produce warnings when an exported symbol is not documented. |
| <code><a href="#@nikovirtala/projen-typedoc.ValidationOptions.property.notExported">notExported</a></code> | <code>boolean</code> | If set, TypeDoc will produce warnings when a symbol is referenced by the documentation. |

---

##### `invalidLink`<sup>Optional</sup> <a name="invalidLink" id="@nikovirtala/projen-typedoc.ValidationOptions.property.invalidLink"></a>

```typescript
public readonly invalidLink: boolean;
```

- *Type:* boolean

If set, TypeDoc will produce warnings about \@link tags which will produce broken links.

---

##### `notDocumented`<sup>Optional</sup> <a name="notDocumented" id="@nikovirtala/projen-typedoc.ValidationOptions.property.notDocumented"></a>

```typescript
public readonly notDocumented: boolean;
```

- *Type:* boolean

If set, TypeDoc will produce warnings when an exported symbol is not documented.

---

##### `notExported`<sup>Optional</sup> <a name="notExported" id="@nikovirtala/projen-typedoc.ValidationOptions.property.notExported"></a>

```typescript
public readonly notExported: boolean;
```

- *Type:* boolean

If set, TypeDoc will produce warnings when a symbol is referenced by the documentation.

---



## Enums <a name="Enums" id="Enums"></a>

### CommentStyle <a name="CommentStyle" id="@nikovirtala/projen-typedoc.CommentStyle"></a>

Specifies the documentation mode TypeDoc should use.

> [https://typedoc.org/options/comments/#commentstyle](https://typedoc.org/options/comments/#commentstyle)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.CommentStyle.JSDOC">JSDOC</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.CommentStyle.BLOCK">BLOCK</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.CommentStyle.LINE">LINE</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.CommentStyle.ALL">ALL</a></code> | *No description.* |

---

##### `JSDOC` <a name="JSDOC" id="@nikovirtala/projen-typedoc.CommentStyle.JSDOC"></a>

---


##### `BLOCK` <a name="BLOCK" id="@nikovirtala/projen-typedoc.CommentStyle.BLOCK"></a>

---


##### `LINE` <a name="LINE" id="@nikovirtala/projen-typedoc.CommentStyle.LINE"></a>

---


##### `ALL` <a name="ALL" id="@nikovirtala/projen-typedoc.CommentStyle.ALL"></a>

---


### EntryPointStrategy <a name="EntryPointStrategy" id="@nikovirtala/projen-typedoc.EntryPointStrategy"></a>

Specifies the strategy to be used to convert entry points into documentation.

> [https://typedoc.org/options/input/#entrypointstrategy](https://typedoc.org/options/input/#entrypointstrategy)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.EntryPointStrategy.RESOLVE">RESOLVE</a></code> | Expects all entry points to be contained within a single package. |
| <code><a href="#@nikovirtala/projen-typedoc.EntryPointStrategy.EXPAND">EXPAND</a></code> | Expects all entry points to be top-level directories. |
| <code><a href="#@nikovirtala/projen-typedoc.EntryPointStrategy.PACKAGES">PACKAGES</a></code> | Expects all entry points to be individual files. |
| <code><a href="#@nikovirtala/projen-typedoc.EntryPointStrategy.MERGE">MERGE</a></code> | Merges multiple projects into a single documentation site. |

---

##### `RESOLVE` <a name="RESOLVE" id="@nikovirtala/projen-typedoc.EntryPointStrategy.RESOLVE"></a>

Expects all entry points to be contained within a single package.

---


##### `EXPAND` <a name="EXPAND" id="@nikovirtala/projen-typedoc.EntryPointStrategy.EXPAND"></a>

Expects all entry points to be top-level directories.

---


##### `PACKAGES` <a name="PACKAGES" id="@nikovirtala/projen-typedoc.EntryPointStrategy.PACKAGES"></a>

Expects all entry points to be individual files.

---


##### `MERGE` <a name="MERGE" id="@nikovirtala/projen-typedoc.EntryPointStrategy.MERGE"></a>

Merges multiple projects into a single documentation site.

---


### LogLevel <a name="LogLevel" id="@nikovirtala/projen-typedoc.LogLevel"></a>

Specifies the logger that should be used.

> [https://typedoc.org/options/other/#loglevel](https://typedoc.org/options/other/#loglevel)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.LogLevel.VERBOSE">VERBOSE</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.LogLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.LogLevel.WARN">WARN</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.LogLevel.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.LogLevel.NONE">NONE</a></code> | *No description.* |

---

##### `VERBOSE` <a name="VERBOSE" id="@nikovirtala/projen-typedoc.LogLevel.VERBOSE"></a>

---


##### `INFO` <a name="INFO" id="@nikovirtala/projen-typedoc.LogLevel.INFO"></a>

---


##### `WARN` <a name="WARN" id="@nikovirtala/projen-typedoc.LogLevel.WARN"></a>

---


##### `ERROR` <a name="ERROR" id="@nikovirtala/projen-typedoc.LogLevel.ERROR"></a>

---


##### `NONE` <a name="NONE" id="@nikovirtala/projen-typedoc.LogLevel.NONE"></a>

---


### Visibility <a name="Visibility" id="@nikovirtala/projen-typedoc.Visibility"></a>

Specifies the default visibility for members without a visibility tag.

> [https://typedoc.org/options/comments/#defaultvisibility](https://typedoc.org/options/comments/#defaultvisibility)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-typedoc.Visibility.PUBLIC">PUBLIC</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.Visibility.PROTECTED">PROTECTED</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-typedoc.Visibility.PRIVATE">PRIVATE</a></code> | *No description.* |

---

##### `PUBLIC` <a name="PUBLIC" id="@nikovirtala/projen-typedoc.Visibility.PUBLIC"></a>

---


##### `PROTECTED` <a name="PROTECTED" id="@nikovirtala/projen-typedoc.Visibility.PROTECTED"></a>

---


##### `PRIVATE` <a name="PRIVATE" id="@nikovirtala/projen-typedoc.Visibility.PRIVATE"></a>

---

