const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve('./src/index.js'), 
    output: {
      path: path.resolve(__dirname, 'static/'), 
      filename: './js/server.build.js', 
    },
    plugins: [],
    module: {
      rules: [ 
        {
          test: /\.js/,
          exclude: /node_module/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader']
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        }
      ],
    },
    target:'node', 
  }