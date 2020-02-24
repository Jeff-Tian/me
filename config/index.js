const config = {
  projectName: "me",
  date: "2019-3-2",
  designWidth: 750,
  deviceRatio: {
    "640": 2.34 / 2,
    "750": 1,
    "828": 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: "dist",
  babel: {
    sourceMap: true,
    presets: [["env", { modules: false }]],
    plugins: [
      "transform-decorators-legacy",
      "transform-class-properties",
      "transform-object-rest-spread",
      [
        "transform-runtime",
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: "babel-runtime"
        }
      ]
    ]
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  mini: {
    // eslint-disable-next-line no-unused-vars
    webpackChain(chain, webpack) {
      // console.log(chain, webpack);
    },
    cssLoaderOption: {},
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      }
    }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    // eslint-disable-next-line no-unused-vars
    webpackChain(chain, webpack) {
      // console.log(chain, webpack);
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ["last 3 versions", "Android >= 4.1", "ios >= 8"]
        }
      }
    },
    router: {
      mode: "browser"
    }
  }
};

module.exports = function(merge) {
  console.log("NODE_ENV ========================= ", process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
