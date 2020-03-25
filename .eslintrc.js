// module.exports = {
//   extends: ["./config/eslint.js", "airbnb", "plugin:flowtype/recommended"],
//   plugins: ["flowtype", "mocha"],
//   rules: {
//     "space-before-function-paren": "off",
//     "comma-dangle": "off",
//     "default-case": "off",
//     "global-require": "off",
//     camelcase: "off",
//     "arrow-body-style": "off",
//     "arrow-parens": "off",
//     "max-len": "off",

//     "no-plusplus": "off",
//     "no-unused-expressions": "off",
//     "no-underscore-dangle": "off",
//     "no-duplicate-imports": "off",
//     "no-prototype-builtins": "off",

//     "import/no-dynamic-require": "off",
//     "import/first": "off",
//     "import/no-extraneous-dependencies": "off",
//     "import/no-unresolved": "off",
//     "import/no-duplicates": "error",
//     "import/extensions": "off",

//     "react/require-default-props": "off",
//     "react/forbid-prop-types": "warn",

//     // Until this is fixed (child props in objects stop erroring)
//     // this is turned off.
//     "react/no-unused-prop-types": "off",

//     "react/jsx-filename-extension": "off",
//     "react/jsx-sort-props": "off",
//     "react/sort-comp": [
//       "error",
//       {
//         order: [
//           "type-annotations",
//           "static-methods",
//           "lifecycle",
//           "/^on.+$/",
//           "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
//           "everything-else",
//           "/^render.+$/",
//           "render"
//         ]
//       }
//     ],

//     "mocha/no-exclusive-tests": "error",

//     "jsx-a11y/no-static-element-interactions": "warn"
//   },
//   settings: {
//     "import/resolver": "webpack"
//   },
//   globals: {
//     before: true,
//     after: true,
//     beforeEach: true,
//     afterEach: true,
//     describe: true,
//     it: true,
//     context: true,
//     expect: true,
//     sinon: true,
//     xit: true,
//     storiesOf: true,
//     App: true,
//     __webpack_public_path__: true
//   }
// };
