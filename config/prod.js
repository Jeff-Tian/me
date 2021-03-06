let url = new URL(require("../package.json").homepage);

module.exports = {
  env: {
    NODE_ENV: '"production"',
    publicPath: JSON.stringify(url.pathname)
  },
  defineConstants: {},
  weapp: {},
  h5: {
    publicPath: url.pathname,
    router: {
      basename: url.pathname
    },
    entry: {},
    enableSourceMap: false
  }
};
