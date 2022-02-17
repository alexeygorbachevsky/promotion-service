const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const prodWebpack = require("./webpack.config.prod");

module.exports = {
  ...prodWebpack,
  plugins: [...prodWebpack.plugins, new BundleAnalyzerPlugin()],
};
