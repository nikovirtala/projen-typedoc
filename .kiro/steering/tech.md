# Technology Stack

## ⚠️ Projen-Managed Project

This project is **entirely managed by projen**. Key implications:

- **DO NOT** manually edit generated files (package.json, tsconfig.json, etc.)
- **ALL** configuration changes must be made in `.projenrc.ts`
- After modifying `.projenrc.ts`, run `npx projen` to regenerate files
- Dependencies, scripts, and tooling are defined in `.projenrc.ts`, not package.json

## Build System

- **projen**: Project configuration and build orchestration
- **JSII**: Enables multi-language support for the component
- **pnpm**: Package manager (v10, hoisted node-linker)
- **TypeScript**: v5.9.3

## Core Dependencies

- `projen`: ^0.98.28 (peer dependency and runtime dependency)
- `constructs`: ^10.4.3 (peer dependency)

## Development Tools

- **Biome**: Linting and formatting (replaces ESLint/Prettier)
  - 4 space indentation
  - 120 character line width
  - Double quotes for JavaScript/TypeScript
- **Vitest**: Testing framework (v4) with coverage via v8
- **TypeDoc**: v0.28 for API documentation generation
- **mise**: Node.js version management (22.21.1)

## Common Commands

### Development
- `pnpm projen` - Synthesize project configuration
- `pnpm build` - Compile TypeScript and run tests
- `pnpm compile` - Compile TypeScript only
- `pnpm test` - Run tests with Vitest
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:update` - Update test snapshots

### Code Quality
- `pnpm biome` - Run Biome linter and formatter
- `pnpm typedoc` - Generate API documentation

### Release
- `pnpm release` - Create a new release
- `pnpm package` - Build distribution packages

## Node.js Version

Minimum: 22.21.1 (managed via mise.toml)
