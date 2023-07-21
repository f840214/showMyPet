const path = require('path');

module.exports = {
  entry: './src/main.js', // Vue應用程式的進入點
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
};
