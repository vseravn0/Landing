const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { template } = require("lodash");

module.exports = {
  context: path.resolve(__dirname),
  mode: "development",

  entry: {
    main: "./src/js/main.js",
  },
  output: {
    filename: "./src/js/[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 4200,
    open: true,
    compress: true,
  },
  // devtool: "development" ? "source-map" : false,
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: "production"
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: path.resolve(__dirname, "dist/src/assets/images"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
      },
      {
        test: /\.png|jpg|svg|gif$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        }
      },
      {
        test: /\.ttf|woff|woff2|eot$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,     
        use: {
            loader:'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {useBuiltIns: 'usage', corejs: 3}]
                ]
            }
        }
    }
    ],
  },
};
