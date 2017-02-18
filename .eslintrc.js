var path = require('path');

module.exports = {
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "func-names": 0,
    "eol-last": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-absolute-path": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-no-bind": [ 2, {
      "ignoreRefs": false,
      "allowArrowFunctions": true,
      "allowBind": true
    }],
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "flowtype",
    "flowtype-errors"
  ]
};