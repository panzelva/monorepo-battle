module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '3.20.3' }],
      ['@babel/preset-react', {}],
      ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
    ],
  };
};
