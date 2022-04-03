module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-optional-chaining",
    "syntax-dynamic-import",
    "babel-plugin-styled-components",
    "lodash",
  ],
};
