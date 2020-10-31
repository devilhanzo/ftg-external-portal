const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve('./src/js/entry.js'), 
    output: {
      path: path.resolve('./static/js'), 
      filename: 'server.build.js', 
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [ 
        {
          test: /\.js/,
          exclude: /node_module/,
          loaders: [
            'babel-loader',
          ],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    target:'node', 
  }