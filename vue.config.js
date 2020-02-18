const config = require("./src/config");

module.exports = {
  productionSourceMap: false,
  publicPath: config.publicPath,
  devServer: {
    port: config.port,
    proxy: {
      "/testApi": {
        target: config.apiAddr,
        changeOrigin: true,
        pathRewrite: {
          "^/testApi": ""
        }
      }
    }
  }
};
