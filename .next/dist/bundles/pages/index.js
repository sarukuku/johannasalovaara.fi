module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/columnize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/columnize.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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
  }]);

  return Columnize;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Columnize);

/***/ }),

/***/ "./components/heading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/heading.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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
  }]);

  return Heading;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Heading);

/***/ }),

/***/ "./components/icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/icon.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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
          className: 'jsx-29561317' + ' ' + 'icon',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-29561317' + ' ' + 'svg-container',
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
          styleId: '29561317',
          css: '.icon.jsx-29561317{position:relative;width:4rem;margin:1rem;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}.svg-container.jsx-29561317{width:100%;vertical-align:middle;overflow:hidden;padding-bottom:100%;}.svg-container.jsx-29561317 svg{display:inline-block;position:absolute;top:0;left:0;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQm9CLEFBRzZCLEFBT1AsQUFPVSxXQU5DLE9BUFgsR0FjTyxRQWJOLElBT0ksTUFPVixFQWJ5QixJQWN4QixJQVBhLEdBUVQsV0FDQyxNQVJkLE1BU0Esb0NBaEJBIiwiZmlsZSI6ImNvbXBvbmVudHMvaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSm9vbmFzL0RvY3VtZW50cy9Db2RlL1NpdGVzL2pvaGFubmFzYWxvdmFhcmEuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhbG0gZnJvbSAnLi4vc3ZnL2ZhY2UtY2FsbS5zdmcnXG5pbXBvcnQgRW50aHVzaWFzdGljIGZyb20gJy4uL3N2Zy9mYWNlLWVudGh1c2lhc3RpYy5zdmcnXG5pbXBvcnQgV2luayBmcm9tICcuLi9zdmcvZmFjZS13aW5rLnN2ZydcbmltcG9ydCBMaW5rZWRJbiBmcm9tICcuLi9zdmcvaWNvbi1saW5rZWRpbi5zdmcnXG5pbXBvcnQgVHdpdHRlciBmcm9tICcuLi9zdmcvaWNvbi10d2l0dGVyLnN2ZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnLWNvbnRhaW5lcic+XG4gICAgICAgICAge25hbWUgPT09ICdjYWxtJyAmJlxuICAgICAgICAgICAgPENhbG0gLz5cbiAgICAgICAgICB9XG4gICAgICAgICAge25hbWUgPT09ICdlbnRodXNpYXN0aWMnICYmXG4gICAgICAgICAgICA8RW50aHVzaWFzdGljIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtuYW1lID09PSAnd2luaycgJiZcbiAgICAgICAgICAgIDxXaW5rIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtuYW1lID09PSAnbGlua2VkaW4nICYmXG4gICAgICAgICAgICA8TGlua2VkSW4gLz5cbiAgICAgICAgICB9XG4gICAgICAgICAge25hbWUgPT09ICd0d2l0dGVyJyAmJlxuICAgICAgICAgICAgPFR3aXR0ZXIgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLnN2Zy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5zdmctY29udGFpbmVyIDpnbG9iYWwoc3ZnKSB7IFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/icon.js */'
        })
      );
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "./components/masthead.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/masthead.js';





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



/* harmony default export */ __webpack_exports__["a"] = (function () {
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
});

/***/ }),

/***/ "./components/navToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/navToggle.js';




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
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
});

/***/ }),

/***/ "./components/navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/navigation.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var tId = void 0;

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.state = {
      navOpen: false
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      window.clearTimeout(tId);
      if (nextProps.open) {
        this.nav.style.display = 'block';
        tId = window.setTimeout(function () {
          _this2.setState({ 'navOpen': true });
        }, 1);
      } else {
        this.setState({ 'navOpen': false });
        tId = window.setTimeout(function () {
          _this2.nav.style.display = 'none';
        }, 500);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'nav',
        { ref: function ref(nav) {
            _this3.nav = nav;
          }, className: 'jsx-1903066125' + ' ' + ('main-nav ' + (this.state.navOpen ? 'm--open' : '')),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'ul',
          {
            className: 'jsx-1903066125',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'li',
            {
              className: 'jsx-1903066125',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: '#', className: 'jsx-1903066125',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                }
              },
              'Palvelut'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'li',
            {
              className: 'jsx-1903066125',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: '#', className: 'jsx-1903066125',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              'Kenelle?'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'li',
            {
              className: 'jsx-1903066125',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: '#', className: 'jsx-1903066125',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              'Tausta'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'li',
            {
              className: 'jsx-1903066125',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: '#', className: 'jsx-1903066125',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              'Yhteystiedot'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1903066125',
          css: '.main-nav.jsx-1903066125{display:none;position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:100;}.main-nav.jsx-1903066125:before{content:\'\';width:0;height:0;background-color:' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].colors.salmon + ';position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:100%;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out;z-index:-1;border:0px solid transparent;}.m--open.main-nav.jsx-1903066125:before{width:200vmax;height:200vmax;border:1rem solid ' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].colors.blue + ';}ul.jsx-1903066125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;list-style:none;opacity:0;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;visibility:hidden;-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}.m--open.jsx-1903066125 ul.jsx-1903066125{visibility:visible;opacity:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-delay:.2s;transition-delay:.2s;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}li.jsx-1903066125:not(:last-child){margin-bottom:2rem;}a.jsx-1903066125{text-decoration:none;color:' + __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].colors.blue + ';font-size:30px;font-weight:bold;font-family:\'Sporting Grotesque Bold\',sans-serif;line-height:1.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBRzBCLEFBV0YsQUFlRyxBQU1ELEFBZ0JNLEFBVUEsQUFJRSxXQWxEYixFQVhPLENBMEJBLEtBZE4sQUFvQ0MsQUFVWixFQUlxQyxPQTdEN0IsQUFZd0MsQ0FjQyxBQXNCM0IsS0EvQ2IsT0FDSSxXQUNDLElBMkRHLFFBMURDLE9BMkRDLEdBbERDLEFBa0JJLEVBSnhCLENBc0J1QixHQTVDVCxRQTJEc0MsSUExRHBELEFBUVUsUUFDQyxTQUN1QixrQkFrQ2IsVUFlSCxlQWpDUCxDQWtDWCxRQWpDb0Isa0JBQ0ssaUJBaUJ6QixrQkFsQ3FCLG1CQUNZLDZDQWlCWix5QkFoQlIsV0FDa0IsNkJBQy9CLDRCQWVjLFlBQ0ksZ0JBQ04sVUFDcUIsc0VBQ1gsZ0RBQ0Ysa0JBQ0csMkVBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSm9vbmFzL0RvY3VtZW50cy9Db2RlL1NpdGVzL2pvaGFubmFzYWxvdmFhcmEuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzJ1xubGV0IHRJZFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYXZPcGVuOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodElkKVxuICAgIGlmIChuZXh0UHJvcHMub3Blbikge1xuICAgICAgdGhpcy5uYXYuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIHRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J25hdk9wZW4nOiB0cnVlfSlcbiAgICAgIH0sIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyduYXZPcGVuJzogZmFsc2V9KVxuICAgICAgdElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB9LCA1MDApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9e2BtYWluLW5hdiAke3RoaXMuc3RhdGUubmF2T3BlbiA/ICdtLS1vcGVuJyA6ICcnfWB9IHJlZj17KG5hdikgPT4geyB0aGlzLm5hdiA9IG5hdiB9fSA+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PGEgaHJlZj0nIyc+UGFsdmVsdXQ8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj0nIyc+S2VuZWxsZT88L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj0nIyc+VGF1c3RhPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9JyMnPllodGV5c3RpZWRvdDwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW4tbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIC5tYWluLW5hdjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2V0dGluZ3MuY29sb3JzLnNhbG1vbn07XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTsgICAgXG4gICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5tLS1vcGVuLm1haW4tbmF2OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMjAwdm1heDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwdm1heDtcbiAgICAgICAgICAgIGJvcmRlcjogMXJlbSBzb2xpZCAke3NldHRpbmdzLmNvbG9ycy5ibHVlfTsgXG4gICAgICAgICAgfSBcbiAgICAgIFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0OyAgICAgICAgXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAubS0tb3BlbiB1bCB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjJzO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICBsaSB7fVxuICAgICAgXG4gICAgICAgICAgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICR7c2V0dGluZ3MuY29sb3JzLmJsdWV9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1Nwb3J0aW5nIEdyb3Rlc3F1ZSBCb2xkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/navigation.js */'
        })
      );
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ "./components/some.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__("./components/icon.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/some.js';





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


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-4166735584' + ' ' + 'some',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'ul',
      {
        className: 'jsx-4166735584',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        {
          className: 'jsx-4166735584',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { href: 'https://linkedin.com/', className: 'jsx-4166735584',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: 'jsx-4166735584' + ' ' + 'hidden-but-readable',
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
          className: 'jsx-4166735584',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { href: 'https://twitter.com/', className: 'jsx-4166735584',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: 'jsx-4166735584' + ' ' + 'hidden-but-readable',
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
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Smile, { className: 'smile', __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '4166735584',
      css: '.some.jsx-4166735584{text-align:center;}ul.jsx-4166735584{margin:0;padding-bottom:.5rem;}li.jsx-4166735584{display:inline-block;}a.jsx-4166735584{text-decoration:none;}a.jsx-4166735584  .icon{margin:0.25rem;}a.jsx-4166735584:hover  .icon{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}.smile{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}.smile:hover{-webkit-transform:rotateZ(5deg) scale(1.1);-ms-transform:rotateZ(5deg) scale(1.1);transform:rotateZ(5deg) scale(1.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBRzJCLEFBSVQsQUFLWSxBQUlBLEFBSU4sQUFJVyxBQUlLLEFBSUksU0F4QmQsTUFhdkIsR0FqQkEsR0FTQSxBQUlBLFNBUkEsd0NBb0JBLG9CQUpBLDJCQVFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc29tZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSm9vbmFzL0RvY3VtZW50cy9Db2RlL1NpdGVzL2pvaGFubmFzYWxvdmFhcmEuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEljb24gZnJvbSAnLi9pY29uJ1xuaW1wb3J0IFNtaWxlIGZyb20gJy4uL3N2Zy9pY29uLXNtaWxlLnN2ZydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nc29tZSc+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2xpbmtlZGluLmNvbS8nPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGlkZGVuLWJ1dC1yZWFkYWJsZSc+TGlua2VkSW48L3NwYW4+XG4gICAgICAgICAgPEljb24gbmFtZT0nbGlua2VkaW4nIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vdHdpdHRlci5jb20vJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hpZGRlbi1idXQtcmVhZGFibGUnPlR3aXR0ZXI8L3NwYW4+XG4gICAgICAgICAgPEljb24gbmFtZT0ndHdpdHRlcicgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxTbWlsZSBjbGFzc05hbWU9J3NtaWxlJyAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zb21lIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgYSA6Z2xvYmEoPiAuaWNvbikge1xuICAgICAgICBtYXJnaW46IDAuMjVyZW07XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIgOmdsb2JhKD4gLmljb24pIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIDpnbG9iYWwoLnNtaWxlKSB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIDpnbG9iYWwoLnNtaWxlOmhvdmVyKSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig1ZGVnKSBzY2FsZSgxLjEpO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/some.js */'
    })
  );
});

/***/ }),

/***/ "./containers/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navigation__ = __webpack_require__("./components/navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navToggle__ = __webpack_require__("./components/navToggle.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/containers/header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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
          className: 'jsx-1586328328' + ' ' + (classes || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_navigation__["a" /* default */], { open: this.state.navOpen, __source: {
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
          styleId: '1586328328',
          css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IiLCJmaWxlIjoiY29udGFpbmVycy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0pvb25hcy9Eb2N1bWVudHMvQ29kZS9TaXRlcy9qb2hhbm5hc2Fsb3ZhYXJhLmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjTiBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJ1xuaW1wb3J0IFRvZ2dsZSBmcm9tICcuLi9jb21wb25lbnRzL25hdlRvZ2dsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYXZPcGVuOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU5hdmlnYXRpb24gKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyduYXZPcGVuJzogIXRoaXMuc3RhdGUubmF2T3Blbn0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjTih7XG4gICAgICAnc2l0ZS1oZWFkZXInOiB0cnVlLFxuICAgICAgJ20tbmF2LXN0YXRlLS1vcGVuJzogdGhpcy5zdGF0ZS5uYXZPcGVuXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgIDxOYXZpZ2F0aW9uIG9wZW49e3RoaXMuc3RhdGUubmF2T3Blbn0gLz5cbiAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUubmF2T3Blbn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudG9nZ2xlTmF2aWdhdGlvbigpIH19IC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=containers/header.js */'
        })
      );
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
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
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./settings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map