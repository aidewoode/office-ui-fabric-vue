module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "eqeqeq": "off",
    "no-new": "off",
    "comma-dangle": "off",
    "import/first": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "arrow-body-style": "off",
    "no-useless-escape": "off"
  },
  "plugins": [
    "import",
    "html"
  ],
  "globals": {
    "fabric": true
  }
};
