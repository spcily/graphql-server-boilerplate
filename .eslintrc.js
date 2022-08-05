module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
  ],
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
