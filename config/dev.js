module.exports = {
  env: {
    NODE_ENV: '"development"',
    publicPath: '"/"'
  },
  defineConstants: {},
  weapp: {},
  h5: {
    entry: {
      home: [
        "webpack-dev-server/client?http://localhost:10086",
        "webpack/hot/dev-server"
      ],
      callback: [
        "webpack-dev-server/client?http://localhost:10086",
        "webpack/hot/dev-server"
      ]
    }
  }
};
