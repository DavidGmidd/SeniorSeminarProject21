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
/* harmony import */ var _pages_FAQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/FAQ */ "./src/pages/FAQ.js");
/* harmony import */ var _pages_Values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Values */ "./src/pages/Values.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\CrushList.js";







function CrushList() {
  const {
    0: currentView,
    1: setView
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let content;

  if (currentView === 'Values') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Values__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, this);
  } else if (currentView === 'Home') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_index__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, this);
  } else if (currentView === 'FAQ') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_FAQ__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "Panther Crush List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.MenuContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
              onClick: () => {
                setView("Home");
              },
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 6
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
              onClick: () => {
                setView("Values");
              },
              children: "Our Values"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 6
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
              onClick: () => {
                setView("FAQ");
              },
              children: "FAQ"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 6
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
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
          lineNumber: 46,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 8
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: content
  }, void 0, false);
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.faqs,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: " Who is eligible? "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: " Seniors in the class of 2021 and 2021.5. We will ask you to include your email when you submit your crushes to verify that you are a senior. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: " When is this? "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: " Seniors can fill out their virtual crush list between May 10 to May 17 by 5:00 pm. You will get notified if you match with any of your crushes on May 18. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: " Who can see my crush list? "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: " No one can see the list you submit. Only if you match with your crush will your name and email be shared with them."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: " How do I submit my crushes? "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: [" Click on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "My Crushes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, this), " at the bottom of the website to fill out your list. The form will ask you to fill out the email addresses of your crushes. "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: " How do I find my crush's email? "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: " There are several ways you can find your crush's email. You can search their name in go/directory or type their name into Outlook until their email appears.  "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: " What happens if I match with one of my crushes? "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: " You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,
          onClick: () => {
            setView("CrushList");
          },
          children: "My Crushes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
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
	"footer": "Home_footer__CkrbQ",
	"values": "Home_values__1S8gd",
	"faqs": "Home_faqs__25iyS"
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.values,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: " The Panther Crush is built by students to enhance two simple aspects of traditional crush lists: privacy and respect. In terms of privacy, we don\u2019t share your list with anyone, so no one sees your list and you don\u2019t see anyone else's. This relieves the pressure of putting up a crush list in a public space while still allowing you to connect with you crush before graduation. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: " At the same time, we\u2019re committed to fostering a safe and respectful environment for you to make a new connection. Compared to traditional crush lists, the Panther Crush reduces the discomfort of having your name shown publicly on someone else\u2019s list who you might not want to associate with. Instead, you and your crush need to consensually write each others name down for you to get a match, which is designed to improve transparency and respect between students. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "The Panther Crush is not intended to replace traditional crush lists; instead, it is intended to make crush lists more accessible to seniors by offering a more anonymous way to make a new connection before graduation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,
          onClick: () => {
            setView("CrushList");
          },
          children: "My Crushes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NydXNoTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRkFRLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9WYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ3J1c2hMaXN0IiwiY3VycmVudFZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJjb250ZW50Iiwic3R5bGVzIiwibWFpbiIsIk1lbnVDb250YWluZXIiLCJidXR0b25NZW51IiwicGx5ciIsIkZBUSIsImZhcXMiLCJmb290ZXIiLCJidXR0b24iLCJWYWx1ZXMiLCJ2YWx1ZXMiLCJIb21lIiwiY3VycmVudE1vZGUiLCJzZXRDdXJyZW50TW9kZSIsImludHJvIiwiaG93aXR3b3JrcyIsImJ1dHRvbkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFF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LFdBQU8sZ0JBQUsscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0Q7O0FBR0gsc0JBQ0k7QUFBQSxjQUNHQTtBQURILG1CQURKO0FBS0MsQzs7Ozs7Ozs7Ozs7QUMxR0Qsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSG9tZSBmcm9tICAnLi4vcGFnZXMvaW5kZXgnO1xyXG5pbXBvcnQgRkFRIGZyb20gJy4uL3BhZ2VzL0ZBUSc7XHJcbmltcG9ydCBWYWx1ZXMgZnJvbSAnLi4vcGFnZXMvVmFsdWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENydXNoTGlzdCgpIHtcclxuXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBsZXQgY29udGVudDtcclxuXHJcbiAgaWYoY3VycmVudFZpZXcgPT09ICdWYWx1ZXMnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8VmFsdWVzLz4pXHJcblxyXG4gIH0gZWxzZSBpZihjdXJyZW50VmlldyA9PT0gJ0hvbWUnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8SG9tZS8+KVxyXG4gIH0gZWxzZSBpZihjdXJyZW50VmlldyA9PT0gJ0ZBUScpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxGQVEvPilcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRlbnQgPSAoIFxyXG4gICAgICBcclxuICAgICAgPD4gXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBhbnRoZXIgQ3J1c2ggTGlzdDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lbnVDb250YWluZXJ9PlxyXG4gICAgIFxyXG4gICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJIb21lXCIpfX0+SG9tZTwvYnV0dG9uPlxyXG4gICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJWYWx1ZXNcIil9fT5PdXIgVmFsdWVzPC9idXR0b24+XHJcbiAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkZBUVwiKX19PkZBUTwvYnV0dG9uPlxyXG4gICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9PiBDb250YWN0PC9idXR0b24+ICovfVxyXG4gXHJcbiAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbHlyfSBpZD0gXCJwbGF5ZXJcIj5cclxuICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81MzY5NzU3NDQ/YmFja2dyb3VuZD0xJmxvb3A9MFwiIFxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBcclxuICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIiA+XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgICAgPD5cclxuICAgIHtjb250ZW50fVxyXG4gICAgPC8+XHJcbiAgICBcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9wYWdlcy9pbmRleCc7XHJcbmltcG9ydCBWYWx1ZXMgZnJvbSAnLi4vcGFnZXMvVmFsdWVzJztcclxuaW1wb3J0IENydXNoTGlzdCBmcm9tICcuLi9wYWdlcy9DcnVzaExpc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGQVEoKSB7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBsZXQgY29udGVudDtcclxuXHJcbiAgaWYoY3VycmVudFZpZXcgPT09ICdWYWx1ZXMnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8VmFsdWVzLz4pXHJcblxyXG4gIH0gZWxzZSBpZihjdXJyZW50VmlldyA9PT0gJ0hvbWUnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8SG9tZS8+KVxyXG4gIH0gZWxzZSBpZihjdXJyZW50VmlldyA9PT0gJ0NydXNoTGlzdCcpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxDcnVzaExpc3QvPilcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRlbnQgPSAoIFxyXG4gICAgICA8PiBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcbiAgICAgXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJIb21lXCIpfX0+SG9tZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRWaWV3KFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRWaWV3KFwiRkFRXCIpfX0+RkFRPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhcXN9ID4gXHJcbiAgICAgIDxoMj4gV2hvIGlzIGVsaWdpYmxlPyA8L2gyPlxyXG4gICAgICA8aDQ+IFNlbmlvcnMgaW4gdGhlIGNsYXNzIG9mIDIwMjEgYW5kIDIwMjEuNS4gV2Ugd2lsbCBhc2sgeW91IHRvIGluY2x1ZGUgeW91ciBlbWFpbCB3aGVuIHlvdSBzdWJtaXQgeW91ciBjcnVzaGVzIHRvIHZlcmlmeSB0aGF0IHlvdSBhcmUgYSBzZW5pb3IuIDwvaDQ+XHJcblxyXG4gICAgICA8aDI+IFdoZW4gaXMgdGhpcz8gPC9oMj5cclxuICAgICAgPGg0PiBTZW5pb3JzIGNhbiBmaWxsIG91dCB0aGVpciB2aXJ0dWFsIGNydXNoIGxpc3QgYmV0d2VlbiBNYXkgMTAgdG8gTWF5IDE3IGJ5IDU6MDAgcG0uIFlvdSB3aWxsIGdldCBub3RpZmllZCBpZiB5b3UgbWF0Y2ggd2l0aCBhbnkgb2YgeW91ciBjcnVzaGVzIG9uIE1heSAxOC4gPC9oND5cclxuXHJcblxyXG4gICAgICA8aDI+IFdobyBjYW4gc2VlIG15IGNydXNoIGxpc3Q/IDwvaDI+XHJcbiAgICAgIDxoND4gTm8gb25lIGNhbiBzZWUgdGhlIGxpc3QgeW91IHN1Ym1pdC4gT25seSBpZiB5b3UgbWF0Y2ggd2l0aCB5b3VyIGNydXNoIHdpbGwgeW91ciBuYW1lIGFuZCBlbWFpbCBiZSBzaGFyZWQgd2l0aCB0aGVtLjwvaDQ+XHJcblxyXG4gICAgICA8aDI+IEhvdyBkbyBJIHN1Ym1pdCBteSBjcnVzaGVzPyA8L2gyPlxyXG4gICAgICA8aDQ+IENsaWNrIG9uIDxiPk15IENydXNoZXM8L2I+IGF0IHRoZSBib3R0b20gb2YgdGhlIHdlYnNpdGUgdG8gZmlsbCBvdXQgeW91ciBsaXN0LiBUaGUgZm9ybSB3aWxsIGFzayB5b3UgdG8gZmlsbCBvdXQgdGhlIGVtYWlsIGFkZHJlc3NlcyBvZiB5b3VyIGNydXNoZXMuIDwvaDQ+XHJcbiAgICAgIFxyXG4gICAgICA8aDI+IEhvdyBkbyBJIGZpbmQgbXkgY3J1c2gncyBlbWFpbD8gPC9oMj5cclxuICAgICAgPGg0PiBUaGVyZSBhcmUgc2V2ZXJhbCB3YXlzIHlvdSBjYW4gZmluZCB5b3VyIGNydXNoJ3MgZW1haWwuIFlvdSBjYW4gc2VhcmNoIHRoZWlyIG5hbWUgaW4gZ28vZGlyZWN0b3J5IG9yIHR5cGUgdGhlaXIgbmFtZSBpbnRvIE91dGxvb2sgdW50aWwgdGhlaXIgZW1haWwgYXBwZWFycy4gIDwvaDQ+XHJcblxyXG4gICAgICA8aDI+IFdoYXQgaGFwcGVucyBpZiBJIG1hdGNoIHdpdGggb25lIG9mIG15IGNydXNoZXM/IDwvaDI+XHJcbiAgICAgIDxoND4gWW91IHdpbGwgZ2V0IG5vdGlmaWVkIGJ5IGVtYWlsIG9uIE1heSAxOC4gVGhlIGVtYWlsIHdpbGwgaW5jbHVkZSB0aGVpciBuYW1lIGFuZCBlbWFpbCBhZGRyZXNzIGZvciB5b3UgdG8gcmVhY2ggb3V0IHRvIHRoZW0sIGlmIHlvdSBjaG9vc2UgdG8gZG8gc28uPC9oND4gICAgXHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PiBcclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkNydXNoTGlzdFwiKX19Pk15IENydXNoZXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC8+XHJcbiAgICBcclxuICAgIClcclxuICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAge2NvbnRlbnR9XHJcbiAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNZW51Q29udGFpbmVyXCI6IFwiSG9tZV9NZW51Q29udGFpbmVyX18yNkg4U1wiLFxuXHRcImJ1dHRvbk1lbnVcIjogXCJIb21lX2J1dHRvbk1lbnVfXzJkc3pPXCIsXG5cdFwicGx5clwiOiBcIkhvbWVfcGx5cl9fM1dMeXlcIixcblx0XCJob3dpdHdvcmtzXCI6IFwiSG9tZV9ob3dpdHdvcmtzX18yNlZhblwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzJmVllnXCIsXG5cdFwiYm9keVwiOiBcIkhvbWVfYm9keV9fMVpGdEpcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzMzdzdwXCIsXG5cdFwiaW5wdXRcIjogXCJIb21lX2lucHV0X18zcEo5RVwiLFxuXHRcImJ1dHRvblwiOiBcIkhvbWVfYnV0dG9uX18zanBRRVwiLFxuXHRcIlVzZXJJbmZvXCI6IFwiSG9tZV9Vc2VySW5mb19fM3Rkc3BcIixcblx0XCJjcnVzaElucHV0XCI6IFwiSG9tZV9jcnVzaElucHV0X18xUGFFWVwiLFxuXHRcImludHJvXCI6IFwiSG9tZV9pbnRyb19fMU5oXzRcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fQ2tyYlFcIixcblx0XCJ2YWx1ZXNcIjogXCJIb21lX3ZhbHVlc19fMVM4Z2RcIixcblx0XCJmYXFzXCI6IFwiSG9tZV9mYXFzX18yNWl5U1wiXG59O1xuIiwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL2luZGV4JztcclxuaW1wb3J0IEZBUSBmcm9tICcuLi9wYWdlcy9GQVEnO1xyXG5pbXBvcnQgQ3J1c2hMaXN0IGZyb20gJy4uL3BhZ2VzL0NydXNoTGlzdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmFsdWVzKCkge1xyXG5cclxuXHJcbiBcclxuICBjb25zdCBbY3VycmVudFZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gIGlmKGN1cnJlbnRWaWV3ID09PSAnRkFRJykge1xyXG4gICAgY29udGVudCA9ICggPEZBUS8+KVxyXG5cclxuICB9IGVsc2UgaWYoY3VycmVudFZpZXcgPT09ICdIb21lJykge1xyXG4gICAgY29udGVudCA9ICggPEhvbWUvPilcclxuICB9IGVsc2UgaWYoY3VycmVudFZpZXcgPT09ICdDcnVzaExpc3QnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8Q3J1c2hMaXN0Lz4pXHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb250ZW50ID0gKCBcclxuICAgICAgPD4gXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lbnVDb250YWluZXJ9PlxyXG4gICAgIFxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRWaWV3KFwiSG9tZVwiKX19PkhvbWU8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIlZhbHVlc1wiKX19Pk91ciBWYWx1ZXM8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkZBUVwiKX19PkZBUTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZXN9ID5cclxuICAgICAgPHA+IFRoZSBQYW50aGVyIENydXNoIGlzIGJ1aWx0IGJ5IHN0dWRlbnRzIHRvIGVuaGFuY2UgdHdvIHNpbXBsZSBhc3BlY3RzIG9mIHRyYWRpdGlvbmFsIGNydXNoIGxpc3RzOiBwcml2YWN5IGFuZCByZXNwZWN0LiBJbiB0ZXJtcyBvZiBwcml2YWN5LCB3ZSBkb27igJl0IHNoYXJlIHlvdXIgbGlzdCB3aXRoIGFueW9uZSwgc28gbm8gb25lIHNlZXMgeW91ciBsaXN0IGFuZCB5b3UgZG9u4oCZdCBzZWUgYW55b25lIGVsc2Uncy4gVGhpcyByZWxpZXZlcyB0aGUgcHJlc3N1cmUgb2YgcHV0dGluZyB1cCBhIGNydXNoIGxpc3QgaW4gYSBwdWJsaWMgc3BhY2Ugd2hpbGUgc3RpbGwgYWxsb3dpbmcgeW91IHRvIGNvbm5lY3Qgd2l0aCB5b3UgY3J1c2ggYmVmb3JlIGdyYWR1YXRpb24uIDwvcD5cclxuICAgICAgPHA+IEF0IHRoZSBzYW1lIHRpbWUsIHdl4oCZcmUgY29tbWl0dGVkIHRvIGZvc3RlcmluZyBhIHNhZmUgYW5kIHJlc3BlY3RmdWwgZW52aXJvbm1lbnQgZm9yIHlvdSB0byBtYWtlIGEgbmV3IGNvbm5lY3Rpb24uIENvbXBhcmVkIHRvIHRyYWRpdGlvbmFsIGNydXNoIGxpc3RzLCB0aGUgUGFudGhlciBDcnVzaCByZWR1Y2VzIHRoZSBkaXNjb21mb3J0IG9mIGhhdmluZyB5b3VyIG5hbWUgc2hvd24gcHVibGljbHkgb24gc29tZW9uZSBlbHNl4oCZcyBsaXN0IHdobyB5b3UgbWlnaHQgbm90IHdhbnQgdG8gYXNzb2NpYXRlIHdpdGguIEluc3RlYWQsIHlvdSBhbmQgeW91ciBjcnVzaCBuZWVkIHRvIGNvbnNlbnN1YWxseSB3cml0ZSBlYWNoIG90aGVycyBuYW1lIGRvd24gZm9yIHlvdSB0byBnZXQgYSBtYXRjaCwgd2hpY2ggaXMgZGVzaWduZWQgdG8gaW1wcm92ZSB0cmFuc3BhcmVuY3kgYW5kIHJlc3BlY3QgYmV0d2VlbiBzdHVkZW50cy4gPC9wPlxyXG4gICAgICA8cD5UaGUgUGFudGhlciBDcnVzaCBpcyBub3QgaW50ZW5kZWQgdG8gcmVwbGFjZSB0cmFkaXRpb25hbCBjcnVzaCBsaXN0czsgaW5zdGVhZCwgaXQgaXMgaW50ZW5kZWQgdG8gbWFrZSBjcnVzaCBsaXN0cyBtb3JlIGFjY2Vzc2libGUgdG8gc2VuaW9ycyBieSBvZmZlcmluZyBhIG1vcmUgYW5vbnltb3VzIHdheSB0byBtYWtlIGEgbmV3IGNvbm5lY3Rpb24gYmVmb3JlIGdyYWR1YXRpb24uPC9wPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT4gXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJDcnVzaExpc3RcIil9fT5NeSBDcnVzaGVzPC9idXR0b24+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvPlxyXG4gICAgXHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgIHtjb250ZW50fVxyXG4gICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzKi9cclxuXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ3J1c2hMaXN0IGZyb20gJy4uL3BhZ2VzL0NydXNoTGlzdCc7XHJcbmltcG9ydCBWYWx1ZXMgZnJvbSAnLi4vcGFnZXMvVmFsdWVzJztcclxuaW1wb3J0IEZBUSBmcm9tICcuLi9wYWdlcy9GQVEnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gXHJcbiAgY29uc3QgW2N1cnJlbnRNb2RlLCBzZXRDdXJyZW50TW9kZV0gPSB1c2VTdGF0ZSgnSG9tZScpO1xyXG4gIFxyXG4gIC8vIGNvbnN0IHNldE1vZGUgPSAocGFyYW0pID0+IHtcclxuICAgXHJcbiAgLy8gICBpZiAocGFyYW0gPT09IHVuZGVmaW5lZCApIHtcclxuICAvLyAgICAgc2V0Q3VycmVudE1vZGUoXCJIb21lXCIpXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIGVsc2UgaWYgKHBhcmFtID09PSAnQ3J1c2hMaXN0Jykge1xyXG4gIC8vICAgICBzZXRDdXJyZW50TW9kZSgnQ3J1c2hMaXN0Jyk7XHJcbiAgLy8gICB9IGVsc2UgaWYgKHBhcmFtID09PSAnVmFsdWVzJyl7XHJcbiAgLy8gICAgIHNldEN1cnJlbnRNb2RlKCdWYWx1ZXMnKTsgICAgXHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBzZXRDdXJyZW50TW9kZShcIkZBUVwiKVxyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcblxyXG4gIGxldCBjb250ZW50O1xyXG5cclxuICBpZiAoY3VycmVudE1vZGUgPT09IFwiSG9tZVwiKSB7XHJcblxyXG4gICAgY29udGVudCA9IChcclxuICAgIDw+IFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIFdlbGNvbWU8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT0ge3N0eWxlcy5tYWlufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuICAgICBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZSgnSG9tZScpfX0+SG9tZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiRkFRXCIpfX0+RkFRPC9idXR0b24+XHJcbiAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0+IENvbnRhY3Q8L2J1dHRvbj4gKi99XHJcbiAgICBcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBseXJ9IGlkPVwicGxheWVyXCIgPlxyXG4gIHsvKiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCIvcGF0aC90by9wbHlyLmNzc1wiIC8+ICovfVxyXG4gICAgICA8c2NyaXB0IHNyYz0gXCJodHRwczovL2Nkbi5wbHlyLmlvLzMuNi40L3BseXIuanNcIj48L3NjcmlwdD5cclxuXHJcbiAgey8qIENvZGUgd2UgbmVlZCBmb3IgdmlkZW9cclxuICBsb29wPTEmY29udHJvbHM9MCZzaWRlZG9jaz0wJmF1dG9wbGF5PTEmYmFja2dyb3VuZD0xICAgbmV3IG1pbmU6IDUzMzM4MTc0MCBjaHJpcydzOiAzNjg4NDkwMDYgbWluZTogNTMyMzAyNTQ0ICB2aW1lbzogNzY5Nzk4NzEqL31cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81Mzg4ODU1NDY/YmFja2dyb3VuZD0xJmNvbnRyb2xzPTBcIlxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiID5cclxuICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30gPlxyXG4gICAgICAgICA8cD4gR3JhZHVhdGlvbiBpcyBhcm91bmQgdGhlIGNvcm5lciwgYW5kIHdlIHdhbnQgdG8gaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvdXQgb2YgeW91ciBsYXN0IHdlZWtzIGF0IE1pZGRsZWJ1cnkgPC9wPiBcclxuXHJcbiAgICAgICAgICB7LyogPHA+R3JhZHVhdGlvbiBjb21lcyBzb29uZXIgdGhhbiB5b3UgdGhpbmssIHNvIHRyeSB0byBtYWtlIHRoZSBtb3N0IG9mIGl0IHdoaWxlIHlvdSBjYW4hPC9wPiAqL31cclxuICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3dpdHdvcmtzfSA+XHJcbiAgICAgICAgIDxwPkhvdyBpdCB3b3Jrczo8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGlmcmFtZVxyXG4gICAgICBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgb3BhY2l0eT1cIjAuNVwiXHJcbiAgICAgIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81Mzg5NDEzNTI/YmFja2dyb3VuZD0xJmNvbnRyb2xzPTBcIlxyXG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIiA+XHJcbiAgICAgIDwvaWZyYW1lPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT4gXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiQ3J1c2hMaXN0XCIpfX0+TXkgQ3J1c2hlczwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj4gXHJcblxyXG4gICAgICA8Lz4pIFxyXG4gIH1cclxuXHJcbiAgZWxzZSBpZiAoY3VycmVudE1vZGUgPT09IFwiQ3J1c2hMaXN0XCIpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxDcnVzaExpc3QgIC8+IClcclxuICB9IFxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIlZhbHVlc1wiKSB7XHJcbiAgICAgIGNvbnRlbnQgPSAoIDxWYWx1ZXMgLz4gKVxyXG5cclxuICB9IGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIkZBUVwiKSB7XHJcbiAgICBjb250ZW50ID0gKCA8RkFRIC8+IClcclxuICB9IFxyXG5cclxuICBcclxucmV0dXJuIChcclxuICAgIDw+IFxyXG4gICAgICB7Y29udGVudH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=