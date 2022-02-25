const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const { plugins, paths, rules, resolve } = require("./utils");

module.exports = {
  mode: "production",
  devtool: "nosources-source-map",
  bail: true,
  entry: {
    main: ["@babel/polyfill", paths.appIndexJs],
  },
  output: {
    path: paths.appBuild,
    filename: "static/js/[name].[fullhash:8].js",
    chunkFilename: "static/js/[name].[fullhash:8].chunk.js",
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          safari10: true,
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },

  resolve,

  module: {
    rules,
  },

  plugins,

  performance: {
    hints: "error",
    maxAssetSize: 1500000,
    maxEntrypointSize: 1500000,
  },
};
