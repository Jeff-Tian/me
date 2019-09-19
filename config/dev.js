module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  weapp: {},
  h5: {
    entry: {
      home: ["./src/pages/index/index.tsx"],
      callback: ["./src/pages/callback/citi.tsx"]
    }
  }
};
