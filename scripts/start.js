const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const fs = require("fs");
const {
  choosePort,
  createCompiler,
  prepareUrls,
} = require("react-dev-utils/WebpackDevServerUtils");
const chalk = require("react-dev-utils/chalk");
const openBrowser = require("react-dev-utils/openBrowser");

const config = require("../config/webpack/webpack.config.dev");
const { paths } = require("../config/webpack/utils");

const useYarn = fs.existsSync(paths.yarnLockFile);

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

choosePort(HOST, DEFAULT_PORT)
  .then(port => {
    if (!port) {
      return;
    }

    const protocol = process.env.HTTPS === "true" ? "https" : "http";
    // eslint-disable-next-line import/no-dynamic-require
    const appName = require(paths.appPackageJson).name;
    const urls = prepareUrls(protocol, HOST, port);
    const devSocket = {
      warnings: warnings =>
        // eslint-disable-next-line no-use-before-define
        devServer.sockWrite(devServer.sockets, "warnings", warnings),
      errors: errors =>
        // eslint-disable-next-line no-use-before-define
        devServer.sockWrite(devServer.sockets, "errors", errors),
    };

    const compiler = createCompiler({
      webpack,
      config,
      devSocket,
      appName,
      urls,
      useYarn,
    });

    const devServerConfig = {
      host: HOST,
      port: DEFAULT_PORT,
      hot: true,
      liveReload: false,
      server: "https",
    };

    const devServer = new WebpackDevServer(devServerConfig, compiler);

    devServer.listen(port, HOST, err => {
      if (err) {
        // eslint-disable-next-line no-console
        return console.log(err);
      }

      // eslint-disable-next-line no-console
      console.log(chalk.cyan("Starting the development server...\n"));
      openBrowser(urls.localUrlForBrowser);
    });
  })
  .catch(err => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    process.exit(1);
  });
