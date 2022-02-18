# Problems

### Nested TS export mapping

Once [this issue](https://github.com/microsoft/TypeScript/issues/33079) is resolved, add `exports` block to `package.json`:

```json
{
  "exports": {
    // this is new syntax for `main`, `module` and `types` fields
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    },
    // this will enable us to import from deep folder structure
    "./*": {
      "types": "./dist/*.d.ts",
      "import": "./dist/*.mjs",
      "require": "./dist/*.cjs"
    }
  },
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts"
}
```

`tsup.config.ts` also needs to be updated.
