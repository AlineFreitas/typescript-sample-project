module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', './src/**/*.js'],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ]
}
