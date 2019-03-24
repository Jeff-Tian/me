module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  weapp: {},
  h5: {
    publicPath: new URL(require('../package.json').homepage).pathname
  }
}
