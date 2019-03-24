(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)(false);
// imports


// module
exports.push([module.i, "button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}", ""]);

// exports


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(61);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":false,"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(44)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.js
var tslib = __webpack_require__(10);

// EXTERNAL MODULE: delegated ../../node_modules/@tarojs/taro-h5/index.js from dll-reference lib
var taro_h5from_dll_reference_lib = __webpack_require__(3);

// EXTERNAL MODULE: delegated ../../node_modules/nervjs/index.js from dll-reference lib
var nervjsfrom_dll_reference_lib = __webpack_require__(2);
var nervjsfrom_dll_reference_lib_default = /*#__PURE__*/__webpack_require__.n(nervjsfrom_dll_reference_lib);

// EXTERNAL MODULE: ./node_modules/@tarojs/components/src/components/view/index.js
var view = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/weui/dist/style/weui.css
var weui = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/omit.js/lib/index.js
var lib = __webpack_require__(52);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(46);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@tarojs/components/src/components/button/style/index.scss
var button_style = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/@tarojs/components/src/components/button/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var button_Button = function (_Nerv$Component) {
  _inherits(Button, _Nerv$Component);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));

    _this.state = {
      hover: false,
      touch: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          children = _props.children,
          disabled = _props.disabled,
          className = _props.className,
          style = _props.style,
          onClick = _props.onClick,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          _props$hoverClass = _props.hoverClass,
          hoverClass = _props$hoverClass === undefined ? 'button-hover' : _props$hoverClass,
          _props$hoverStartTime = _props.hoverStartTime,
          hoverStartTime = _props$hoverStartTime === undefined ? 20 : _props$hoverStartTime,
          _props$hoverStayTime = _props.hoverStayTime,
          hoverStayTime = _props$hoverStayTime === undefined ? 70 : _props$hoverStayTime,
          size = _props.size,
          plain = _props.plain,
          _props$loading = _props.loading,
          loading = _props$loading === undefined ? false : _props$loading,
          _props$type = _props.type,
          type = _props$type === undefined ? 'default' : _props$type;

      var cls = className || classnames_default()('weui-btn', (_classNames = {}, _defineProperty(_classNames, '' + hoverClass, this.state.hover && !disabled), _defineProperty(_classNames, 'weui-btn_plain-' + type, plain), _defineProperty(_classNames, 'weui-btn_' + type, !plain && type), _defineProperty(_classNames, 'weui-btn_mini', size === 'mini'), _defineProperty(_classNames, 'weui-btn_loading', loading), _defineProperty(_classNames, 'weui-btn_disabled', disabled), _classNames));

      var _onTouchStart = function _onTouchStart(e) {
        _this2.setState(function () {
          return {
            touch: true
          };
        });
        if (hoverClass && !disabled) {
          setTimeout(function () {
            if (_this2.state.touch) {
              _this2.setState(function () {
                return {
                  hover: true
                };
              });
            }
          }, hoverStartTime);
        }
        onTouchStart && onTouchStart(e);
      };
      var _onTouchEnd = function _onTouchEnd(e) {
        _this2.setState(function () {
          return {
            touch: false
          };
        });
        if (hoverClass && !disabled) {
          setTimeout(function () {
            if (!_this2.state.touch) {
              _this2.setState(function () {
                return {
                  hover: false
                };
              });
            }
          }, hoverStayTime);
        }
        onTouchEnd && onTouchEnd(e);
      };

      return nervjsfrom_dll_reference_lib_default.a.createElement(
        'button',
        _extends({}, lib_default()(this.props, ['hoverClass', 'onTouchStart', 'onTouchEnd']), {
          className: cls,
          style: style,
          onClick: onClick,
          disabled: disabled,
          onTouchStart: _onTouchStart,
          onTouchEnd: _onTouchEnd
        }),
        loading && nervjsfrom_dll_reference_lib_default.a.createElement('i', { 'class': 'weui-loading' }),
        children
      );
    }
  }]);

  return Button;
}(nervjsfrom_dll_reference_lib_default.a.Component);

/* harmony default export */ var components_button = (button_Button);
// EXTERNAL MODULE: ./node_modules/@tarojs/components/src/components/text/index.js
var components_text = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/@tarojs/redux-h5/dist/index.js
var dist = __webpack_require__(14);

// EXTERNAL MODULE: ./.temp/constants/counter.js
var counter = __webpack_require__(5);

// CONCATENATED MODULE: ./.temp/actions/counter.js

var counter_add = function add() {
  return {
    type: counter["a" /* ADD */]
  };
};
var counter_minus = function minus() {
  return {
    type: counter["d" /* MINUS */]
  };
};
// 异步的action
function counter_asyncAdd() {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(counter_add());
    }, 2000);
  };
}
var counter_login = function login() {
  return {
    type: counter["b" /* LOGIN */]
  };
};
var counter_logout = function logout() {
  return {
    type: counter["c" /* LOGOUT */]
  };
};
// EXTERNAL MODULE: ./.temp/pages/index/index.styl
var index = __webpack_require__(97);

// EXTERNAL MODULE: ./.temp/services/user.js
var services_user = __webpack_require__(13);

// CONCATENATED MODULE: ./.temp/pages/index/index.js
var index_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function index_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var index_Index = function (_Component) {
  index_inherits(Index, _Component);

  function Index() {
    index_classCallCheck(this, Index);

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    var _this = index_possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: "首页"
    };
    return _this;
  }

  index_createClass(Index, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var user = services_user["a" /* default */].get();
      console.log('user = ', user);
      if (user) {
        console.log('logged in');
      } else {
        console.log('not logged in');
      }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      return nervjsfrom_dll_reference_lib_default.a.createElement(
        view["a" /* default */],
        { className: "index" },
        nervjsfrom_dll_reference_lib_default.a.createElement(
          components_button,
          { className: "add_btn", onClick: this.props.add },
          "+"
        ),
        nervjsfrom_dll_reference_lib_default.a.createElement(
          components_button,
          { className: "dec_btn", onClick: this.props.dec },
          "-"
        ),
        nervjsfrom_dll_reference_lib_default.a.createElement(
          components_button,
          { className: "dec_btn", onClick: this.props.asyncAdd },
          "async"
        ),
        nervjsfrom_dll_reference_lib_default.a.createElement(
          components_button,
          { className: "dec_btn", onClick: this.props.login },
          "Login"
        ),
        nervjsfrom_dll_reference_lib_default.a.createElement(
          components_button,
          { className: "dec_btn", onClick: this.props.logout },
          "Logout"
        ),
        nervjsfrom_dll_reference_lib_default.a.createElement(
          view["a" /* default */],
          null,
          nervjsfrom_dll_reference_lib_default.a.createElement(
            components_text["a" /* default */],
            null,
            this.props.counter.num
          )
        ),
        nervjsfrom_dll_reference_lib_default.a.createElement(
          view["a" /* default */],
          null,
          nervjsfrom_dll_reference_lib_default.a.createElement(
            components_text["a" /* default */],
            null,
            "Hello, World"
          )
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }]);

  return Index;
}(taro_h5from_dll_reference_lib["Component"]);
index_Index = tslib["__decorate"]([Object(dist["connect"])(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    add: function add() {
      dispatch(counter_add());
    },
    dec: function dec() {
      dispatch(counter_minus());
    },
    asyncAdd: function asyncAdd() {
      dispatch(counter_asyncAdd());
    },
    login: function login() {
      dispatch(counter_login());
    },
    logout: function logout() {
      dispatch(counter_logout());
    }
  };
})], index_Index);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
/* harmony default export */ var pages_index = __webpack_exports__["default"] = (index_Index);

/***/ })

}]);