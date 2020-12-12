const path = require('path');
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  mode: 'development',
  //mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devServer: {
    index: 'default.html',
    contentBase: path.join(__dirname, "."),
    compress: true,
    port: 80
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ]
  }
};
