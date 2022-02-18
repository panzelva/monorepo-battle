import { Options } from 'tsup';
const outDir = 'dist';

// import path from 'path';
// const cache = new Map();

// const resolvePathAlias = {
//   name: 'resolve-path-alias',
//   setup(build: any) {
//     build.onEnd((result: any) => {
//       result.outputFiles = result.outputFiles.map((args: any) => {
//         let alias = cache.get(args.path);
//         if (!alias) {
//           alias = path.relative(path.dirname(args.path), outDir) || '.';
//           cache.set(args.path, alias);
//         }
//         return {
//           ...args,
//           text: args.text.replace(/[require\(|from ]['|"]@\//gm, (s: string) =>
//             s.replace('@/', `${alias}/`)
//           ),
//         };
//       });
//     });
//   },
// };

const opts: Options = {
  // TODO: enable this once https://github.com/microsoft/TypeScript/issues/33079 is resolved
  // entryPoints: ['src/**/*.ts', 'src/**/*.tsx'],
  // esbuildPlugins: [resolvePathAlias],
  entryPoints: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  external: ['react'],
  inject: ['react-shim.ts'],
  splitting: true,
  clean: true,
  dts: true,
  outDir,
};

module.exports = opts;
