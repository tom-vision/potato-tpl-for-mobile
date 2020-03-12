const configs = require("./src/config");

module.exports = {
  productionSourceMap: false,
  publicPath: configs.publicPath,
  devServer: {
    port: configs.port,
    proxy: {
      "/testApi": {
        target: configs.apiAddr,
        changeOrigin: true,
        pathRewrite: {
          "^/testApi": ""
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = configs.project;
      return args;
    });
  }
};
