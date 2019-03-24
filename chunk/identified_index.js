(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro_h5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _tarojs_taro_h5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro_h5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(102);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(101);
/* harmony import */ var _tarojs_redux_h5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _tarojs_redux_h5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_redux_h5__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: "登录回调"
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log("hello");
      console.log(this.props, nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      console.log("fuck");
      return nervjs__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        _tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
        null,
        nervjs__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
          null,
          nervjs__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            _tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
            null,
            "\u6B22\u8FCE\uFF01"
          )
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }]);

  return Index;
}(_tarojs_taro_h5__WEBPACK_IMPORTED_MODULE_1__["Component"]);
Index = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_tarojs_redux_h5__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (_ref) {
  _objectDestructuringEmpty(_ref);

  return {};
}, function () {
  return {};
})], Index);
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

}]);