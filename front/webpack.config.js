module.exports = {
    mode: 'production',
    entry: './scripts/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
  