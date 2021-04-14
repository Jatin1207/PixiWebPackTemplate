const path = require('path');
const distPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
var glob = require("glob");
module.exports = {
  entry: glob.sync('./src/**/*.ts'),
  //entry: './src/controller/game.js',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: 'file-loader'
      }

    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "resource/images", to: "images" },
        {from : "resource/sounds", to : "sounds" }
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  output: {
    filename: 'js/main.js',
    path: distPath
  },
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 9000
  }
};