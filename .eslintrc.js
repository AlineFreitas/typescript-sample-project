module.exports = {
  extends: 'standard-with-typescript',
  include: [
    'src/**/*.ts',
    'src/**/*.js'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
