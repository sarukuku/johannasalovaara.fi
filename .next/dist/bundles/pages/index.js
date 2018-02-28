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
          className: 'jsx-1939035389' + ' ' + (classes || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        children,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1939035389',
          css: '.colWrap.jsx-1939035389{display:block;}.colWrap.jsx-1939035389 p{margin-left:0 !important;}.colWrap.jsx-1939035389 .heading{text-align:left;}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].breakPoints.l + '){.colWrap.jsx-1939035389{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;max-width:800px;margin:0 auto;}.colWrap.m-width--large.jsx-1939035389{max-width:1000px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.colWrap.jsx-1939035389:not(.m-width--large)  *{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;}.colWrap.jsx-1939035389:not(.m-width--large) .heading{text-align:right;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sdW1uaXplLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCb0IsQUFHMkIsQUFJVyxBQUlULEFBS0QsQUFPSSxBQUtMLEFBS0ssY0E3QnJCLEVBUUEsQ0FZa0MsQUFVaEMsUUExQkYsOENBcUJpQixHQVpJLHlEQWFuQixDQUxBLEtBUGtCLGdCQUNGLGNBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29sdW1uaXplLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Kb29uYXMvRG9jdW1lbnRzL0NvZGUvU2l0ZXMvam9oYW5uYXNhbG92YWFyYS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY04gZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9zZXR0aW5ncydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sdW1uaXplIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsYXJnZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNOKHtcbiAgICAgICdjb2xXcmFwJzogdHJ1ZSxcbiAgICAgICdtLXdpZHRoLS1sYXJnZSc6IGxhcmdlXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb2xXcmFwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb2xXcmFwIDpnbG9iYWwocCkge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29sV3JhcCA6Z2xvYmFsKC5oZWFkaW5nKSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAke3NldHRpbmdzLmJyZWFrUG9pbnRzLmx9KSB7XG4gICAgICAgICAgICAuY29sV3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbFdyYXAubS13aWR0aC0tbGFyZ2Uge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29sV3JhcDpub3QoLm0td2lkdGgtLWxhcmdlKSA6Z2xvYmEoPiAqKSB7XG4gICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgZmxleC1iYXNpczogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbFdyYXA6bm90KC5tLXdpZHRoLS1sYXJnZSkgOmdsb2JhbCguaGVhZGluZykge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/columnize.js */'
        })
      );
    }
  }]);

  return Columnize;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Columnize);

/***/ }),

/***/ "./components/face.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/components/face.js';

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
        fill: 'none',
        fillRule: 'evenodd',
        stroke: '#002ACC',
        strokeWidth: '2'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M50.002 29.955c1.462 2.103 3.727 3.459 6.275 3.459 2.548 0 4.812-1.356 6.275-3.459m-31.659 0c1.46 2.103 3.726 3.459 6.274 3.459s4.812-1.356 6.275-3.459m-2.025 15.777c1.462 2.104 3.727 3.458 6.275 3.458 2.548 0 4.813-1.354 6.275-3.458'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M72.56 36.284c0 19.486-16.018 35.283-35.78 35.283C17.02 71.567 1 55.77 1 36.284 1 16.797 17.019 1 36.78 1c19.762 0 35.78 15.797 35.78 35.284z'
      })
    )
  );
};

Calm.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 74 73',
  preserveAspectRatio: 'xMinYMin meet'
};

var Enthusiastic = function Enthusiastic(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd',
        stroke: '#002ACC',
        strokeWidth: '2'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M72.887 36.284c0 19.486-16.02 35.283-35.78 35.283S1.325 55.77 1.325 36.284C1.326 16.797 17.346 1 37.106 1c19.761 0 35.78 15.797 35.78 35.284z'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M20.643 22.936c0 1.911-1.572 3.463-3.513 3.463-1.938 0-3.512-1.552-3.512-3.463 0-1.912 1.574-3.464 3.512-3.464 1.94 0 3.513 1.552 3.513 3.464zm19.317 0c0 1.911-1.572 3.463-3.512 3.463s-3.513-1.552-3.513-3.463c0-1.912 1.574-3.464 3.513-3.464 1.94 0 3.512 1.552 3.512 3.464zM17.13 37.638c2.25 3.408 5.738 5.604 9.659 5.604 3.923 0 7.409-2.196 9.659-5.604'
      })
    )
  );
};

Enthusiastic.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 74 73',
  preserveAspectRatio: 'xMinYMin meet'
};

var Wink = function Wink(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd',
        stroke: '#002ACC',
        strokeWidth: '2'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M72.477 36.284c0 19.486-15.857 35.283-35.414 35.283-19.558 0-35.413-15.797-35.413-35.283C1.65 16.797 17.505 1 37.063 1 56.62 1 72.477 16.797 72.477 36.284z'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        d: 'M34.648 46.545c2.346 3.408 5.977 5.606 10.069 5.606 4.09 0 7.722-2.198 10.068-5.606m4.537-13.295c-1.446-2.103-3.688-3.457-6.21-3.457s-4.762 1.354-6.21 3.457m-9.839-1.729a3.471 3.471 0 0 1-3.476 3.464 3.47 3.47 0 0 1-3.476-3.464 3.47 3.47 0 0 1 3.476-3.463 3.471 3.471 0 0 1 3.476 3.463z'
      })
    )
  );
};

Wink.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 74 73',
  preserveAspectRatio: 'xMinYMin meet'
};

var Face = function (_React$Component) {
  _inherits(Face, _React$Component);

  function Face() {
    _classCallCheck(this, Face);

    return _possibleConstructorReturn(this, (Face.__proto__ || Object.getPrototypeOf(Face)).apply(this, arguments));
  }

  _createClass(Face, [{
    key: 'render',
    value: function render() {
      var expression = this.props.expression;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3212929895' + ' ' + 'face',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3212929895' + ' ' + 'svg-container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          expression === 'calm' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Calm, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          }),
          expression === 'enthusiastic' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Enthusiastic, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          }),
          expression === 'wink' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wink, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3212929895',
          css: '.face.jsx-3212929895{position:relative;width:4rem;margin:1em;}.svg-container.jsx-3212929895{width:100%;vertical-align:middle;overflow:hidden;padding-bottom:100%;}.svg-container.jsx-3212929895 svg{display:inline-block;position:absolute;top:0;left:0;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBRzZCLEFBTVAsQUFPVSxXQU5DLE9BTlgsR0FhTyxRQVpQLElBTUssTUFPVixDQVpSLEtBYVMsSUFQYSxHQVFULFdBQ0MsTUFSZCxNQVNBIiwiZmlsZSI6ImNvbXBvbmVudHMvZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSm9vbmFzL0RvY3VtZW50cy9Db2RlL1NpdGVzL2pvaGFubmFzYWxvdmFhcmEuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhbG0gZnJvbSAnLi4vc3ZnL2ZhY2UtY2FsbS5zdmcnXG5pbXBvcnQgRW50aHVzaWFzdGljIGZyb20gJy4uL3N2Zy9mYWNlLWVudGh1c2lhc3RpYy5zdmcnXG5pbXBvcnQgV2luayBmcm9tICcuLi9zdmcvZmFjZS13aW5rLnN2ZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBleHByZXNzaW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhY2UnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnLWNvbnRhaW5lcic+XG4gICAgICAgICAge2V4cHJlc3Npb24gPT09ICdjYWxtJyAmJlxuICAgICAgICAgICAgPENhbG0gLz5cbiAgICAgICAgICB9XG4gICAgICAgICAge2V4cHJlc3Npb24gPT09ICdlbnRodXNpYXN0aWMnICYmXG4gICAgICAgICAgICA8RW50aHVzaWFzdGljIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtleHByZXNzaW9uID09PSAnd2luaycgJiZcbiAgICAgICAgICAgIDxXaW5rIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5mYWNlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5zdmctY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgICAgICB9XG4gIFxuICAgICAgICAuc3ZnLWNvbnRhaW5lciA6Z2xvYmFsKHN2ZykgeyBcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/face.js */'
        })
      );
    }
  }]);

  return Face;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Face);

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
      'defs',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        id: 'a',
        d: 'M0 .696h35.643V57H0z'
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        {
          transform: 'translate(0 66)'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'mask',
          {
            id: 'b',
            fill: '#fff'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('use', {
            xlinkHref: '#a'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
          fill: '#002ACC',
          d: 'M0 37.823v14.048S7.86 57 17.82 57c6.519 0 17.822-4.078 17.822-16.1 0-18.395-30.028-14.458-30.028-29.063 0-3.366 2.05-10.295 12.224-10.295 6.924 0 11.541 8.127 13.198 13.088l.566.205V5.068S26.243.696 17.839.696C11.002.696.44 4.292.44 14.689c0 16.384 29.245 14.16 29.245 28.57 0 7.65-4.254 12.774-11.865 12.774C4.63 56.033.874 41.324.874 38.314l-.875-.491z',
          mask: 'url(#b)'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        fill: '#002ACC',
        d: 'M58.897 116.578s-4.522 4.042-9.172 4.042c-5.136 0-6.435-4.988-6.435-7.361 0-4.191 1.299-11.148 15.607-11.148v14.467zM52.795 87c-4.862 0-12.923 4.36-12.923 4.36v9.736l.564-.203c1.654-4.945 6.792-13.223 12.359-13.223 5.128 0 6.102 3.995 6.102 8.863v4.495c-7.54 0-21.897 2.976-21.897 13.658C37 118.81 40.692 123 48.008 123c7.111 0 10.89-5.34 10.89-5.34v4.225H65V96.093C65 91.902 61.615 87 52.795 87zm116.104 29.578s-4.524 4.042-9.172 4.042c-5.137 0-6.435-4.988-6.435-7.361 0-4.191 1.298-11.148 15.607-11.148v14.467zM162.796 87c-4.862 0-12.924 4.36-12.924 4.36v9.736l.565-.203c1.655-4.945 6.793-13.223 12.359-13.223 5.127 0 6.103 3.995 6.103 8.863v4.495c-7.54 0-21.899 2.976-21.899 13.658 0 4.123 3.692 8.314 11.01 8.314 7.11 0 10.889-5.34 10.889-5.34v4.225H175V96.093c0-4.191-3.384-9.093-12.204-9.093zm37.101 29.578s-4.522 4.042-9.172 4.042c-5.136 0-6.435-4.988-6.435-7.361 0-4.191 1.299-11.148 15.607-11.148v14.467zM193.795 87c-4.862 0-12.923 4.36-12.923 4.36v9.736l.564-.203c1.654-4.945 6.792-13.223 12.359-13.223 5.128 0 6.102 3.995 6.102 8.863v4.495c-7.54 0-21.897 2.976-21.897 13.658 0 4.123 3.692 8.314 11.008 8.314 7.111 0 10.89-5.34 10.89-5.34v4.225H206V96.093c0-4.191-3.385-9.093-12.205-9.093zm62.102 29.578s-4.522 4.042-9.17 4.042c-5.137 0-6.435-4.988-6.435-7.361 0-4.191 1.298-11.148 15.605-11.148v14.467zM249.796 87c-4.862 0-12.924 4.36-12.924 4.36v9.736l.565-.203c1.655-4.945 6.793-13.223 12.359-13.223 5.127 0 6.101 3.995 6.101 8.863v4.495c-7.538 0-21.897 2.976-21.897 13.658 0 4.123 3.692 8.314 11.01 8.314 7.11 0 10.887-5.34 10.887-5.34v4.225H262V96.093c0-4.191-3.385-9.093-12.204-9.093zm-15.888 4.464s-2.505-4.364-9.98-4.364c-4.737 0-7.807 4.393-7.807 4.393V87L210 89.435V122h6.12V94.311c0-1.985 3.315-6.34 7.464-6.34 5.06 0 8.296 7.794 9.831 13.075l.585.156-.092-9.738zM76 67l-6 2.458V122h6zm73 21h-1.963l-12.302 26.892L121.793 88H115l16.834 35h1.142l.516-1.122h.01zm-47.408 33.148a8.584 8.584 0 0 1-1.778.47c-1.449.202-2.88.006-4.256-.498-4.87-1.775-8.962-7.587-9.958-14.958-1.279-9.455 3.014-17.863 9.587-18.781 1.115-.154 2.22-.068 3.3.202 1.073.266 2.115.733 3.105 1.37 3.886 2.5 6.963 7.63 7.808 13.887 1.158 8.566-2.265 16.255-7.808 18.308m0-34.689c-.078-.016-.155-.037-.235-.055A18.66 18.66 0 0 0 97.5 86C87.283 86 79 94.283 79 104.5S87.283 123 97.5 123s18.5-8.283 18.5-18.5c0-8.81-6.16-16.178-14.408-18.04m39.305-36.882s-4.522 4.04-9.172 4.04c-5.135 0-6.435-4.987-6.435-7.36 0-4.191 1.3-11.148 15.607-11.148v14.468zM134.795 20c-4.862 0-12.923 4.36-12.923 4.36v9.736l.564-.203c1.656-4.945 6.792-13.223 12.359-13.223 5.128 0 6.102 3.995 6.102 8.862v4.496c-7.54 0-21.897 2.975-21.897 13.657 0 4.122 3.692 8.315 11.008 8.315 7.111 0 10.89-5.341 10.89-5.341v4.225H147V29.093C147 24.9 143.615 20 134.795 20zm102.103 29.578s-4.524 4.04-9.172 4.04c-5.136 0-6.435-4.987-6.435-7.36 0-4.191 1.299-11.148 15.607-11.148v14.468zM230.795 20c-4.861 0-12.922 4.36-12.922 4.36v9.736l.564-.203c1.654-4.945 6.792-13.223 12.358-13.223 5.127 0 6.103 3.995 6.103 8.862v4.496c-7.54 0-21.898 2.975-21.898 13.657 0 4.122 3.693 8.315 11.009 8.315 7.11 0 10.889-5.341 10.889-5.341v4.225H243V29.093C243 24.9 239.615 20 230.795 20zM68.814 54.618c-6.572.917-12.937-6.003-14.214-15.457-1.278-9.454 3.015-17.86 9.588-18.78 6.571-.916 12.937 6.004 14.214 15.458 1.276 9.454-3.016 17.862-9.588 18.78M66.5 19C56.283 19 48 27.283 48 37.5 48 47.716 56.283 56 66.5 56 76.719 56 85 47.716 85 37.5 85 27.283 76.719 19 66.5 19M39.031 2.453v43.941c0 4.905-1.119 8.931-6.679 8.931-6.513 0-11.449-10.451-12.8-15.498L19 39.622v11.984S26.505 56 32.388 56C41.015 56 45 51.06 45 46.837V0l-5.969 2.453zm66.659 17.314c-5.258 0-9.605 4.256-11.571 7.684V0L88 2.458V55h6.119V29.568c2.06-4.545 6.597-8.716 10.717-8.716 4.56 0 5.959 2.784 5.959 8.594 0 4.6.086 25.554.086 25.554H117V28.95c0-7.69-7.572-9.183-11.31-9.183m63-.427c-5.258 0-9.605 4.187-11.571 7.56V19L151 21.417V54h6.119V28.982c2.06-4.47 6.597-8.575 10.717-8.575 4.558 0 5.959 2.74 5.959 8.455 0 4.525.086 25.138.086 25.138H180V28.374c0-7.565-7.573-9.034-11.31-9.034m32.001 0c-5.259 0-9.606 4.187-11.572 7.56V19L183 21.417V54h6.119V28.982c2.06-4.47 6.597-8.575 10.717-8.575 4.56 0 5.959 2.74 5.959 8.455 0 4.525.086 25.138.086 25.138H212V28.374c0-7.565-7.572-9.034-11.309-9.034'
      })
    )
  );
};

VerticalLogo.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 262 123',
  preserveAspectRatio: 'xMinYMin meet'
};

var HorizontalLogo = function HorizontalLogo(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'defs',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        id: 'a',
        d: 'M.114.29h66.551V107H.114z'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        id: 'c',
        d: 'M.017.742h52.937v67.734H.017z'
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        {
          transform: 'translate(464)'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'mask',
          {
            id: 'b',
            fill: '#fff'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('use', {
            xlinkHref: '#a'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
          fill: '#002ACC',
          d: 'M.114 70.656v26.622S14.789 107 33.389 107c12.172 0 33.276-7.727 33.276-30.512 0-34.86-56.067-27.398-56.067-55.082 0-6.377 3.825-19.51 22.823-19.51 12.933 0 21.55 15.404 24.646 24.807l1.054.384V8.579S49.117.29 33.421.29C20.658.289.938 7.109.938 26.812c0 31.05 54.604 26.833 54.604 54.143 0 14.501-7.941 24.213-22.153 24.213-24.631 0-31.645-27.876-31.645-33.58l-1.63-.932z',
          mask: 'url(#b)'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        fill: '#002ACC',
        d: 'M231.448 93.868s-8.56 7.635-17.36 7.635c-9.723 0-12.181-9.422-12.181-13.903 0-7.918 2.458-21.059 29.541-21.059v27.327zM219.897 38c-9.2 0-24.462 8.236-24.462 8.236v18.389l1.068-.383c3.134-9.341 12.857-24.976 23.394-24.976 9.708 0 11.551 7.545 11.551 16.74v8.491c-14.269 0-41.448 5.62-41.448 25.796 0 7.79 6.988 15.707 20.837 15.707 13.461 0 20.611-10.09 20.611-10.09v7.982H243V55.175C243 47.258 236.593 38 219.897 38zm355.551 55.868s-8.56 7.635-17.36 7.635c-9.723 0-12.181-9.422-12.181-13.903 0-7.918 2.458-21.059 29.541-21.059v27.327zM563.897 38c-9.2 0-24.462 8.236-24.462 8.236v18.389l1.067-.383c3.135-9.341 12.858-24.976 23.395-24.976 9.707 0 11.551 7.545 11.551 16.74v8.491c-14.269 0-41.448 5.62-41.448 25.796 0 7.79 6.988 15.707 20.837 15.707 13.461 0 20.611-10.09 20.611-10.09v7.982H587V55.175C587 47.258 580.593 38 563.897 38zm220.551 55.868s-8.56 7.635-17.36 7.635c-9.723 0-12.181-9.422-12.181-13.903 0-7.918 2.458-21.059 29.541-21.059v27.327zM772.897 38c-9.2 0-24.462 8.236-24.462 8.236v18.389l1.067-.383c3.135-9.341 12.858-24.976 23.395-24.976 9.707 0 11.551 7.545 11.551 16.74v8.491c-14.269 0-41.448 5.62-41.448 25.796 0 7.79 6.988 15.707 20.837 15.707 13.461 0 20.611-10.09 20.611-10.09v7.982H796V55.175C796 47.258 789.593 38 772.897 38zm70.55 55.868s-8.56 7.635-17.359 7.635c-9.723 0-12.182-9.422-12.182-13.903 0-7.918 2.46-21.059 29.541-21.059v27.327zM831.897 38c-9.2 0-24.46 8.236-24.46 8.236v18.389l1.066-.383c3.133-9.341 12.856-24.976 23.393-24.976 9.707 0 11.551 7.545 11.551 16.74v8.491c-14.268 0-41.447 5.62-41.447 25.796 0 7.79 6.99 15.707 20.837 15.707 13.46 0 20.61-10.09 20.61-10.09v7.982H855V55.175C855 47.258 848.592 38 831.896 38z'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        {
          transform: 'translate(906 37)'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'mask',
          {
            id: 'd',
            fill: '#fff'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('use', {
            xlinkHref: '#c'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
          fill: '#002ACC',
          d: 'M41.417 56.391s-8.55 7.605-17.34 7.605c-9.71 0-12.166-9.385-12.166-13.849 0-7.886 2.455-20.976 29.506-20.976v27.22zM29.877.742c-9.187 0-24.43 8.204-24.43 8.204v18.316l1.065-.381C9.643 17.577 19.355 2.003 29.878 2.003c9.696 0 11.539 7.516 11.539 16.675v8.457c-14.252 0-41.4 5.597-41.4 25.695 0 7.76 6.98 15.646 20.812 15.646 13.446 0 20.588-10.05 20.588-10.05v7.95h11.537V17.85c0-7.886-6.399-17.108-23.076-17.108z',
          mask: 'url(#d)'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
        fill: '#002ACC',
        d: 'M412.449 93.868s-8.56 7.635-17.36 7.635c-9.723 0-12.181-9.422-12.181-13.903 0-7.918 2.458-21.059 29.54-21.059v27.327zM400.898 38c-9.2 0-24.462 8.236-24.462 8.236v18.389l1.069-.383c3.131-9.341 12.856-24.976 23.393-24.976 9.706 0 11.55 7.545 11.55 16.74v8.491c-14.268 0-41.448 5.62-41.448 25.796 0 7.79 6.99 15.707 20.838 15.707 13.46 0 20.61-10.09 20.61-10.09v7.982H424V55.175C424 47.258 417.593 38 400.898 38zM95.376 103.421c-12.435 1.712-24.473-11.194-26.891-28.825-2.416-17.63 5.704-33.31 18.14-35.02 12.434-1.71 24.472 11.195 26.89 28.826 2.416 17.63-5.704 33.309-18.14 35.02M91 37c-19.33 0-35 15.446-35 34.499C56 90.553 71.67 106 91 106s35-15.447 35-34.501C126 52.446 110.33 37 91 37m815.829 9.417s-4.7-8.226-18.716-8.226c-8.88 0-14.638 8.283-14.638 8.283V38L862 42.592V104h11.475V51.787c0-3.744 6.214-11.954 13.994-11.954 9.488 0 15.558 14.695 18.434 24.655l1.097.294-.171-18.365zM608 1l-11 4.604V104h11zm138 39h-3.75l-23.52 50.709L693.988 40H681l32.183 66h2.187l.985-2.118h.016zm-89.259 62.545c-1.084.397-2.198.717-3.364.878-2.738.376-5.45.008-8.052-.927-9.212-3.31-16.955-14.15-18.84-27.898-2.417-17.632 5.705-33.31 18.14-35.022 2.108-.29 4.2-.128 6.242.375 2.03.498 4 1.368 5.874 2.558 7.352 4.662 13.175 14.228 14.774 25.893 2.19 15.977-4.287 30.315-14.774 34.143m0-64.688c-.147-.032-.295-.07-.443-.1A35.641 35.641 0 0 0 649 37c-19.329 0-35 15.446-35 34.5 0 19.053 15.67 34.5 35.001 34.5C668.331 106 684 90.553 684 71.5c0-16.43-11.655-30.169-27.259-33.643M38.522 5.6v82.388c0 9.197-2.15 16.746-12.847 16.746-12.526 0-22.016-19.595-24.613-29.06L0 75.29v22.471S14.432 106 25.745 106C42.337 106 50 96.74 50 88.818V1L38.522 5.6zm125.417 32.42c-9.79 0-17.886 7.97-21.545 14.389V1L131 5.604V104h11.394V56.374c3.836-8.513 12.284-16.323 19.956-16.323 8.49 0 11.093 5.215 11.093 16.095 0 8.614.163 47.854.163 47.854H185V55.217c0-14.402-14.103-17.198-21.061-17.198m119.001-.365c-9.79 0-17.887 8.014-21.547 14.47V37L250 41.63V104h11.393V56.11c3.837-8.56 12.286-16.413 19.958-16.413 8.488 0 11.093 5.243 11.093 16.184 0 8.662.163 48.119.163 48.119H304V54.947c0-14.481-14.102-17.293-21.06-17.293m61.999 0c-9.79 0-17.886 8.014-21.545 14.47V37L312 41.63V104h11.394V56.11c3.836-8.56 12.284-16.413 19.956-16.413 8.49 0 11.093 5.243 11.093 16.184 0 8.662.163 48.119.163 48.119H366V54.947c0-14.481-14.103-17.293-21.061-17.293'
      })
    )
  );
};

HorizontalLogo.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 959 107',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_face__ = __webpack_require__("./components/face.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings__ = __webpack_require__("./settings.js");
var _jsxFileName = '/Users/Joonas/Documents/Code/Sites/johannasalovaara.com/pages/index.js';









/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-1499429069',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'title',
        {
          className: 'jsx-1499429069',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        'Johanna Salovaara'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-1499429069',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1499429069',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_masthead__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'section',
      {
        className: 'jsx-1499429069' + ' ' + 'm-text-align--center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
        { semanticLevel: 'h1', textAlign: 'center', gradientDirection: 'to white', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        'Vaikuttavaa',
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
          className: 'jsx-1499429069',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        'viestint\xE4\xE4'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-1499429069',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        'Autan yrityksi\xE4, j\xE4rjest\xF6j\xE4 ja asiantuntijoita viestim\xE4\xE4n paremmin. Mik\xE4li haluat kasvattaa tietoisuutta br\xE4ndist\xE4si, sitouttaa asiakkaasi tehokkaammin tai vaikuttaa ymp\xE4r\xF6iv\xE4\xE4n yhteiskuntaasi, on viestint\xE4 keino tavoittaa yleis\xF6si.'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-1499429069',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        'Viestinn\xE4n ytimess\xE4 ovat laadukkaat sis\xE4ll\xF6t. Tuotan sis\xE4lt\xF6j\xE4, jotka vastaavat tarpeisiisi \u2013 oli se sitten keskustelun her\xE4tt\xE4minen, toimintasi merkityksen muotoilu tai digitaalisen verkostosi kasvattaminen.'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'section',
      {
        className: 'jsx-1499429069' + ' ' + 'm-bg-color--salmon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
        { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to salmon', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        'Palvelut'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
        { large: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_face__["a" /* default */], { expression: 'calm', __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
            { semanticLevel: 'h3', size: 'medium', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            'Viestinn\xE4n',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
              className: 'jsx-1499429069',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            }),
            'sis\xE4ll\xF6t'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'ul',
            {
              className: 'jsx-1499429069',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              'Blogit'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              'Artikkelit'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              },
              'Nettisivutekstit, esitteet'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              'Sosiaalisen median sis\xE4ll\xF6t'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              'Tiedotteet, lehdist\xF6materiaalit'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              'Esitykset, presentaatiot, puheet'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_face__["a" /* default */], { expression: 'enthusiastic', __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
            { semanticLevel: 'h3', size: 'medium', __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            'Viestinn\xE4n',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
              className: 'jsx-1499429069',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            }),
            'strateginen',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
              className: 'jsx-1499429069',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            }),
            'suunnittelu'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'ul',
            {
              className: 'jsx-1499429069',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              'Ydinviestit, br\xE4nditarinat'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              'Viestint\xE4suunnitelmat'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              },
              'Viestint\xE4kalenterit'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_face__["a" /* default */], { expression: 'wink', __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
            { semanticLevel: 'h3', size: 'medium', __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            'Viestinn\xE4n',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
              className: 'jsx-1499429069',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            }),
            'konsultointi'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'ul',
            {
              className: 'jsx-1499429069',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1499429069',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              'Sparraus ja tuki'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'section',
      {
        className: 'jsx-1499429069' + ' ' + 'm-text-align--center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
        { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to white', __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        },
        'Kenelle'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-1499429069',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        },
        'Teen viestint\xE4\xE4 kaikenlaisille organisaatioille yrityksist\xE4 j\xE4rjest\xF6ihin. Viestint\xE4- ja markkinointitoimistoille toimin freelancerina sis\xE4ll\xF6ntuotannon ja viestinn\xE4n suunnittelun projekteissa.'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-1499429069',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        },
        'Autan my\xF6s eri alojen asiantuntijoita, tutkijoita ja tieteentekij\xF6it\xE4 viestien kiteytt\xE4misess\xE4 ja selkeytt\xE4misess\xE4. K\xE4\xE4nn\xE4n vaikeat teoriat ja tutkimustulokset kansankielelle ja autan tavoittamaan oikeat yleis\xF6t yhteiskunnallisessa keskustelussa.'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'section',
      {
        className: 'jsx-1499429069' + ' ' + 'm-bg-color--salmon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
        { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to salmon', __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        },
        'Tausta'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
          { semanticLevel: 'h3', size: 'medium', __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          },
          'Viestint\xE4'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            }
          },
          'Ennen freelanceriksi hypp\xE4\xE4mist\xE4 toimin viisi vuotta eri positioissa viestint\xE4- ja markkinointitoimistoissa. Viestinn\xE4n kokemusta minulle on kertynyt p\xF6rssiyhti\xF6ist\xE4 ja j\xE4rjest\xF6ist\xE4 startup-yrityksiin, mm. rakennus-, turvallisuus-, IT- ja terveysaloilta. Viestint\xE4\xE4 olen toteuttanut asiakkailleni niin valmentajana, viestinn\xE4n konsulttina, kirjoittajana kuin tapahtumasuunnittelijana.'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
          { semanticLevel: 'h3', size: 'medium', __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          },
          'Koulutus'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          },
          'Olen valmistunut Turun yliopiston kauppakorkeakoulusta kauppatieteiden maisteriksi (KTM), markkinointi p\xE4\xE4aineenani.'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
          { semanticLevel: 'h3', size: 'medium', __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            }
          },
          'Nykyhetki'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            }
          },
          'Viestinn\xE4n t\xF6iden ohella olen opiskellut syksyst\xE4 2017 l\xE4htien teologiaa ja uskontotutkimusta Helsingin yliopistolla.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'section',
      {
        className: 'jsx-1499429069',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
        { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to white', __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        },
        'Yhteystiedot'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__components_columnize__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_heading__["a" /* default */],
          { semanticLevel: 'h3', size: 'medium', __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            }
          },
          'Pyyd\xE4 tarjousta tai kysy lis\xE4\xE4!'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'mailto:johanna.salovaara11@gmail.com', className: 'jsx-1499429069',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            },
            'johanna.salovaara11@gmail.com'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          }),
          '\u2013',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
            className: 'jsx-1499429069',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'tel:+358400642709', className: 'jsx-1499429069',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              }
            },
            '+358 400 642 709'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/portrait.jpg', alt: 'Portrait of Johanna Salovaara', className: 'jsx-1499429069' + ' ' + 'portrait',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '4136746949',
      css: '@font-face{font-family:\'Sporting Grotesque Bold\';src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.eot\');src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.eot?#iefix\') format(\'embedded-opentype\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.woff\') format(\'woff\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.woff2\') format(\'woff2\');font-weight:normal;font-style:normal;}@font-face{font-family:\'Quattrocento Regular\';src:url(\'/static/webfonts/Quattrocento/quattrocento-regular-webfont.woff2\') format(\'woff2\'), url(\'/static/webfonts/Quattrocento/quattrocento-regular-webfont.woff\') format(\'woff\');font-weight:normal;font-style:normal;}@font-face{font-family:\'Sporting Grotesque Regular\';src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.eot\');src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.eot?#iefix\') format(\'embedded-opentype\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.woff\') format(\'woff\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.woff2\') format(\'woff2\');font-weight:normal;font-style:normal;}@font-face{font-family:\'Quattrocento Bold\';src:url(\'/static/webfonts/Quattrocento/quattrocento-bold-webfont.woff2\') format(\'woff2\'), url(\'/static/webfonts/Quattrocento/quattrocento-bold-webfont.woff\') format(\'woff\');font-weight:normal;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKdUIsQUFHK0MsQUFVRyxBQVVOLEFBUUgsZ0NBRXVELEdBUkcsR0FyQmhCLEdBVUcsdUVBUGUsTUFVRyx1RkFpQjVFLFNBUkEsVUFTRCxTQVJBLFNBU3BCLFNBUkEsa0pBcEJxQixlQVVBLElBVEQsZUFVQSxHQVRwQixlQVVBIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Kb29uYXMvRG9jdW1lbnRzL0NvZGUvU2l0ZXMvam9oYW5uYXNhbG92YWFyYS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWFzdGhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9tYXN0aGVhZCdcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGluZydcbmltcG9ydCBDb2x1bW5pemUgZnJvbSAnLi4vY29tcG9uZW50cy9jb2x1bW5pemUnXG5pbXBvcnQgRmFjZSBmcm9tICcuLi9jb21wb25lbnRzL2ZhY2UnXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Kb2hhbm5hIFNhbG92YWFyYTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxNYXN0aGVhZCAvPlxuXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtLXRleHQtYWxpZ24tLWNlbnRlcic+XG4gICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMScgdGV4dEFsaWduPSdjZW50ZXInIGdyYWRpZW50RGlyZWN0aW9uPSd0byB3aGl0ZSc+XG4gICAgICAgIFZhaWt1dHRhdmFhPGJyIC8+dmllc3RpbnTDpMOkXG4gICAgICA8L0hlYWRpbmc+XG5cbiAgICAgIDxwPlxuICAgICAgICBBdXRhbiB5cml0eWtzacOkLCBqw6RyamVzdMO2asOkIGphIGFzaWFudHVudGlqb2l0YSB2aWVzdGltw6TDpG4gcGFyZW1taW4uIE1pa8OkbGkgaGFsdWF0IGthc3ZhdHRhYSB0aWV0b2lzdXV0dGEgYnLDpG5kaXN0w6RzaSwgc2l0b3V0dGFhIGFzaWFra2Fhc2kgdGVob2trYWFtbWluIHRhaSB2YWlrdXR0YWEgeW1ww6Ryw7ZpdsOkw6RuIHlodGVpc2t1bnRhYXNpLCBvbiB2aWVzdGludMOkIGtlaW5vIHRhdm9pdHRhYSB5bGVpc8O2c2kuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBWaWVzdGlubsOkbiB5dGltZXNzw6Qgb3ZhdCBsYWFkdWtrYWF0IHNpc8OkbGzDtnQuIFR1b3RhbiBzaXPDpGx0w7Zqw6QsIGpvdGthIHZhc3RhYXZhdCB0YXJwZWlzaWlzaSDigJMgb2xpIHNlIHNpdHRlbiBrZXNrdXN0ZWx1biBoZXLDpHR0w6RtaW5lbiwgdG9pbWludGFzaSBtZXJraXR5a3NlbiBtdW90b2lsdSB0YWkgZGlnaXRhYWxpc2VuIHZlcmtvc3Rvc2kga2FzdmF0dGFtaW5lbi5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J20tYmctY29sb3ItLXNhbG1vbic+XG4gICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMicgdGV4dEFsaWduPSdjZW50ZXInIGdyYWRpZW50RGlyZWN0aW9uPSd0byBzYWxtb24nPlxuICAgICAgICBQYWx2ZWx1dFxuICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICA8Q29sdW1uaXplIGxhcmdlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGYWNlIGV4cHJlc3Npb249J2NhbG0nIC8+XG4gICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDMnIHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgICBWaWVzdGlubsOkbjxiciAvPnNpc8OkbGzDtnRcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkJsb2dpdDwvbGk+XG4gICAgICAgICAgICA8bGk+QXJ0aWtrZWxpdDwvbGk+XG4gICAgICAgICAgICA8bGk+TmV0dGlzaXZ1dGVrc3RpdCwgZXNpdHRlZXQ8L2xpPlxuICAgICAgICAgICAgPGxpPlNvc2lhYWxpc2VuIG1lZGlhbiBzaXPDpGxsw7Z0PC9saT5cbiAgICAgICAgICAgIDxsaT5UaWVkb3R0ZWV0LCBsZWhkaXN0w7ZtYXRlcmlhYWxpdDwvbGk+XG4gICAgICAgICAgICA8bGk+RXNpdHlrc2V0LCBwcmVzZW50YWF0aW90LCBwdWhlZXQ8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEZhY2UgZXhwcmVzc2lvbj0nZW50aHVzaWFzdGljJyAvPlxuICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgICAgVmllc3Rpbm7DpG48YnIgLz5zdHJhdGVnaW5lbjxiciAvPnN1dW5uaXR0ZWx1XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5ZZGludmllc3RpdCwgYnLDpG5kaXRhcmluYXQ8L2xpPlxuICAgICAgICAgICAgPGxpPlZpZXN0aW50w6RzdXVubml0ZWxtYXQ8L2xpPlxuICAgICAgICAgICAgPGxpPlZpZXN0aW50w6RrYWxlbnRlcml0PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGYWNlIGV4cHJlc3Npb249J3dpbmsnIC8+XG4gICAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDMnIHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgICBWaWVzdGlubsOkbjxiciAvPmtvbnN1bHRvaW50aVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+U3BhcnJhdXMgamEgdHVraTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbHVtbml6ZT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J20tdGV4dC1hbGlnbi0tY2VudGVyJz5cbiAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gyJyB0ZXh0QWxpZ249J2NlbnRlcicgZ3JhZGllbnREaXJlY3Rpb249J3RvIHdoaXRlJz5cbiAgICAgICAgS2VuZWxsZVxuICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGVlbiB2aWVzdGludMOkw6Qga2Fpa2VubGFpc2lsbGUgb3JnYW5pc2FhdGlvaWxsZSB5cml0eWtzaXN0w6QgasOkcmplc3TDtmloaW4uIFZpZXN0aW50w6QtIGphIG1hcmtraW5vaW50aXRvaW1pc3RvaWxsZSB0b2ltaW4gZnJlZWxhbmNlcmluYSBzaXPDpGxsw7ZudHVvdGFubm9uIGphIHZpZXN0aW5uw6RuIHN1dW5uaXR0ZWx1biBwcm9qZWt0ZWlzc2EuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBBdXRhbiBtecO2cyBlcmkgYWxvamVuIGFzaWFudHVudGlqb2l0YSwgdHV0a2lqb2l0YSBqYSB0aWV0ZWVudGVraWrDtml0w6Qgdmllc3RpZW4ga2l0ZXl0dMOkbWlzZXNzw6QgamEgc2Vsa2V5dHTDpG1pc2Vzc8OkLiBLw6TDpG5uw6RuIHZhaWtlYXQgdGVvcmlhdCBqYSB0dXRraW11c3R1bG9rc2V0IGthbnNhbmtpZWxlbGxlIGphIGF1dGFuIHRhdm9pdHRhbWFhbiBvaWtlYXQgeWxlaXPDtnQgeWh0ZWlza3VubmFsbGlzZXNzYSBrZXNrdXN0ZWx1c3NhLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbS1iZy1jb2xvci0tc2FsbW9uJz5cbiAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gyJyB0ZXh0QWxpZ249J2NlbnRlcicgZ3JhZGllbnREaXJlY3Rpb249J3RvIHNhbG1vbic+XG4gICAgICAgIFRhdXN0YVxuICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICA8Q29sdW1uaXplPlxuICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMycgc2l6ZT0nbWVkaXVtJz5cbiAgICAgICAgICBWaWVzdGludMOkXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRW5uZW4gZnJlZWxhbmNlcmlrc2kgaHlwcMOkw6RtaXN0w6QgdG9pbWluIHZpaXNpIHZ1b3R0YSBlcmkgcG9zaXRpb2lzc2Egdmllc3RpbnTDpC0gamEgbWFya2tpbm9pbnRpdG9pbWlzdG9pc3NhLiBWaWVzdGlubsOkbiBrb2tlbXVzdGEgbWludWxsZSBvbiBrZXJ0eW55dCBww7Zyc3NpeWh0acO2aXN0w6QgamEgasOkcmplc3TDtmlzdMOkIHN0YXJ0dXAteXJpdHlrc2lpbiwgbW0uIHJha2VubnVzLSwgdHVydmFsbGlzdXVzLSwgSVQtIGphIHRlcnZleXNhbG9pbHRhLiBWaWVzdGludMOkw6Qgb2xlbiB0b3RldXR0YW51dCBhc2lha2thaWxsZW5pIG5paW4gdmFsbWVudGFqYW5hLCB2aWVzdGlubsOkbiBrb25zdWx0dGluYSwga2lyam9pdHRhamFuYSBrdWluIHRhcGFodHVtYXN1dW5uaXR0ZWxpamFuYS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Db2x1bW5pemU+XG5cbiAgICAgIDxDb2x1bW5pemU+XG4gICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgIEtvdWx1dHVzXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT2xlbiB2YWxtaXN0dW51dCBUdXJ1biB5bGlvcGlzdG9uIGthdXBwYWtvcmtlYWtvdWx1c3RhIGthdXBwYXRpZXRlaWRlbiBtYWlzdGVyaWtzaSAoS1RNKSwgbWFya2tpbm9pbnRpIHDDpMOkYWluZWVuYW5pLlxuICAgICAgICA8L3A+XG4gICAgICA8L0NvbHVtbml6ZT5cblxuICAgICAgPENvbHVtbml6ZT5cbiAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDMnIHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgTnlreWhldGtpXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVmllc3Rpbm7DpG4gdMO2aWRlbiBvaGVsbGEgb2xlbiBvcGlza2VsbHV0IHN5a3N5c3TDpCAyMDE3IGzDpGh0aWVuIHRlb2xvZ2lhYSBqYSB1c2tvbnRvdHV0a2ltdXN0YSBIZWxzaW5naW4geWxpb3Bpc3RvbGxhLlxuICAgICAgICA8L3A+XG4gICAgICA8L0NvbHVtbml6ZT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gyJyB0ZXh0QWxpZ249J2NlbnRlcicgZ3JhZGllbnREaXJlY3Rpb249J3RvIHdoaXRlJz5cbiAgICAgICAgWWh0ZXlzdGllZG90XG4gICAgICA8L0hlYWRpbmc+XG5cbiAgICAgIDxDb2x1bW5pemU+XG4gICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgIFB5eWTDpCB0YXJqb3VzdGEgdGFpIGt5c3kgbGlzw6TDpCFcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YSBocmVmPSdtYWlsdG86am9oYW5uYS5zYWxvdmFhcmExMUBnbWFpbC5jb20nPmpvaGFubmEuc2Fsb3ZhYXJhMTFAZ21haWwuY29tPC9hPlxuICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgIOKAk1xuICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgIDxhIGhyZWY9J3RlbDorMzU4NDAwNjQyNzA5Jz4rMzU4IDQwMCA2NDIgNzA5PC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L0NvbHVtbml6ZT5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J3BvcnRyYWl0JyBzcmM9Jy9zdGF0aWMvcG9ydHJhaXQuanBnJyBhbHQ9J1BvcnRyYWl0IG9mIEpvaGFubmEgU2Fsb3ZhYXJhJyAvPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcG9ydGluZyBHcm90ZXNxdWUgQm9sZCc7XG4gICAgICAgIHNyYzogdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1Cb2xkLmVvdCcpO1xuICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtQm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgIHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ1Nwb3J0aW5nIEdyb3Rlc3F1ZSBSZWd1bGFyJztcbiAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLVJlZ3VsYXIuZW90Jyk7XG4gICAgICAgIHNyYzogdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1SZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICAgICAgICAgdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvIFJlZ3VsYXInO1xuICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy93ZWJmb250cy9RdWF0dHJvY2VudG8vcXVhdHRyb2NlbnRvLXJlZ3VsYXItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvd2ViZm9udHMvUXVhdHRyb2NlbnRvL3F1YXR0cm9jZW50by1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICB9XG4gICAgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8gQm9sZCc7XG4gICAgICAgIHNyYzogdXJsKCcvc3RhdGljL3dlYmZvbnRzL1F1YXR0cm9jZW50by9xdWF0dHJvY2VudG8tYm9sZC13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgIHVybCgnL3N0YXRpYy93ZWJmb250cy9RdWF0dHJvY2VudG8vcXVhdHRyb2NlbnRvLWJvbGQtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvIFJlZ3VsYXInLCBzZXJpZjtcbiAgICAgICAgY29sb3I6ICR7c2V0dGluZ3MuY29sb3JzLmJsdWV9O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIGgxLGgyLGgzLFxuICAgICAgaDQsaDUsaDYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbSAxcmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTU3cHg7XG4gICAgICAgIGNvbG9yOiAke3NldHRpbmdzLmNvbG9ycy5ibHVlfTtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtIDFyZW07XG4gICAgICAgIGNvbG9yOiAke3NldHRpbmdzLmNvbG9ycy5ibHVlfTtcbiAgICAgICAgbGlzdC1zdHlsZTogZGlzYztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR7c2V0dGluZ3MuYnJlYWtQb2ludHMubH0pIHtcbiAgICAgICAgcCwgdWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tLWJnLWNvbG9yLS1zYWxtb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NldHRpbmdzLmNvbG9ycy5zYWxtb259O1xuICAgICAgfVxuXG4gICAgICAubS10ZXh0LWFsaWduLS1jZW50ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5wb3J0cmFpdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDFyZW0gYXV0byAwIGF1dG87XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=pages/index.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '4246529025',
      css: 'html,body{margin:0;padding:0;font-family:\'Quattrocento Regular\',serif;color:' + __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* default */].colors.blue + ';font-size:16px;}h1,h2,h3,h4,h5,h6{margin:0;}p{padding:0 1rem 1rem 1rem;margin:0 auto 0 auto;max-width:557px;color:' + __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* default */].colors.blue + ';}ul{margin:0 0 0 1rem;padding:0 1rem 1rem 1rem;color:' + __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* default */].colors.blue + ';list-style:disc;}@media (min-width:' + __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* default */].breakPoints.l + '){p,ul{font-size:20px;padding-bottom:1.5rem;}}.m-bg-color--salmon{background-color:' + __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* default */].colors.salmon + ';}.m-text-align--center{text-align:center;}.portrait{position:relative;max-width:100%;margin:1rem auto 0 auto;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNMdUIsQUFJa0IsQUFTQSxBQUlnQixBQU9QLEFBUUQsQUFNNkIsQUFJNUIsQUFJQSxTQXpDUixBQVNaLE1BbUIwQixHQVJDLEFBa0IzQixBQUlpQixDQXpDMkIsTUFZckIsUUE4QkcsSUFkeEIsTUFSbUMsR0FQbkIsQUFvQmxCLFdBVVcsR0ExQzBCLEVBYUEsSUE4QlIsWUF2QlgsZ0JBQ2xCLENBcEJpQixFQWFqQixhQVpBLGlEQTBDQSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSm9vbmFzL0RvY3VtZW50cy9Db2RlL1NpdGVzL2pvaGFubmFzYWxvdmFhcmEuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1hc3RoZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvbWFzdGhlYWQnXG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRpbmcnXG5pbXBvcnQgQ29sdW1uaXplIGZyb20gJy4uL2NvbXBvbmVudHMvY29sdW1uaXplJ1xuaW1wb3J0IEZhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9mYWNlJ1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Sm9oYW5uYSBTYWxvdmFhcmE8L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8TWFzdGhlYWQgLz5cblxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbS10ZXh0LWFsaWduLS1jZW50ZXInPlxuICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDEnIHRleHRBbGlnbj0nY2VudGVyJyBncmFkaWVudERpcmVjdGlvbj0ndG8gd2hpdGUnPlxuICAgICAgICBWYWlrdXR0YXZhYTxiciAvPnZpZXN0aW50w6TDpFxuICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICA8cD5cbiAgICAgICAgQXV0YW4geXJpdHlrc2nDpCwgasOkcmplc3TDtmrDpCBqYSBhc2lhbnR1bnRpam9pdGEgdmllc3RpbcOkw6RuIHBhcmVtbWluLiBNaWvDpGxpIGhhbHVhdCBrYXN2YXR0YWEgdGlldG9pc3V1dHRhIGJyw6RuZGlzdMOkc2ksIHNpdG91dHRhYSBhc2lha2thYXNpIHRlaG9ra2FhbW1pbiB0YWkgdmFpa3V0dGFhIHltcMOkcsO2aXbDpMOkbiB5aHRlaXNrdW50YWFzaSwgb24gdmllc3RpbnTDpCBrZWlubyB0YXZvaXR0YWEgeWxlaXPDtnNpLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgVmllc3Rpbm7DpG4geXRpbWVzc8OkIG92YXQgbGFhZHVra2FhdCBzaXPDpGxsw7Z0LiBUdW90YW4gc2lzw6RsdMO2asOkLCBqb3RrYSB2YXN0YWF2YXQgdGFycGVpc2lpc2kg4oCTIG9saSBzZSBzaXR0ZW4ga2Vza3VzdGVsdW4gaGVyw6R0dMOkbWluZW4sIHRvaW1pbnRhc2kgbWVya2l0eWtzZW4gbXVvdG9pbHUgdGFpIGRpZ2l0YWFsaXNlbiB2ZXJrb3N0b3NpIGthc3ZhdHRhbWluZW4uXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtLWJnLWNvbG9yLS1zYWxtb24nPlxuICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDInIHRleHRBbGlnbj0nY2VudGVyJyBncmFkaWVudERpcmVjdGlvbj0ndG8gc2FsbW9uJz5cbiAgICAgICAgUGFsdmVsdXRcbiAgICAgIDwvSGVhZGluZz5cblxuICAgICAgPENvbHVtbml6ZSBsYXJnZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RmFjZSBleHByZXNzaW9uPSdjYWxtJyAvPlxuICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgICAgVmllc3Rpbm7DpG48YnIgLz5zaXPDpGxsw7Z0XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5CbG9naXQ8L2xpPlxuICAgICAgICAgICAgPGxpPkFydGlra2VsaXQ8L2xpPlxuICAgICAgICAgICAgPGxpPk5ldHRpc2l2dXRla3N0aXQsIGVzaXR0ZWV0PC9saT5cbiAgICAgICAgICAgIDxsaT5Tb3NpYWFsaXNlbiBtZWRpYW4gc2lzw6RsbMO2dDwvbGk+XG4gICAgICAgICAgICA8bGk+VGllZG90dGVldCwgbGVoZGlzdMO2bWF0ZXJpYWFsaXQ8L2xpPlxuICAgICAgICAgICAgPGxpPkVzaXR5a3NldCwgcHJlc2VudGFhdGlvdCwgcHVoZWV0PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGYWNlIGV4cHJlc3Npb249J2VudGh1c2lhc3RpYycgLz5cbiAgICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMycgc2l6ZT0nbWVkaXVtJz5cbiAgICAgICAgICAgIFZpZXN0aW5uw6RuPGJyIC8+c3RyYXRlZ2luZW48YnIgLz5zdXVubml0dGVsdVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+WWRpbnZpZXN0aXQsIGJyw6RuZGl0YXJpbmF0PC9saT5cbiAgICAgICAgICAgIDxsaT5WaWVzdGludMOkc3V1bm5pdGVsbWF0PC9saT5cbiAgICAgICAgICAgIDxsaT5WaWVzdGludMOka2FsZW50ZXJpdDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RmFjZSBleHByZXNzaW9uPSd3aW5rJyAvPlxuICAgICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgICAgVmllc3Rpbm7DpG48YnIgLz5rb25zdWx0b2ludGlcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlNwYXJyYXVzIGphIHR1a2k8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db2x1bW5pemU+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtLXRleHQtYWxpZ24tLWNlbnRlcic+XG4gICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMicgdGV4dEFsaWduPSdjZW50ZXInIGdyYWRpZW50RGlyZWN0aW9uPSd0byB3aGl0ZSc+XG4gICAgICAgIEtlbmVsbGVcbiAgICAgIDwvSGVhZGluZz5cblxuICAgICAgPHA+XG4gICAgICAgIFRlZW4gdmllc3RpbnTDpMOkIGthaWtlbmxhaXNpbGxlIG9yZ2FuaXNhYXRpb2lsbGUgeXJpdHlrc2lzdMOkIGrDpHJqZXN0w7ZpaGluLiBWaWVzdGludMOkLSBqYSBtYXJra2lub2ludGl0b2ltaXN0b2lsbGUgdG9pbWluIGZyZWVsYW5jZXJpbmEgc2lzw6RsbMO2bnR1b3Rhbm5vbiBqYSB2aWVzdGlubsOkbiBzdXVubml0dGVsdW4gcHJvamVrdGVpc3NhLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgQXV0YW4gbXnDtnMgZXJpIGFsb2plbiBhc2lhbnR1bnRpam9pdGEsIHR1dGtpam9pdGEgamEgdGlldGVlbnRla2lqw7ZpdMOkIHZpZXN0aWVuIGtpdGV5dHTDpG1pc2Vzc8OkIGphIHNlbGtleXR0w6RtaXNlc3PDpC4gS8Okw6RubsOkbiB2YWlrZWF0IHRlb3JpYXQgamEgdHV0a2ltdXN0dWxva3NldCBrYW5zYW5raWVsZWxsZSBqYSBhdXRhbiB0YXZvaXR0YW1hYW4gb2lrZWF0IHlsZWlzw7Z0IHlodGVpc2t1bm5hbGxpc2Vzc2Ega2Vza3VzdGVsdXNzYS5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J20tYmctY29sb3ItLXNhbG1vbic+XG4gICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMicgdGV4dEFsaWduPSdjZW50ZXInIGdyYWRpZW50RGlyZWN0aW9uPSd0byBzYWxtb24nPlxuICAgICAgICBUYXVzdGFcbiAgICAgIDwvSGVhZGluZz5cblxuICAgICAgPENvbHVtbml6ZT5cbiAgICAgICAgPEhlYWRpbmcgc2VtYW50aWNMZXZlbD0naDMnIHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgVmllc3RpbnTDpFxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEVubmVuIGZyZWVsYW5jZXJpa3NpIGh5cHDDpMOkbWlzdMOkIHRvaW1pbiB2aWlzaSB2dW90dGEgZXJpIHBvc2l0aW9pc3NhIHZpZXN0aW50w6QtIGphIG1hcmtraW5vaW50aXRvaW1pc3RvaXNzYS4gVmllc3Rpbm7DpG4ga29rZW11c3RhIG1pbnVsbGUgb24ga2VydHlueXQgcMO2cnNzaXlodGnDtmlzdMOkIGphIGrDpHJqZXN0w7Zpc3TDpCBzdGFydHVwLXlyaXR5a3NpaW4sIG1tLiByYWtlbm51cy0sIHR1cnZhbGxpc3V1cy0sIElULSBqYSB0ZXJ2ZXlzYWxvaWx0YS4gVmllc3RpbnTDpMOkIG9sZW4gdG90ZXV0dGFudXQgYXNpYWtrYWlsbGVuaSBuaWluIHZhbG1lbnRhamFuYSwgdmllc3Rpbm7DpG4ga29uc3VsdHRpbmEsIGtpcmpvaXR0YWphbmEga3VpbiB0YXBhaHR1bWFzdXVubml0dGVsaWphbmEuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvQ29sdW1uaXplPlxuXG4gICAgICA8Q29sdW1uaXplPlxuICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMycgc2l6ZT0nbWVkaXVtJz5cbiAgICAgICAgICBLb3VsdXR1c1xuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE9sZW4gdmFsbWlzdHVudXQgVHVydW4geWxpb3Bpc3RvbiBrYXVwcGFrb3JrZWFrb3VsdXN0YSBrYXVwcGF0aWV0ZWlkZW4gbWFpc3Rlcmlrc2kgKEtUTSksIG1hcmtraW5vaW50aSBww6TDpGFpbmVlbmFuaS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Db2x1bW5pemU+XG5cbiAgICAgIDxDb2x1bW5pemU+XG4gICAgICAgIDxIZWFkaW5nIHNlbWFudGljTGV2ZWw9J2gzJyBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgIE55a3loZXRraVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFZpZXN0aW5uw6RuIHTDtmlkZW4gb2hlbGxhIG9sZW4gb3Bpc2tlbGx1dCBzeWtzeXN0w6QgMjAxNyBsw6RodGllbiB0ZW9sb2dpYWEgamEgdXNrb250b3R1dGtpbXVzdGEgSGVsc2luZ2luIHlsaW9waXN0b2xsYS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Db2x1bW5pemU+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMicgdGV4dEFsaWduPSdjZW50ZXInIGdyYWRpZW50RGlyZWN0aW9uPSd0byB3aGl0ZSc+XG4gICAgICAgIFlodGV5c3RpZWRvdFxuICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICA8Q29sdW1uaXplPlxuICAgICAgICA8SGVhZGluZyBzZW1hbnRpY0xldmVsPSdoMycgc2l6ZT0nbWVkaXVtJz5cbiAgICAgICAgICBQeXlkw6QgdGFyam91c3RhIHRhaSBreXN5IGxpc8Okw6QhXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOmpvaGFubmEuc2Fsb3ZhYXJhMTFAZ21haWwuY29tJz5qb2hhbm5hLnNhbG92YWFyYTExQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICDigJNcbiAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICA8YSBocmVmPSd0ZWw6KzM1ODQwMDY0MjcwOSc+KzM1OCA0MDAgNjQyIDcwOTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Db2x1bW5pemU+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdwb3J0cmFpdCcgc3JjPScvc3RhdGljL3BvcnRyYWl0LmpwZycgYWx0PSdQb3J0cmFpdCBvZiBKb2hhbm5hIFNhbG92YWFyYScgLz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU3BvcnRpbmcgR3JvdGVzcXVlIEJvbGQnO1xuICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtQm9sZC5lb3QnKTtcbiAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLUJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvd2ViZm9udHMvU3BvcnRpbmdHcm90ZXNxdWUvU3BvcnRpbmdfR3JvdGVzcXVlLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgICAgIHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgfVxuICAgICAgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcG9ydGluZyBHcm90ZXNxdWUgUmVndWxhcic7XG4gICAgICAgIHNyYzogdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1SZWd1bGFyLmVvdCcpO1xuICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtUmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgIHVybCgnL3N0YXRpYy93ZWJmb250cy9TcG9ydGluZ0dyb3Rlc3F1ZS9TcG9ydGluZ19Hcm90ZXNxdWUtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgdXJsKCcvc3RhdGljL3dlYmZvbnRzL1Nwb3J0aW5nR3JvdGVzcXVlL1Nwb3J0aW5nX0dyb3Rlc3F1ZS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICB9XG5cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ1F1YXR0cm9jZW50byBSZWd1bGFyJztcbiAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvd2ViZm9udHMvUXVhdHRyb2NlbnRvL3F1YXR0cm9jZW50by1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgdXJsKCcvc3RhdGljL3dlYmZvbnRzL1F1YXR0cm9jZW50by9xdWF0dHJvY2VudG8tcmVndWxhci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgfVxuICAgIFxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvIEJvbGQnO1xuICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy93ZWJmb250cy9RdWF0dHJvY2VudG8vcXVhdHRyb2NlbnRvLWJvbGQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvd2ViZm9udHMvUXVhdHRyb2NlbnRvL3F1YXR0cm9jZW50by1ib2xkLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ1F1YXR0cm9jZW50byBSZWd1bGFyJywgc2VyaWY7XG4gICAgICAgIGNvbG9yOiAke3NldHRpbmdzLmNvbG9ycy5ibHVlfTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBoMSxoMixoMyxcbiAgICAgIGg0LGg1LGg2IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1N3B4O1xuICAgICAgICBjb2xvcjogJHtzZXR0aW5ncy5jb2xvcnMuYmx1ZX07XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAxcmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbSAxcmVtO1xuICAgICAgICBjb2xvcjogJHtzZXR0aW5ncy5jb2xvcnMuYmx1ZX07XG4gICAgICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAke3NldHRpbmdzLmJyZWFrUG9pbnRzLmx9KSB7XG4gICAgICAgIHAsIHVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubS1iZy1jb2xvci0tc2FsbW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzZXR0aW5ncy5jb2xvcnMuc2FsbW9ufTtcbiAgICAgIH1cblxuICAgICAgLm0tdGV4dC1hbGlnbi0tY2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAucG9ydHJhaXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMCBhdXRvO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=pages/index.js */'
    })
  );
});

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