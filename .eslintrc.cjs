module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    semi: [2, 'always'], // Enforce semicolons at the end of statements
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-trailing-spaces': 2, // Disallow trailing whitespace at the end of lines
    'eol-last': 2, // Enforce a newline at the end of files
    'no-multiple-empty-lines': [2, { max: 1 }], // Disallow multiple empty lines
    'brace-style': [2, '1tbs'], // Enforce one true brace style for block statements
    'comma-dangle': [2, 'always-multiline'], // Enforce trailing commas in multiline object literals
    'no-console': 1, // Warn when console statements are used
    curly: [2, 'multi-line'], // Require curly braces for all control statements
    eqeqeq: [2, 'always'], // Enforce the use of === and !==
    'no-var': 2, // Disallow the use of var, use let or const instead
    'prefer-const': 2, // Prefer const over let for variables that are never reassigned
    'arrow-spacing': [2, { before: true, after: true }], // Enforce consistent spacing before and after the arrow in arrow functions
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Disallow unused variables
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    'key-spacing': [2, { beforeColon: false, afterColon: true }], // Enforce consistent spacing between keys and values in object literals
    'keyword-spacing': [2, { before: true, after: true }], // Enforce consistent spacing before and after keywords
    'space-infix-ops': 2, // Require spaces around infix operators
    'no-mixed-spaces-and-tabs': 2, // Disallow mixed spaces and tabs for indentation
    'space-before-blocks': [2, 'always'], // Enforce a space before blocks
    'spaced-comment': [2, 'always'], // Enforce consistent spacing after the // or /* in a comment
    'space-in-parens': [2, 'never'], // Disallow spaces inside parentheses
    'object-curly-spacing': [2, 'always'], // Enforce consistent spacing inside braces of object literals
    'array-bracket-spacing': [2, 'never'], // Disallow spaces inside brackets of array literals
    'comma-spacing': [2, { before: false, after: true }], // Enforce consistent spacing before and after commas
    'func-call-spacing': [2, 'never'], // Disallow spacing between function identifiers and their invocations
    'no-multi-spaces': 2, // Disallow multiple spaces
    'block-spacing': [2, 'always'], // Enforce consistent spacing inside single-line blocks
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }], // Enforce newlines between chained method calls up to a specified depth
    'padded-blocks': [2, 'never'], // Disallow padding within blocks
    'template-curly-spacing': [2, 'never'], // Disallow spaces inside curly braces in template strings
    '@typescript-eslint/no-explicit-any': 'off',

    // Prefer destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: true, object: true },
        AssignmentExpression: { array: true, object: true },
      },
      { enforceForRenamedProperties: false },
    ],
    'object-shorthand': ['error', 'always'], // Add the object-shorthand rule

    // TSX
    'react/no-unescaped-entities': 'error', // Enforce single quotes .tsx
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
