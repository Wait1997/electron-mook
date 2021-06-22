const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    __dirname: false
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'unicorn', 'promise', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      },
      typescript: {}
    }
  },
  rules: {
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
    'import/prefer-default-export': OFF,
    'import/no-unresolved': ERROR,
    'import/no-dynamic-require': OFF,

    'unicorn/better-regex': ERROR,
    'unicorn/prevent-abbreviations': OFF,
    'unicorn/prefer-node-protocol': OFF,
    'unicorn/filename-case': [
      ERROR,
      {
        cases: {
          // 中划线
          kebabCase: true,
          // 小驼峰
          camelCase: true,
          // 下划线
          snakeCase: false,
          // 大驼峰
          pascalCase: true
        }
      }
    ],
    'unicorn/no-array-instanceof': WARN,
    'unicorn/no-for-loop': WARN,
    'unicorn/prefer-add-event-listener': [
      ERROR,
      {
        excludedPackages: ['koa', 'sax']
      }
    ],
    'unicorn/prefer-query-selector': ERROR,
    'unicorn/no-null': OFF,
    'unicorn/no-array-reduce': OFF,
    'unicorn/import-style': OFF,
    'unicorn/prefer-module': OFF,
    'unicorn/numeric-separators-style': OFF,
    'unicorn/consistent-function-scoping': OFF,

    'promise/always-return': OFF,
    'promise/catch-or-return': OFF,
    'promise/no-nesting': OFF,

    '@typescript-eslint/no-useless-constructor': ERROR,
    '@typescript-eslint/no-empty-function': WARN,
    '@typescript-eslint/no-var-requires': OFF, // 关闭 require() 引入报错
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/no-use-before-define': ERROR, // 禁止定义前使用
    '@typescript-eslint/no-unused-vars': WARN,
    'no-unused-vars': OFF,

    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-indent': [ERROR, 2],
    'react/jsx-one-expression-per-line': OFF,
    'react/destructuring-assignment': OFF,
    'react/state-in-constructor': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/prop-types': OFF,
    'react/require-default-props': OFF,
    'react/no-unused-prop-types': OFF,
    'react/display-name': OFF,

    'jsx-a11y/click-events-have-key-events': OFF,
    'jsx-a11y/no-noninteractive-element-interactions': OFF,
    'jsx-a11y/no-static-element-interactions': OFF,

    'prettier/prettier': ['error', { arrowParens: 'always' }],

    'lines-between-class-members': [ERROR, 'always'], // 要求或禁止类成员之间出现空行
    'linebreak-style': [ERROR, 'unix'], // 强制使用一致的换行风格
    quotes: [ERROR, 'single'], // 强制使用单引号
    semi: [ERROR, 'never'],
    'no-unused-expressions': OFF,
    'no-plusplus': OFF,
    'no-console': WARN,
    'no-param-reassign': OFF,
    'class-methods-use-this': ERROR,
    'jsx-quotes': [ERROR, 'prefer-single'],
    'global-require': OFF, // 要求 require() 出现在顶层模块作用域中
    'no-use-before-define': OFF, // 禁止在变量定义之前使用它们
    'no-restricted-syntax': OFF, // 禁用特定的语法
    'no-var': WARN,
    'no-continue': OFF,
    'no-shadow': OFF
  }
}
