const path = require("path");
const webpack = require("webpack");

const { plugins, paths, rules, resolve } = require("./utils");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: ["@babel/polyfill", paths.appIndexJs],
  },
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    publicPath: "/",
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },

  resolve,

  devServer: {
    port: parseInt(process.env.PORT, 10) || 3000,
    static: {
      directory: paths.appPublic,
    },
    hot: true,
    server: "https",
  },

  module: {
    rules,
  },

  plugins: [...plugins, new webpack.HotModuleReplacementPlugin()],
};
