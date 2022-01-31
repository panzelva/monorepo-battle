export default function (plop) {
  plop.setHelper('lowerCase', (txt) => new String(txt).toLowerCase());

  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'libs/{{lowerCase name}}',
        base: 'templates/component',
        templateFiles: 'templates/component/**',
      },
    ],
  });
}
