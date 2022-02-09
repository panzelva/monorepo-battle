module.exports = {
  plugins: ["react-hooks"],
  extends: ["@nx-example/eslint-config-nx-example", "plugin:react/recommended"],
  rules: {
    "prefer-rest-params": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": ["off"],
    "react/self-closing-comp": ["warn"],
    "react/jsx-fragments": ["error", "syntax"],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: { react: { version: "detect" } },
  // parserOptions: {
  //   // https://github.com/typescript-eslint/typescript-eslint/issues/251
  //   project: path.resolve(__dirname, "./tsconfig.json"),
  //   tsconfigRootDir: __dirname,
  //   warnOnUnsupportedTypeScriptVersion: false,
  // },
};
