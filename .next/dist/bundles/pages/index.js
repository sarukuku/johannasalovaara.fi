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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(8);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./settings.js
/* harmony default export */ var settings = ({
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
// CONCATENATED MODULE: ./components/masthead.js





var masthead_VerticalLogo = function VerticalLogo(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      external__react__default.a.createElement('path', {
        fill: '#002ACC',
        d: 'M5.893 12.021c0-3.575 2.151-10.936 12.828-10.936 7.268 0 12.113 8.634 13.852 13.904l.593.217V4.83S27.543.184 18.72.184C11.547.184.463 4.006.463 15.051c0 17.404 30.69 15.042 30.69 30.35 0 8.128-4.462 13.572-12.45 13.572C4.859 58.973.916 43.348.916 40.15L0 39.627V54.55S8.248 60 18.703 60c6.841 0 18.704-4.333 18.704-17.105 0-19.542-31.514-15.358-31.514-30.875',
        mask: 'url(#b)',
        transform: 'translate(0 65)'
      }),
      external__react__default.a.createElement('path', {
        fill: '#002ACC',
        d: 'M63.462 117.22s-4.846 4.267-9.827 4.267c-5.503 0-6.896-5.266-6.896-7.77 0-4.423 1.393-11.767 16.723-11.767v15.27zM56.923 86c-5.208 0-13.846 4.602-13.846 4.602v10.277l.604-.214c1.773-5.22 7.278-13.958 13.242-13.958 5.495 0 6.54 4.217 6.54 9.355v4.746c-8.079 0-23.463 3.14-23.463 14.414 0 4.354 3.956 8.778 11.795 8.778 7.62 0 11.667-5.637 11.667-5.637v4.459H70V95.598C70 91.174 66.374 86 56.923 86zm123.538 31.22s-4.845 4.267-9.826 4.267c-5.503 0-6.896-5.266-6.896-7.77 0-4.423 1.393-11.767 16.722-11.767v15.27zM173.923 86c-5.208 0-13.846 4.602-13.846 4.602v10.277l.604-.214c1.773-5.22 7.278-13.958 13.242-13.958 5.495 0 6.538 4.217 6.538 9.355v4.746c-8.077 0-23.461 3.14-23.461 14.414 0 4.354 3.956 8.778 11.794 8.778 7.62 0 11.667-5.637 11.667-5.637v4.459H187V95.598c0-4.424-3.626-9.598-13.077-9.598zm39.538 31.22s-4.845 4.267-9.826 4.267c-5.502 0-6.895-5.266-6.895-7.77 0-4.423 1.393-11.767 16.721-11.767v15.27zM206.923 86c-5.207 0-13.845 4.602-13.845 4.602v10.277l.604-.214c1.773-5.22 7.277-13.958 13.24-13.958 5.495 0 6.54 4.217 6.54 9.355v4.746c-8.078 0-23.462 3.14-23.462 14.414 0 4.354 3.956 8.778 11.795 8.778 7.618 0 11.666-5.637 11.666-5.637v4.459H220V95.598c0-4.424-3.627-9.598-13.077-9.598zm65.538 31.22s-4.845 4.267-9.825 4.267c-5.503 0-6.896-5.266-6.896-7.77 0-4.423 1.393-11.767 16.721-11.767v15.27zM265.924 86c-5.208 0-13.846 4.602-13.846 4.602v10.277l.604-.214c1.773-5.22 7.277-13.958 13.242-13.958 5.493 0 6.537 4.217 6.537 9.355v4.746c-8.076 0-23.461 3.14-23.461 14.414 0 4.354 3.957 8.778 11.795 8.778 7.618 0 11.666-5.637 11.666-5.637v4.459H279V95.598c0-4.424-3.627-9.598-13.076-9.598zm-17.02 4.718s-2.61-4.611-10.397-4.611c-4.933 0-8.131 4.643-8.131 4.643V86L224 88.573V123h6.376V93.73c0-2.1 3.451-6.703 7.772-6.703 5.271 0 8.644 8.24 10.242 13.823l.61.165-.096-10.297zM75 123h6V65l-6 2.593zm81.864-36l-13.388 28.428L129.393 87H122l18.319 37h1.244l.562-1.186h.009L159 87zm-47.44 36.048a9.48 9.48 0 0 1-1.923.497c-1.565.211-3.115.003-4.6-.525-5.264-1.872-9.69-7.998-10.767-15.769-1.38-9.965 3.26-18.828 10.366-19.795 1.204-.164 2.4-.073 3.567.212 1.16.282 2.286.773 3.357 1.445 4.201 2.636 7.528 8.042 8.442 14.637 1.25 9.03-2.45 17.133-8.442 19.298m0-36.564c-.085-.018-.169-.039-.255-.057A20.597 20.597 0 0 0 105 86c-11.046 0-20 8.73-20 19.5s8.954 19.5 20 19.5 20-8.73 20-19.5c0-9.287-6.66-17.052-15.576-19.016m41.038-34.264s-4.845 4.267-9.827 4.267c-5.503 0-6.895-5.266-6.895-7.77 0-4.423 1.392-11.767 16.722-11.767v15.27zM127 50.222c0 4.354 3.956 8.778 11.795 8.778 7.62 0 11.667-5.637 11.667-5.637v4.459H157V30.598c0-4.424-3.626-9.598-13.077-9.598-5.208 0-13.846 4.603-13.846 4.603V35.88l.604-.214c1.773-5.22 7.278-13.958 13.242-13.958 5.495 0 6.54 4.217 6.54 9.355v4.746c-8.079 0-23.463 3.14-23.463 14.414zm125.461 1.998s-4.845 4.267-9.825 4.267c-5.503 0-6.896-5.266-6.896-7.77 0-4.423 1.393-11.767 16.721-11.767v15.27zM229 50.222c0 4.354 3.956 8.778 11.795 8.778 7.618 0 11.666-5.637 11.666-5.637v4.459H259V30.598c0-4.424-3.627-9.598-13.076-9.598-5.208 0-13.846 4.603-13.846 4.603V35.88l.604-.214c1.773-5.22 7.277-13.958 13.242-13.958 5.493 0 6.537 4.217 6.537 9.355v4.746c-8.076 0-23.461 3.14-23.461 14.414zM73.5 57.544c-7.105.967-13.985-6.327-15.366-16.293-1.381-9.966 3.26-18.828 10.365-19.794 7.106-.967 13.985 6.327 15.367 16.292 1.38 9.966-3.26 18.827-10.366 19.795M91 39.5C91 28.73 82.045 20 71 20c-11.046 0-20 8.73-20 19.5C51 50.269 59.954 59 71 59c11.045 0 20-8.731 20-19.5'
      }),
      external__react__default.a.createElement('path', {
        fill: '#002ACC',
        d: 'M28.485 49.652V.12l-6.526 2.594v46.47c0 5.186-1.223 9.444-7.305 9.444-7.122 0-12.519-11.052-13.995-16.39l-.603-.217v12.674s8.205 4.647 14.638 4.647c9.433 0 13.79-5.224 13.79-9.69',
        mask: 'url(#d)',
        transform: 'translate(20)'
      }),
      external__react__default.a.createElement('path', {
        fill: '#002ACC',
        d: 'M6.725 31.294c2.203-4.792 7.058-9.19 11.466-9.19 4.878 0 6.375 2.937 6.375 9.061 0 4.85.093 26.941.093 26.941h6.548V30.643c0-8.108-8.103-9.682-12.102-9.682-5.626 0-10.278 4.486-12.38 8.1V.12L.177 2.712v55.394h6.548V31.294z',
        mask: 'url(#f)',
        transform: 'translate(94)'
      }),
      external__react__default.a.createElement('path', {
        fill: '#002ACC',
        d: 'M167.54 30.838c2.202-4.854 7.053-9.31 11.457-9.31 4.873 0 6.369 2.975 6.369 9.18 0 4.913.093 27.292.093 27.292H192V30.178c0-8.213-8.095-9.808-12.09-9.808-5.621 0-10.268 4.545-12.37 8.206V20L161 22.624V58h6.54V30.838zm35.001 0c2.202-4.854 7.052-9.31 11.455-9.31 4.874 0 6.37 2.975 6.37 9.18 0 4.913.093 27.292.093 27.292H227V30.178c0-8.213-8.095-9.808-12.09-9.808-5.62 0-10.268 4.545-12.369 8.206V20L196 22.624V58h6.541V30.838z'
      })
    )
  );
};

masthead_VerticalLogo.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 279 125',
  preserveAspectRatio: 'xMinYMin meet'
};

var masthead_HorizontalLogo = function HorizontalLogo(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement('path', {
      d: 'M470.21 20.9c0-6.312 3.807-19.31 22.706-19.31 12.865 0 21.44 15.246 24.518 24.55l1.05.383V8.205S508.529 0 492.915 0c-12.698 0-32.317 6.748-32.317 26.249 0 30.73 54.324 26.556 54.324 53.587 0 14.35-7.9 23.96-22.038 23.96-24.506 0-31.485-27.587-31.485-33.232l-1.62-.923V95.99s14.6 9.62 33.105 9.62c12.106 0 33.105-7.647 33.105-30.197 0-34.501-55.78-27.116-55.78-54.514m-241.3 72.104s-8.413 7.604-17.063 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.035-20.977v27.222zm-11.354-55.652c-9.042 0-24.042 8.205-24.042 8.205v18.317l1.05-.382c3.079-9.305 12.636-24.88 22.992-24.88 9.54 0 11.354 7.517 11.354 16.675v8.46c-14.024 0-40.738 5.597-40.738 25.695 0 7.76 6.869 15.646 20.48 15.646 13.23 0 20.258-10.049 20.258-10.049v7.95h11.353V54.46c0-7.887-6.297-17.109-22.707-17.109zm352.669 55.652s-8.413 7.604-17.062 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.034-20.977v27.222zm-11.353-55.652c-9.043 0-24.042 8.205-24.042 8.205v18.317l1.05-.382c3.078-9.305 12.636-24.88 22.992-24.88 9.541 0 11.353 7.517 11.353 16.675v8.46c-14.024 0-40.737 5.597-40.737 25.695 0 7.76 6.87 15.646 20.48 15.646 13.23 0 20.257-10.049 20.257-10.049v7.95h11.354V54.46c0-7.887-6.297-17.109-22.707-17.109zm217.6 55.652s-8.413 7.604-17.062 7.604c-9.556 0-11.972-9.385-11.972-13.849 0-7.887 2.416-20.977 29.034-20.977v27.222zm-11.354-55.652c-9.042 0-24.04 8.205-24.04 8.205v18.317l1.048-.382c3.08-9.305 12.637-24.88 22.992-24.88 9.542 0 11.354 7.517 11.354 16.675v8.46c-14.024 0-40.737 5.597-40.737 25.695 0 7.76 6.87 15.646 20.48 15.646 13.23 0 20.257-10.049 20.257-10.049v7.95h11.353V54.46c0-7.887-6.296-17.109-22.707-17.109zm69.868 55.652s-8.412 7.604-17.062 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.034-20.977v27.222zm-11.353-55.652c-9.043 0-24.042 8.205-24.042 8.205v18.317l1.05-.382c3.079-9.305 12.636-24.88 22.992-24.88 9.54 0 11.353 7.517 11.353 16.675v8.46c-14.023 0-40.737 5.597-40.737 25.695 0 7.76 6.869 15.646 20.48 15.646 13.23 0 20.257-10.049 20.257-10.049v7.95h11.354V54.46c0-7.887-6.297-17.109-22.707-17.109zm115.153 55.652s-8.413 7.604-17.062 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.034-20.977v27.222zM927.43 37.351c-9.042 0-24.041 8.205-24.041 8.205v18.317l1.049-.382c3.079-9.305 12.637-24.88 22.992-24.88 9.542 0 11.354 7.517 11.354 16.675v8.46c-14.024 0-40.737 5.597-40.737 25.695 0 7.76 6.869 15.646 20.479 15.646 13.23 0 20.258-10.049 20.258-10.049v7.95h11.353V54.46c0-7.887-6.296-17.109-22.707-17.109zM408.188 93.003s-8.413 7.604-17.063 7.604c-9.555 0-11.972-9.385-11.972-13.849 0-7.887 2.417-20.977 29.035-20.977v27.222zm-11.354-55.652c-9.042 0-24.042 8.205-24.042 8.205v18.317l1.05-.382c3.079-9.305 12.637-24.88 22.992-24.88 9.542 0 11.354 7.517 11.354 16.675v8.46c-14.024 0-40.737 5.597-40.737 25.695 0 7.76 6.869 15.646 20.479 15.646 13.23 0 20.258-10.049 20.258-10.049v7.95h11.353V54.46c0-7.887-6.297-17.109-22.707-17.109zM94.286 102.53c-12.366 1.698-24.34-11.115-26.743-28.618-2.403-17.503 5.673-33.069 18.039-34.767 12.366-1.698 24.34 11.113 26.743 28.616 2.404 17.504-5.673 33.07-18.04 34.769m-4.351-65.943c-19.224 0-34.808 15.335-34.808 34.25 0 18.916 15.584 34.25 34.808 34.25s34.808-15.334 34.808-34.25c0-18.915-15.584-34.25-34.808-34.25m808.319 8.969s-4.647-8.205-18.514-8.205c-8.784 0-14.479 8.26-14.479 8.26V37.16l-11.354 4.58v61.249h11.354V50.91c0-3.734 6.146-11.923 13.842-11.923 9.386 0 15.39 14.658 18.236 24.59l1.085.295-.17-18.317zm-307.168 57.433h11.354V.524l-11.354 4.58zm144.569-63.348L712.33 89.925l-24.536-50.284h-12.88l31.915 65.446h2.169l.976-2.098h.017l29.385-63.348zm-84.528 62.017c-1.078.393-2.187.712-3.346.871-2.722.373-5.42.008-8.006-.92-9.163-3.287-16.864-14.048-18.737-27.697-2.404-17.503 5.673-33.068 18.038-34.767 2.097-.288 4.18-.128 6.208.371 2.02.496 3.98 1.36 5.843 2.54 7.313 4.63 13.103 14.124 14.692 25.706 2.178 15.862-4.264 30.094-14.692 33.896m0-64.22c-.146-.033-.293-.069-.442-.1a35.46 35.46 0 0 0-7.256-.75c-19.225 0-34.808 15.334-34.808 34.25 0 18.915 15.583 34.25 34.808 34.25 19.224 0 34.808-15.335 34.808-34.25 0-16.312-11.591-29.95-27.11-33.4M38.101 87.152c0 9.158-2.127 16.676-12.706 16.676-12.39 0-21.776-19.514-24.346-28.94L0 74.506v22.376s14.274 8.206 25.464 8.206c16.41 0 23.99-9.222 23.99-17.11V.526l-11.353 4.58v82.047zM162.51 37.35c-9.756 0-17.822 7.93-21.469 14.315V.525l-11.353 4.58v97.884h11.353V55.61c3.823-8.47 12.24-16.24 19.885-16.24 8.46 0 11.055 5.189 11.055 16.012 0 8.57.162 47.606.162 47.606h11.352v-48.53c0-14.326-14.05-17.108-20.985-17.108m117.92 0c-9.757 0-17.823 7.93-21.47 14.315v-14.96l-11.353 4.58v61.704h11.353V55.61c3.823-8.47 12.24-16.24 19.885-16.24 8.46 0 11.055 5.189 11.055 16.012 0 8.57.162 47.606.162 47.606h11.352v-48.53c0-14.326-14.05-17.108-20.985-17.108m61.059 0c-9.756 0-17.823 7.93-21.47 14.315v-14.96l-11.352 4.58v61.704h11.353V55.61c3.822-8.47 12.24-16.24 19.885-16.24 8.459 0 11.055 5.189 11.055 16.012 0 8.57.162 47.606.162 47.606h11.352v-48.53c0-14.326-14.051-17.108-20.985-17.108',
      fill: '#002ACC',
      fillRule: 'evenodd'
    })
  );
};

masthead_HorizontalLogo.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 951 106',
  preserveAspectRatio: 'xMinYMin meet'
};



/* harmony default export */ var masthead = (function () {
  return external__react__default.a.createElement(
    'header',
    {
      className: 'jsx-108934085' + ' ' + 'masthead'
    },
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-108934085' + ' ' + 'svg-container verticalLogo'
      },
      external__react__default.a.createElement(masthead_VerticalLogo, null)
    ),
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-108934085' + ' ' + 'svg-container horizontalLogo'
      },
      external__react__default.a.createElement(masthead_HorizontalLogo, null)
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '108934085',
      css: ['.masthead.jsx-108934085{min-height:80vh;background-color:' + settings.colors.salmon + ';position:relative;}', '.svg-container.jsx-108934085{display:inline-block;position:absolute;top:calc(50% + 1.5rem);left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%;vertical-align:middle;overflow:hidden;}', '.svg-container.jsx-108934085 svg{display:inline-block;position:absolute;top:0;left:0;}', '.verticalLogo.jsx-108934085{padding-bottom:' + 123 / 262 * 100 + '%;}', '.horizontalLogo.jsx-108934085{display:none;padding-bottom:' + 107 / 959 * 100 + '%;}', '@media (min-width:' + settings.breakPoints.m + '){.verticalLogo.jsx-108934085{display:none;}.horizontalLogo.jsx-108934085{display:inline-block;top:calc(50% + 2rem);}}', '@media (min-width:' + settings.breakPoints.l + '){.masthead.jsx-108934085{min-height:70vh;}.horizontalLogo.jsx-108934085{top:calc(50% + 2.5rem);}}', '@media (min-width:' + settings.breakPoints.xl + '){.horizontalLogo.jsx-108934085{top:calc(50% + 3rem);}}']
    })
  );
});
// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(2);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// CONCATENATED MODULE: ./components/heading.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var heading_Heading = function (_React$Component) {
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

      var classes = external__classnames__default()({
        'heading': true,
        'm-gradient--to-white': gradientDirection === 'to white',
        'm-gradient--to-salmon': gradientDirection === 'to salmon',
        'm-size--medium': size === 'medium'
      });

      return external__react__default.a.createElement(
        HeadingTag,
        { className: classes + ' ' + (className || '') },
        children,
        external__react__default.a.createElement(style__default.a, {
          styleId: '509822342',
          css: ['.heading{font-size:30px;font-weight:bold;text-align:' + textAlign + ';color:' + settings.colors.blue + ';font-family:\'Sporting Grotesque Bold\',sans-serif;line-height:1.2;margin-bottom:1rem;padding:0 1rem;}', '.m-gradient--to-white{background:linear-gradient( to bottom, ' + settings.colors.salmon + ' 0%, ' + settings.colors.salmon + ' 48%, ' + settings.colors.white + ' 48%, ' + settings.colors.white + ' 100% );padding:3rem 1rem;margin-bottom:0;}', '.m-gradient--to-salmon{background:linear-gradient( to bottom, ' + settings.colors.white + ' 0%, ' + settings.colors.white + ' 48%, ' + settings.colors.salmon + ' 48%, ' + settings.colors.salmon + ' 100% );padding:3rem 1rem;margin-bottom:0;}', '.m-size--medium{font-size:25px;}', '@media (min-width:' + settings.breakPoints.m + '){.m-gradient--to-white,.m-gradient--to-salmon{padding:4rem 1rem;}}', '@media (min-width:' + settings.breakPoints.l + '){.m-gradient--to-white,.m-gradient--to-salmon{padding:5rem 1rem;font-size:48px;}}', '@media (min-width:' + settings.breakPoints.xl + '){.m-gradient--to-white,.m-gradient--to-salmon{padding:6rem 1rem;}}'],
          dynamic: [textAlign, settings.colors.blue, settings.colors.salmon, settings.colors.salmon, settings.colors.white, settings.colors.white, settings.colors.white, settings.colors.white, settings.colors.salmon, settings.colors.salmon, settings.breakPoints.m, settings.breakPoints.l, settings.breakPoints.xl]
        })
      );
    }
  }]);

  return Heading;
}(external__react__default.a.Component);

/* harmony default export */ var heading = (heading_Heading);
// CONCATENATED MODULE: ./components/columnize.js
var columnize__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function columnize__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function columnize__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function columnize__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var columnize_Columnize = function (_React$Component) {
  columnize__inherits(Columnize, _React$Component);

  function Columnize() {
    columnize__classCallCheck(this, Columnize);

    return columnize__possibleConstructorReturn(this, (Columnize.__proto__ || Object.getPrototypeOf(Columnize)).apply(this, arguments));
  }

  columnize__createClass(Columnize, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          large = _props.large;


      var classes = external__classnames__default()({
        'colWrap': true,
        'm-width--large': large
      });

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-2708430544' + ' ' + (classes || '')
        },
        children,
        external__react__default.a.createElement(style__default.a, {
          styleId: '2708430544',
          css: ['.colWrap.jsx-2708430544{display:block;padding-bottom:1rem;}', '.colWrap.jsx-2708430544 p{margin-left:0 !important;}', '.colWrap.jsx-2708430544 .heading{text-align:left;}', '@media (min-width:' + settings.breakPoints.l + '){.colWrap.jsx-2708430544{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;max-width:1000px;margin:0 auto;}.colWrap.m-width--large.jsx-2708430544{max-width:1000px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.colWrap.jsx-2708430544:not(.m-width--large)  *{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;}.colWrap.jsx-2708430544:not(.m-width--large) .heading{text-align:right;}}']
        })
      );
    }
  }]);

  return Columnize;
}(external__react__default.a.Component);

/* harmony default export */ var columnize = (columnize_Columnize);
// CONCATENATED MODULE: ./components/icon.js
var icon__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function icon__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function icon__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function icon__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var icon_Calm = function Calm(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      external__react__default.a.createElement('path', {
        d: 'M63.002 31c-1.24 1.671-3.064 2.631-5.001 2.631-1.94 0-3.762-.96-5-2.631L50 32.905C51.927 35.508 54.843 37 58 37s6.073-1.492 8-4.095L63.002 31zM47 32.905L44.002 31c-1.24 1.671-3.063 2.631-5 2.631-1.941 0-3.764-.96-5-2.631L31 32.905C32.928 35.508 35.842 37 39.002 37c3.156 0 6.07-1.492 7.998-4.095m2 15.726c-1.938 0-3.761-.958-5.002-2.631L41 47.905C42.927 50.508 45.843 52 49 52s6.073-1.492 8-4.095L53.998 46c-1.237 1.673-3.06 2.631-4.999 2.631'
      }),
      external__react__default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      })
    )
  );
};

icon_Calm.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var icon_Enthusiastic = function Enthusiastic(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      external__react__default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      }),
      external__react__default.a.createElement('path', {
        d: 'M15.333 24a1.667 1.667 0 1 1 3.335.001A1.667 1.667 0 0 1 15.333 24M22 24c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5m14 1.667a1.667 1.667 0 1 1 .001-3.335A1.667 1.667 0 0 1 36 25.667M36 19c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5m-9 23.655c-3.145 0-6.094-1.698-8.091-4.655L16 39.826C18.648 43.75 22.66 46 27 46s8.352-2.251 11-6.174L35.091 38c-1.997 2.957-4.946 4.655-8.091 4.655'
      })
    )
  );
};

icon_Enthusiastic.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var icon_Wink = function Wink(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      external__react__default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      }),
      external__react__default.a.createElement('path', {
        d: 'M42.5 51.669c-3.366 0-6.511-1.7-8.633-4.669L31 48.884C33.779 52.77 37.972 55 42.5 55s8.721-2.229 11.5-6.116L51.133 47c-2.122 2.968-5.267 4.669-8.633 4.669M53.5 29c-2.959 0-5.694 1.494-7.5 4.095L48.814 35c1.161-1.674 2.87-2.632 4.686-2.632 1.818 0 3.527.958 4.686 2.632L61 33.095C59.196 30.494 56.46 29 53.5 29m-21.167 3a1.667 1.667 0 1 1 3.335.001A1.667 1.667 0 0 1 32.333 32M39 32c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5'
      })
    )
  );
};

icon_Wink.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var icon_LinkedIn = function LinkedIn(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      external__react__default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      }),
      external__react__default.a.createElement('path', {
        d: 'M23 50h6V29h-6zm3.502-32a3.5 3.5 0 1 0-.005 6.999A3.5 3.5 0 0 0 26.502 18m19.803 11c-3.12 0-5.21 1.698-6.068 3.308h-.089v-2.8H34V50h6.409V39.863c0-2.671.508-5.261 3.845-5.261 3.292 0 3.334 3.055 3.334 5.431V50H54V38.762C54 33.242 52.803 29 46.305 29'
      })
    )
  );
};

icon_LinkedIn.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '75',
  height: '75',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var icon_Twitter = function Twitter(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement(
      'g',
      {
        fill: '#002ACC',
        fillRule: 'evenodd'
      },
      external__react__default.a.createElement('path', {
        d: 'M37.5 71.491c-18.744 0-33.991-15.247-33.991-33.991S18.756 3.509 37.5 3.509 71.491 18.756 71.491 37.5 56.244 71.491 37.5 71.491M37.5 0C16.823 0 0 16.823 0 37.5S16.823 75 37.5 75 75 58.177 75 37.5 58.177 0 37.5 0'
      }),
      external__react__default.a.createElement('path', {
        d: 'M56.924 22.573a16.306 16.306 0 0 1-5.081 1.9A8.073 8.073 0 0 0 46.003 22C41.584 22 38 25.504 38 29.826c0 .614.07 1.21.208 1.782-6.65-.326-12.547-3.441-16.493-8.175a7.662 7.662 0 0 0-1.083 3.933c0 2.717 1.411 5.112 3.559 6.516a8.117 8.117 0 0 1-3.625-.98l-.001.1c0 3.79 2.76 6.953 6.42 7.671a8.16 8.16 0 0 1-3.613.135c1.018 3.108 3.973 5.373 7.475 5.435a16.277 16.277 0 0 1-9.938 3.35 16.7 16.7 0 0 1-1.908-.107A23.021 23.021 0 0 0 31.265 53C45.982 53 54.03 41.075 54.03 30.733c0-.34-.007-.676-.023-1.011A16.098 16.098 0 0 0 58 25.669a16.246 16.246 0 0 1-4.595 1.233c1.651-.97 2.92-2.501 3.519-4.329'
      })
    )
  );
};

icon_Twitter.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  preserveAspectRatio: 'xMinYMin meet'
};

var icon_Icon = function (_React$Component) {
  icon__inherits(Icon, _React$Component);

  function Icon() {
    icon__classCallCheck(this, Icon);

    return icon__possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  icon__createClass(Icon, [{
    key: 'render',
    value: function render() {
      var name = this.props.name;


      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-2492362127' + ' ' + 'icon'
        },
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-2492362127' + ' ' + 'svg-container'
          },
          name === 'calm' && external__react__default.a.createElement(icon_Calm, null),
          name === 'enthusiastic' && external__react__default.a.createElement(icon_Enthusiastic, null),
          name === 'wink' && external__react__default.a.createElement(icon_Wink, null),
          name === 'linkedin' && external__react__default.a.createElement(icon_LinkedIn, null),
          name === 'twitter' && external__react__default.a.createElement(icon_Twitter, null)
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '2492362127',
          css: ['.icon.jsx-2492362127{position:relative;width:4rem;margin:1rem;}', '.svg-container.jsx-2492362127{width:100%;vertical-align:middle;overflow:hidden;padding-bottom:100%;}', '.svg-container.jsx-2492362127 svg{display:inline-block;position:absolute;top:0;left:0;width:100%;height:100%;}']
        })
      );
    }
  }]);

  return Icon;
}(external__react__default.a.Component);

/* harmony default export */ var icon = (icon_Icon);
// CONCATENATED MODULE: ./components/some.js





var some_Smile = function Smile(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement('path', {
      fill: 'none',
      stroke: '#002ACC',
      strokeWidth: '4',
      d: 'M1.8 1.353C8.557 11.73 19.023 18.42 30.802 18.42s22.244-6.69 29-17.068'
    })
  );
};

some_Smile.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '62',
  height: '21'
};


/* harmony default export */ var some = (function () {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-3922490338' + ' ' + 'some'
    },
    external__react__default.a.createElement(
      'ul',
      {
        className: 'jsx-3922490338'
      },
      external__react__default.a.createElement(
        'li',
        {
          className: 'jsx-3922490338'
        },
        external__react__default.a.createElement(
          'a',
          { href: 'https://linkedin.com/', className: 'jsx-3922490338'
          },
          external__react__default.a.createElement(
            'span',
            {
              className: 'jsx-3922490338' + ' ' + 'hidden-but-readable'
            },
            'LinkedIn'
          ),
          external__react__default.a.createElement(icon, { name: 'linkedin' })
        )
      ),
      external__react__default.a.createElement(
        'li',
        {
          className: 'jsx-3922490338'
        },
        external__react__default.a.createElement(
          'a',
          { href: 'https://twitter.com/', className: 'jsx-3922490338'
          },
          external__react__default.a.createElement(
            'span',
            {
              className: 'jsx-3922490338' + ' ' + 'hidden-but-readable'
            },
            'Twitter'
          ),
          external__react__default.a.createElement(icon, { name: 'twitter' })
        )
      )
    ),
    external__react__default.a.createElement(some_Smile, null),
    external__react__default.a.createElement(style__default.a, {
      styleId: '3922490338',
      css: ['.some.jsx-3922490338{text-align:center;}', 'ul.jsx-3922490338{margin:0;padding-bottom:.5rem;}', 'li.jsx-3922490338{display:inline-block;}', 'a.jsx-3922490338{text-decoration:none;}', 'a.jsx-3922490338  .icon{margin:0.25rem;}']
    })
  );
});
// CONCATENATED MODULE: ./pages/index.js
var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var pages_Index = function (_React$Component) {
  pages__inherits(Index, _React$Component);

  function Index() {
    pages__classCallCheck(this, Index);

    return pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  pages__createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(function (err) {
          return console.error('Service worker registration failed', err);
        });
      } else {
        console.log('Service worker not supported');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-2488276608'
        },
        external__react__default.a.createElement(
          head__default.a,
          null,
          external__react__default.a.createElement(
            'title',
            {
              className: 'jsx-2488276608'
            },
            'Johanna Salovaara'
          ),
          external__react__default.a.createElement('meta', { name: 'description', content: 'Autan yrityksi\xE4, j\xE4rjest\xF6j\xE4 ja asiantuntijoita viestim\xE4\xE4n paremmin.', className: 'jsx-2488276608'
          }),
          external__react__default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-2488276608'
          }),
          external__react__default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2488276608'
          }),
          external__react__default.a.createElement('link', { rel: 'manifest', href: '/static/manifest.webmanifest', className: 'jsx-2488276608'
          }),
          external__react__default.a.createElement('meta', { name: 'theme-color', content: settings.colors.salmon, className: 'jsx-2488276608'
          })
        ),
        external__react__default.a.createElement(masthead, null),
        external__react__default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608' + ' ' + 'm-text-align--center'
          },
          external__react__default.a.createElement(
            heading,
            { semanticLevel: 'h1', textAlign: 'center', gradientDirection: 'to white' },
            'Vaikuttavaa',
            external__react__default.a.createElement('br', {
              className: 'jsx-2488276608'
            }),
            'viestint\xE4\xE4'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-2488276608'
            },
            'Autan yrityksi\xE4, j\xE4rjest\xF6j\xE4 ja asiantuntijoita viestim\xE4\xE4n paremmin. Mik\xE4li haluat kasvattaa tietoisuutta br\xE4ndist\xE4si, sitouttaa asiakkaasi tehokkaammin tai vaikuttaa ymp\xE4r\xF6iv\xE4\xE4n yhteiskuntaasi, on viestint\xE4 keino tavoittaa yleis\xF6si.'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-2488276608'
            },
            'Viestinn\xE4n ytimess\xE4 ovat laadukkaat sis\xE4ll\xF6t. Tuotan sis\xE4lt\xF6j\xE4, jotka vastaavat tarpeisiisi \u2013 oli se sitten keskustelun her\xE4tt\xE4minen, toimintasi merkityksen muotoilu tai digitaalisen verkostosi kasvattaminen.'
          )
        ),
        external__react__default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608' + ' ' + 'm-bg-color--salmon'
          },
          external__react__default.a.createElement(
            heading,
            { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to salmon' },
            'Palvelut'
          ),
          external__react__default.a.createElement(
            columnize,
            { large: true },
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-2488276608'
              },
              external__react__default.a.createElement(icon, { name: 'calm' }),
              external__react__default.a.createElement(
                heading,
                { semanticLevel: 'h3', size: 'medium' },
                'Viestinn\xE4n',
                external__react__default.a.createElement('br', {
                  className: 'jsx-2488276608'
                }),
                'sis\xE4ll\xF6t'
              ),
              external__react__default.a.createElement(
                'ul',
                {
                  className: 'jsx-2488276608'
                },
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Tiedotteet, lehdist\xF6materiaalit'
                ),
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Blogit'
                ),
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Artikkelit'
                ),
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Nettisivutekstit, esitteet'
                ),
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Sosiaalisen median sis\xE4ll\xF6t'
                ),
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Esitykset, presentaatiot, puheet'
                )
              )
            ),
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-2488276608'
              },
              external__react__default.a.createElement(icon, { name: 'enthusiastic' }),
              external__react__default.a.createElement(
                heading,
                { semanticLevel: 'h3', size: 'medium' },
                'Viestinn\xE4n',
                external__react__default.a.createElement('br', {
                  className: 'jsx-2488276608'
                }),
                'strateginen',
                external__react__default.a.createElement('br', {
                  className: 'jsx-2488276608'
                }),
                'suunnittelu'
              ),
              external__react__default.a.createElement(
                'ul',
                {
                  className: 'jsx-2488276608'
                },
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Ydinviestit, br\xE4nditarinat'
                ),
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Viestint\xE4suunnitelmat'
                ),
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Viestint\xE4kalenterit'
                )
              )
            ),
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-2488276608'
              },
              external__react__default.a.createElement(icon, { name: 'wink' }),
              external__react__default.a.createElement(
                heading,
                { semanticLevel: 'h3', size: 'medium' },
                'Viestinn\xE4n',
                external__react__default.a.createElement('br', {
                  className: 'jsx-2488276608'
                }),
                'konsultointi'
              ),
              external__react__default.a.createElement(
                'ul',
                {
                  className: 'jsx-2488276608'
                },
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Sparraus ja tuki'
                ),
                external__react__default.a.createElement(
                  'li',
                  {
                    className: 'jsx-2488276608'
                  },
                  'Valmennukset'
                )
              )
            )
          )
        ),
        external__react__default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608' + ' ' + 'm-text-align--center'
          },
          external__react__default.a.createElement(
            heading,
            { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to white' },
            'Kenelle'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-2488276608'
            },
            'Teen viestint\xE4\xE4 kaikenlaisille organisaatioille yrityksist\xE4 j\xE4rjest\xF6ihin. Viestint\xE4- ja markkinointitoimistoille toimin freelancerina sis\xE4ll\xF6ntuotannon ja viestinn\xE4n suunnittelun projekteissa.'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-2488276608'
            },
            'Autan my\xF6s eri alojen asiantuntijoita, tutkijoita ja tieteentekij\xF6it\xE4 viestien kiteytt\xE4misess\xE4 ja selkeytt\xE4misess\xE4. K\xE4\xE4nn\xE4n vaikeat teoriat ja tutkimustulokset kansankielelle ja autan tavoittamaan oikeat yleis\xF6t yhteiskunnallisessa keskustelussa.'
          )
        ),
        external__react__default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608' + ' ' + 'm-bg-color--salmon'
          },
          external__react__default.a.createElement(
            heading,
            { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to salmon' },
            'Tausta'
          ),
          external__react__default.a.createElement(
            columnize,
            null,
            external__react__default.a.createElement(
              heading,
              { semanticLevel: 'h3', size: 'medium' },
              'Viestint\xE4'
            ),
            external__react__default.a.createElement(
              'p',
              {
                className: 'jsx-2488276608'
              },
              'Ennen freelanceriksi hypp\xE4\xE4mist\xE4 toimin viisi vuotta eri positioissa viestint\xE4toimistossa. Viestinn\xE4n kokemusta minulle on kertynyt p\xF6rssiyhti\xF6ist\xE4 ja j\xE4rjest\xF6ist\xE4 startup-yrityksiin, mm. IT-, turvallisuus-, rakennus- ja terveysaloilta. Olen toteuttanut asiakkailleni viestint\xE4\xE4 sis\xE4ll\xF6ntuottajan, valmentajan, viestint\xE4konsultin ja viestinn\xE4n suunnittelijan rooleissa.'
            )
          ),
          external__react__default.a.createElement(
            columnize,
            null,
            external__react__default.a.createElement(
              heading,
              { semanticLevel: 'h3', size: 'medium' },
              'Markkinointi'
            ),
            external__react__default.a.createElement(
              'p',
              {
                className: 'jsx-2488276608'
              },
              'Olen valmistunut Turun yliopiston kauppakorkeakoulusta kauppatieteiden maisteriksi (KTM) markkinointi p\xE4\xE4aineenani. Opintojeni ohella ty\xF6skentelin mainostoimistossa, jossa kartutin k\xE4yt\xE4nn\xF6n kokemusta markkinoinnin ja br\xE4nd\xE4yksen maailmasta.'
            )
          ),
          external__react__default.a.createElement(
            columnize,
            null,
            external__react__default.a.createElement(
              heading,
              { semanticLevel: 'h3', size: 'medium' },
              'Teologia'
            ),
            external__react__default.a.createElement(
              'p',
              {
                className: 'jsx-2488276608'
              },
              'Viestinn\xE4n t\xF6iden ohella opiskelen teologiaa ja uskontotutkimusta Helsingin yliopistolla. Syd\xE4nt\xE4ni l\xE4hell\xE4 ovat siis markkinointiviestinn\xE4n lis\xE4ksi eksistentiaaliset kysymykset ja hengellinen pohdiskelu.'
            )
          )
        ),
        external__react__default.a.createElement(
          'section',
          {
            className: 'jsx-2488276608'
          },
          external__react__default.a.createElement(
            heading,
            { semanticLevel: 'h2', textAlign: 'center', gradientDirection: 'to white' },
            'Yhteystiedot'
          ),
          external__react__default.a.createElement(
            columnize,
            null,
            external__react__default.a.createElement(
              heading,
              { semanticLevel: 'h3', size: 'medium' },
              'Pyyd\xE4 tarjousta',
              external__react__default.a.createElement('br', {
                className: 'jsx-2488276608'
              }),
              'tai kysy lis\xE4\xE4!'
            ),
            external__react__default.a.createElement(
              'p',
              {
                className: 'jsx-2488276608'
              },
              external__react__default.a.createElement(
                'a',
                { href: 'mailto:johanna.salovaara11@gmail.com', className: 'jsx-2488276608'
                },
                'johanna.salovaara11@gmail.com'
              ),
              external__react__default.a.createElement('br', {
                className: 'jsx-2488276608'
              }),
              '\u2013',
              external__react__default.a.createElement('br', {
                className: 'jsx-2488276608'
              }),
              external__react__default.a.createElement(
                'a',
                { href: 'tel:+358400642709', className: 'jsx-2488276608'
                },
                '+358 400 642 709'
              )
            )
          ),
          external__react__default.a.createElement(some, null),
          external__react__default.a.createElement('img', { src: '/static/portrait.jpg', alt: 'Portrait of Johanna Salovaara', className: 'jsx-2488276608' + ' ' + 'portrait'
          })
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '4282973069',
          css: ['@font-face{font-family:\'Sporting Grotesque Bold\';src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.eot\');src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.eot?#iefix\') format(\'embedded-opentype\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.woff\') format(\'woff\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.woff2\') format(\'woff2\');font-weight:normal;font-style:normal;}', '@font-face{font-family:\'Quattrocento Regular\';src:url(\'/static/webfonts/Quattrocento/quattrocento-regular-webfont.woff2\') format(\'woff2\'), url(\'/static/webfonts/Quattrocento/quattrocento-regular-webfont.woff\') format(\'woff\');font-weight:normal;font-style:normal;}', '@font-face{font-family:\'Sporting Grotesque Regular\';src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.eot\');src:url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.eot?#iefix\') format(\'embedded-opentype\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.woff\') format(\'woff\'), url(\'/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.woff2\') format(\'woff2\');font-weight:normal;font-style:normal;}', '@font-face{font-family:\'Quattrocento Bold\';src:url(\'/static/webfonts/Quattrocento/quattrocento-bold-webfont.woff2\') format(\'woff2\'), url(\'/static/webfonts/Quattrocento/quattrocento-bold-webfont.woff\') format(\'woff\');font-weight:normal;font-style:normal;}']
        }),
        external__react__default.a.createElement(style__default.a, {
          styleId: '866868772',
          css: ['html,body{margin:0;padding:0;font-family:\'Quattrocento Regular\',serif;color:' + settings.colors.blue + ';font-size:16px;}', 'h1,h2,h3,h4,h5,h6{margin:0;}', 'p{padding:0 1rem 1rem 1rem;margin:0 auto 0 auto;max-width:557px;color:' + settings.colors.blue + ';}', 'ul{margin:0 0 0 1rem;padding:0 1rem 1rem 1rem;color:' + settings.colors.blue + ';list-style:disc;}', '@media (min-width:' + settings.breakPoints.l + '){p,ul{font-size:20px;padding-bottom:1.5rem;}}', '.m-bg-color--salmon{background-color:' + settings.colors.salmon + ';}', '.m-text-align--center{text-align:center;}', '.portrait{position:relative;max-width:100%;margin:1rem auto 0 auto;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}', '.hidden-but-readable{-webkit-clip-path:polygon(0px 0px,0px 0px,0px 0px,0px 0px);clip-path:polygon(0px 0px,0px 0px,0px 0px,0px 0px);}']
        })
      );
    }
  }]);

  return Index;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);