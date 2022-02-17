const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssLoaders = loader => {
  const loaders = [
    {
      // After all CSS loaders we use plugin to do his work.
      // It gets all transformed CSS and extracts it into separate
      // single bundled file
      loader: MiniCssExtractPlugin.loader,
    },
    {
      // This loader resolves url() and @imports inside CSS
      loader: "css-loader",
    },
    {
      // Apply postCSS fixes like autoprefixer and minifying
      loader: "postcss-loader",
    },
  ];

  if (loader) {
    loaders.push(
      //  First, we add sass loader
      loader,
    );
  }

  return loaders;
};

module.exports = {
  cssLoaders,
};
