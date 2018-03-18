module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([4],{

/***/ "./components/columnize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/columnize.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Columnize = function (_React$Component) {
  _inherits(Columnize, _React$Component);

  function Columnize() {
    _classCallCheck(this, Columnize);

    return _possibleConstructorReturn(this, (Columnize.__proto__ || Object.getPrototypeOf(Columnize)).apply(this, arguments));
  }

  _createClass(Columnize, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          large = _props.large;


      var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
        'colWrap': true,
        'm-width--large': large
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2708430544' + ' ' + (classes || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        children,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2708430544',
          css: '.colWrap.jsx-2708430544{display:block;padding-bottom:1rem;}.colWrap.jsx-2708430544 p{margin-left:0 !important;}.colWrap.jsx-2708430544 .heading{text-align:left;}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].breakPoints.l + '){.colWrap.jsx-2708430544{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;max-width:1000px;margin:0 auto;}.colWrap.m-width--large.jsx-2708430544{max-width:1000px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.colWrap.jsx-2708430544:not(.m-width--large)  *{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;}.colWrap.jsx-2708430544:not(.m-width--large) .heading{text-align:right;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sdW1uaXplLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCb0IsQUFHMkIsQUFLVyxBQUlULEFBS0QsQUFPSSxBQUtMLEFBS0ssY0E5QkMsRUFTdEIsQ0FZa0MsQUFVaEMsUUExQkYsU0FKQSxxQ0F5QmlCLEdBWkkseURBYW5CLENBTEEsS0FQbUIsaUJBQ0gsY0FDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9jb2x1bW5pemUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0pvb25hcy9Eb2N1bWVudHMvQ29kZS9TaXRlcy9qb2hhbm5hc2Fsb3ZhYXJhLmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjTiBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2x1bW5pemUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGxhcmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY04oe1xuICAgICAgJ2NvbFdyYXAnOiB0cnVlLFxuICAgICAgJ20td2lkdGgtLWxhcmdlJzogbGFyZ2VcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbFdyYXAge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29sV3JhcCA6Z2xvYmFsKHApIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbFdyYXAgOmdsb2JhbCguaGVhZGluZykge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHtzZXR0aW5ncy5icmVha1BvaW50cy5sfSkge1xuICAgICAgICAgICAgLmNvbFdyYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29sV3JhcC5tLXdpZHRoLS1sYXJnZSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb2xXcmFwOm5vdCgubS13aWR0aC0tbGFyZ2UpIDpnbG9iYSg+ICopIHtcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29sV3JhcDpub3QoLm0td2lkdGgtLWxhcmdlKSA6Z2xvYmFsKC5oZWFkaW5nKSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/columnize.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Columnize;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Columnize;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Columnize, 'Columnize', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/columnize.js');
  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/columnize.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/heading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/heading.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Heading = function (_React$Component) {
  _inherits(Heading, _React$Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
  }

  _createClass(Heading, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          semanticLevel = _props.semanticLevel,
          textAlign = _props.textAlign,
          gradientDirection = _props.gradientDirection,
          size = _props.size,
          className = _props.className;

      var HeadingTag = semanticLevel;

      var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
        'heading': true,
        'm-gradient--to-white': gradientDirection === 'to white',
        'm-gradient--to-salmon': gradientDirection === 'to salmon',
        'm-size--medium': size === 'medium'
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        HeadingTag,
        { className: classes + ' ' + (className || ''), __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        children,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '509822342',
          css: '.heading{font-size:30px;font-weight:bold;text-align:' + textAlign + ';color:' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.blue + ';font-family:\'Sporting Grotesque Bold\',sans-serif;line-height:1.2;margin-bottom:1rem;padding:0 1rem;}.m-gradient--to-white{background:linear-gradient( to bottom, ' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.salmon + ' 0%, ' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.salmon + ' 48%, ' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.white + ' 48%, ' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.white + ' 100% );padding:3rem 1rem;margin-bottom:0;}.m-gradient--to-salmon{background:linear-gradient( to bottom, ' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.white + ' 0%, ' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.white + ' 48%, ' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.salmon + ' 48%, ' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.salmon + ' 100% );padding:3rem 1rem;margin-bottom:0;}.m-size--medium{font-size:25px;}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].breakPoints.m + '){.m-gradient--to-white,.m-gradient--to-salmon{padding:4rem 1rem;}}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].breakPoints.l + '){.m-gradient--to-white,.m-gradient--to-salmon{padding:5rem 1rem;font-size:48px;}}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].breakPoints.xl + '){.m-gradient--to-white,.m-gradient--to-salmon{padding:6rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm9CLEFBRzRCLEFBaUJkLEFBWUEsQUFNYyxBQU1LLEFBT0EsQUFRQSxlQXZESCxBQW1DbkIsR0FNRSxBQU9pQixBQVFqQixjQXZEd0MsQ0FnRHhDLHVDQS9DbUMsbUNBQ2UsaURBQ2xDLGdCQUNHLElBWUQsQUFZQSxlQXZCSCxHQVlDLEFBWUEsWUF2QmxCLElBWUEsQUFZQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0pvb25hcy9Eb2N1bWVudHMvQ29kZS9TaXRlcy9qb2hhbm5hc2Fsb3ZhYXJhLmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjTiBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIHNlbWFudGljTGV2ZWwsIHRleHRBbGlnbiwgZ3JhZGllbnREaXJlY3Rpb24sIHNpemUsIGNsYXNzTmFtZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgSGVhZGluZ1RhZyA9IHNlbWFudGljTGV2ZWxcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjTih7XG4gICAgICAnaGVhZGluZyc6IHRydWUsXG4gICAgICAnbS1ncmFkaWVudC0tdG8td2hpdGUnOiBncmFkaWVudERpcmVjdGlvbiA9PT0gJ3RvIHdoaXRlJyxcbiAgICAgICdtLWdyYWRpZW50LS10by1zYWxtb24nOiBncmFkaWVudERpcmVjdGlvbiA9PT0gJ3RvIHNhbG1vbicsXG4gICAgICAnbS1zaXplLS1tZWRpdW0nOiBzaXplID09PSAnbWVkaXVtJ1xuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRpbmdUYWcgY2xhc3NOYW1lPXtgJHtjbGFzc2VzfSAke2NsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgOmdsb2JhbCguaGVhZGluZykge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiAke3RleHRBbGlnbn07XG4gICAgICAgICAgICBjb2xvcjogJHtzZXR0aW5ncy5jb2xvcnMuYmx1ZX07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1Nwb3J0aW5nIEdyb3Rlc3F1ZSBCb2xkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDpnbG9iYWwoLm0tZ3JhZGllbnQtLXRvLXdoaXRlKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgICAgICAgJHtzZXR0aW5ncy5jb2xvcnMuc2FsbW9ufSAwJSxcbiAgICAgICAgICAgICAgJHtzZXR0aW5ncy5jb2xvcnMuc2FsbW9ufSA0OCUsXG4gICAgICAgICAgICAgICR7c2V0dGluZ3MuY29sb3JzLndoaXRlfSA0OCUsXG4gICAgICAgICAgICAgICR7c2V0dGluZ3MuY29sb3JzLndoaXRlfSAxMDAlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA6Z2xvYmFsKC5tLWdyYWRpZW50LS10by1zYWxtb24pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gYm90dG9tLFxuICAgICAgICAgICAgICAke3NldHRpbmdzLmNvbG9ycy53aGl0ZX0gMCUsXG4gICAgICAgICAgICAgICR7c2V0dGluZ3MuY29sb3JzLndoaXRlfSA0OCUsXG4gICAgICAgICAgICAgICR7c2V0dGluZ3MuY29sb3JzLnNhbG1vbn0gNDglLFxuICAgICAgICAgICAgICAke3NldHRpbmdzLmNvbG9ycy5zYWxtb259IDEwMCVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDFyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDpnbG9iYWwoLm0tc2l6ZS0tbWVkaXVtKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR7c2V0dGluZ3MuYnJlYWtQb2ludHMubX0pIHtcbiAgICAgICAgICAgIDpnbG9iYWwoLm0tZ3JhZGllbnQtLXRvLXdoaXRlKSxcbiAgICAgICAgICAgIDpnbG9iYWwoLm0tZ3JhZGllbnQtLXRvLXNhbG1vbikge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0cmVtIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR7c2V0dGluZ3MuYnJlYWtQb2ludHMubH0pIHtcbiAgICAgICAgICAgIDpnbG9iYWwoLm0tZ3JhZGllbnQtLXRvLXdoaXRlKSxcbiAgICAgICAgICAgIDpnbG9iYWwoLm0tZ3JhZGllbnQtLXRvLXNhbG1vbikge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cmVtIDFyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHtzZXR0aW5ncy5icmVha1BvaW50cy54bH0pIHtcbiAgICAgICAgICAgIDpnbG9iYWwoLm0tZ3JhZGllbnQtLXRvLXdoaXRlKSxcbiAgICAgICAgICAgIDpnbG9iYWwoLm0tZ3JhZGllbnQtLXRvLXNhbG1vbikge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA2cmVtIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0hlYWRpbmdUYWc+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/heading.js */',
          dynamic: [textAlign, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.salmon, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.salmon, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.salmon, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].colors.salmon, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].breakPoints.m, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].breakPoints.l, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].breakPoints.xl]
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Heading;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Heading;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Heading, 'Heading', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/heading.js');
  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/heading.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/icon.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Calm = function Calm(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M63.002 31c-1.24 1.671-3.064 2.631-5.001 2.631-1.94 0-3.762-.96-5-2.631L50 32.905C51.927 35.508 54.843 37 58 37s6.073-1.492 8-4.095L63.002 31zM47 32.905L44.002 31c-1.24 1.671-3.063 2.631-5 2.631-1.941 0-3.764-.96-5-2.631L31 32.905C32.928 35.508 35.842 37 39.002 37c3.156 0 6.07-1.492 7.998-4.095m2 15.726c-1.938 0-3.761-.958-5.002-2.631L41 47.905C42.927 50.508 45.843 52 49 52s6.073-1.492 8-4.095L53.998 46c-1.237 1.673-3.06 2.631-4.999 2.631'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      })
    )
  );
};

Calm.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var Enthusiastic = function Enthusiastic(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M15.333 24a1.667 1.667 0 1 1 3.335.001A1.667 1.667 0 0 1 15.333 24M22 24c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5m14 1.667a1.667 1.667 0 1 1 .001-3.335A1.667 1.667 0 0 1 36 25.667M36 19c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5m-9 23.655c-3.145 0-6.094-1.698-8.091-4.655L16 39.826C18.648 43.75 22.66 46 27 46s8.352-2.251 11-6.174L35.091 38c-1.997 2.957-4.946 4.655-8.091 4.655'
      })
    )
  );
};

Enthusiastic.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var Wink = function Wink(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M42.5 51.669c-3.366 0-6.511-1.7-8.633-4.669L31 48.884C33.779 52.77 37.972 55 42.5 55s8.721-2.229 11.5-6.116L51.133 47c-2.122 2.968-5.267 4.669-8.633 4.669M53.5 29c-2.959 0-5.694 1.494-7.5 4.095L48.814 35c1.161-1.674 2.87-2.632 4.686-2.632 1.818 0 3.527.958 4.686 2.632L61 33.095C59.196 30.494 56.46 29 53.5 29m-21.167 3a1.667 1.667 0 1 1 3.335.001A1.667 1.667 0 0 1 32.333 32M39 32c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5'
      })
    )
  );
};

Wink.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var LinkedIn = function LinkedIn(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M23 50h6V29h-6zm3.502-32a3.5 3.5 0 1 0-.005 6.999A3.5 3.5 0 0 0 26.502 18m19.803 11c-3.12 0-5.21 1.698-6.068 3.308h-.089v-2.8H34V50h6.409V39.863c0-2.671.508-5.261 3.845-5.261 3.292 0 3.334 3.055 3.334 5.431V50H54V38.762C54 33.242 52.803 29 46.305 29'
      })
    )
  );
};

LinkedIn.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '75',
  height: '75',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var Twitter = function Twitter(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M56.924 22.573a16.306 16.306 0 0 1-5.081 1.9A8.073 8.073 0 0 0 46.003 22C41.584 22 38 25.504 38 29.826c0 .614.07 1.21.208 1.782-6.65-.326-12.547-3.441-16.493-8.175a7.662 7.662 0 0 0-1.083 3.933c0 2.717 1.411 5.112 3.559 6.516a8.117 8.117 0 0 1-3.625-.98l-.001.1c0 3.79 2.76 6.953 6.42 7.671a8.16 8.16 0 0 1-3.613.135c1.018 3.108 3.973 5.373 7.475 5.435a16.277 16.277 0 0 1-9.938 3.35 16.7 16.7 0 0 1-1.908-.107A23.021 23.021 0 0 0 31.265 53C45.982 53 54.03 41.075 54.03 30.733c0-.34-.007-.676-.023-1.011A16.098 16.098 0 0 0 58 25.669a16.246 16.246 0 0 1-4.595 1.233c1.651-.97 2.92-2.501 3.519-4.329'
      })
    )
  );
};

Twitter.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var name = this.props.name;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2492362127' + ' ' + 'icon',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2492362127' + ' ' + 'svg-container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          name === 'calm' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Calm, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          }),
          name === 'enthusiastic' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Enthusiastic, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }),
          name === 'wink' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wink, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }),
          name === 'linkedin' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LinkedIn, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }),
          name === 'twitter' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Twitter, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2492362127',
          css: '.icon.jsx-2492362127{position:relative;width:4rem;margin:1rem;}.svg-container.jsx-2492362127{width:100%;vertical-align:middle;overflow:hidden;padding-bottom:100%;}.svg-container.jsx-2492362127 svg{display:inline-block;position:absolute;top:0;left:0;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQm9CLEFBRzZCLEFBTVAsQUFPVSxXQU5DLE9BTlgsR0FhTyxRQVpOLElBTUksTUFPVixFQVpSLElBYVMsSUFQYSxHQVFULFdBQ0MsTUFSZCxNQVNBIiwiZmlsZSI6ImNvbXBvbmVudHMvaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSm9vbmFzL0RvY3VtZW50cy9Db2RlL1NpdGVzL2pvaGFubmFzYWxvdmFhcmEuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhbG0gZnJvbSAnLi4vc3ZnL2ZhY2UtY2FsbS5zdmcnXG5pbXBvcnQgRW50aHVzaWFzdGljIGZyb20gJy4uL3N2Zy9mYWNlLWVudGh1c2lhc3RpYy5zdmcnXG5pbXBvcnQgV2luayBmcm9tICcuLi9zdmcvZmFjZS13aW5rLnN2ZydcbmltcG9ydCBMaW5rZWRJbiBmcm9tICcuLi9zdmcvaWNvbi1saW5rZWRpbi5zdmcnXG5pbXBvcnQgVHdpdHRlciBmcm9tICcuLi9zdmcvaWNvbi10d2l0dGVyLnN2ZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnLWNvbnRhaW5lcic+XG4gICAgICAgICAge25hbWUgPT09ICdjYWxtJyAmJlxuICAgICAgICAgICAgPENhbG0gLz5cbiAgICAgICAgICB9XG4gICAgICAgICAge25hbWUgPT09ICdlbnRodXNpYXN0aWMnICYmXG4gICAgICAgICAgICA8RW50aHVzaWFzdGljIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtuYW1lID09PSAnd2luaycgJiZcbiAgICAgICAgICAgIDxXaW5rIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtuYW1lID09PSAnbGlua2VkaW4nICYmXG4gICAgICAgICAgICA8TGlua2VkSW4gLz5cbiAgICAgICAgICB9XG4gICAgICAgICAge25hbWUgPT09ICd0d2l0dGVyJyAmJlxuICAgICAgICAgICAgPFR3aXR0ZXIgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5zdmctY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgICAgICB9XG4gIFxuICAgICAgICAuc3ZnLWNvbnRhaW5lciA6Z2xvYmFsKHN2ZykgeyBcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/icon.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Icon;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Icon, 'Icon', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/icon.js');
  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/icon.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/masthead.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/masthead.js';



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();




var VerticalLogo = function VerticalLogo(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        fill: '#002ACC',
        d: 'M5.893 77.021c0-3.575 2.151-10.936 12.828-10.936 7.268 0 12.113 8.634 13.852 13.904l.593.217V69.83s-5.623-4.646-14.446-4.646c-7.173 0-18.257 3.822-18.257 14.867 0 17.404 30.69 15.042 30.69 30.35 0 8.128-4.462 13.572-12.45 13.572-13.844 0-17.787-15.625-17.787-18.823L0 104.627v14.923S8.248 125 18.703 125c6.841 0 18.704-4.333 18.704-17.105 0-19.542-31.514-15.358-31.514-30.875M63.462 117.22s-4.846 4.267-9.827 4.267c-5.503 0-6.896-5.266-6.896-7.77 0-4.423 1.393-11.767 16.723-11.767v15.27zM56.923 86c-5.208 0-13.846 4.602-13.846 4.602v10.277l.604-.214c1.773-5.22 7.278-13.958 13.242-13.958 5.495 0 6.54 4.217 6.54 9.355v4.746c-8.079 0-23.463 3.14-23.463 14.414 0 4.354 3.956 8.778 11.795 8.778 7.62 0 11.667-5.637 11.667-5.637v4.459H70V95.598C70 91.174 66.374 86 56.923 86zm123.538 31.22s-4.845 4.267-9.826 4.267c-5.503 0-6.896-5.266-6.896-7.77 0-4.423 1.393-11.767 16.722-11.767v15.27zM173.923 86c-5.208 0-13.846 4.602-13.846 4.602v10.277l.604-.214c1.773-5.22 7.278-13.958 13.242-13.958 5.495 0 6.538 4.217 6.538 9.355v4.746c-8.077 0-23.461 3.14-23.461 14.414 0 4.354 3.956 8.778 11.794 8.778 7.62 0 11.667-5.637 11.667-5.637v4.459H187V95.598c0-4.424-3.626-9.598-13.077-9.598zm39.538 31.22s-4.845 4.267-9.826 4.267c-5.502 0-6.895-5.266-6.895-7.77 0-4.423 1.393-11.767 16.721-11.767v15.27zM206.923 86c-5.207 0-13.845 4.602-13.845 4.602v10.277l.604-.214c1.773-5.22 7.277-13.958 13.24-13.958 5.495 0 6.54 4.217 6.54 9.355v4.746c-8.078 0-23.462 3.14-23.462 14.414 0 4.354 3.956 8.778 11.795 8.778 7.618 0 11.666-5.637 11.666-5.637v4.459H220V95.598c0-4.424-3.627-9.598-13.077-9.598zm65.538 31.22s-4.845 4.267-9.825 4.267c-5.503 0-6.896-5.266-6.896-7.77 0-4.423 1.393-11.767 16.721-11.767v15.27zM265.924 86c-5.208 0-13.846 4.602-13.846 4.602v10.277l.604-.214c1.773-5.22 7.277-13.958 13.242-13.958 5.493 0 6.537 4.217 6.537 9.355v4.746c-8.076 0-23.461 3.14-23.461 14.414 0 4.354 3.957 8.778 11.795 8.778 7.618 0 11.666-5.637 11.666-5.637v4.459H279V95.598c0-4.424-3.627-9.598-13.076-9.598zm-17.02 4.718s-2.61-4.611-10.397-4.611c-4.933 0-8.131 4.643-8.131 4.643V86L224 88.573V123h6.376V93.73c0-2.1 3.451-6.703 7.772-6.703 5.271 0 8.644 8.24 10.242 13.823l.61.165-.096-10.297zM75 123h6V65l-6 2.593zm81.864-36l-13.388 28.428L129.393 87H122l18.319 37h1.244l.562-1.186h.009L159 87zm-47.44 36.048a9.48 9.48 0 0 1-1.923.497c-1.565.211-3.115.003-4.6-.525-5.264-1.872-9.69-7.998-10.767-15.769-1.38-9.965 3.26-18.828 10.366-19.795 1.204-.164 2.4-.073 3.567.212 1.16.282 2.286.773 3.357 1.445 4.201 2.636 7.528 8.042 8.442 14.637 1.25 9.03-2.45 17.133-8.442 19.298m0-36.564c-.085-.018-.169-.039-.255-.057A20.597 20.597 0 0 0 105 86c-11.046 0-20 8.73-20 19.5s8.954 19.5 20 19.5 20-8.73 20-19.5c0-9.287-6.66-17.052-15.576-19.016m41.038-34.264s-4.845 4.267-9.827 4.267c-5.503 0-6.895-5.266-6.895-7.77 0-4.423 1.392-11.767 16.722-11.767v15.27zM127 50.222c0 4.354 3.956 8.778 11.795 8.778 7.62 0 11.667-5.637 11.667-5.637v4.459H157V30.598c0-4.424-3.626-9.598-13.077-9.598-5.208 0-13.846 4.603-13.846 4.603V35.88l.604-.214c1.773-5.22 7.278-13.958 13.242-13.958 5.495 0 6.54 4.217 6.54 9.355v4.746c-8.079 0-23.463 3.14-23.463 14.414zm125.461 1.998s-4.845 4.267-9.825 4.267c-5.503 0-6.896-5.266-6.896-7.77 0-4.423 1.393-11.767 16.721-11.767v15.27zM229 50.222c0 4.354 3.956 8.778 11.795 8.778 7.618 0 11.666-5.637 11.666-5.637v4.459H259V30.598c0-4.424-3.627-9.598-13.076-9.598-5.208 0-13.846 4.603-13.846 4.603V35.88l.604-.214c1.773-5.22 7.277-13.958 13.242-13.958 5.493 0 6.537 4.217 6.537 9.355v4.746c-8.076 0-23.461 3.14-23.461 14.414zM73.5 57.544c-7.105.967-13.985-6.327-15.366-16.293-1.381-9.966 3.26-18.828 10.365-19.794 7.106-.967 13.985 6.327 15.367 16.292 1.38 9.966-3.26 18.827-10.366 19.795M91 39.5C91 28.73 82.045 20 71 20c-11.046 0-20 8.73-20 19.5C51 50.269 59.954 59 71 59c11.045 0 20-8.731 20-19.5M48.485 49.652V.12l-6.526 2.594v46.47c0 5.186-1.223 9.444-7.305 9.444-7.122 0-12.519-11.052-13.995-16.39l-.603-.217v12.674s8.205 4.647 14.638 4.647c9.433 0 13.79-5.224 13.79-9.69M100.725 31.294c2.203-4.792 7.058-9.19 11.466-9.19 4.878 0 6.375 2.937 6.375 9.061 0 4.85.093 26.941.093 26.941h6.548V30.643c0-8.108-8.103-9.682-12.102-9.682-5.626 0-10.278 4.486-12.38 8.1V.12l-6.548 2.592v55.394h6.548V31.294zM167.54 30.838c2.202-4.854 7.053-9.31 11.457-9.31 4.873 0 6.369 2.975 6.369 9.18 0 4.913.093 27.292.093 27.292H192V30.178c0-8.213-8.095-9.808-12.09-9.808-5.621 0-10.268 4.545-12.37 8.206V20L161 22.624V58h6.54V30.838zm35.001 0c2.202-4.854 7.052-9.31 11.455-9.31 4.874 0 6.37 2.975 6.37 9.18 0 4.913.093 27.292.093 27.292H227V30.178c0-8.213-8.095-9.808-12.09-9.808-5.62 0-10.268 4.545-12.369 8.206V20L196 22.624V58h6.541V30.838z'
      })
    )
  );
};

VerticalLogo.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 279 125',
  preserveAspectRatio: 'xMinYMin meet'
};

var HorizontalLogo = function HorizontalLogo(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
      d: 'M470.21 20.9c0-6.312 3.807-19.31 22.706-19.31 12.865 0 21.44 15.246 24.518 24.55l1.05.383V8.205S508.529 0 492.915 0c-12.698 0-32.317 6.748-32.317 26.249 0 30.73 54.324 26.556 54.324 53.587 0 14.35-7.9 23.96-22.038 23.96-24.506 0-31.485-27.587-31.485-33.232l-1.62-.923V95.99s14.6 9.62 33.105 9.62c12.106 0 33.105-7.647 33.105-30.197 0-34.501-55.78-27.116-55.78-54.514m-241.3 72.104s-8.413 7.604-17.063 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.035-20.977v27.222zm-11.354-55.652c-9.042 0-24.042 8.205-24.042 8.205v18.317l1.05-.382c3.079-9.305 12.636-24.88 22.992-24.88 9.54 0 11.354 7.517 11.354 16.675v8.46c-14.024 0-40.738 5.597-40.738 25.695 0 7.76 6.869 15.646 20.48 15.646 13.23 0 20.258-10.049 20.258-10.049v7.95h11.353V54.46c0-7.887-6.297-17.109-22.707-17.109zm352.669 55.652s-8.413 7.604-17.062 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.034-20.977v27.222zm-11.353-55.652c-9.043 0-24.042 8.205-24.042 8.205v18.317l1.05-.382c3.078-9.305 12.636-24.88 22.992-24.88 9.541 0 11.353 7.517 11.353 16.675v8.46c-14.024 0-40.737 5.597-40.737 25.695 0 7.76 6.87 15.646 20.48 15.646 13.23 0 20.257-10.049 20.257-10.049v7.95h11.354V54.46c0-7.887-6.297-17.109-22.707-17.109zm217.6 55.652s-8.413 7.604-17.062 7.604c-9.556 0-11.972-9.385-11.972-13.849 0-7.887 2.416-20.977 29.034-20.977v27.222zm-11.354-55.652c-9.042 0-24.04 8.205-24.04 8.205v18.317l1.048-.382c3.08-9.305 12.637-24.88 22.992-24.88 9.542 0 11.354 7.517 11.354 16.675v8.46c-14.024 0-40.737 5.597-40.737 25.695 0 7.76 6.87 15.646 20.48 15.646 13.23 0 20.257-10.049 20.257-10.049v7.95h11.353V54.46c0-7.887-6.296-17.109-22.707-17.109zm69.868 55.652s-8.412 7.604-17.062 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.034-20.977v27.222zm-11.353-55.652c-9.043 0-24.042 8.205-24.042 8.205v18.317l1.05-.382c3.079-9.305 12.636-24.88 22.992-24.88 9.54 0 11.353 7.517 11.353 16.675v8.46c-14.023 0-40.737 5.597-40.737 25.695 0 7.76 6.869 15.646 20.48 15.646 13.23 0 20.257-10.049 20.257-10.049v7.95h11.354V54.46c0-7.887-6.297-17.109-22.707-17.109zm115.153 55.652s-8.413 7.604-17.062 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.034-20.977v27.222zM927.43 37.351c-9.042 0-24.041 8.205-24.041 8.205v18.317l1.049-.382c3.079-9.305 12.637-24.88 22.992-24.88 9.542 0 11.354 7.517 11.354 16.675v8.46c-14.024 0-40.737 5.597-40.737 25.695 0 7.76 6.869 15.646 20.479 15.646 13.23 0 20.258-10.049 20.258-10.049v7.95h11.353V54.46c0-7.887-6.296-17.109-22.707-17.109zM408.188 93.003s-8.413 7.604-17.063 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.035-20.977v27.222zm-11.354-55.652c-9.042 0-24.042 8.205-24.042 8.205v18.317l1.05-.382c3.079-9.305 12.637-24.88 22.992-24.88 9.542 0 11.354 7.517 11.354 16.675v8.46c-14.024 0-40.737 5.597-40.737 25.695 0 7.76 6.869 15.646 20.479 15.646 13.23 0 20.258-10.049 20.258-10.049v7.95h11.353V54.46c0-7.887-6.297-17.109-22.707-17.109zM94.286 102.53c-12.366 1.698-24.34-11.115-26.743-28.618-2.403-17.503 5.673-33.069 18.039-34.767 12.366-1.698 24.34 11.113 26.743 28.616 2.404 17.504-5.673 33.07-18.04 34.769m-4.351-65.943c-19.224 0-34.808 15.335-34.808 34.25 0 18.916 15.584 34.25 34.808 34.25s34.808-15.334 34.808-34.25c0-18.915-15.584-34.25-34.808-34.25m808.319 8.969s-4.647-8.205-18.514-8.205c-8.784 0-14.479 8.26-14.479 8.26V37.16l-11.354 4.58v61.249h11.354V50.91c0-3.734 6.146-11.923 13.842-11.923 9.386 0 15.39 14.658 18.236 24.59l1.085.295-.17-18.317zm-307.168 57.433h11.354V.524l-11.354 4.58zm144.569-63.348L712.33 89.925l-24.536-50.284h-12.88l31.915 65.446h2.169l.976-2.098h.017l29.385-63.348zm-84.528 62.017c-1.078.393-2.187.712-3.346.871-2.722.373-5.42.008-8.006-.92-9.163-3.287-16.864-14.048-18.737-27.697-2.404-17.503 5.673-33.068 18.038-34.767 2.097-.288 4.18-.128 6.208.371 2.02.496 3.98 1.36 5.843 2.54 7.313 4.63 13.103 14.124 14.692 25.706 2.178 15.862-4.264 30.094-14.692 33.896m0-64.22c-.146-.033-.293-.069-.442-.1a35.46 35.46 0 0 0-7.256-.75c-19.225 0-34.808 15.334-34.808 34.25 0 18.915 15.583 34.25 34.808 34.25 19.224 0 34.808-15.335 34.808-34.25 0-16.312-11.591-29.95-27.11-33.4M38.101 87.152c0 9.158-2.127 16.676-12.706 16.676-12.39 0-21.776-19.514-24.346-28.94L0 74.506v22.376s14.274 8.206 25.464 8.206c16.41 0 23.99-9.222 23.99-17.11V.526l-11.353 4.58v82.047zM162.51 37.35c-9.756 0-17.822 7.93-21.469 14.315V.525l-11.353 4.58v97.884h11.353V55.61c3.823-8.47 12.24-16.24 19.885-16.24 8.46 0 11.055 5.189 11.055 16.012 0 8.57.162 47.606.162 47.606h11.352v-48.53c0-14.326-14.05-17.108-20.985-17.108m117.92 0c-9.757 0-17.823 7.93-21.47 14.315v-14.96l-11.353 4.58v61.704h11.353V55.61c3.823-8.47 12.24-16.24 19.885-16.24 8.46 0 11.055 5.189 11.055 16.012 0 8.57.162 47.606.162 47.606h11.352v-48.53c0-14.326-14.05-17.108-20.985-17.108m61.059 0c-9.756 0-17.823 7.93-21.47 14.315v-14.96l-11.352 4.58v61.704h11.353V55.61c3.822-8.47 12.24-16.24 19.885-16.24 8.459 0 11.055 5.189 11.055 16.012 0 8.57.162 47.606.162 47.606h11.352v-48.53c0-14.326-14.051-17.108-20.985-17.108',
      fill: '#002ACC',
      fillRule: 'evenodd'
    })
  );
};

HorizontalLogo.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 951 106',
  preserveAspectRatio: 'xMinYMin meet'
};



var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'header',
    {
      className: 'jsx-108934085' + ' ' + 'masthead',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-108934085' + ' ' + 'svg-container verticalLogo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(VerticalLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-108934085' + ' ' + 'svg-container horizontalLogo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HorizontalLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '108934085',
      css: '.masthead.jsx-108934085{min-height:80vh;background-color:' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].colors.salmon + ';position:relative;}.svg-container.jsx-108934085{display:inline-block;position:absolute;top:calc(50% + 1.5rem);left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%;vertical-align:middle;overflow:hidden;}.svg-container.jsx-108934085 svg{display:inline-block;position:absolute;top:0;left:0;}.verticalLogo.jsx-108934085{padding-bottom:' + 123 / 262 * 100 + '%;}.horizontalLogo.jsx-108934085{display:none;padding-bottom:' + 107 / 959 * 100 + '%;}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].breakPoints.m + '){.verticalLogo.jsx-108934085{display:none;}.horizontalLogo.jsx-108934085{display:inline-block;top:calc(50% + 2rem);}}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].breakPoints.l + '){.masthead.jsx-108934085{min-height:70vh;}.horizontalLogo.jsx-108934085{top:calc(50% + 2.5rem);}}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].breakPoints.xl + '){.horizontalLogo.jsx-108934085{top:calc(50% + 3rem);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFzdGhlYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCLEFBR3lCLEFBTUssQUFXQSxBQU93QixBQUloQyxBQU1FLEFBSVEsQUFPTCxBQUlPLEFBTUYsYUExQnNCLEFBTTdDLEdBbEM4QyxBQTZDOUMsS0F2Q2tCLEFBV0EsQUFxQkssQUFpQnZCLEVBTkEsZ0JBMUN1QixBQVdqQixHQXFCTixHQXBCTyxBQUtULE9BSkEsTUFTQSxJQTVCb0IsQUFPVCxTQUN1QixTQVBsQyxnR0FRWSxVQUNZLHNCQUNOLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL21hc3RoZWFkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Kb29uYXMvRG9jdW1lbnRzL0NvZGUvU2l0ZXMvam9oYW5uYXNhbG92YWFyYS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmVydGljYWxMb2dvIGZyb20gJy4uL3N2Zy9sb2dvLXZlcnRpY2FsLnN2ZydcbmltcG9ydCBIb3Jpem9udGFsTG9nbyBmcm9tICcuLi9zdmcvbG9nby1ob3Jpem9udGFsLnN2ZydcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9zZXR0aW5ncydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8aGVhZGVyIGNsYXNzTmFtZT0nbWFzdGhlYWQnPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J3N2Zy1jb250YWluZXIgdmVydGljYWxMb2dvJz5cbiAgICAgIDxWZXJ0aWNhbExvZ28gLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnLWNvbnRhaW5lciBob3Jpem9udGFsTG9nbyc+XG4gICAgICA8SG9yaXpvbnRhbExvZ28gLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tYXN0aGVhZCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2V0dGluZ3MuY29sb3JzLnNhbG1vbn07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLnN2Zy1jb250YWluZXIgeyBcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgKyAxLjVyZW0pO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogODAlOyBcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5zdmctY29udGFpbmVyIDpnbG9iYWwoc3ZnKSB7IFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAudmVydGljYWxMb2dvIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7MTIzIC8gMjYyICogMTAwfSU7XG4gICAgICB9XG5cbiAgICAgIC5ob3Jpem9udGFsTG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAkezEwNyAvIDk1OSAqIDEwMH0lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHtzZXR0aW5ncy5icmVha1BvaW50cy5tfSkgeyAgICAgICAgXG4gICAgICAgIC52ZXJ0aWNhbExvZ28ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5ob3Jpem9udGFsTG9nbyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRvcDogY2FsYyg1MCUgKyAycmVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHtzZXR0aW5ncy5icmVha1BvaW50cy5sfSkge1xuICAgICAgICAubWFzdGhlYWR7XG4gICAgICAgICAgbWluLWhlaWdodDogNzB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob3Jpem9udGFsTG9nbyB7XG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSArIDIuNXJlbSk7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAke3NldHRpbmdzLmJyZWFrUG9pbnRzLnhsfSkge1xuICAgICAgICAuaG9yaXpvbnRhbExvZ28ge1xuICAgICAgICAgIHRvcDogY2FsYyg1MCUgKyAzcmVtKTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG4iXX0= */\n/*@ sourceURL=components/masthead.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/masthead.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/navToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/navToggle.js';



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(_ref) {
  var onClick = _ref.onClick,
      open = _ref.open;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { onClick: onClick, className: 'jsx-2004797381' + ' ' + ('nav-toggle ' + (open ? 'm--open' : '')),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', {
      className: 'jsx-2004797381' + ' ' + 'nav-toggle__1',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', {
      className: 'jsx-2004797381' + ' ' + 'nav-toggle__2',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', {
      className: 'jsx-2004797381' + ' ' + 'nav-toggle__3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2004797381',
      css: '.nav-toggle.jsx-2004797381{width:4rem;height:calc(1rem + 6px);z-index:200;position:fixed;top:1rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}span.jsx-2004797381{display:block;width:100%;height:2px;background-color:' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].colors.blue + ';-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}.nav-toggle__2.jsx-2004797381{margin:0.6rem 0;}.m--open.jsx-2004797381 .nav-toggle__2.jsx-2004797381{opacity:0;}.m--open.jsx-2004797381 .nav-toggle__1.jsx-2004797381{-webkit-transform:rotate(20deg);-ms-transform:rotate(20deg);transform:rotate(20deg);margin-top:calc(0.6rem + 2px);}.m--open.jsx-2004797381 .nav-toggle__3.jsx-2004797381{-webkit-transform:rotate(-20deg);-ms-transform:rotate(-20deg);transform:rotate(-20deg);margin-top:calc(-1.2rem - 4px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2VG9nZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUdvQixBQVVHLEFBVUUsQUFLTixBQUljLEFBS0MsVUFSM0IsQ0F6QjBCLEdBVWIsRUFVYixTQVRhLFVBVkMsQ0FXa0MsV0FWL0IsZUFDTixTQUNBLFNBQ2tCLEVBUUksRUFnQkQsR0FLQywyQkFKakMsSUFLQSxrQ0FyQjBCLHFCQVIxQiwrREFTQSIsImZpbGUiOiJjb21wb25lbnRzL25hdlRvZ2dsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSm9vbmFzL0RvY3VtZW50cy9Db2RlL1NpdGVzL2pvaGFubmFzYWxvdmFhcmEuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBvbkNsaWNrLCBvcGVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdG9nZ2xlICR7b3BlbiA/ICdtLS1vcGVuJyA6ICcnfWB9IG9uQ2xpY2s9e29uQ2xpY2t9ID5cbiAgICA8c3BhbiBjbGFzc05hbWU9J25hdi10b2dnbGVfXzEnIC8+XG4gICAgPHNwYW4gY2xhc3NOYW1lPSduYXYtdG9nZ2xlX18yJyAvPlxuICAgIDxzcGFuIGNsYXNzTmFtZT0nbmF2LXRvZ2dsZV9fMycgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubmF2LXRvZ2dsZSB7XG4gICAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMXJlbSArIDZweCk7XG4gICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzZXR0aW5ncy5jb2xvcnMuYmx1ZX07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm5hdi10b2dnbGVfXzEge31cbiAgICAgIC5uYXYtdG9nZ2xlX18yIHtcbiAgICAgICAgbWFyZ2luOiAwLjZyZW0gMDtcbiAgICAgIH1cbiAgICAgIC5uYXYtdG9nZ2xlX18zIHt9XG5cbiAgICAgIC5tLS1vcGVuIC5uYXYtdG9nZ2xlX18yIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgLm0tLW9wZW4gLm5hdi10b2dnbGVfXzEge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMC42cmVtICsgMnB4KTtcbiAgICAgIH1cblxuICAgICAgLm0tLW9wZW4gLm5hdi10b2dnbGVfXzMge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKC0xLjJyZW0gLSA0cHgpOyAgICAgICAgXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=components/navToggle.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/navToggle.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/navigation.js';



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(_ref) {
  var onClick = _ref.onClick;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'nav',
    { onClick: onClick, className: 'jsx-4014281418' + ' ' + 'main-nav',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'ul',
      {
        className: 'jsx-4014281418',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        {
          className: 'jsx-4014281418',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { href: '#', className: 'jsx-4014281418',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 6
            }
          },
          'Palvelut'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        {
          className: 'jsx-4014281418',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { href: '#', className: 'jsx-4014281418',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          'Kenelle?'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        {
          className: 'jsx-4014281418',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { href: '#', className: 'jsx-4014281418',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          'Tausta'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        {
          className: 'jsx-4014281418',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { href: '#', className: 'jsx-4014281418',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          'Yhteystiedot'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '4014281418',
      css: '.main-nav.jsx-4014281418{position:fixed;left:0;width:100%;height:100%;overflow:hidden;z-index:100;background-color:' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].colors.salmon + ';-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;}ul.jsx-4014281418{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;list-style:none;}li.jsx-4014281418:not(:last-child){margin-bottom:2rem;}a.jsx-4014281418{text-decoration:none;color:' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].colors.blue + ';font-size:30px;font-weight:bold;font-family:\'Sporting Grotesque Bold\',sans-serif;line-height:1.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHd0IsQUFXRixBQWFNLEFBSUUsZUEzQmQsSUF3QlQsRUFJcUMsQ0EzQnhCLFdBQ0MsWUFDSSxXQTBCRCxLQXpCSCxVQTBCSyxFQXpCNkIsQ0FNeEIsY0FvQjRCLCtCQXpCbEIsa0JBMEJoQixlQXBCUCxDQXFCWCxRQXBCb0Isa0JBQ0ssWUFQekIsdUZBUXFCLDZGQUNQLFlBQ0ksZ0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSm9vbmFzL0RvY3VtZW50cy9Db2RlL1NpdGVzL2pvaGFubmFzYWxvdmFhcmEuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBvbkNsaWNrIH0pID0+IChcbiAgPG5hdiBjbGFzc05hbWU9J21haW4tbmF2JyBvbkNsaWNrPXtvbkNsaWNrfSA+XG4gICAgPHVsPlxuICAgICAgPGxpPjxhIGhyZWY9JyMnPlBhbHZlbHV0PC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj0nIyc+S2VuZWxsZT88L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPScjJz5UYXVzdGE8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPScjJz5ZaHRleXN0aWVkb3Q8L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tYWluLW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NldHRpbmdzLmNvbG9ycy5zYWxtb259O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbGkge31cblxuICAgICAgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAke3NldHRpbmdzLmNvbG9ycy5ibHVlfTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcG9ydGluZyBHcm90ZXNxdWUgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbilcbiJdfQ== */\n/*@ sourceURL=components/navigation.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/navigation.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/some.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__("./components/icon.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/some.js';



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();




var Smile = function Smile(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
      fill: 'none',
      stroke: '#002ACC',
      strokeWidth: '4',
      d: 'M1.8 1.353C8.557 11.73 19.023 18.42 30.802 18.42s22.244-6.69 29-17.068'
    })
  );
};

Smile.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '62',
  height: '21'
};

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-3922490338' + ' ' + 'some',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'ul',
      {
        className: 'jsx-3922490338',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        {
          className: 'jsx-3922490338',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { href: 'https://linkedin.com/', className: 'jsx-3922490338',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: 'jsx-3922490338' + ' ' + 'hidden-but-readable',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            },
            'LinkedIn'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], { name: 'linkedin', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        {
          className: 'jsx-3922490338',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { href: 'https://twitter.com/', className: 'jsx-3922490338',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: 'jsx-3922490338' + ' ' + 'hidden-but-readable',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            'Twitter'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], { name: 'twitter', __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Smile, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3922490338',
      css: '.some.jsx-3922490338{text-align:center;}ul.jsx-3922490338{margin:0;padding-bottom:.5rem;}li.jsx-3922490338{display:inline-block;}a.jsx-3922490338{text-decoration:none;}a.jsx-3922490338  .icon{margin:0.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBRzJCLEFBSVQsQUFLWSxBQUlBLEFBSU4sU0FaTSxNQWF2QixHQWpCQSxHQVNBLEFBSUEsU0FSQSIsImZpbGUiOiJjb21wb25lbnRzL3NvbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0pvb25hcy9Eb2N1bWVudHMvQ29kZS9TaXRlcy9qb2hhbm5hc2Fsb3ZhYXJhLmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uIGZyb20gJy4vaWNvbidcbmltcG9ydCBTbWlsZSBmcm9tICcuLi9zdmcvaWNvbi1zbWlsZS5zdmcnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3NvbWUnPlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9saW5rZWRpbi5jb20vJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hpZGRlbi1idXQtcmVhZGFibGUnPkxpbmtlZEluPC9zcGFuPlxuICAgICAgICAgIDxJY29uIG5hbWU9J2xpbmtlZGluJyAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tLyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoaWRkZW4tYnV0LXJlYWRhYmxlJz5Ud2l0dGVyPC9zcGFuPlxuICAgICAgICAgIDxJY29uIG5hbWU9J3R3aXR0ZXInIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8U21pbGUgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc29tZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGEgOmdsb2JhKD4gLmljb24pIHtcbiAgICAgICAgbWFyZ2luOiAwLjI1cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/some.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/some.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navigation__ = __webpack_require__("./components/navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navToggle__ = __webpack_require__("./components/navToggle.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/containers/header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

    _this.state = {
      navOpen: false
    };
    return _this;
  }

  _createClass(Icon, [{
    key: 'toggleNavigation',
    value: function toggleNavigation() {
      this.setState({ 'navOpen': !this.state.navOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
        'site-header': true,
        'm-nav-state--open': this.state.navOpen
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2118790021' + ' ' + (classes || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_navigation__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_navToggle__["a" /* default */], {
          open: this.state.navOpen,
          onClick: function onClick() {
            _this2.toggleNavigation();
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2118790021',
          css: '.main-nav{top:100%;opacity:0;}.m-nav-state--open .main-nav{top:0;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IsQUFHc0IsQUFLSCxNQUNJLEdBTEEsT0FNWixHQUxBIiwiZmlsZSI6ImNvbnRhaW5lcnMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Kb29uYXMvRG9jdW1lbnRzL0NvZGUvU2l0ZXMvam9oYW5uYXNhbG92YWFyYS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY04gZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbidcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZUb2dnbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmF2T3BlbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICB0b2dnbGVOYXZpZ2F0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsnbmF2T3Blbic6ICF0aGlzLnN0YXRlLm5hdk9wZW59KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY04oe1xuICAgICAgJ3NpdGUtaGVhZGVyJzogdHJ1ZSxcbiAgICAgICdtLW5hdi1zdGF0ZS0tb3Blbic6IHRoaXMuc3RhdGUubmF2T3BlblxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8VG9nZ2xlXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5uYXZPcGVufVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50b2dnbGVOYXZpZ2F0aW9uKCkgfX0gLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgOmdsb2JhbCgubWFpbi1uYXYpIHtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOmdsb2JhbCgubS1uYXYtc3RhdGUtLW9wZW4gLm1haW4tbmF2KSB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=containers/header.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Icon;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Icon, 'Icon', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/containers/header.js');
  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/containers/header.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/set.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/set.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__("./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__("./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__("./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__("./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__("./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__("./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__("./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__("./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__("./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__("./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__("./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__("./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__("./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/library/modules/_perform.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__("./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__("./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__("./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__("./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__("./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/next/dist/lib/head.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.defaultHead = defaultHead;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sideEffect = __webpack_require__("./node_modules/next/dist/lib/side-effect.js");

var _sideEffect2 = _interopRequireDefault(_sideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Head = function (_React$Component) {
  (0, _inherits3.default)(Head, _React$Component);

  function Head() {
    (0, _classCallCheck3.default)(this, Head);
    return (0, _possibleConstructorReturn3.default)(this, (Head.__proto__ || (0, _getPrototypeOf2.default)(Head)).apply(this, arguments));
  }

  (0, _createClass3.default)(Head, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Head;
}(_react2.default.Component);

Head.contextTypes = {
  headManager: _propTypes2.default.object
};
function defaultHead() {
  return [_react2.default.createElement('meta', { charSet: 'utf-8', className: 'next-head' })];
}

function reduceComponents(components) {
  var _components$map$map$r;

  return (_components$map$map$r = components.map(function (c) {
    return c.props.children;
  }).map(function (children) {
    return _react2.default.Children.toArray(children);
  }).reduce(function (a, b) {
    return a.concat(b);
  }, []).reduce(function (a, b) {
    if (_react2.default.Fragment && b.type === _react2.default.Fragment) {
      return a.concat(_react2.default.Children.toArray(b.props.children));
    }
    return a.concat(b);
  }, []).reverse()).concat.apply(_components$map$map$r, (0, _toConsumableArray3.default)(defaultHead())).filter(function (c) {
    return !!c;
  }).filter(unique()).reverse().map(function (c) {
    var className = (c.props && c.props.className ? c.props.className + ' ' : '') + 'next-head';
    return _react2.default.cloneElement(c, { className: className });
  });
}

function mapOnServer(head) {
  return head;
}

function onStateChange(head) {
  if (this.context && this.context.headManager) {
    this.context.headManager.updateHead(head);
  }
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp', 'property'];

// returns a function for filtering head child elements
// which shouldn't be duplicated, like <title/>.

function unique() {
  var keys = new _set2.default();
  var tags = new _set2.default();
  var metaTypes = new _set2.default();
  var metaCategories = {};

  return function (h) {
    if (h.key && h.key.startsWith('.$')) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
    }
    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;
      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set2.default();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }
        break;
    }
    return true;
  };
}

exports.default = (0, _sideEffect2.default)(reduceComponents, onStateChange, mapOnServer)(Head);

/***/ }),

/***/ "./node_modules/next/dist/lib/side-effect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

exports.default = withSideEffect;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withSideEffect(reduceComponentsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reduceComponentsToState !== 'function') {
    throw new Error('Expected reduceComponentsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = new _set2.default();
    var state = void 0;

    function emitChange(component) {
      state = reduceComponentsToState([].concat((0, _toConsumableArray3.default)(mountedInstances)));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient.call(component, state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      (0, _inherits3.default)(SideEffect, _Component);

      function SideEffect() {
        (0, _classCallCheck3.default)(this, SideEffect);
        return (0, _possibleConstructorReturn3.default)(this, (SideEffect.__proto__ || (0, _getPrototypeOf2.default)(SideEffect)).apply(this, arguments));
      }

      (0, _createClass3.default)(SideEffect, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          mountedInstances.delete(this);
          emitChange(this);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            WrappedComponent,
            null,
            this.props.children
          );
        }
      }], [{
        key: 'peek',
        value: function peek() {
          return state;
        }

        // Expose canUseDOM so tests can monkeypatch it

        // Try to use displayName of wrapped component

      }, {
        key: 'rewind',
        value: function rewind() {
          if (SideEffect.canUseDOM) {
            throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
          }

          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);
      return SideEffect;
    }(_react.Component);

    SideEffect.displayName = 'SideEffect(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';
    SideEffect.contextTypes = WrappedComponent.contextTypes;
    SideEffect.canUseDOM = typeof window !== 'undefined';


    return SideEffect;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGetInitialProps = undefined;

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var loadGetInitialProps = exports.loadGetInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(Component, ctx) {
    var props, compName, message;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (Component.getInitialProps) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', {});

          case 2:
            _context.next = 4;
            return Component.getInitialProps(ctx);

          case 4:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', props);

          case 7:
            if (props) {
              _context.next = 11;
              break;
            }

            compName = getDisplayName(Component);
            message = '"' + compName + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
            throw new Error(message);

          case 11:
            return _context.abrupt('return', props);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadGetInitialProps(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.warn = warn;
exports.execOnce = execOnce;
exports.deprecated = deprecated;
exports.printAndExit = printAndExit;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function warn(message) {
  if (true) {
    console.error(message);
  }
}

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!used) {
      used = true;
      fn.apply(_this, args);
    }
  };
}

function deprecated(fn, message) {
  if (false) return fn;

  var warned = false;
  var newFn = function newFn() {
    if (!warned) {
      warned = true;
      console.error(message);
    }

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fn.apply(this, args);
  };

  // copy all properties
  (0, _assign2.default)(newFn, fn);

  return newFn;
}

function printAndExit(message) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (code === 0) {
    console.log(message);
  } else {
    console.error(message);
  }

  process.exit(code);
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;

  return protocol + '//' + hostname + (port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;

  var origin = getLocationOrigin();
  return href.substring(origin.length);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__("./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
var assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__("./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/checkPropTypes.js");

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-hot-loader/lib/global/generation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var generation = 0;

var increment = exports.increment = function increment() {
  return generation++;
};
var get = exports.get = function get() {
  return generation;
};

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/global/modules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.leave = exports.enter = exports.isOpened = exports.hotModule = undefined;

var _logger = __webpack_require__("./node_modules/react-hot-loader/lib/logger.js");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openedModules = {};

var hotModules = {};

var createHotModule = function createHotModule() {
  return { instances: [], updateTimeout: 0 };
};

var hotModule = exports.hotModule = function hotModule(moduleId) {
  if (!hotModules[moduleId]) {
    hotModules[moduleId] = createHotModule();
  }
  return hotModules[moduleId];
};

var isOpened = exports.isOpened = function isOpened(sourceModule) {
  return sourceModule && !!openedModules[sourceModule.id];
};

var enter = exports.enter = function enter(sourceModule) {
  if (sourceModule && sourceModule.id) {
    openedModules[sourceModule.id] = true;
  } else {
    _logger2.default.warn('React-hot-loader: no `module` variable found. Do you shadow system variable?');
  }
};

var leave = exports.leave = function leave(sourceModule) {
  if (sourceModule && sourceModule.id) {
    delete openedModules[sourceModule.id];
  }
};

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/internal/reactUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isFragmentNode = exports.updateInstance = exports.getInternalInstance = exports.getComponentDisplayName = exports.isCompositeComponent = undefined;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */

var isCompositeComponent = exports.isCompositeComponent = function isCompositeComponent(type) {
  return typeof type === 'function';
};

var getComponentDisplayName = exports.getComponentDisplayName = function getComponentDisplayName(type) {
  return type.displayName || type.name || 'Component';
};

var getInternalInstance = exports.getInternalInstance = function getInternalInstance(instance) {
  return instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;
};

var updateInstance = exports.updateInstance = function updateInstance(instance) {
  var updater = instance.updater,
      forceUpdate = instance.forceUpdate;

  if (typeof forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
    updater.enqueueForceUpdate(instance);
  }
};

var isFragmentNode = exports.isFragmentNode = function isFragmentNode(_ref) {
  var type = _ref.type;
  return _react2.default.Fragment && type === _react2.default.Fragment;
};

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/logger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/lib/reactHotLoader.js");

var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = {
  debug: function debug() {
    if (['debug'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console;

      (_console = console).debug.apply(_console, arguments);
    }
  },
  log: function log() {
    if (['debug', 'log'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  },
  warn: function warn() {
    if (['debug', 'log', 'warn'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console3;

      (_console3 = console).warn.apply(_console3, arguments);
    }
  },
  error: function error() {
    if (['debug', 'log', 'warn', 'error'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console4;

      (_console4 = console).error.apply(_console4, arguments);
    }
  }
}; /* eslint-disable no-console */
exports.default = logger;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/patch.dev.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.leaveModule = exports.enterModule = undefined;

var _modules = __webpack_require__("./node_modules/react-hot-loader/lib/global/modules.js");

Object.defineProperty(exports, 'enterModule', {
  enumerable: true,
  get: function get() {
    return _modules.enter;
  }
});
Object.defineProperty(exports, 'leaveModule', {
  enumerable: true,
  get: function get() {
    return _modules.leave;
  }
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/lib/reactHotLoader.js");

var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactHotLoader2.default.patch(_react2.default);

exports.default = _reactHotLoader2.default;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/patch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require, import/no-mutable-exports */

if (false) {
  module.exports = require('./prod/patch.prod');
} else {
  module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/patch.dev.js");
}

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/reactHotLoader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-use-before-define */


var _reactUtils = __webpack_require__("./node_modules/react-hot-loader/lib/internal/reactUtils.js");

var _generation = __webpack_require__("./node_modules/react-hot-loader/lib/global/generation.js");

var _proxies = __webpack_require__("./node_modules/react-hot-loader/lib/reconciler/proxies.js");

function resolveType(type) {
  if (!(0, _reactUtils.isCompositeComponent)(type)) return type;

  var proxy = reactHotLoader.disableProxyCreation ? (0, _proxies.getProxyByType)(type) : (0, _proxies.createProxyForType)(type);

  return proxy ? proxy.get() : type;
}

var reactHotLoader = {
  register: function register(type, uniqueLocalName, fileName) {
    if ((0, _reactUtils.isCompositeComponent)(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
      (0, _generation.increment)();
      (0, _proxies.updateProxyById)(fileName + '#' + uniqueLocalName, type);
    }
  },
  reset: function reset() {
    (0, _proxies.resetProxies)();
  },
  patch: function patch(React) {
    if (!React.createElement.isPatchedByReactHotLoader) {
      var originalCreateElement = React.createElement;
      // Trick React into rendering a proxy so that
      // its state is preserved when the class changes.
      // This will update the proxy if it's for a known type.
      React.createElement = function (type) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalCreateElement.apply(undefined, [resolveType(type)].concat(args));
      };
      React.createElement.isPatchedByReactHotLoader = true;
    }

    if (!React.createFactory.isPatchedByReactHotLoader) {
      // Patch React.createFactory to use patched createElement
      // because the original implementation uses the internal,
      // unpatched ReactElement.createElement
      React.createFactory = function (type) {
        var factory = React.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };
      React.createFactory.isPatchedByReactHotLoader = true;
    }

    if (!React.Children.only.isPatchedByReactHotLoader) {
      var originalChildrenOnly = React.Children.only;
      // Use the same trick as React.createElement
      React.Children.only = function (children) {
        return originalChildrenOnly(_extends({}, children, { type: resolveType(children.type) }));
      };
      React.Children.only.isPatchedByReactHotLoader = true;
    }

    reactHotLoader.reset();
  },


  disableProxyCreation: false,

  config: {
    logLevel: 'error'
  }
};

exports.default = reactHotLoader;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/reconciler/proxies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.resetProxies = exports.createProxyForType = exports.updateProxyById = exports.getProxyByType = exports.getIdByType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactStandIn = __webpack_require__("./node_modules/react-stand-in/lib/index.js");

var _reactStandIn2 = _interopRequireDefault(_reactStandIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proxiesByID = void 0;
var idsByType = void 0;

var elementCount = 0;

var generateTypeId = function generateTypeId() {
  return 'auto-' + elementCount++;
};

var getIdByType = exports.getIdByType = function getIdByType(type) {
  return idsByType.get(type);
};

var getProxyByType = exports.getProxyByType = function getProxyByType(type) {
  return proxiesByID[getIdByType(type)];
};

var autoWrapper = function autoWrapper(element) {
  // post wrap on post render
  if (!element) {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(autoWrapper);
  }
  if (typeof element.type === 'function') {
    var proxy = getProxyByType(element.type);
    if (proxy) {
      return _extends({}, element, {
        type: proxy.get()
      });
    }
  }
  return element;
};

var updateProxyById = exports.updateProxyById = function updateProxyById(id, type) {
  // Remember the ID.
  idsByType.set(type, id);

  if (!proxiesByID[id]) {
    proxiesByID[id] = (0, _reactStandIn2.default)(type, id, autoWrapper);
  } else {
    proxiesByID[id].update(type);
  }
  return proxiesByID[id];
};

var createProxyForType = exports.createProxyForType = function createProxyForType(type) {
  return getProxyByType(type) || updateProxyById(generateTypeId(), type);
};

var resetProxies = exports.resetProxies = function resetProxies() {
  proxiesByID = {};
  idsByType = new WeakMap();
};

/***/ }),

/***/ "./node_modules/react-hot-loader/patch.js":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable import/no-unresolved */
module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/patch.js")


/***/ }),

/***/ "./node_modules/react-stand-in/lib/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var config = {
  logger: console
};

var setConfig = exports.setConfig = function setConfig(obj) {
  Object.assign(config, obj);
};

exports.default = config;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var PREFIX = exports.PREFIX = '__reactstandin__';
var PROXY_KEY = exports.PROXY_KEY = PREFIX + 'key';
var GENERATION = exports.GENERATION = PREFIX + 'proxyGeneration';
var REGENERATE_METHOD = exports.REGENERATE_METHOD = PREFIX + 'regenerateByEval';
var UNWRAP_PROXY = exports.UNWRAP_PROXY = PREFIX + 'getCurrent';
var CACHED_RESULT = exports.CACHED_RESULT = PREFIX + 'cachedResult';

/***/ }),

/***/ "./node_modules/react-stand-in/lib/createClassProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _transferStaticProps = __webpack_require__("./node_modules/react-stand-in/lib/transferStaticProps.js");

var _transferStaticProps2 = _interopRequireDefault(_transferStaticProps);

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

var _utils = __webpack_require__("./node_modules/react-stand-in/lib/utils.js");

var _inject = __webpack_require__("./node_modules/react-stand-in/lib/inject.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = Object.prototype.hasOwnProperty;

var proxies = new WeakMap();

var defaultRenderOptions = {
  preRender: _utils.identity,
  postRender: function postRender(result) {
    return result;
  }
};

var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
  return (0, _utils.safeDefineProperty)(Class.prototype, methodName, {
    configurable: true,
    writable: true,
    enumerable: false,
    value: methodBody
  });
};

function createClassProxy(InitialComponent, proxyKey, options) {
  var renderOptions = _extends({}, defaultRenderOptions, options);
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = proxies.get(InitialComponent);

  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = void 0;
  var savedDescriptors = {};
  var injectedMembers = {};
  var proxyGeneration = 0;
  var isFunctionalComponent = !(0, _utils.isReactClass)(InitialComponent);

  var lastInstance = null;

  function postConstructionAction() {
    this[_constants.GENERATION] = 0;

    // As long we can't override constructor
    // every class shall evolve from a base class
    (0, _inject.inject)(this, proxyGeneration, injectedMembers);

    lastInstance = this;
  }

  function proxiedUpdate() {
    (0, _inject.inject)(this, proxyGeneration, injectedMembers);
  }

  function lifeCycleWrapperFactory(wrapperName) {
    return function wrappedMethod() {
      proxiedUpdate.call(this);

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
    };
  }

  var componentWillReceiveProps = lifeCycleWrapperFactory('componentWillReceiveProps');
  var componentWillUpdate = lifeCycleWrapperFactory('componentWillUpdate');

  function proxiedRender() {
    proxiedUpdate.call(this);
    renderOptions.preRender(this);

    var result = void 0;

    // We need to use hasOwnProperty here, as the cached result is a React node
    // and can be null or some other falsy value.
    if (has.call(this, _constants.CACHED_RESULT)) {
      result = this[_constants.CACHED_RESULT];
      delete this[_constants.CACHED_RESULT];
    } else if (isFunctionalComponent) {
      result = CurrentComponent(this.props, this.context);
    } else {
      result = CurrentComponent.prototype.render.call(this);
    }

    return renderOptions.postRender(result);
  }

  var defineProxyMethods = function defineProxyMethods(Proxy) {
    defineClassMember(Proxy, 'render', proxiedRender);
    defineClassMember(Proxy, 'componentWillReceiveProps', componentWillReceiveProps);
    defineClassMember(Proxy, 'componentWillUpdate', componentWillUpdate);
  };

  var ProxyFacade = void 0;
  var ProxyComponent = null;

  if (!isFunctionalComponent) {
    ProxyComponent = (0, _utils.proxyClassCreator)(InitialComponent, postConstructionAction);

    defineProxyMethods(ProxyComponent);

    ProxyFacade = ProxyComponent;
  } else {
    // This function only gets called for the initial mount. The actual
    // rendered component instance will be the return value.

    // eslint-disable-next-line func-names
    ProxyFacade = function ProxyFacade(props, context) {
      var result = CurrentComponent(props, context);

      // This is a Relay-style container constructor. We can't do the prototype-
      // style wrapping for this as we do elsewhere, so just we just pass it
      // through as-is.
      if ((0, _utils.isReactComponentInstance)(result)) {
        ProxyComponent = null;
        return result;
      }

      // Otherwise, it's a normal functional component. Build the real proxy
      // and use it going forward.
      ProxyComponent = (0, _utils.proxyClassCreator)(_react.Component, postConstructionAction);

      defineProxyMethods(ProxyComponent);

      var determinateResult = new ProxyComponent(props, context);

      // Cache the initial render result so we don't call the component function
      // a second time for the initial render.
      determinateResult[_constants.CACHED_RESULT] = result;
      return determinateResult;
    };
  }

  function get() {
    return ProxyFacade;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  (0, _utils.safeDefineProperty)(ProxyFacade, _constants.UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  (0, _utils.safeDefineProperty)(ProxyFacade, _constants.PROXY_KEY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: proxyKey
  });

  (0, _utils.safeDefineProperty)(ProxyFacade, 'toString', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: function toString() {
      return String(CurrentComponent);
    }
  });

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    if (NextComponent === CurrentComponent) {
      return;
    }

    // Prevent proxy cycles
    var existingProxy = proxies.get(NextComponent);
    if (existingProxy) {
      update(existingProxy[_constants.UNWRAP_PROXY]());
      return;
    }

    isFunctionalComponent = !(0, _utils.isReactClass)(NextComponent);
    proxyGeneration++;

    // Save the next constructor so we call it
    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent;

    // Try to infer displayName
    var displayName = (0, _utils.getDisplayName)(CurrentComponent);
    ProxyFacade.displayName = displayName;

    if (ProxyComponent) {
      (0, _utils.safeDefineProperty)(ProxyComponent, 'name', {
        value: displayName
      });
    }

    savedDescriptors = (0, _transferStaticProps2.default)(ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);

    if (isFunctionalComponent || !ProxyComponent) {
      // nothing
    } else {
      (0, _inject.checkLifeCycleMethods)(ProxyComponent, NextComponent);
      Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
      if (proxyGeneration > 1) {
        injectedMembers = (0, _inject.mergeComponents)(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);
      }
    }
  }

  update(InitialComponent);

  var proxy = { get: get, update: update };
  proxies.set(ProxyFacade, proxy);

  (0, _utils.safeDefineProperty)(proxy, _constants.UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

exports.default = createClassProxy;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _createClassProxy = __webpack_require__("./node_modules/react-stand-in/lib/createClassProxy.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createClassProxy).default;
  }
});

var _config = __webpack_require__("./node_modules/react-stand-in/lib/config.js");

Object.defineProperty(exports, 'setConfig', {
  enumerable: true,
  get: function get() {
    return _config.setConfig;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-stand-in/lib/inject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inject = exports.checkLifeCycleMethods = exports.mergeComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__("./node_modules/react-stand-in/lib/utils.js");

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

var _config = __webpack_require__("./node_modules/react-stand-in/lib/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {
  var injectedCode = {};
  try {
    var nextInstance = (0, _utils.safeReactConstructor)(NextComponent, lastInstance);

    try {
      // Bypass babel class inheritance checking
      (0, _utils.deepPrototypeUpdate)(InitialComponent, NextComponent);
    } catch (e) {
      // It was ES6 class
    }

    var proxyInstance = (0, _utils.safeReactConstructor)(ProxyComponent, lastInstance);

    if (!nextInstance || !proxyInstance) {
      return injectedCode;
    }

    var mergedAttrs = _extends({}, proxyInstance, nextInstance);
    var hasRegenerate = proxyInstance[_constants.REGENERATE_METHOD];
    var ownKeys = (0, _utils.getOwnKeys)(Object.getPrototypeOf(ProxyComponent.prototype));
    Object.keys(mergedAttrs).forEach(function (key) {
      if (key.startsWith(_constants.PREFIX)) return;
      var nextAttr = nextInstance[key];
      var prevAttr = proxyInstance[key];
      if (prevAttr && nextAttr) {
        if ((0, _utils.isNativeFunction)(nextAttr) || (0, _utils.isNativeFunction)(prevAttr)) {
          // this is bound method
          var isSameArity = nextAttr.length === prevAttr.length;
          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];
          if (isSameArity && existsInPrototype) {
            if (hasRegenerate) {
              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
            } else {
              _config2.default.logger.warn('React-stand-in:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
            }
          } else {
            _config2.default.logger.warn('React-stand-in:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
          }
          return;
        }

        var nextString = String(nextAttr);
        var injectedBefore = injectedMembers[key];
        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore)) {
          if (!hasRegenerate) {
            if (nextString.indexOf('function') < 0 && nextString.indexOf('=>') < 0) {
              // just copy prop over
              injectedCode[key] = nextAttr;
            } else {
              _config2.default.logger.warn('React-stand-in:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
            }
          } else {
            injectedCode[key] = nextAttr;
          }
        }
      }
    });
  } catch (e) {
    _config2.default.logger.warn('React-stand-in:', e);
  }
  return injectedCode;
}

function checkLifeCycleMethods(ProxyComponent, NextComponent) {
  try {
    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
    var p2 = NextComponent.prototype;
    _utils.reactLifeCycleMountMethods.forEach(function (key) {
      var d1 = Object.getOwnPropertyDescriptor(p1, key) || { value: p1[key] };
      var d2 = Object.getOwnPropertyDescriptor(p2, key) || { value: p2[key] };
      if (!(0, _utils.shallowStringsEqual)(d1, d2)) {
        _config2.default.logger.warn('React-stand-in:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
      }
    });
  } catch (e) {
    // Ignore errors
  }
}

function inject(target, currentGeneration, injectedMembers) {
  if (target[_constants.GENERATION] !== currentGeneration) {
    var hasRegenerate = !!target[_constants.REGENERATE_METHOD];
    Object.keys(injectedMembers).forEach(function (key) {
      try {
        if (hasRegenerate) {
          target[_constants.REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this = this; // common babel transpile\n          var _this2 = this; // common babel transpile          \n          return ' + injectedMembers[key] + ';\n          }).call(this)');
        } else {
          target[key] = injectedMembers[key];
        }
      } catch (e) {
        _config2.default.logger.warn('React-stand-in: Failed to regenerate method ', key, ' of class ', target);
        _config2.default.logger.warn('got error', e);
      }
    });

    target[_constants.GENERATION] = currentGeneration;
  }
}

exports.mergeComponents = mergeComponents;
exports.checkLifeCycleMethods = checkLifeCycleMethods;
exports.inject = inject;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/transferStaticProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _utils = __webpack_require__("./node_modules/react-stand-in/lib/utils.js");

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', _constants.PROXY_KEY, _constants.UNWRAP_PROXY];

function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    if (!(0, _shallowequal2.default)(prevDescriptor, savedDescriptor)) {
      (0, _utils.safeDefineProperty)(NextComponent, key, prevDescriptor);
    }
  });

  // Copy newly defined static methods and properties
  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !(0, _shallowequal2.default)(savedDescriptor, prevDescriptor)) {
      (0, _utils.safeDefineProperty)(NextComponent, key, prevDescriptor);
      return;
    }

    if (prevDescriptor && !savedDescriptor) {
      (0, _utils.safeDefineProperty)(ProxyComponent, key, prevDescriptor);
      return;
    }

    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
      configurable: true
    });

    savedDescriptors[key] = nextDescriptor;
    (0, _utils.safeDefineProperty)(ProxyComponent, key, nextDescriptor);
  });

  // Remove static methods and properties that are no longer defined
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }
    // Skip statics that exist on the next class
    if (NextComponent.hasOwnProperty(key)) {
      return;
    }
    // Skip non-configurable statics
    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    if (proxyDescriptor && !proxyDescriptor.configurable) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !(0, _shallowequal2.default)(savedDescriptor, prevDescriptor)) {
      return;
    }

    (0, _utils.safeDefineProperty)(ProxyComponent, key, {
      value: undefined
    });
  });

  return savedDescriptors;
}

exports.default = transferStaticProps;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.proxyClassCreator = exports.isReactComponentInstance = exports.doesSupportClasses = exports.identity = exports.reactLifeCycleMountMethods = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-eval, func-names */


exports.getDisplayName = getDisplayName;
exports.isReactClass = isReactClass;
exports.safeReactConstructor = safeReactConstructor;
exports.isNativeFunction = isNativeFunction;
exports.getOwnKeys = getOwnKeys;
exports.shallowStringsEqual = shallowStringsEqual;
exports.deepPrototypeUpdate = deepPrototypeUpdate;
exports.safeDefineProperty = safeDefineProperty;

var _config = __webpack_require__("./node_modules/react-stand-in/lib/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDisplayName(Component) {
  var displayName = Component.displayName || Component.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Unknown';
}

var reactLifeCycleMountMethods = exports.reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

function isReactClass(Component) {
  return Component.prototype && (Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render);
}

function safeReactConstructor(Component, lastInstance) {
  try {
    if (lastInstance) {
      return new Component(lastInstance.props, lastInstance.context);
    }
    return new Component({}, {});
  } catch (e) {
    // some components, like Redux connect could not be created without proper context
  }
  return null;
}

function isNativeFunction(fn) {
  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
}

var identity = exports.identity = function identity(a) {
  return a;
};

var doesSupportClasses = exports.doesSupportClasses = function () {
  try {
    eval('class Test {}');
    return true;
  } catch (e) {
    return false;
  }
}();

var ES6ProxyComponentFactory = doesSupportClasses && eval('\n(function(InitialParent, postConstructionAction) {\n  return class ProxyComponent extends InitialParent {\n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n');

var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
  function ProxyComponent(props, context) {
    InitialParent.call(this, props, context);
    postConstructionAction.call(this);
  }
  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  Object.setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent;
};

var isReactComponentInstance = exports.isReactComponentInstance = function isReactComponentInstance(el) {
  return el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && !el.type && el.render;
};

var proxyClassCreator = exports.proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

function getOwnKeys(target) {
  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
}

function shallowStringsEqual(a, b) {
  for (var key in a) {
    if (String(a[key]) !== String(b[key])) {
      return false;
    }
  }
  return true;
}

function deepPrototypeUpdate(dest, source) {
  var deepDest = Object.getPrototypeOf(dest);
  var deepSrc = Object.getPrototypeOf(source);
  if (deepDest && deepSrc && deepSrc !== deepDest) {
    deepPrototypeUpdate(deepDest, deepSrc);
  }
  if (source.prototype && source.prototype !== dest.prototype) {
    dest.prototype = source.prototype;
  }
}

function safeDefineProperty(target, key, props) {
  try {
    Object.defineProperty(target, key, props);
  } catch (e) {
    _config2.default.logger.warn('Error while wrapping', key, ' -> ', e);
  }
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });
    this._sheet.inject();
    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_masthead__ = __webpack_require__("./components/masthead.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_heading__ = __webpack_require__("./components/heading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_columnize__ = __webpack_require__("./components/columnize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_header__ = __webpack_require__("./containers/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_icon__ = __webpack_require__("./components/icon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_some__ = __webpack_require__("./components/some.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {
        // navigator.serviceWorker.register('/sw.js')
        //  .catch(err => console.error('Service worker registration failed', err))
      } else {
        console.log('Service worker not supported');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2488276608',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'title',
            {
              className: 'jsx-2488276608',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            'Johanna Salovaara'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'description', content: 'Autan yrityksi\xE4, j\xE4rjest\xF6j\xE4 ja asiantuntijoita viestim\xE4\xE4n paremmin.', className: 'jsx-2488276608',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-2488276608',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2488276608',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'manifest', href: '/static/manifest.webmanifest', className: 'jsx-2488276608',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'theme-color', content: __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].colors.salmon, className: 'jsx-2488276608',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_header__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_masthead__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608' + ' ' + 'm-text-align--center',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
            { semanticLevel: 'h1', textAlign: 'center', gradientDirection: 'to white', __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            'Vaikuttavaa',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
              className: 'jsx-2488276608',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            }),
            'viestint\xE4\xE4'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-2488276608',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            'Autan yrityksi\xE4, j\xE4rjest\xF6j\xE4 ja asiantuntijoita viestim\xE4\xE4n paremmin. Mik\xE4li haluat kasvattaa tietoisuutta br\xE4ndist\xE4si, sitouttaa asiakkaasi tehokkaammin tai vaikuttaa ymp\xE4r\xF6iv\xE4\xE4n yhteiskuntaasi, on viestint\xE4 keino tavoittaa yleis\xF6si.'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-2488276608',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            'Viestinn\xE4n ytimess\xE4 ovat laadukkaat sis\xE4ll\xF6t. Tuotan sis\xE4lt\xF6j\xE4, jotka vastaavat tarpeisiisi \u2013 oli se sitten keskustelun her\xE4tt\xE4minen, toimintasi merkityksen muotoilu tai digitaalisen verkostosi kasvattaminen.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608' + ' ' + 'm-bg-color--salmon',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
            { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to salmon', __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            'Palvelut'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
            { large: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_icon__["a" /* default */], { name: 'calm', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
                { semanticLevel: 'h3', size: 'medium', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  }
                },
                'Viestinn\xE4n',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                  className: 'jsx-2488276608',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  }
                }),
                'sis\xE4ll\xF6t'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'ul',
                {
                  className: 'jsx-2488276608',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    }
                  },
                  'Tiedotteet, lehdist\xF6materiaalit'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  'Blogit'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  'Artikkelit'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  },
                  'Nettisivutekstit, esitteet'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    }
                  },
                  'Sosiaalisen median sis\xE4ll\xF6t'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67
                    }
                  },
                  'Esitykset, presentaatiot, puheet'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_icon__["a" /* default */], { name: 'enthusiastic', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
                { semanticLevel: 'h3', size: 'medium', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                'Viestinn\xE4n',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                  className: 'jsx-2488276608',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                'strateginen',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                  className: 'jsx-2488276608',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                'suunnittelu'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'ul',
                {
                  className: 'jsx-2488276608',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77
                    }
                  },
                  'Ydinviestit, br\xE4nditarinat'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 78
                    }
                  },
                  'Viestint\xE4suunnitelmat'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79
                    }
                  },
                  'Viestint\xE4kalenterit'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_icon__["a" /* default */], { name: 'wink', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
                { semanticLevel: 'h3', size: 'medium', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                'Viestinn\xE4n',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                  className: 'jsx-2488276608',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  }
                }),
                'konsultointi'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'ul',
                {
                  className: 'jsx-2488276608',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 89
                    }
                  },
                  'Sparraus ja tuki'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90
                    }
                  },
                  'Valmennukset'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608' + ' ' + 'm-text-align--center',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
            { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to white', __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              }
            },
            'Kenelle'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-2488276608',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            },
            'Teen viestint\xE4\xE4 kaikenlaisille organisaatioille yrityksist\xE4 j\xE4rjest\xF6ihin. Viestint\xE4- ja markkinointitoimistoille toimin freelancerina sis\xE4ll\xF6ntuotannon ja viestinn\xE4n suunnittelun projekteissa.'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-2488276608',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            },
            'Autan my\xF6s eri alojen asiantuntijoita, tutkijoita ja tieteentekij\xF6it\xE4 viestien kiteytt\xE4misess\xE4 ja selkeytt\xE4misess\xE4. K\xE4\xE4nn\xE4n vaikeat teoriat ja tutkimustulokset kansankielelle ja autan tavoittamaan oikeat yleis\xF6t yhteiskunnallisessa keskustelussa.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608' + ' ' + 'm-bg-color--salmon',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
            { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to salmon', __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              }
            },
            'Tausta'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
              { semanticLevel: 'h3', size: 'medium', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 116
                }
              },
              'Viestint\xE4'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 119
                }
              },
              'Ennen freelanceriksi hypp\xE4\xE4mist\xE4 toimin viisi vuotta eri positioissa viestint\xE4toimistossa. Viestinn\xE4n kokemusta minulle on kertynyt p\xF6rssiyhti\xF6ist\xE4 ja j\xE4rjest\xF6ist\xE4 startup-yrityksiin, mm. IT-, turvallisuus-, rakennus- ja terveysaloilta. Olen toteuttanut asiakkailleni viestint\xE4\xE4 sis\xE4ll\xF6ntuottajan, valmentajan, viestint\xE4konsultin ja viestinn\xE4n suunnittelijan rooleissa.'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
              { semanticLevel: 'h3', size: 'medium', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125
                }
              },
              'Markkinointi'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 128
                }
              },
              'Olen valmistunut Turun yliopiston kauppakorkeakoulusta kauppatieteiden maisteriksi (KTM) markkinointi p\xE4\xE4aineenani. Opintojeni ohella ty\xF6skentelin mainostoimistossa, jossa kartutin k\xE4yt\xE4nn\xF6n kokemusta markkinoinnin ja br\xE4nd\xE4yksen maailmasta.'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
              { semanticLevel: 'h3', size: 'medium', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134
                }
              },
              'Teologia'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                }
              },
              'Viestinn\xE4n t\xF6iden ohella opiskelen teologiaa ja uskontotutkimusta Helsingin yliopistolla. Syd\xE4nt\xE4ni l\xE4hell\xE4 ovat siis markkinointiviestinn\xE4n lis\xE4ksi eksistentiaaliset kysymykset ja hengellinen pohdiskelu.'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
            { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to white', __source: {
                fileName: _jsxFileName,
                lineNumber: 144
              }
            },
            'Yhteystiedot'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
              { semanticLevel: 'h3', size: 'medium', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                }
              },
              'Pyyd\xE4 tarjousta',
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 150
                }
              }),
              'tai kysy lis\xE4\xE4!'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                { href: 'mailto:johanna.salovaara11@gmail.com', className: 'jsx-2488276608',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  }
                },
                'johanna.salovaara11@gmail.com'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 154
                }
              }),
              '\u2013',
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                className: 'jsx-2488276608',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 156
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                { href: 'tel:+358400642709', className: 'jsx-2488276608',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                  }
                },
                '+358 400 642 709'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_some__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/portrait.jpg', alt: 'Portrait of Johanna Salovaara', className: 'jsx-2488276608' + ' ' + 'portrait',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '4282973069',
          css: '@font-face{font-family:\'Sporting Grotesque Bold\';src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.eot\');src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.eot?#iefix\') format(\'embedded-opentype\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.woff\') format(\'woff\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.woff2\') format(\'woff2\');font-weight:normal;font-style:normal;}@font-face{font-family:\'Quattrocento Regular\';src:url(\'/static/webfonts/Quattrocento/quattrocento-regular-webfont.woff2\') format(\'woff2\'), url(\'/static/webfonts/Quattrocento/quattrocento-regular-webfont.woff\') format(\'woff\');font-weight:normal;font-style:normal;}@font-face{font-family:\'Sporting Grotesque Regular\';src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.eot\');src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.eot?#iefix\') format(\'embedded-opentype\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.woff\') format(\'woff\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.woff2\') format(\'woff2\');font-weight:normal;font-style:normal;}@font-face{font-family:\'Quattrocento Bold\';src:url(\'/static/webfonts/Quattrocento/quattrocento-bold-webfont.woff2\') format(\'woff2\'), url(\'/static/webfonts/Quattrocento/quattrocento-bold-webfont.woff\') format(\'woff\');font-weight:normal;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFLMkIsQUFHbUQsQUFVRyxBQVVOLEFBUUgsZ0NBRXNELEdBUkcsR0FyQmYsR0FVRyx1RUFQYyxNQVVHLHVGQWlCM0UsU0FSQSxVQVNELFNBUkEsU0FTcEIsU0FSQSxrSkFwQnFCLGVBVUEsSUFURCxlQVVBLEdBVHBCLGVBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0pvb25hcy9Eb2N1bWVudHMvQ29kZS9TaXRlcy9qb2hhbm5hc2Fsb3ZhYXJhLmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNYXN0aGVhZCBmcm9tICcuLi9jb21wb25lbnRzL21hc3RoZWFkJ1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkaW5nJ1xuaW1wb3J0IENvbHVtbml6ZSBmcm9tICcuLi9jb21wb25lbnRzL2NvbHVtbml6ZSdcbmltcG9ydCBTaXRlSGVhZGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvaGVhZGVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xuaW1wb3J0IFNvTWUgZnJvbSAnLi4vY29tcG9uZW50cy9zb21lJ1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgLy8gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpXG4gICAgICAvLyAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdTZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyKSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIG5vdCBzdXBwb3J0ZWQnKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Kb2hhbm5hIFNhbG92YWFyYTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0F1dGFuIHlyaXR5a3Npw6QsIGrDpHJqZXN0w7Zqw6QgamEgYXNpYW50dW50aWpvaXRhIHZpZXN0aW3DpMOkbiBwYXJlbW1pbi4nIC8+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3N0YXRpYy9tYW5pZmVzdC53ZWJtYW5pZmVzdCcgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD17c2V0dGluZ3MuY29sb3JzLnNhbG1vbn0gLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxTaXRlSGVhZGVyIC8+XG4gICAgICAgIDxNYXN0aGVhZCAvPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbS10ZXh0LWFsaWduLS1jZW50ZXInPlxuICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gxJyB0ZXh0QWxpZ249J2NlbnRlcicgZ3JhZGllbnREaXJlY3Rpb249J3RvIHdoaXRlJz5cbiAgICAgICAgICAgIFZhaWt1dHRhdmFhPGJyIC8+dmllc3RpbnTDpMOkXG4gICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBdXRhbiB5cml0eWtzacOkLCBqw6RyamVzdMO2asOkIGphIGFzaWFudHVudGlqb2l0YSB2aWVzdGltw6TDpG4gcGFyZW1taW4uIE1pa8OkbGkgaGFsdWF0IGthc3ZhdHRhYSB0aWV0b2lzdXV0dGEgYnLDpG5kaXN0w6RzaSwgc2l0b3V0dGFhIGFzaWFra2Fhc2kgdGVob2trYWFtbWluIHRhaSB2YWlrdXR0YWEgeW1ww6Ryw7ZpdsOkw6RuIHlodGVpc2t1bnRhYXNpLCBvbiB2aWVzdGludMOkIGtlaW5vIHRhdm9pdHRhYSB5bGVpc8O2c2kuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBWaWVzdGlubsOkbiB5dGltZXNzw6Qgb3ZhdCBsYWFkdWtrYWF0IHNpc8OkbGzDtnQuIFR1b3RhbiBzaXPDpGx0w7Zqw6QsIGpvdGthIHZhc3RhYXZhdCB0YXJwZWlzaWlzaSDigJMgb2xpIHNlIHNpdHRlbiBrZXNrdXN0ZWx1biBoZXLDpHR0w6RtaW5lbiwgdG9pbWludGFzaSBtZXJraXR5a3NlbiBtdW90b2lsdSB0YWkgZGlnaXRhYWxpc2VuIHZlcmtvc3Rvc2kga2FzdmF0dGFtaW5lbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J20tYmctY29sb3ItLXNhbG1vbic+XG4gICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDInIHRleHRBbGlnbj0nY2VudGVyJyBncmFkaWVudERpcmVjdGlvbj0ndG8gc2FsbW9uJz5cbiAgICAgICAgICAgIFBhbHZlbHV0XG4gICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgPENvbHVtbml6ZSBsYXJnZT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9J2NhbG0nIC8+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgICAgICAgIFZpZXN0aW5uw6RuPGJyIC8+c2lzw6RsbMO2dFxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+VGllZG90dGVldCwgbGVoZGlzdMO2bWF0ZXJpYWFsaXQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5CbG9naXQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BcnRpa2tlbGl0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TmV0dGlzaXZ1dGVrc3RpdCwgZXNpdHRlZXQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Tb3NpYWFsaXNlbiBtZWRpYW4gc2lzw6RsbMO2dDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkVzaXR5a3NldCwgcHJlc2VudGFhdGlvdCwgcHVoZWV0PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdlbnRodXNpYXN0aWMnIC8+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgICAgICAgIFZpZXN0aW5uw6RuPGJyIC8+c3RyYXRlZ2luZW48YnIgLz5zdXVubml0dGVsdVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+WWRpbnZpZXN0aXQsIGJyw6RuZGl0YXJpbmF0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Vmllc3RpbnTDpHN1dW5uaXRlbG1hdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlZpZXN0aW50w6RrYWxlbnRlcml0PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPSd3aW5rJyAvPlxuICAgICAgICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMycgc2l6ZT0nbWVkaXVtJz5cbiAgICAgICAgICAgICAgICBWaWVzdGlubsOkbjxiciAvPmtvbnN1bHRvaW50aVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+U3BhcnJhdXMgamEgdHVraTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlZhbG1lbm51a3NldDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbHVtbml6ZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbS10ZXh0LWFsaWduLS1jZW50ZXInPlxuICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gyJyB0ZXh0QWxpZ249J2NlbnRlcicgZ3JhZGllbnREaXJlY3Rpb249J3RvIHdoaXRlJz5cbiAgICAgICAgICAgIEtlbmVsbGVcbiAgICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRlZW4gdmllc3RpbnTDpMOkIGthaWtlbmxhaXNpbGxlIG9yZ2FuaXNhYXRpb2lsbGUgeXJpdHlrc2lzdMOkIGrDpHJqZXN0w7ZpaGluLiBWaWVzdGludMOkLSBqYSBtYXJra2lub2ludGl0b2ltaXN0b2lsbGUgdG9pbWluIGZyZWVsYW5jZXJpbmEgc2lzw6RsbMO2bnR1b3Rhbm5vbiBqYSB2aWVzdGlubsOkbiBzdXVubml0dGVsdW4gcHJvamVrdGVpc3NhLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQXV0YW4gbXnDtnMgZXJpIGFsb2plbiBhc2lhbnR1bnRpam9pdGEsIHR1dGtpam9pdGEgamEgdGlldGVlbnRla2lqw7ZpdMOkIHZpZXN0aWVuIGtpdGV5dHTDpG1pc2Vzc8OkIGphIHNlbGtleXR0w6RtaXNlc3PDpC4gS8Okw6RubsOkbiB2YWlrZWF0IHRlb3JpYXQgamEgdHV0a2ltdXN0dWxva3NldCBrYW5zYW5raWVsZWxsZSBqYSBhdXRhbiB0YXZvaXR0YW1hYW4gb2lrZWF0IHlsZWlzw7Z0IHlodGVpc2t1bm5hbGxpc2Vzc2Ega2Vza3VzdGVsdXNzYS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J20tYmctY29sb3ItLXNhbG1vbic+XG4gICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDInIHRleHRBbGlnbj0nY2VudGVyJyBncmFkaWVudERpcmVjdGlvbj0ndG8gc2FsbW9uJz5cbiAgICAgICAgICAgIFRhdXN0YVxuICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgIDxDb2x1bW5pemU+XG4gICAgICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMycgc2l6ZT0nbWVkaXVtJz5cbiAgICAgICAgICAgICAgVmllc3RpbnTDpFxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEVubmVuIGZyZWVsYW5jZXJpa3NpIGh5cHDDpMOkbWlzdMOkIHRvaW1pbiB2aWlzaSB2dW90dGEgZXJpIHBvc2l0aW9pc3NhIHZpZXN0aW50w6R0b2ltaXN0b3NzYS4gVmllc3Rpbm7DpG4ga29rZW11c3RhIG1pbnVsbGUgb24ga2VydHlueXQgcMO2cnNzaXlodGnDtmlzdMOkIGphIGrDpHJqZXN0w7Zpc3TDpCBzdGFydHVwLXlyaXR5a3NpaW4sIG1tLiBJVC0sIHR1cnZhbGxpc3V1cy0sIHJha2VubnVzLSBqYSB0ZXJ2ZXlzYWxvaWx0YS4gT2xlbiB0b3RldXR0YW51dCBhc2lha2thaWxsZW5pIHZpZXN0aW50w6TDpCBzaXPDpGxsw7ZudHVvdHRhamFuLCB2YWxtZW50YWphbiwgdmllc3RpbnTDpGtvbnN1bHRpbiBqYSB2aWVzdGlubsOkbiBzdXVubml0dGVsaWphbiByb29sZWlzc2EuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9Db2x1bW5pemU+XG5cbiAgICAgICAgICA8Q29sdW1uaXplPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDMnIHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgICAgIE1hcmtraW5vaW50aVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE9sZW4gdmFsbWlzdHVudXQgVHVydW4geWxpb3Bpc3RvbiBrYXVwcGFrb3JrZWFrb3VsdXN0YSBrYXVwcGF0aWV0ZWlkZW4gbWFpc3Rlcmlrc2kgKEtUTSkgbWFya2tpbm9pbnRpIHDDpMOkYWluZWVuYW5pLiBPcGludG9qZW5pIG9oZWxsYSB0ecO2c2tlbnRlbGluIG1haW5vc3RvaW1pc3Rvc3NhLCBqb3NzYSBrYXJ0dXRpbiBrw6R5dMOkbm7Dtm4ga29rZW11c3RhIG1hcmtraW5vaW5uaW4gamEgYnLDpG5kw6R5a3NlbiBtYWFpbG1hc3RhLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQ29sdW1uaXplPlxuXG4gICAgICAgICAgPENvbHVtbml6ZT5cbiAgICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgICAgICBUZW9sb2dpYVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFZpZXN0aW5uw6RuIHTDtmlkZW4gb2hlbGxhIG9waXNrZWxlbiB0ZW9sb2dpYWEgamEgdXNrb250b3R1dGtpbXVzdGEgSGVsc2luZ2luIHlsaW9waXN0b2xsYS4gU3lkw6RudMOkbmkgbMOkaGVsbMOkIG92YXQgc2lpcyBtYXJra2lub2ludGl2aWVzdGlubsOkbiBsaXPDpGtzaSBla3Npc3RlbnRpYWFsaXNldCBreXN5bXlrc2V0IGphIGhlbmdlbGxpbmVuIHBvaGRpc2tlbHUuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9Db2x1bW5pemU+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMicgdGV4dEFsaWduPSdjZW50ZXInIGdyYWRpZW50RGlyZWN0aW9uPSd0byB3aGl0ZSc+XG4gICAgICAgICAgICBZaHRleXN0aWVkb3RcbiAgICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgICA8Q29sdW1uaXplPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDMnIHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgICAgIFB5eWTDpCB0YXJqb3VzdGE8YnIgLz50YWkga3lzeSBsaXPDpMOkIVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpqb2hhbm5hLnNhbG92YWFyYTExQGdtYWlsLmNvbSc+am9oYW5uYS5zYWxvdmFhcmExMUBnbWFpbC5jb208L2E+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICDigJNcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J3RlbDorMzU4NDAwNjQyNzA5Jz4rMzU4IDQwMCA2NDIgNzA5PC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQ29sdW1uaXplPlxuXG4gICAgICAgICAgPFNvTWUgLz5cblxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdwb3J0cmFpdCcgc3JjPScvc3RhdGljL3BvcnRyYWl0LmpwZycgYWx0PSdQb3J0cmFpdCBvZiBKb2hhbm5hIFNhbG92YWFyYScgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1Nwb3J0aW5nIEdyb3Rlc3F1ZSBCb2xkJztcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1Cb2xkLmVvdCcpO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLUJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTcG9ydGluZyBHcm90ZXNxdWUgUmVndWxhcic7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtUmVndWxhci5lb3QnKTtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1SZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8gUmVndWxhcic7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy93ZWJmb250cy9RdWF0dHJvY2VudG8vcXVhdHRyb2NlbnRvLXJlZ3VsYXItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvd2ViZm9udHMvUXVhdHRyb2NlbnRvL3F1YXR0cm9jZW50by1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8gQm9sZCc7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy93ZWJmb250cy9RdWF0dHJvY2VudG8vcXVhdHRyb2NlbnRvLWJvbGQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvd2ViZm9udHMvUXVhdHRyb2NlbnRvL3F1YXR0cm9jZW50by1ib2xkLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8gUmVndWxhcicsIHNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICR7c2V0dGluZ3MuY29sb3JzLmJsdWV9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLGgyLGgzLFxuICAgICAgICAgIGg0LGg1LGg2IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtIDFyZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1N3B4O1xuICAgICAgICAgICAgY29sb3I6ICR7c2V0dGluZ3MuY29sb3JzLmJsdWV9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtIDFyZW07XG4gICAgICAgICAgICBjb2xvcjogJHtzZXR0aW5ncy5jb2xvcnMuYmx1ZX07XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAke3NldHRpbmdzLmJyZWFrUG9pbnRzLmx9KSB7XG4gICAgICAgICAgICBwLCB1bCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubS1iZy1jb2xvci0tc2FsbW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2V0dGluZ3MuY29sb3JzLnNhbG1vbn07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm0tdGV4dC1hbGlnbi0tY2VudGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9ydHJhaXQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMCBhdXRvO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW4tYnV0LXJlYWRhYmxlIHtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwcHggMHB4LCAwcHggMHB4LCAwcHggMHB4LCAwcHggMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '866868772',
          css: 'html,body{margin:0;padding:0;font-family:\'Quattrocento Regular\',serif;color:' + __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].colors.blue + ';font-size:16px;}h1,h2,h3,h4,h5,h6{margin:0;}p{padding:0 1rem 1rem 1rem;margin:0 auto 0 auto;max-width:557px;color:' + __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].colors.blue + ';}ul{margin:0 0 0 1rem;padding:0 1rem 1rem 1rem;color:' + __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].colors.blue + ';list-style:disc;}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].breakPoints.l + '){p,ul{font-size:20px;padding-bottom:1.5rem;}}.m-bg-color--salmon{background-color:' + __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].colors.salmon + ';}.m-text-align--center{text-align:center;}.portrait{position:relative;max-width:100%;margin:1rem auto 0 auto;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.hidden-but-readable{-webkit-clip-path:polygon(0px 0px,0px 0px,0px 0px,0px 0px);clip-path:polygon(0px 0px,0px 0px,0px 0px,0px 0px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJNMkIsQUFJc0IsQUFTQSxBQUlnQixBQU9QLEFBUUQsQUFNNkIsQUFJNUIsQUFJQSxBQVFvQyxTQWpENUMsQUFTWixNQW1CMEIsR0FSQyxBQWtCM0IsQUFJaUIsQ0F6QzJCLE1BWXJCLFFBOEJHLElBZHhCLE1BUm1DLEdBUG5CLEFBb0JsQixXQVVXLEdBMUMwQixFQWFBLElBOEJSLFlBdkJYLGdCQUNsQixDQXBCaUIsRUFhakIsYUFaQSxBQThDQSxpREFKQSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSm9vbmFzL0RvY3VtZW50cy9Db2RlL1NpdGVzL2pvaGFubmFzYWxvdmFhcmEuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1hc3RoZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvbWFzdGhlYWQnXG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRpbmcnXG5pbXBvcnQgQ29sdW1uaXplIGZyb20gJy4uL2NvbXBvbmVudHMvY29sdW1uaXplJ1xuaW1wb3J0IFNpdGVIZWFkZXIgZnJvbSAnLi4vY29udGFpbmVycy9oZWFkZXInXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXG5pbXBvcnQgU29NZSBmcm9tICcuLi9jb21wb25lbnRzL3NvbWUnXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAvLyBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3N3LmpzJylcbiAgICAgIC8vICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ1NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIpKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgbm90IHN1cHBvcnRlZCcpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkpvaGFubmEgU2Fsb3ZhYXJhPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nQXV0YW4geXJpdHlrc2nDpCwgasOkcmplc3TDtmrDpCBqYSBhc2lhbnR1bnRpam9pdGEgdmllc3RpbcOkw6RuIHBhcmVtbWluLicgLz5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgICA8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc3RhdGljL21hbmlmZXN0LndlYm1hbmlmZXN0JyAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PXtzZXR0aW5ncy5jb2xvcnMuc2FsbW9ufSAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPFNpdGVIZWFkZXIgLz5cbiAgICAgICAgPE1hc3RoZWFkIC8+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtLXRleHQtYWxpZ24tLWNlbnRlcic+XG4gICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDEnIHRleHRBbGlnbj0nY2VudGVyJyBncmFkaWVudERpcmVjdGlvbj0ndG8gd2hpdGUnPlxuICAgICAgICAgICAgVmFpa3V0dGF2YWE8YnIgLz52aWVzdGludMOkw6RcbiAgICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEF1dGFuIHlyaXR5a3Npw6QsIGrDpHJqZXN0w7Zqw6QgamEgYXNpYW50dW50aWpvaXRhIHZpZXN0aW3DpMOkbiBwYXJlbW1pbi4gTWlrw6RsaSBoYWx1YXQga2FzdmF0dGFhIHRpZXRvaXN1dXR0YSBicsOkbmRpc3TDpHNpLCBzaXRvdXR0YWEgYXNpYWtrYWFzaSB0ZWhva2thYW1taW4gdGFpIHZhaWt1dHRhYSB5bXDDpHLDtml2w6TDpG4geWh0ZWlza3VudGFhc2ksIG9uIHZpZXN0aW50w6Qga2Vpbm8gdGF2b2l0dGFhIHlsZWlzw7ZzaS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFZpZXN0aW5uw6RuIHl0aW1lc3PDpCBvdmF0IGxhYWR1a2thYXQgc2lzw6RsbMO2dC4gVHVvdGFuIHNpc8OkbHTDtmrDpCwgam90a2EgdmFzdGFhdmF0IHRhcnBlaXNpaXNpIOKAkyBvbGkgc2Ugc2l0dGVuIGtlc2t1c3RlbHVuIGhlcsOkdHTDpG1pbmVuLCB0b2ltaW50YXNpIG1lcmtpdHlrc2VuIG11b3RvaWx1IHRhaSBkaWdpdGFhbGlzZW4gdmVya29zdG9zaSBrYXN2YXR0YW1pbmVuLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbS1iZy1jb2xvci0tc2FsbW9uJz5cbiAgICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMicgdGV4dEFsaWduPSdjZW50ZXInIGdyYWRpZW50RGlyZWN0aW9uPSd0byBzYWxtb24nPlxuICAgICAgICAgICAgUGFsdmVsdXRcbiAgICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgICA8Q29sdW1uaXplIGxhcmdlPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT0nY2FsbScgLz5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDMnIHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgICAgICAgVmllc3Rpbm7DpG48YnIgLz5zaXPDpGxsw7Z0XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5UaWVkb3R0ZWV0LCBsZWhkaXN0w7ZtYXRlcmlhYWxpdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkJsb2dpdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkFydGlra2VsaXQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5OZXR0aXNpdnV0ZWtzdGl0LCBlc2l0dGVldDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlNvc2lhYWxpc2VuIG1lZGlhbiBzaXPDpGxsw7Z0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+RXNpdHlrc2V0LCBwcmVzZW50YWF0aW90LCBwdWhlZXQ8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9J2VudGh1c2lhc3RpYycgLz5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDMnIHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgICAgICAgVmllc3Rpbm7DpG48YnIgLz5zdHJhdGVnaW5lbjxiciAvPnN1dW5uaXR0ZWx1XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5ZZGludmllc3RpdCwgYnLDpG5kaXRhcmluYXQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5WaWVzdGludMOkc3V1bm5pdGVsbWF0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Vmllc3RpbnTDpGthbGVudGVyaXQ8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9J3dpbmsnIC8+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgICAgICAgIFZpZXN0aW5uw6RuPGJyIC8+a29uc3VsdG9pbnRpXG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5TcGFycmF1cyBqYSB0dWtpPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+VmFsbWVubnVrc2V0PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sdW1uaXplPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtLXRleHQtYWxpZ24tLWNlbnRlcic+XG4gICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDInIHRleHRBbGlnbj0nY2VudGVyJyBncmFkaWVudERpcmVjdGlvbj0ndG8gd2hpdGUnPlxuICAgICAgICAgICAgS2VuZWxsZVxuICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGVlbiB2aWVzdGludMOkw6Qga2Fpa2VubGFpc2lsbGUgb3JnYW5pc2FhdGlvaWxsZSB5cml0eWtzaXN0w6QgasOkcmplc3TDtmloaW4uIFZpZXN0aW50w6QtIGphIG1hcmtraW5vaW50aXRvaW1pc3RvaWxsZSB0b2ltaW4gZnJlZWxhbmNlcmluYSBzaXPDpGxsw7ZudHVvdGFubm9uIGphIHZpZXN0aW5uw6RuIHN1dW5uaXR0ZWx1biBwcm9qZWt0ZWlzc2EuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBdXRhbiBtecO2cyBlcmkgYWxvamVuIGFzaWFudHVudGlqb2l0YSwgdHV0a2lqb2l0YSBqYSB0aWV0ZWVudGVraWrDtml0w6Qgdmllc3RpZW4ga2l0ZXl0dMOkbWlzZXNzw6QgamEgc2Vsa2V5dHTDpG1pc2Vzc8OkLiBLw6TDpG5uw6RuIHZhaWtlYXQgdGVvcmlhdCBqYSB0dXRraW11c3R1bG9rc2V0IGthbnNhbmtpZWxlbGxlIGphIGF1dGFuIHRhdm9pdHRhbWFhbiBvaWtlYXQgeWxlaXPDtnQgeWh0ZWlza3VubmFsbGlzZXNzYSBrZXNrdXN0ZWx1c3NhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbS1iZy1jb2xvci0tc2FsbW9uJz5cbiAgICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMicgdGV4dEFsaWduPSdjZW50ZXInIGdyYWRpZW50RGlyZWN0aW9uPSd0byBzYWxtb24nPlxuICAgICAgICAgICAgVGF1c3RhXG4gICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgPENvbHVtbml6ZT5cbiAgICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgICAgICBWaWVzdGludMOkXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRW5uZW4gZnJlZWxhbmNlcmlrc2kgaHlwcMOkw6RtaXN0w6QgdG9pbWluIHZpaXNpIHZ1b3R0YSBlcmkgcG9zaXRpb2lzc2Egdmllc3RpbnTDpHRvaW1pc3Rvc3NhLiBWaWVzdGlubsOkbiBrb2tlbXVzdGEgbWludWxsZSBvbiBrZXJ0eW55dCBww7Zyc3NpeWh0acO2aXN0w6QgamEgasOkcmplc3TDtmlzdMOkIHN0YXJ0dXAteXJpdHlrc2lpbiwgbW0uIElULSwgdHVydmFsbGlzdXVzLSwgcmFrZW5udXMtIGphIHRlcnZleXNhbG9pbHRhLiBPbGVuIHRvdGV1dHRhbnV0IGFzaWFra2FpbGxlbmkgdmllc3RpbnTDpMOkIHNpc8OkbGzDtm50dW90dGFqYW4sIHZhbG1lbnRhamFuLCB2aWVzdGludMOka29uc3VsdGluIGphIHZpZXN0aW5uw6RuIHN1dW5uaXR0ZWxpamFuIHJvb2xlaXNzYS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0NvbHVtbml6ZT5cblxuICAgICAgICAgIDxDb2x1bW5pemU+XG4gICAgICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMycgc2l6ZT0nbWVkaXVtJz5cbiAgICAgICAgICAgICAgTWFya2tpbm9pbnRpXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT2xlbiB2YWxtaXN0dW51dCBUdXJ1biB5bGlvcGlzdG9uIGthdXBwYWtvcmtlYWtvdWx1c3RhIGthdXBwYXRpZXRlaWRlbiBtYWlzdGVyaWtzaSAoS1RNKSBtYXJra2lub2ludGkgcMOkw6RhaW5lZW5hbmkuIE9waW50b2plbmkgb2hlbGxhIHR5w7Zza2VudGVsaW4gbWFpbm9zdG9pbWlzdG9zc2EsIGpvc3NhIGthcnR1dGluIGvDpHl0w6RubsO2biBrb2tlbXVzdGEgbWFya2tpbm9pbm5pbiBqYSBicsOkbmTDpHlrc2VuIG1hYWlsbWFzdGEuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9Db2x1bW5pemU+XG5cbiAgICAgICAgICA8Q29sdW1uaXplPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDMnIHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgICAgIFRlb2xvZ2lhXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVmllc3Rpbm7DpG4gdMO2aWRlbiBvaGVsbGEgb3Bpc2tlbGVuIHRlb2xvZ2lhYSBqYSB1c2tvbnRvdHV0a2ltdXN0YSBIZWxzaW5naW4geWxpb3Bpc3RvbGxhLiBTeWTDpG50w6RuaSBsw6RoZWxsw6Qgb3ZhdCBzaWlzIG1hcmtraW5vaW50aXZpZXN0aW5uw6RuIGxpc8Oka3NpIGVrc2lzdGVudGlhYWxpc2V0IGt5c3lteWtzZXQgamEgaGVuZ2VsbGluZW4gcG9oZGlza2VsdS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0NvbHVtbml6ZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gyJyB0ZXh0QWxpZ249J2NlbnRlcicgZ3JhZGllbnREaXJlY3Rpb249J3RvIHdoaXRlJz5cbiAgICAgICAgICAgIFlodGV5c3RpZWRvdFxuICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgIDxDb2x1bW5pemU+XG4gICAgICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMycgc2l6ZT0nbWVkaXVtJz5cbiAgICAgICAgICAgICAgUHl5ZMOkIHRhcmpvdXN0YTxiciAvPnRhaSBreXN5IGxpc8Okw6QhXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOmpvaGFubmEuc2Fsb3ZhYXJhMTFAZ21haWwuY29tJz5qb2hhbm5hLnNhbG92YWFyYTExQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIOKAk1xuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGEgaHJlZj0ndGVsOiszNTg0MDA2NDI3MDknPiszNTggNDAwIDY0MiA3MDk8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9Db2x1bW5pemU+XG5cbiAgICAgICAgICA8U29NZSAvPlxuXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J3BvcnRyYWl0JyBzcmM9Jy9zdGF0aWMvcG9ydHJhaXQuanBnJyBhbHQ9J1BvcnRyYWl0IG9mIEpvaGFubmEgU2Fsb3ZhYXJhJyAvPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3BvcnRpbmcgR3JvdGVzcXVlIEJvbGQnO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLUJvbGQuZW90Jyk7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtQm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1Nwb3J0aW5nIEdyb3Rlc3F1ZSBSZWd1bGFyJztcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1SZWd1bGFyLmVvdCcpO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLVJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1YXR0cm9jZW50byBSZWd1bGFyJztcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL3dlYmZvbnRzL1F1YXR0cm9jZW50by9xdWF0dHJvY2VudG8tcmVndWxhci13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy93ZWJmb250cy9RdWF0dHJvY2VudG8vcXVhdHRyb2NlbnRvLXJlZ3VsYXItd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1YXR0cm9jZW50byBCb2xkJztcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL3dlYmZvbnRzL1F1YXR0cm9jZW50by9xdWF0dHJvY2VudG8tYm9sZC13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy93ZWJmb250cy9RdWF0dHJvY2VudG8vcXVhdHRyb2NlbnRvLWJvbGQtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1YXR0cm9jZW50byBSZWd1bGFyJywgc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogJHtzZXR0aW5ncy5jb2xvcnMuYmx1ZX07XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEsaDIsaDMsXG4gICAgICAgICAgaDQsaDUsaDYge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogNTU3cHg7XG4gICAgICAgICAgICBjb2xvcjogJHtzZXR0aW5ncy5jb2xvcnMuYmx1ZX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAke3NldHRpbmdzLmNvbG9ycy5ibHVlfTtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR7c2V0dGluZ3MuYnJlYWtQb2ludHMubH0pIHtcbiAgICAgICAgICAgIHAsIHVsIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tLWJnLWNvbG9yLS1zYWxtb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzZXR0aW5ncy5jb2xvcnMuc2FsbW9ufTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubS10ZXh0LWFsaWduLS1jZW50ZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3J0cmFpdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0byAwIGF1dG87XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbi1idXQtcmVhZGFibGUge1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDBweCAwcHgsIDBweCAwcHgsIDBweCAwcHgsIDBweCAwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./settings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = {
  colors: {
    salmon: '#E9C9BA',
    blue: '#002ACC',
    white: '#FFF'
  },
  breakPoints: {
    m: '35rem',
    l: '45rem',
    xl: '55rem'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/settings.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map