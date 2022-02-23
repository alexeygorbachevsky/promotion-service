const path = require("path");

const { plugins, paths, rules, resolve } = require("./utils");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: ["@babel/polyfill", paths.appIndexJs],
  },
  output: {
    path: paths.appBuild,
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: "static/js/[name].js",
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: "static/js/[name].chunk.js",
    publicPath: "/",
    // Point sourcemap entries to original disk location (format as URL on Windows)
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
    hot: true,
    server: "https",
  },

  module: {
    rules,
  },

  plugins,
};
