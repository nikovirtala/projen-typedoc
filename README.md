# projen-typedoc

TypeDoc component for projen projects.

## Installation

```bash
npm install @nikovirtala/projen-typedoc
```

## Usage

Add the TypeDoc component to your projen project:

```typescript
import { TypeDoc } from "@nikovirtala/projen-typedoc";
import { javascript } from "projen";

const project = new javascript.NodeProject({
  name: "my-project",
  defaultReleaseBranch: "main",
});

new TypeDoc(project);

project.synth();
```

## Default Configuration

The component uses the following default configuration:

- `entryPointStrategy`: `expand` - Expects all entry points to be top-level directories
- `out`: `docs/api` - Output directory for generated documentation
- `exclude`: `["**/*.test.ts"]` - Excludes test files from documentation
- `excludePrivate`: `true` - Excludes private members from documentation
- `disableSource`: `true` - Disable links to source (to ensure deterministic build)

## Configuration

Customize TypeDoc configuration:

```typescript
import { EntryPointStrategy, TypeDoc } from "@nikovirtala/projen-typedoc";
import { javascript } from "projen";

const project = new javascript.NodeProject({
  name: "my-project",
  defaultReleaseBranch: "main",
});

new TypeDoc(project, {
  version: "^0.28",
  typeDocConfig: {
    entryPointStrategy: EntryPointStrategy.EXPAND,
    out: "docs/api",
    exclude: ["**/*.test.ts"],
    excludePrivate: true,
    name: "My Project",
    theme: "default",
  },
});

project.synth();
```

## Features

- Automatically installs TypeDoc as a dev dependency
- Creates `typedoc.jsonc` configuration file
- Adds `typedoc` task to generate documentation
- Supports all TypeDoc configuration options

## Tasks

The component creates the following task:

- `typedoc` - Generate TypeDoc documentation

## License

MIT
