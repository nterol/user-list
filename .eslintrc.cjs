module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins:["prettier"],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "import"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    // apply only to typescript files
    {
      files: [
        "**/*.ts",
        "**/*.tsx"
      ],
      rules: {
        "import/order": [
          "error",
          {
            "newlines-between": "always",
            "groups": [
              "builtin", // Built-in types are first
              "external",
              "internal",
              "parent",
              "sibling"
            ],
            "alphabetize": {
              "order": "asc",
              "caseInsensitive": false
            },
            "warnOnUnassignedImports": false
          }
        ]
      }
    }
  ]
}
