module.exports = {
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'none',
  importOrder: ['^[./]'],
  importOrderSeparation: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')]
};
