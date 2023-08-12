module.exports = {
  ignorePatterns: ['tailwind.config.js', '.eslintrc.js'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'airbnb-typescript',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    'react/display-name': 'off',
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    camelcase: [
      2,
      {
        properties: 'never',
      },
    ],
    'consistent-return': 0,
    'array-callback-return': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'no-undef': 0,
    'no-param-reassign': 0,
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Packages. `react` related packages come first.
            '^react',
            '^@?\\w',
            // Side effect imports.
            '^\\u0000',
            // Internal packages.
            '^(api|components|constant|content|controller|pages|reduxStore|service|utils|scenes)(/.*|$)',
            // Internal packages.
            '^(fonts|images|styles)(/.*|$)',
            // Style imports.
            '^.+\\.s?css$',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
  },
};
