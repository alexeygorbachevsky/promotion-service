const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const paths = require("./paths");

const isProd = process.env.NODE_ENV === "production";

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  }),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "../../../public/favicon.ico"),
        to: path.resolve(__dirname, "../../../build"),
      },
    ],
  }),
  new MiniCssExtractPlugin({
    filename: isProd ? "[name].[fullhash:8].css" : "[name].css",
  }),
  new ESLintPlugin({
    extensions: ["js", "ts", "jsx", "tsx"],
    failOnWarning: isProd,
    emitWarning: isProd,
  }),
];

module.exports = {
  plugins,
};
