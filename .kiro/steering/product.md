# Product Overview

This is a TypeDoc component for projen projects. It provides a reusable component that automatically configures TypeDoc documentation generation for Node.js projects managed by projen.

## Purpose

Simplifies adding TypeDoc documentation to projen projects by:
- Installing TypeDoc as a dev dependency
- Creating and managing `typedoc.jsonc` configuration
- Adding a `typedoc` task to generate documentation
- Providing sensible defaults while allowing full customization

## Key Features

- Automatic TypeDoc setup with zero configuration
- Supports all TypeDoc configuration options
- Default configuration excludes test files and private members
- Generates documentation to `docs/api` by default
- Integrates with projen's task system
