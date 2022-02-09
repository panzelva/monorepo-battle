import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  getWorkspaceLayout,
  Tree,
} from '@nrwl/devkit';

export default async function (tree: Tree, schema: any) {
  const libraryName = schema.name;
  const layout = getWorkspaceLayout(tree);
  const libraryPath = joinPathFragments(layout.libsDir, libraryName);

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    libraryPath,
    schema
  );

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
