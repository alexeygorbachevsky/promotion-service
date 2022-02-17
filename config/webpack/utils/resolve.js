const paths = require("./paths");
const fs = require("fs");
const path = require("path");

// Resolving modules supported according to `NODE_PATH`.
// This lets to use absolute paths in imports inside large monorepos:
// https://github.com/facebookincubator/create-react-app/issues/253.
// It works similar to `NODE_PATH` in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
// Note that unlike in Node, only *relative* paths from `NODE_PATH` are honored.
// Otherwise, have risk importing Node.js core modules into an app instead of Webpack shims.
// https://github.com/facebookincubator/create-react-app/issues/1023#issuecomment-265344421
// this also is being resolved to make sure all tools using them work consistently.
const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || "")
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter);

const resolve = {
  extensions: [".js", ".json", ".jsx", ".tsx", ".ts", ".md", ".png"],

  // This allows to set a fallback for where Webpack should look for modules.
  // These paths were placed second because we want `node_modules` to "win"
  // If there are any conflicts. This matches Node resolution mechanism.
  // https://github.com/facebook/create-react-app/issues/253
  modules: [
    "node_modules",
    paths.appNodeModules,
    // custom resolve paths
    paths.customDirSrc,
    paths.customDirWeb,
  ].concat(
    // It is guaranteed to exist because it tweaked above
    process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
  ),
};

module.exports = resolve;
