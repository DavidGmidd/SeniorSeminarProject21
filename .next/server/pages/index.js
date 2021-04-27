module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/CrushList.js":
/*!********************************!*\
  !*** ./src/pages/CrushList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrushList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ "./src/pages/Styles/Home.module.css");
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/index */ "./src/pages/index.js");

var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\CrushList.js";





function CrushList() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Panther Crush List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.MenuContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
          onClick: () => {
            setMode();
          },
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
          onClick: () => {
            setMode("Values");
          },
          children: "Our Values"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
          onClick: () => {
            setMode("FAQ");
          },
          children: "FAQ"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plyr,
        id: "player",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
          src: "https://player.vimeo.com/video/536975744?background=1&loop=0",
          width: "100%",
          height: "100%",
          frameborder: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/FAQ.js":
/*!**************************!*\
  !*** ./src/pages/FAQ.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FAQ; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ "./src/pages/Styles/Home.module.css");
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/index */ "./src/pages/index.js");
/* harmony import */ var _pages_Values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Values */ "./src/pages/Values.js");
/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/CrushList */ "./src/pages/CrushList.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\FAQ.js";






function FAQ() {
  const {
    0: currentView,
    1: setView
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let content;

  if (currentView === 'Values') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Values__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, this);
  } else if (currentView === 'Home') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_index__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, this);
  } else if (currentView === 'CrushList') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MenuContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
          onClick: () => {
            setView("Home");
          },
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
          onClick: () => {
            setView("Values");
          },
          children: "Our Values"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
          onClick: () => {
            setView("FAQ");
          },
          children: "FAQ"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: " TESTING FAQ"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,
          onClick: () => {
            setCurrentMode("CrushList");
          },
          children: "My Crushes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: content
  }, void 0, false);
}

/***/ }),

/***/ "./src/pages/Styles/Home.module.css":
/*!******************************************!*\
  !*** ./src/pages/Styles/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"MenuContainer": "Home_MenuContainer__26H8S",
	"buttonMenu": "Home_buttonMenu__2dszO",
	"plyr": "Home_plyr__3WLyy",
	"howitworks": "Home_howitworks__26Van",
	"main": "Home_main__2fVYg",
	"body": "Home_body__1ZFtJ",
	"title": "Home_title__33w7p",
	"input": "Home_input__3pJ9E",
	"button": "Home_button__3jpQE",
	"UserInfo": "Home_UserInfo__3tdsp",
	"crushInput": "Home_crushInput__1PaEY",
	"intro": "Home_intro__1Nh_4",
	"footer": "Home_footer__CkrbQ"
};


/***/ }),

/***/ "./src/pages/Values.js":
/*!*****************************!*\
  !*** ./src/pages/Values.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Values; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ "./src/pages/Styles/Home.module.css");
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/index */ "./src/pages/index.js");
/* harmony import */ var _pages_FAQ__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/FAQ */ "./src/pages/FAQ.js");
/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/CrushList */ "./src/pages/CrushList.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\Values.js";






function Values() {
  const {
    0: currentView,
    1: setView
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let content;

  if (currentView === 'FAQ') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_FAQ__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }, this);
  } else if (currentView === 'Home') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_index__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this);
  } else if (currentView === 'CrushList') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MenuContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
          onClick: () => {
            setView("Home");
          },
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
          onClick: () => {
            setView("Values");
          },
          children: "Our Values"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
          onClick: () => {
            setView("FAQ");
          },
          children: "FAQ"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: " TESTING TESTING VALUES"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,
          onClick: () => {
            setCurrentMode("CrushList");
          },
          children: "My Crushes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: content
  }, void 0, false);
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ "./src/pages/Styles/Home.module.css");
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CrushList */ "./src/pages/CrushList.js");
/* harmony import */ var _pages_Values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Values */ "./src/pages/Values.js");
/* harmony import */ var _pages_FAQ__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/FAQ */ "./src/pages/FAQ.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\index.js";

/* eslint-disable react/no-unescaped-entities*/







function Home() {
  const {
    0: currentMode,
    1: setCurrentMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Home'); // const setMode = (param) => {
  //   if (param === undefined ) {
  //     setCurrentMode("Home")
  //     }
  //   else if (param === 'CrushList') {
  //     setCurrentMode('CrushList');
  //   } else if (param === 'Values'){
  //     setCurrentMode('Values');    
  //   } else {
  //     setCurrentMode("FAQ")
  //   }
  // };

  let content;

  if (currentMode === "Home") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Panther Crush Welcome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.MenuContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: () => {
              setCurrentMode('Home');
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: () => {
              setCurrentMode("Values");
            },
            children: "Our Values"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: () => {
              setCurrentMode("FAQ");
            },
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plyr,
          id: "player",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
            src: "https://cdn.plyr.io/3.6.4/plyr.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            height: "100%",
            width: "100%",
            opacity: "0.5",
            src: "https://player.vimeo.com/video/538885546?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: " Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.howitworks,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "How it works:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            height: "100%",
            width: "100%",
            opacity: "0.5",
            src: "https://player.vimeo.com/video/538941352?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonContainer
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
              onClick: () => {
                setCurrentMode("CrushList");
              },
              children: "My Crushes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this)]
    }, void 0, true);
  } else if (currentMode === "CrushList") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }, this);
  } else if (currentMode === "Values") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Values__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }, this);
  } else if (currentMode === "FAQ") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_FAQ__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: content
  }, void 0, false);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NydXNoTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRkFRLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9WYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ3J1c2hMaXN0Iiwic3R5bGVzIiwibWFpbiIsIk1lbnVDb250YWluZXIiLCJidXR0b25NZW51Iiwic2V0TW9kZSIsInBseXIiLCJGQVEiLCJjdXJyZW50VmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJmb290ZXIiLCJidXR0b24iLCJzZXRDdXJyZW50TW9kZSIsIlZhbHVlcyIsIkhvbWUiLCJjdXJyZW50TW9kZSIsImludHJvIiwiaG93aXR3b3JrcyIsImJ1dHRvbkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFHaEMsc0JBRUE7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBTSxlQUFTLEVBQUVDLG9FQUFNLENBQUNDLElBQXhCO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFFRCxvRUFBTSxDQUFDRSxhQUF2QjtBQUFBLGdDQUVIO0FBQVEsbUJBQVMsRUFBRUYsb0VBQU0sQ0FBQ0csVUFBMUI7QUFBc0MsaUJBQU8sRUFBRSxNQUFNO0FBQUNDLG1CQUFPO0FBQUcsV0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkcsZUFHSDtBQUFRLG1CQUFTLEVBQUVKLG9FQUFNLENBQUNHLFVBQTFCO0FBQXNDLGlCQUFPLEVBQUUsTUFBTTtBQUFDQyxtQkFBTyxDQUFDLFFBQUQsQ0FBUDtBQUFrQixXQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRyxlQUlIO0FBQVEsbUJBQVMsRUFBRUosb0VBQU0sQ0FBQ0csVUFBMUI7QUFBc0MsaUJBQU8sRUFBRSxNQUFNO0FBQUNDLG1CQUFPLENBQUMsS0FBRCxDQUFQO0FBQWUsV0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFVQTtBQUFLLGlCQUFTLEVBQUVKLG9FQUFNLENBQUNLLElBQXZCO0FBQTZCLFVBQUUsRUFBRSxRQUFqQztBQUFBLCtCQUNBO0FBQVEsYUFBRyxFQUFDLDhEQUFaO0FBQ0EsZUFBSyxFQUFDLE1BRE47QUFDYSxnQkFBTSxFQUFDLE1BRHBCO0FBRUEscUJBQVcsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkE7QUEwQkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0MsR0FBVCxHQUFlO0FBRTVCLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUF5QkMsc0RBQVEsRUFBdkM7QUFFQSxNQUFJQyxPQUFKOztBQUVBLE1BQUdILFdBQVcsS0FBSyxRQUFuQixFQUE2QjtBQUMzQkcsV0FBTyxnQkFBSyxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFFRCxHQUhELE1BR08sSUFBR0gsV0FBVyxLQUFLLE1BQW5CLEVBQTJCO0FBQ2hDRyxXQUFPLGdCQUFLLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNELEdBRk0sTUFFQSxJQUFHSCxXQUFXLEtBQUssV0FBbkIsRUFBZ0M7QUFDckNHLFdBQU8sZ0JBQUsscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBRUQsR0FITSxNQUdBO0FBQ0xBLFdBQU8sZ0JBQ0w7QUFBQSw4QkFDRjtBQUFLLGlCQUFTLEVBQUVWLG9FQUFNLENBQUNFLGFBQXZCO0FBQUEsZ0NBRUU7QUFBUSxtQkFBUyxFQUFFRixvRUFBTSxDQUFDRyxVQUExQjtBQUFzQyxpQkFBTyxFQUFFLE1BQU07QUFBQ0ssbUJBQU8sQ0FBQyxNQUFELENBQVA7QUFBZ0IsV0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFRLG1CQUFTLEVBQUVSLG9FQUFNLENBQUNHLFVBQTFCO0FBQXNDLGlCQUFPLEVBQUUsTUFBTTtBQUFDSyxtQkFBTyxDQUFDLFFBQUQsQ0FBUDtBQUFrQixXQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFO0FBQVEsbUJBQVMsRUFBRVIsb0VBQU0sQ0FBQ0csVUFBMUI7QUFBc0MsaUJBQU8sRUFBRSxNQUFNO0FBQUNLLG1CQUFPLENBQUMsS0FBRCxDQUFQO0FBQWUsV0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREUsZUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBBLGVBWUE7QUFBUSxpQkFBUyxFQUFFUixvRUFBTSxDQUFDVyxNQUExQjtBQUFBLCtCQUNJO0FBQVEsbUJBQVMsRUFBRVgsb0VBQU0sQ0FBQ1ksTUFBMUI7QUFBa0MsaUJBQU8sRUFBRSxNQUFNO0FBQUNDLDBCQUFjLENBQUMsV0FBRCxDQUFkO0FBQTRCLFdBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpBO0FBQUEsb0JBREY7QUFtQkQ7O0FBSUMsc0JBQ0U7QUFBQSxjQUNESDtBQURDLG1CQURGO0FBTUgsQzs7Ozs7Ozs7Ozs7QUNuREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNJLE1BQVQsR0FBa0I7QUFJL0IsUUFBTTtBQUFBLE9BQUNQLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQXlCQyxzREFBUSxFQUF2QztBQUVBLE1BQUlDLE9BQUo7O0FBRUEsTUFBR0gsV0FBVyxLQUFLLEtBQW5CLEVBQTBCO0FBQ3hCRyxXQUFPLGdCQUFLLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUVELEdBSEQsTUFHTyxJQUFHSCxXQUFXLEtBQUssTUFBbkIsRUFBMkI7QUFDaENHLFdBQU8sZ0JBQUsscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0QsR0FGTSxNQUVBLElBQUdILFdBQVcsS0FBSyxXQUFuQixFQUFnQztBQUNyQ0csV0FBTyxnQkFBSyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFFRCxHQUhNLE1BR0E7QUFDTEEsV0FBTyxnQkFDTDtBQUFBLDhCQUNGO0FBQUssaUJBQVMsRUFBRVYsb0VBQU0sQ0FBQ0UsYUFBdkI7QUFBQSxnQ0FFRTtBQUFRLG1CQUFTLEVBQUVGLG9FQUFNLENBQUNHLFVBQTFCO0FBQXNDLGlCQUFPLEVBQUUsTUFBTTtBQUFDSyxtQkFBTyxDQUFDLE1BQUQsQ0FBUDtBQUFnQixXQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQVEsbUJBQVMsRUFBRVIsb0VBQU0sQ0FBQ0csVUFBMUI7QUFBc0MsaUJBQU8sRUFBRSxNQUFNO0FBQUNLLG1CQUFPLENBQUMsUUFBRCxDQUFQO0FBQWtCLFdBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUU7QUFBUSxtQkFBUyxFQUFFUixvRUFBTSxDQUFDRyxVQUExQjtBQUFzQyxpQkFBTyxFQUFFLE1BQU07QUFBQ0ssbUJBQU8sQ0FBQyxLQUFELENBQVA7QUFBZSxXQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERSxlQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEEsZUFZQTtBQUFRLGlCQUFTLEVBQUVSLG9FQUFNLENBQUNXLE1BQTFCO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFFWCxvRUFBTSxDQUFDWSxNQUExQjtBQUFrQyxpQkFBTyxFQUFFLE1BQU07QUFBQ0MsMEJBQWMsQ0FBQyxXQUFELENBQWQ7QUFBNEIsV0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkE7QUFBQSxvQkFERjtBQW1CRDs7QUFJQyxzQkFDRTtBQUFBLGNBQ0RIO0FBREMsbUJBREY7QUFNSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERDtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0ssSUFBVCxHQUFnQjtBQUc3QixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNIO0FBQWQsTUFBZ0NKLHNEQUFRLENBQUMsTUFBRCxDQUE5QyxDQUg2QixDQUs3QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsT0FBSjs7QUFFQSxNQUFJTSxXQUFXLEtBQUssTUFBcEIsRUFBNEI7QUFFMUJOLFdBQU8sZ0JBQ1A7QUFBQSw4QkFDQSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBS0E7QUFBTSxpQkFBUyxFQUFHVixvRUFBTSxDQUFDQyxJQUF6QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsYUFBdkI7QUFBQSxrQ0FFRTtBQUFRLHFCQUFTLEVBQUVGLG9FQUFNLENBQUNHLFVBQTFCO0FBQXNDLG1CQUFPLEVBQUUsTUFBTTtBQUFDVSw0QkFBYyxDQUFDLE1BQUQsQ0FBZDtBQUF1QixhQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQVEscUJBQVMsRUFBRWIsb0VBQU0sQ0FBQ0csVUFBMUI7QUFBc0MsbUJBQU8sRUFBRSxNQUFNO0FBQUNVLDRCQUFjLENBQUMsUUFBRCxDQUFkO0FBQXlCLGFBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBUSxxQkFBUyxFQUFFYixvRUFBTSxDQUFDRyxVQUExQjtBQUFzQyxtQkFBTyxFQUFFLE1BQU07QUFBQ1UsNEJBQWMsQ0FBQyxLQUFELENBQWQ7QUFBc0IsYUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUU7QUFBSyxtQkFBUyxFQUFFYixvRUFBTSxDQUFDSyxJQUF2QjtBQUE2QixZQUFFLEVBQUMsUUFBaEM7QUFBQSxrQ0FFQTtBQUFRLGVBQUcsRUFBRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkEsZUFNRTtBQUNBLGtCQUFNLEVBQUMsTUFEUDtBQUNjLGlCQUFLLEVBQUMsTUFEcEI7QUFDMkIsbUJBQU8sRUFBQyxLQURuQztBQUVBLGVBQUcsRUFBQyxrRUFGSjtBQUdBLHVCQUFXLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GLGVBV0E7QUFBSyxxQkFBUyxFQUFFTCxvRUFBTSxDQUFDaUIsS0FBdkI7QUFBQSxtQ0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEEsZUFrQkE7QUFBSyxxQkFBUyxFQUFFakIsb0VBQU0sQ0FBQ2tCLFVBQXZCO0FBQUEsbUNBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCQSxlQXNCQTtBQUNBLGtCQUFNLEVBQUMsTUFEUDtBQUNjLGlCQUFLLEVBQUMsTUFEcEI7QUFDMkIsbUJBQU8sRUFBQyxLQURuQztBQUVBLGVBQUcsRUFBQyxrRUFGSjtBQUdBLHVCQUFXLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRCQSxlQTRCQTtBQUFLLHFCQUFTLEVBQUVsQixvRUFBTSxDQUFDbUI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1QkEsZUE4QkU7QUFBUSxxQkFBUyxFQUFFbkIsb0VBQU0sQ0FBQ1csTUFBMUI7QUFBQSxtQ0FDRTtBQUFRLHVCQUFTLEVBQUVYLG9FQUFNLENBQUNZLE1BQTFCO0FBQWtDLHFCQUFPLEVBQUUsTUFBTTtBQUFDQyw4QkFBYyxDQUFDLFdBQUQsQ0FBZDtBQUE0QixlQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQTtBQUFBLG9CQURBO0FBcURELEdBdkRELE1BeURLLElBQUlHLFdBQVcsS0FBSyxXQUFwQixFQUFpQztBQUNwQ04sV0FBTyxnQkFBSyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDRCxHQUZJLE1BR0EsSUFBSU0sV0FBVyxLQUFLLFFBQXBCLEVBQThCO0FBQy9CTixXQUFPLGdCQUFLLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUVILEdBSEksTUFHRSxJQUFJTSxXQUFXLEtBQUssS0FBcEIsRUFBMkI7QUFDaENOLFdBQU8sZ0JBQUsscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0Q7O0FBR0gsc0JBQ0k7QUFBQSxjQUNHQTtBQURILG1CQURKO0FBS0MsQzs7Ozs7Ozs7Ozs7QUMxR0Qsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSG9tZSBmcm9tICAnLi4vcGFnZXMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3J1c2hMaXN0KCkge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIExpc3Q8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuICAgICBcclxuICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKCl9fT5Ib21lPC9idXR0b24+XHJcbiAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZShcIlZhbHVlc1wiKX19Pk91ciBWYWx1ZXM8L2J1dHRvbj5cclxuICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKFwiRkFRXCIpfX0+RkFRPC9idXR0b24+XHJcbiAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0+IENvbnRhY3Q8L2J1dHRvbj4gKi99XHJcbiBcclxuICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbHlyfSBpZD0gXCJwbGF5ZXJcIj5cclxuICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81MzY5NzU3NDQ/YmFja2dyb3VuZD0xJmxvb3A9MFwiIFxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBcclxuICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIiA+XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9wYWdlcy9pbmRleCc7XHJcbmltcG9ydCBWYWx1ZXMgZnJvbSAnLi4vcGFnZXMvVmFsdWVzJztcclxuaW1wb3J0IENydXNoTGlzdCBmcm9tICcuLi9wYWdlcy9DcnVzaExpc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGQVEoKSB7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBsZXQgY29udGVudDtcclxuXHJcbiAgaWYoY3VycmVudFZpZXcgPT09ICdWYWx1ZXMnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8VmFsdWVzLz4pXHJcblxyXG4gIH0gZWxzZSBpZihjdXJyZW50VmlldyA9PT0gJ0hvbWUnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8SG9tZS8+KVxyXG4gIH0gZWxzZSBpZihjdXJyZW50VmlldyA9PT0gJ0NydXNoTGlzdCcpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxDcnVzaExpc3QvPilcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRlbnQgPSAoIFxyXG4gICAgICA8PiBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcbiAgICAgXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJIb21lXCIpfX0+SG9tZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRWaWV3KFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRWaWV3KFwiRkFRXCIpfX0+RkFRPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPGgxPiBURVNUSU5HIEZBUVxyXG5cclxuICAgICAgPC9oMT5cclxuXHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+IFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIkNydXNoTGlzdFwiKX19Pk15IENydXNoZXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC8+XHJcbiAgICBcclxuICAgIClcclxuICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAge2NvbnRlbnR9XHJcbiAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNZW51Q29udGFpbmVyXCI6IFwiSG9tZV9NZW51Q29udGFpbmVyX18yNkg4U1wiLFxuXHRcImJ1dHRvbk1lbnVcIjogXCJIb21lX2J1dHRvbk1lbnVfXzJkc3pPXCIsXG5cdFwicGx5clwiOiBcIkhvbWVfcGx5cl9fM1dMeXlcIixcblx0XCJob3dpdHdvcmtzXCI6IFwiSG9tZV9ob3dpdHdvcmtzX18yNlZhblwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzJmVllnXCIsXG5cdFwiYm9keVwiOiBcIkhvbWVfYm9keV9fMVpGdEpcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzMzdzdwXCIsXG5cdFwiaW5wdXRcIjogXCJIb21lX2lucHV0X18zcEo5RVwiLFxuXHRcImJ1dHRvblwiOiBcIkhvbWVfYnV0dG9uX18zanBRRVwiLFxuXHRcIlVzZXJJbmZvXCI6IFwiSG9tZV9Vc2VySW5mb19fM3Rkc3BcIixcblx0XCJjcnVzaElucHV0XCI6IFwiSG9tZV9jcnVzaElucHV0X18xUGFFWVwiLFxuXHRcImludHJvXCI6IFwiSG9tZV9pbnRyb19fMU5oXzRcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fQ2tyYlFcIlxufTtcbiIsIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9wYWdlcy9pbmRleCc7XHJcbmltcG9ydCBGQVEgZnJvbSAnLi4vcGFnZXMvRkFRJztcclxuaW1wb3J0IENydXNoTGlzdCBmcm9tICcuLi9wYWdlcy9DcnVzaExpc3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhbHVlcygpIHtcclxuXHJcblxyXG4gXHJcbiAgY29uc3QgW2N1cnJlbnRWaWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGxldCBjb250ZW50O1xyXG5cclxuICBpZihjdXJyZW50VmlldyA9PT0gJ0ZBUScpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxGQVEvPilcclxuXHJcbiAgfSBlbHNlIGlmKGN1cnJlbnRWaWV3ID09PSAnSG9tZScpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxIb21lLz4pXHJcbiAgfSBlbHNlIGlmKGN1cnJlbnRWaWV3ID09PSAnQ3J1c2hMaXN0Jykge1xyXG4gICAgY29udGVudCA9ICggPENydXNoTGlzdC8+KVxyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgY29udGVudCA9ICggXHJcbiAgICAgIDw+IFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuICAgICBcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkhvbWVcIil9fT5Ib21lPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJWYWx1ZXNcIil9fT5PdXIgVmFsdWVzPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJGQVFcIil9fT5GQVE8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8aDE+IFRFU1RJTkcgVEVTVElORyBWQUxVRVMgXHJcblxyXG4gICAgICA8L2gxPlxyXG5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT4gXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiQ3J1c2hMaXN0XCIpfX0+TXkgQ3J1c2hlczwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8Lz5cclxuICAgIFxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICB7Y29udGVudH1cclxuICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufSIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyovXHJcblxyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENydXNoTGlzdCBmcm9tICcuLi9wYWdlcy9DcnVzaExpc3QnO1xyXG5pbXBvcnQgVmFsdWVzIGZyb20gJy4uL3BhZ2VzL1ZhbHVlcyc7XHJcbmltcG9ydCBGQVEgZnJvbSAnLi4vcGFnZXMvRkFRJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuIFxyXG4gIGNvbnN0IFtjdXJyZW50TW9kZSwgc2V0Q3VycmVudE1vZGVdID0gdXNlU3RhdGUoJ0hvbWUnKTtcclxuICBcclxuICAvLyBjb25zdCBzZXRNb2RlID0gKHBhcmFtKSA9PiB7XHJcbiAgIFxyXG4gIC8vICAgaWYgKHBhcmFtID09PSB1bmRlZmluZWQgKSB7XHJcbiAgLy8gICAgIHNldEN1cnJlbnRNb2RlKFwiSG9tZVwiKVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICBlbHNlIGlmIChwYXJhbSA9PT0gJ0NydXNoTGlzdCcpIHtcclxuICAvLyAgICAgc2V0Q3VycmVudE1vZGUoJ0NydXNoTGlzdCcpO1xyXG4gIC8vICAgfSBlbHNlIGlmIChwYXJhbSA9PT0gJ1ZhbHVlcycpe1xyXG4gIC8vICAgICBzZXRDdXJyZW50TW9kZSgnVmFsdWVzJyk7ICAgIFxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgc2V0Q3VycmVudE1vZGUoXCJGQVFcIilcclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG5cclxuICBsZXQgY29udGVudDtcclxuXHJcbiAgaWYgKGN1cnJlbnRNb2RlID09PSBcIkhvbWVcIikge1xyXG5cclxuICAgIGNvbnRlbnQgPSAoXHJcbiAgICA8PiBcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+UGFudGhlciBDcnVzaCBXZWxjb21lPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9IHtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcbiAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoJ0hvbWUnKX19PkhvbWU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIlZhbHVlc1wiKX19Pk91ciBWYWx1ZXM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIkZBUVwiKX19PkZBUTwvYnV0dG9uPlxyXG4gICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9PiBDb250YWN0PC9idXR0b24+ICovfVxyXG4gICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbHlyfSBpZD1cInBsYXllclwiID5cclxuICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9IFwiL3BhdGgvdG8vcGx5ci5jc3NcIiAvPiAqL31cclxuICAgICAgPHNjcmlwdCBzcmM9IFwiaHR0cHM6Ly9jZG4ucGx5ci5pby8zLjYuNC9wbHlyLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG4gIHsvKiBDb2RlIHdlIG5lZWQgZm9yIHZpZGVvXHJcbiAgbG9vcD0xJmNvbnRyb2xzPTAmc2lkZWRvY2s9MCZhdXRvcGxheT0xJmJhY2tncm91bmQ9MSAgIG5ldyBtaW5lOiA1MzMzODE3NDAgY2hyaXMnczogMzY4ODQ5MDA2IG1pbmU6IDUzMjMwMjU0NCAgdmltZW86IDc2OTc5ODcxKi99XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBvcGFjaXR5PVwiMC41XCJcclxuICAgICAgICBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNTM4ODg1NTQ2P2JhY2tncm91bmQ9MSZjb250cm9scz0wXCJcclxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIiA+XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99ID5cclxuICAgICAgICAgPHA+IEdyYWR1YXRpb24gaXMgYXJvdW5kIHRoZSBjb3JuZXIsIGFuZCB3ZSB3YW50IHRvIGhlbHAgeW91IG1ha2UgdGhlIG1vc3Qgb3V0IG9mIHlvdXIgbGFzdCB3ZWVrcyBhdCBNaWRkbGVidXJ5IDwvcD4gXHJcblxyXG4gICAgICAgICAgey8qIDxwPkdyYWR1YXRpb24gY29tZXMgc29vbmVyIHRoYW4geW91IHRoaW5rLCBzbyB0cnkgdG8gbWFrZSB0aGUgbW9zdCBvZiBpdCB3aGlsZSB5b3UgY2FuITwvcD4gKi99XHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG93aXR3b3Jrc30gPlxyXG4gICAgICAgICA8cD5Ib3cgaXQgd29ya3M6PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNTM4OTQxMzUyP2JhY2tncm91bmQ9MSZjb250cm9scz0wXCJcclxuICAgICAgZnJhbWVCb3JkZXI9XCIwXCIgPlxyXG4gICAgICA8L2lmcmFtZT5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+IFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIkNydXNoTGlzdFwiKX19Pk15IENydXNoZXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+IFxyXG5cclxuICAgICAgPC8+KSBcclxuICB9XHJcblxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIkNydXNoTGlzdFwiKSB7XHJcbiAgICBjb250ZW50ID0gKCA8Q3J1c2hMaXN0ICAvPiApXHJcbiAgfSBcclxuICBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJWYWx1ZXNcIikge1xyXG4gICAgICBjb250ZW50ID0gKCA8VmFsdWVzIC8+IClcclxuXHJcbiAgfSBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJGQVFcIikge1xyXG4gICAgY29udGVudCA9ICggPEZBUSAvPiApXHJcbiAgfSBcclxuXHJcbiAgXHJcbnJldHVybiAoXHJcbiAgICA8PiBcclxuICAgICAge2NvbnRlbnR9XHJcbiAgICA8Lz5cclxuICApO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9