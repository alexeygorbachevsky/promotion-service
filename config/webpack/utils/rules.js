const { cssLoaders } = require("./loaders");

const rules = [
  {
    test: /\.css$/,
    use: cssLoaders(),
  },
  {
    test: /\.(png|jpg|gif)$/,
    type: "asset/resource",
    generator: {
      filename: "static/assets/images/[name][ext]",
    },
  },
  {
    test: /\.(ttf|woff|woff2|eot)$/,
    type: "asset/resource",
    generator: {
      filename: "static/assets/fonts/[name][ext]",
    },
  },
  // inline svg files
  {
    test: [/\.svg$/],
    use: [
      {
        loader: "babel-loader",
      },
      {
        loader: require.resolve("react-svg-loader"),
        options: {
          jsx: true,
          svgo: {
            plugins: [
              {
                removeViewBox: false,
              },
            ],
          },
        },
      },
    ],
  },

  {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      cacheCompression: false,
      compact: true,
    },
  },
];

module.exports = {
  rules,
};
