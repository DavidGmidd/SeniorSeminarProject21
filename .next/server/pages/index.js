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

/***/ "./src/Styles/Home.module.css":
/*!************************************!*\
  !*** ./src/Styles/Home.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"MenuContainer": "Home_MenuContainer__3XxcO",
	"MenuButtonsOnly": "Home_MenuButtonsOnly__3BnSZ",
	"Logo": "Home_Logo__2JEp0",
	"intro": "Home_intro__1MU3M",
	"buttonMenu": "Home_buttonMenu__3O7G1",
	"Form": "Home_Form__2Mcrl",
	"BluePanther": "Home_BluePanther__P08Wv",
	"plyr": "Home_plyr__1YiMv",
	"howitworks": "Home_howitworks__2X6jL",
	"instructions": "Home_instructions__27Bxi",
	"instructionsContainer": "Home_instructionsContainer__35tlr",
	"main": "Home_main__2i2m0",
	"body": "Home_body__3EIt8",
	"button": "Home_button__Tv0kI",
	"values": "Home_values__1rT4-",
	"faqsTitle": "Home_faqsTitle__3fb-I",
	"linkDirectory": "Home_linkDirectory__2wz1f",
	"DirectoryInCrushlst": "Home_DirectoryInCrushlst__3d36U",
	"faqsHome": "Home_faqsHome__20BY-",
	"faqs": "Home_faqs__3tqpf",
	"footer": "Home_footer__2IAt1",
	"footerFAQ": "Home_footerFAQ__1vEam",
	"Goodbye": "Home_Goodbye__2AIrm",
	"bye": "Home_bye__3oep2"
};


/***/ }),

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
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styles/Home.module.css */ "./src/Styles/Home.module.css");
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.MenuContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/Logo5.png",
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.MenuButtonsOnly,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
              onClick: () => {
                setView("Home");
              },
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
              onClick: () => {
                setView("Values");
              },
              children: "Our Values"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
              onClick: () => {
                setView("FAQ");
              },
              children: "FAQs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.DirectoryInCrushlst,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: [" Find your crush's email ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.linkDirectory,
              href: "https://directory.middlebury.edu/",
              target: "_blank",
              rel: "noreferrer",
              children: "here"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 39
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "images/blue_panther-3.png",
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.BluePanther
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Form,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
          src: "https://player.vimeo.com/video/546613564?background=1&loop=0",
          width: "100%",
          height: "100%",
          frameBorder: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
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
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/Home.module.css */ "./src/Styles/Home.module.css");
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/index */ "./src/pages/index.js");
/* harmony import */ var _pages_Values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Values */ "./src/pages/Values.js");
/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/CrushList */ "./src/pages/CrushList.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\FAQ.js";







function FAQ() {
  const {
    0: currentView,
    1: setView
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let content;

  if (currentView === 'Values') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Values__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
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
  } else if (currentView === 'CrushList') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Panther Crush FAQs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MenuContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "images/Logo5.png",
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MenuButtonsOnly,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
            onClick: () => {
              setView("Home");
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
            onClick: () => {
              setView("Values");
            },
            children: "Our Values"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
            onClick: () => {
              setView("FAQ");
            },
            children: "FAQs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.faqs,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: " Who is eligible? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 19
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: " All seniors in the class of 2021 and 2021.5 can submit a virtual crush list, even if you are off-campus or remote. We will ask you to include your email when you submit your crushes to verify that you are a senior. "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: " When is this? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }, this), "  "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: " Seniors can fill out their virtual crush list between May 10 and May 17 by 5:00 pm. You will get notified if you match with any of your crushes on May 18. "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: " Who can see my crush list? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 19
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: " No one can see the list you submit. Only if you match with your crush will your name and email be shared with them."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
            children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: " How do I submit my crushes? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 20
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [" Click on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              children: "Crush List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 20
            }, this), " at the bottom of the page to fill out your list. The form will ask you to include the email addresses of your crushes. "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: " How do I find my crush's email? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 19
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [" You can search their name in the directory, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkDirectory,
              href: "https://directory.middlebury.edu/",
              target: "_blank",
              rel: "noreferrer",
              children: "found here"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 55
            }, this), ", or start typing their name into Outlook until their email appears.  "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: " What happens if I match with one of my crushes? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 19
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: " You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerFAQ,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,
          onClick: () => {
            setView("CrushList");
          },
          children: "Crush List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: content
  }, void 0, false);
}

/***/ }),

/***/ "./src/pages/GoodBye.js":
/*!******************************!*\
  !*** ./src/pages/GoodBye.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Goodbye; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/Home.module.css */ "./src/Styles/Home.module.css");
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\GoodBye.js";



function Goodbye() {
  let content;
  content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Panther Crush Closed "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bye,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/landscape.jpg",
        className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Goodbye
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: content
  }, void 0, false);
}

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
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/Home.module.css */ "./src/Styles/Home.module.css");
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/index */ "./src/pages/index.js");
/* harmony import */ var _pages_FAQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/FAQ */ "./src/pages/FAQ.js");
/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/CrushList */ "./src/pages/CrushList.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\Values.js";







function Values() {
  const {
    0: currentView,
    1: setView
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let content;

  if (currentView === 'FAQ') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_FAQ__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, this);
  } else if (currentView === 'Home') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_index__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this);
  } else if (currentView === 'CrushList') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Panther Crush Values"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MenuContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "images/Logo5.png",
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MenuButtonsOnly,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
            onClick: () => {
              setView("Home");
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
            onClick: () => {
              setView("Values");
            },
            children: "Our Values"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
            onClick: () => {
              setView("FAQ");
            },
            children: "FAQs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.values,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: " We are Thomas and David, two students majoring in Computer Science. We built Panther Crush to enhance two simple aspects of traditional crush lists: privacy and respect. In terms of privacy, we don\u2019t share your list with anyone, so no one sees your list and you don\u2019t see anyone else's. This relieves the pressure of putting up a crush list in a public space while still allowing you to connect with your crush before graduation. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: " At the same time, we're committed to fostering a safe and respectful environment for you to make a new connection. Compared with traditional crush lists, the Panther Crush reduces the discomfort of having your name shown publicly on someone else's list who you might not want to associate with. Instead, you and your crush need to consensually write each other's name down for you to get a match, which is designed to improve transparency and respect between students. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: " Ultimately, the Panther Crush is not intended to replace traditional crush lists; instead, it is intended to make crush lists more accessible to seniors by offering a more private way to make a new connection before graduation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,
          onClick: () => {
            setView("CrushList");
          },
          children: "Crush List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styles/Home.module.css */ "./src/Styles/Home.module.css");
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CrushList */ "./src/pages/CrushList.js");
/* harmony import */ var _pages_Values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Values */ "./src/pages/Values.js");
/* harmony import */ var _pages_FAQ__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/FAQ */ "./src/pages/FAQ.js");
/* harmony import */ var _pages_GoodBye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/GoodBye */ "./src/pages/GoodBye.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\index.js";

/* eslint-disable react/no-unescaped-entities*/








function Home() {
  const {
    0: currentMode,
    1: setCurrentMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('GoodBye');
  let content;

  if (currentMode === "Home") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Panther Crush Welcome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.MenuContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/Logo5.png",
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.MenuButtonsOnly,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
              onClick: () => {
                setCurrentMode('Home');
              },
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
              onClick: () => {
                setCurrentMode("Values");
              },
              children: "Our Values"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
              onClick: () => {
                setCurrentMode("FAQ");
              },
              children: "FAQs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plyr,
          id: "player",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            height: "100%",
            width: "100%",
            opacity: "0.5",
            src: "https://player.vimeo.com/video/546275933?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: " Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury! "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 10
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.howitworks,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "How it works:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.instructionsContainer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "images/final_how_it_works.png",
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.instructions
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqsHome,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqsTitle,
              children: " FAQs "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: " Who is eligible? "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: " All seniors in the class of 2021 and 2021.5 can submit a virtual crush list, even if you are off-campus or remote. We will ask you to include your email when you submit your crushes to verify that you are a senior. "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: " When is this? "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, this), "  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: " Seniors can fill out their virtual crush list between May 10 and May 17 by 5:00 pm. You will get notified if you match with any of your crushes on May 18. "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: " Who can see my crush list? "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: " No one can see the list you submit. Only if you match with your crush will your name and email be shared with them."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: " How do I submit my crushes? "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 20
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [" Click on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  children: "Crush List"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 20
                }, this), " at the bottom of the page to fill out your list. The form will ask you to include the email addresses of your crushes. "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: " How do I find my crush's email? "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [" You can search their name in the directory, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.linkDirectory,
                  href: "https://directory.middlebury.edu/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "found here"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 55
                }, this), ", or start typing their name into Outlook until their email appears.  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: " What happens if I match with one of my crushes? "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: " You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
              onClick: () => {
                setCurrentMode("CrushList");
              },
              children: "Crush List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this)]
    }, void 0, true);
  } else if (currentMode === "CrushList") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }, this);
  } else if (currentMode === "Values") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Values__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }, this);
  } else if (currentMode === "FAQ") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_FAQ__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_GoodBye__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NydXNoTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRkFRLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Hb29kQnllLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9WYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ3J1c2hMaXN0IiwiY3VycmVudFZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJjb250ZW50Iiwic3R5bGVzIiwiTWVudUNvbnRhaW5lciIsIkxvZ28iLCJNZW51QnV0dG9uc09ubHkiLCJidXR0b25NZW51IiwiRGlyZWN0b3J5SW5DcnVzaGxzdCIsImxpbmtEaXJlY3RvcnkiLCJCbHVlUGFudGhlciIsIkZvcm0iLCJGQVEiLCJmYXFzIiwiZm9vdGVyRkFRIiwiYnV0dG9uIiwiR29vZGJ5ZSIsImJ5ZSIsIlZhbHVlcyIsInZhbHVlcyIsImZvb3RlciIsIkhvbWUiLCJjdXJyZW50TW9kZSIsInNldEN1cnJlbnRNb2RlIiwibWFpbiIsInBseXIiLCJpbnRybyIsImhvd2l0d29ya3MiLCJpbnN0cnVjdGlvbnNDb250YWluZXIiLCJpbnN0cnVjdGlvbnMiLCJmYXFzSG9tZSIsImZhcXNUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QUE7QUFBQSxZQUFaO0FBQ0gsR0FGSSxNQUdBLElBQUlvQixXQUFXLEtBQUssS0FBcEIsRUFBMkI7QUFDOUJwQixXQUFPLGdCQUFLLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNELEdBRkksTUFHQztBQUNKQSxXQUFPLGdCQUFLLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNEOztBQUdILHNCQUNJO0FBQUEsY0FDR0E7QUFESCxtQkFESjtBQUtDLEM7Ozs7Ozs7Ozs7O0FDMUhELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNZW51Q29udGFpbmVyXCI6IFwiSG9tZV9NZW51Q29udGFpbmVyX18zWHhjT1wiLFxuXHRcIk1lbnVCdXR0b25zT25seVwiOiBcIkhvbWVfTWVudUJ1dHRvbnNPbmx5X18zQm5TWlwiLFxuXHRcIkxvZ29cIjogXCJIb21lX0xvZ29fXzJKRXAwXCIsXG5cdFwiaW50cm9cIjogXCJIb21lX2ludHJvX18xTVUzTVwiLFxuXHRcImJ1dHRvbk1lbnVcIjogXCJIb21lX2J1dHRvbk1lbnVfXzNPN0cxXCIsXG5cdFwiRm9ybVwiOiBcIkhvbWVfRm9ybV9fMk1jcmxcIixcblx0XCJCbHVlUGFudGhlclwiOiBcIkhvbWVfQmx1ZVBhbnRoZXJfX1AwOFd2XCIsXG5cdFwicGx5clwiOiBcIkhvbWVfcGx5cl9fMVlpTXZcIixcblx0XCJob3dpdHdvcmtzXCI6IFwiSG9tZV9ob3dpdHdvcmtzX18yWDZqTFwiLFxuXHRcImluc3RydWN0aW9uc1wiOiBcIkhvbWVfaW5zdHJ1Y3Rpb25zX18yN0J4aVwiLFxuXHRcImluc3RydWN0aW9uc0NvbnRhaW5lclwiOiBcIkhvbWVfaW5zdHJ1Y3Rpb25zQ29udGFpbmVyX18zNXRsclwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzJpMm0wXCIsXG5cdFwiYm9keVwiOiBcIkhvbWVfYm9keV9fM0VJdDhcIixcblx0XCJidXR0b25cIjogXCJIb21lX2J1dHRvbl9fVHYwa0lcIixcblx0XCJ2YWx1ZXNcIjogXCJIb21lX3ZhbHVlc19fMXJUNC1cIixcblx0XCJmYXFzVGl0bGVcIjogXCJIb21lX2ZhcXNUaXRsZV9fM2ZiLUlcIixcblx0XCJsaW5rRGlyZWN0b3J5XCI6IFwiSG9tZV9saW5rRGlyZWN0b3J5X18yd3oxZlwiLFxuXHRcIkRpcmVjdG9yeUluQ3J1c2hsc3RcIjogXCJIb21lX0RpcmVjdG9yeUluQ3J1c2hsc3RfXzNkMzZVXCIsXG5cdFwiZmFxc0hvbWVcIjogXCJIb21lX2ZhcXNIb21lX18yMEJZLVwiLFxuXHRcImZhcXNcIjogXCJIb21lX2ZhcXNfXzN0cXBmXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzJJQXQxXCIsXG5cdFwiZm9vdGVyRkFRXCI6IFwiSG9tZV9mb290ZXJGQVFfXzF2RWFtXCIsXG5cdFwiR29vZGJ5ZVwiOiBcIkhvbWVfR29vZGJ5ZV9fMkFJcm1cIixcblx0XCJieWVcIjogXCJIb21lX2J5ZV9fM29lcDJcIlxufTtcbiIsIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSG9tZSBmcm9tICAnLi4vcGFnZXMvaW5kZXgnO1xyXG5pbXBvcnQgRkFRIGZyb20gJy4uL3BhZ2VzL0ZBUSc7XHJcbmltcG9ydCBWYWx1ZXMgZnJvbSAnLi4vcGFnZXMvVmFsdWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENydXNoTGlzdCgpIHtcclxuXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBsZXQgY29udGVudDtcclxuXHJcbiAgaWYoY3VycmVudFZpZXcgPT09ICdWYWx1ZXMnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8VmFsdWVzLz4pXHJcblxyXG4gIH0gZWxzZSBpZihjdXJyZW50VmlldyA9PT0gJ0hvbWUnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8SG9tZS8+KVxyXG4gIH0gZWxzZSBpZihjdXJyZW50VmlldyA9PT0gJ0ZBUScpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxGQVEvPilcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRlbnQgPSAoIFxyXG4gICAgICBcclxuICAgICAgPD4gXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBhbnRoZXIgQ3J1c2ggTGlzdDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvTG9nbzUucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMuTG9nb30vPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUJ1dHRvbnNPbmx5fT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRWaWV3KFwiSG9tZVwiKX19PkhvbWU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRWaWV3KFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJGQVFcIil9fT5GQVFzPC9idXR0b24+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5EaXJlY3RvcnlJbkNydXNobHN0fT5cclxuICAgIDxoMz4gRmluZCB5b3VyIGNydXNoJmFwb3M7cyBlbWFpbCA8YSBjbGFzc05hbWU9IHtzdHlsZXMubGlua0RpcmVjdG9yeX0gaHJlZj0gXCJodHRwczovL2RpcmVjdG9yeS5taWRkbGVidXJ5LmVkdS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+aGVyZTwvYT48L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPGRpdj4gIDxpbWcgc3JjPVwiaW1hZ2VzL2JsdWVfcGFudGhlci0zLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLkJsdWVQYW50aGVyfS8+PC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm19PlxyXG4gICAgIFxyXG4gICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzU0NjYxMzU2ND9iYWNrZ3JvdW5kPTEmbG9vcD0wXCIgXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIFxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiID5cclxuICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIFxyXG4gICAgICA8PlxyXG4gICAge2NvbnRlbnR9XHJcbiAgICA8Lz5cclxuICAgIFxyXG4gICAgKTtcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL2luZGV4JztcclxuaW1wb3J0IFZhbHVlcyBmcm9tICcuLi9wYWdlcy9WYWx1ZXMnO1xyXG5pbXBvcnQgQ3J1c2hMaXN0IGZyb20gJy4uL3BhZ2VzL0NydXNoTGlzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZBUSgpIHtcclxuXHJcblxyXG5cclxuICBjb25zdCBbY3VycmVudFZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gIGlmKGN1cnJlbnRWaWV3ID09PSAnVmFsdWVzJykge1xyXG4gICAgY29udGVudCA9ICggPFZhbHVlcy8+KVxyXG5cclxuICB9IGVsc2UgaWYoY3VycmVudFZpZXcgPT09ICdIb21lJykge1xyXG4gICAgY29udGVudCA9ICggPEhvbWUvPilcclxuICB9IGVsc2UgaWYoY3VycmVudFZpZXcgPT09ICdDcnVzaExpc3QnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8Q3J1c2hMaXN0Lz4pXHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb250ZW50ID0gKCBcclxuICAgICAgPD4gXHJcbiAgICAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPlBhbnRoZXIgQ3J1c2ggRkFRczwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lbnVDb250YWluZXJ9PlxyXG4gIFxyXG4gICAgICA8aW1nIHNyYz1cImltYWdlcy9Mb2dvNS5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5Mb2dvfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUJ1dHRvbnNPbmx5fT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkhvbWVcIil9fT5Ib21lPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJWYWx1ZXNcIil9fT5PdXIgVmFsdWVzPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJGQVFcIil9fT5GQVFzPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYXFzfSA+IFxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IDxiPiBXaG8gaXMgZWxpZ2libGU/IDwvYj4gPC9zdW1tYXJ5PlxyXG4gICAgICA8cD4gQWxsIHNlbmlvcnMgaW4gdGhlIGNsYXNzIG9mIDIwMjEgYW5kIDIwMjEuNSBjYW4gc3VibWl0IGEgdmlydHVhbCBjcnVzaCBsaXN0LCBldmVuIGlmIHlvdSBhcmUgb2ZmLWNhbXB1cyBvciByZW1vdGUuIFdlIHdpbGwgYXNrIHlvdSB0byBpbmNsdWRlIHlvdXIgZW1haWwgd2hlbiB5b3Ugc3VibWl0IHlvdXIgY3J1c2hlcyB0byB2ZXJpZnkgdGhhdCB5b3UgYXJlIGEgc2VuaW9yLiA8L3A+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gPGI+IFdoZW4gaXMgdGhpcz8gPC9iPiAgPC9zdW1tYXJ5PlxyXG4gICAgICA8cD4gU2VuaW9ycyBjYW4gZmlsbCBvdXQgdGhlaXIgdmlydHVhbCBjcnVzaCBsaXN0IGJldHdlZW4gTWF5IDEwIGFuZCBNYXkgMTcgYnkgNTowMCBwbS4gWW91IHdpbGwgZ2V0IG5vdGlmaWVkIGlmIHlvdSBtYXRjaCB3aXRoIGFueSBvZiB5b3VyIGNydXNoZXMgb24gTWF5IDE4LiA8L3A+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gPGI+IFdobyBjYW4gc2VlIG15IGNydXNoIGxpc3Q/IDwvYj4gPC9zdW1tYXJ5PlxyXG4gICAgICA8cD4gTm8gb25lIGNhbiBzZWUgdGhlIGxpc3QgeW91IHN1Ym1pdC4gT25seSBpZiB5b3UgbWF0Y2ggd2l0aCB5b3VyIGNydXNoIHdpbGwgeW91ciBuYW1lIGFuZCBlbWFpbCBiZSBzaGFyZWQgd2l0aCB0aGVtLjwvcD5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiAgPGI+IEhvdyBkbyBJIHN1Ym1pdCBteSBjcnVzaGVzPyA8L2I+IDwvc3VtbWFyeT5cclxuICAgICAgPHA+IENsaWNrIG9uIDxpPkNydXNoIExpc3Q8L2k+IGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgdG8gZmlsbCBvdXQgeW91ciBsaXN0LiBUaGUgZm9ybSB3aWxsIGFzayB5b3UgdG8gaW5jbHVkZSB0aGUgZW1haWwgYWRkcmVzc2VzIG9mIHlvdXIgY3J1c2hlcy4gPC9wPlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IDxiPiBIb3cgZG8gSSBmaW5kIG15IGNydXNoJmFwb3M7cyBlbWFpbD8gPC9iPiA8L3N1bW1hcnk+XHJcbiAgICAgIDxwPiBZb3UgY2FuIHNlYXJjaCB0aGVpciBuYW1lIGluIHRoZSBkaXJlY3RvcnksIDxhIGNsYXNzTmFtZT0ge3N0eWxlcy5saW5rRGlyZWN0b3J5fSBocmVmPSBcImh0dHBzOi8vZGlyZWN0b3J5Lm1pZGRsZWJ1cnkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5mb3VuZCBoZXJlPC9hPiwgb3Igc3RhcnQgdHlwaW5nIHRoZWlyIG5hbWUgaW50byBPdXRsb29rIHVudGlsIHRoZWlyIGVtYWlsIGFwcGVhcnMuICA8L3A+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gPGI+IFdoYXQgaGFwcGVucyBpZiBJIG1hdGNoIHdpdGggb25lIG9mIG15IGNydXNoZXM/IDwvYj4gPC9zdW1tYXJ5PlxyXG4gICAgICA8cD4gWW91IHdpbGwgZ2V0IG5vdGlmaWVkIGJ5IGVtYWlsIG9uIE1heSAxOC4gVGhlIGVtYWlsIHdpbGwgaW5jbHVkZSB0aGVpciBuYW1lIGFuZCBlbWFpbCBhZGRyZXNzIGZvciB5b3UgdG8gcmVhY2ggb3V0IHRvIHRoZW0sIGlmIHlvdSBjaG9vc2UgdG8gZG8gc28uPC9wPiAgICBcclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJGQVF9PiBcclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkNydXNoTGlzdFwiKX19PkNydXNoIExpc3Q8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC8+XHJcbiAgICBcclxuICAgIClcclxuICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAge2NvbnRlbnR9XHJcbiAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb29kYnllKCkge1xyXG5cclxuXHJcbiAgICBsZXQgY29udGVudDtcclxuICBcclxuICAgICAgY29udGVudCA9ICggXHJcbiAgICAgICAgPD4gXHJcbiAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIENsb3NlZCA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ5ZX0+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbGFuZHNjYXBlLmpwZ1wiIGNsYXNzTmFtZT17c3R5bGVzLkdvb2RieWV9PjwvaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICAgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PiBcclxuICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG59XHJcbiAgICAgIFxyXG4gICBcclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9wYWdlcy9pbmRleCc7XHJcbmltcG9ydCBGQVEgZnJvbSAnLi4vcGFnZXMvRkFRJztcclxuaW1wb3J0IENydXNoTGlzdCBmcm9tICcuLi9wYWdlcy9DcnVzaExpc3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhbHVlcygpIHtcclxuXHJcblxyXG4gXHJcbiAgY29uc3QgW2N1cnJlbnRWaWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGxldCBjb250ZW50O1xyXG5cclxuICBpZihjdXJyZW50VmlldyA9PT0gJ0ZBUScpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxGQVEvPilcclxuXHJcbiAgfSBlbHNlIGlmKGN1cnJlbnRWaWV3ID09PSAnSG9tZScpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxIb21lLz4pXHJcbiAgfSBlbHNlIGlmKGN1cnJlbnRWaWV3ID09PSAnQ3J1c2hMaXN0Jykge1xyXG4gICAgY29udGVudCA9ICggPENydXNoTGlzdC8+KVxyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgY29udGVudCA9ICggXHJcbiAgICAgIDw+IFxyXG4gICAgICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIFZhbHVlczwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lbnVDb250YWluZXJ9PlxyXG4gICAgXHJcbiAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL0xvZ281LnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLkxvZ299Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51QnV0dG9uc09ubHl9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRWaWV3KFwiSG9tZVwiKX19PkhvbWU8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIlZhbHVlc1wiKX19Pk91ciBWYWx1ZXM8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkZBUVwiKX19PkZBUXM8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZXN9ID5cclxuICAgICAgPHA+IFdlIGFyZSBUaG9tYXMgYW5kIERhdmlkLCB0d28gc3R1ZGVudHMgbWFqb3JpbmcgaW4gQ29tcHV0ZXIgU2NpZW5jZS4gV2UgYnVpbHQgUGFudGhlciBDcnVzaCB0byBlbmhhbmNlIHR3byBzaW1wbGUgYXNwZWN0cyBvZiB0cmFkaXRpb25hbCBjcnVzaCBsaXN0czogcHJpdmFjeSBhbmQgcmVzcGVjdC4gSW4gdGVybXMgb2YgcHJpdmFjeSwgd2UgZG9u4oCZdCBzaGFyZSB5b3VyIGxpc3Qgd2l0aCBhbnlvbmUsIHNvIG5vIG9uZSBzZWVzIHlvdXIgbGlzdCBhbmQgeW91IGRvbuKAmXQgc2VlIGFueW9uZSBlbHNlJmFwb3M7cy4gVGhpcyByZWxpZXZlcyB0aGUgcHJlc3N1cmUgb2YgcHV0dGluZyB1cCBhIGNydXNoIGxpc3QgaW4gYSBwdWJsaWMgc3BhY2Ugd2hpbGUgc3RpbGwgYWxsb3dpbmcgeW91IHRvIGNvbm5lY3Qgd2l0aCB5b3VyIGNydXNoIGJlZm9yZSBncmFkdWF0aW9uLiA8L3A+XHJcbiAgICAgIDxwPiBBdCB0aGUgc2FtZSB0aW1lLCB3ZSZhcG9zO3JlIGNvbW1pdHRlZCB0byBmb3N0ZXJpbmcgYSBzYWZlIGFuZCByZXNwZWN0ZnVsIGVudmlyb25tZW50IGZvciB5b3UgdG8gbWFrZSBhIG5ldyBjb25uZWN0aW9uLiBDb21wYXJlZCB3aXRoIHRyYWRpdGlvbmFsIGNydXNoIGxpc3RzLCB0aGUgUGFudGhlciBDcnVzaCByZWR1Y2VzIHRoZSBkaXNjb21mb3J0IG9mIGhhdmluZyB5b3VyIG5hbWUgc2hvd24gcHVibGljbHkgb24gc29tZW9uZSBlbHNlJmFwb3M7cyBsaXN0IHdobyB5b3UgbWlnaHQgbm90IHdhbnQgdG8gYXNzb2NpYXRlIHdpdGguIEluc3RlYWQsIHlvdSBhbmQgeW91ciBjcnVzaCBuZWVkIHRvIGNvbnNlbnN1YWxseSB3cml0ZSBlYWNoIG90aGVyJmFwb3M7cyBuYW1lIGRvd24gZm9yIHlvdSB0byBnZXQgYSBtYXRjaCwgd2hpY2ggaXMgZGVzaWduZWQgdG8gaW1wcm92ZSB0cmFuc3BhcmVuY3kgYW5kIHJlc3BlY3QgYmV0d2VlbiBzdHVkZW50cy4gPC9wPlxyXG4gICAgICA8cD4gVWx0aW1hdGVseSwgdGhlIFBhbnRoZXIgQ3J1c2ggaXMgbm90IGludGVuZGVkIHRvIHJlcGxhY2UgdHJhZGl0aW9uYWwgY3J1c2ggbGlzdHM7IGluc3RlYWQsIGl0IGlzIGludGVuZGVkIHRvIG1ha2UgY3J1c2ggbGlzdHMgbW9yZSBhY2Nlc3NpYmxlIHRvIHNlbmlvcnMgYnkgb2ZmZXJpbmcgYSBtb3JlIHByaXZhdGUgd2F5IHRvIG1ha2UgYSBuZXcgY29ubmVjdGlvbiBiZWZvcmUgZ3JhZHVhdGlvbi48L3A+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PiBcclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkNydXNoTGlzdFwiKX19PkNydXNoIExpc3Q8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC8+XHJcbiAgICBcclxuICAgIClcclxuICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAge2NvbnRlbnR9XHJcbiAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMqL1xyXG5cclxuICBcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENydXNoTGlzdCBmcm9tICcuLi9wYWdlcy9DcnVzaExpc3QnO1xyXG5pbXBvcnQgVmFsdWVzIGZyb20gJy4uL3BhZ2VzL1ZhbHVlcyc7XHJcbmltcG9ydCBGQVEgZnJvbSAnLi4vcGFnZXMvRkFRJztcclxuaW1wb3J0IEdvb2RieWUgZnJvbSAnLi4vcGFnZXMvR29vZEJ5ZSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50TW9kZSwgc2V0Q3VycmVudE1vZGVdID0gdXNlU3RhdGUoJ0dvb2RCeWUnKTtcclxuICBcclxuICBsZXQgY29udGVudDtcclxuXHJcbiAgaWYgKGN1cnJlbnRNb2RlID09PSBcIkhvbWVcIikge1xyXG5cclxuICAgIGNvbnRlbnQgPSAoXHJcbiAgICA8PiBcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+UGFudGhlciBDcnVzaCBXZWxjb21lPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9IHtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcbiAgICAgIFxyXG4gICAgICA8aW1nIHNyYz1cImltYWdlcy9Mb2dvNS5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5Mb2dvfS8+XHJcbiAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51QnV0dG9uc09ubHl9PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKCdIb21lJyl9fT5Ib21lPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoXCJWYWx1ZXNcIil9fT5PdXIgVmFsdWVzPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoXCJGQVFcIil9fT5GQVFzPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGx5cn0gaWQ9XCJwbGF5ZXJcIiA+XHJcblxyXG4gICAgICBcclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81NDYyNzU5MzM/YmFja2dyb3VuZD0xJmNvbnRyb2xzPTBcIlxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiID5cclxuICAgICAgICA8L2lmcmFtZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99ID5cclxuICAgICAgICAgPHA+IEdyYWR1YXRpb24gaXMgYXJvdW5kIHRoZSBjb3JuZXIsIGFuZCB3ZSB3YW50IHRvIGhlbHAgeW91IG1ha2UgdGhlIG1vc3Qgb3V0IG9mIHlvdXIgbGFzdCB3ZWVrcyBhdCBNaWRkbGVidXJ5ISA8L3A+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG93aXR3b3Jrc30gPiBcclxuICAgICAgICAgICAgPHA+SG93IGl0IHdvcmtzOjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5zdHJ1Y3Rpb25zQ29udGFpbmVyfT4gXHJcbiAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ZpbmFsX2hvd19pdF93b3Jrcy5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnN0cnVjdGlvbnN9Lz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhcXNIb21lfSA+IFxyXG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZmFxc1RpdGxlfT4gRkFRcyA8L2gyPlxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IDxiPiBXaG8gaXMgZWxpZ2libGU/IDwvYj4gPC9zdW1tYXJ5PlxyXG4gICAgICA8cD4gQWxsIHNlbmlvcnMgaW4gdGhlIGNsYXNzIG9mIDIwMjEgYW5kIDIwMjEuNSBjYW4gc3VibWl0IGEgdmlydHVhbCBjcnVzaCBsaXN0LCBldmVuIGlmIHlvdSBhcmUgb2ZmLWNhbXB1cyBvciByZW1vdGUuIFdlIHdpbGwgYXNrIHlvdSB0byBpbmNsdWRlIHlvdXIgZW1haWwgd2hlbiB5b3Ugc3VibWl0IHlvdXIgY3J1c2hlcyB0byB2ZXJpZnkgdGhhdCB5b3UgYXJlIGEgc2VuaW9yLiA8L3A+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gPGI+IFdoZW4gaXMgdGhpcz8gPC9iPiAgPC9zdW1tYXJ5PlxyXG4gICAgICA8cD4gU2VuaW9ycyBjYW4gZmlsbCBvdXQgdGhlaXIgdmlydHVhbCBjcnVzaCBsaXN0IGJldHdlZW4gTWF5IDEwIGFuZCBNYXkgMTcgYnkgNTowMCBwbS4gWW91IHdpbGwgZ2V0IG5vdGlmaWVkIGlmIHlvdSBtYXRjaCB3aXRoIGFueSBvZiB5b3VyIGNydXNoZXMgb24gTWF5IDE4LiA8L3A+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gPGI+IFdobyBjYW4gc2VlIG15IGNydXNoIGxpc3Q/IDwvYj4gPC9zdW1tYXJ5PlxyXG4gICAgICA8cD4gTm8gb25lIGNhbiBzZWUgdGhlIGxpc3QgeW91IHN1Ym1pdC4gT25seSBpZiB5b3UgbWF0Y2ggd2l0aCB5b3VyIGNydXNoIHdpbGwgeW91ciBuYW1lIGFuZCBlbWFpbCBiZSBzaGFyZWQgd2l0aCB0aGVtLjwvcD5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiAgPGI+IEhvdyBkbyBJIHN1Ym1pdCBteSBjcnVzaGVzPyA8L2I+IDwvc3VtbWFyeT5cclxuICAgICAgPHA+IENsaWNrIG9uIDxpPkNydXNoIExpc3Q8L2k+IGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgdG8gZmlsbCBvdXQgeW91ciBsaXN0LiBUaGUgZm9ybSB3aWxsIGFzayB5b3UgdG8gaW5jbHVkZSB0aGUgZW1haWwgYWRkcmVzc2VzIG9mIHlvdXIgY3J1c2hlcy4gPC9wPlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IDxiPiBIb3cgZG8gSSBmaW5kIG15IGNydXNoJmFwb3M7cyBlbWFpbD8gPC9iPiA8L3N1bW1hcnk+XHJcbiAgICAgIDxwPiBZb3UgY2FuIHNlYXJjaCB0aGVpciBuYW1lIGluIHRoZSBkaXJlY3RvcnksIDxhIGNsYXNzTmFtZT0ge3N0eWxlcy5saW5rRGlyZWN0b3J5fSBocmVmPSBcImh0dHBzOi8vZGlyZWN0b3J5Lm1pZGRsZWJ1cnkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5mb3VuZCBoZXJlPC9hPiwgb3Igc3RhcnQgdHlwaW5nIHRoZWlyIG5hbWUgaW50byBPdXRsb29rIHVudGlsIHRoZWlyIGVtYWlsIGFwcGVhcnMuICA8L3A+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gPGI+IFdoYXQgaGFwcGVucyBpZiBJIG1hdGNoIHdpdGggb25lIG9mIG15IGNydXNoZXM/IDwvYj4gPC9zdW1tYXJ5PlxyXG4gICAgICA8cD4gWW91IHdpbGwgZ2V0IG5vdGlmaWVkIGJ5IGVtYWlsIG9uIE1heSAxOC4gVGhlIGVtYWlsIHdpbGwgaW5jbHVkZSB0aGVpciBuYW1lIGFuZCBlbWFpbCBhZGRyZXNzIGZvciB5b3UgdG8gcmVhY2ggb3V0IHRvIHRoZW0sIGlmIHlvdSBjaG9vc2UgdG8gZG8gc28uPC9wPiAgICBcclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT4gXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiQ3J1c2hMaXN0XCIpfX0+Q3J1c2ggTGlzdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj4gXHJcblxyXG4gICAgICA8Lz4pIFxyXG4gIH1cclxuXHJcbiAgZWxzZSBpZiAoY3VycmVudE1vZGUgPT09IFwiQ3J1c2hMaXN0XCIpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxDcnVzaExpc3QgIC8+IClcclxuICB9IFxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIlZhbHVlc1wiKSB7XHJcbiAgICAgIGNvbnRlbnQgPSAoIDxWYWx1ZXMgLz4gKVxyXG4gIH0gXHJcbiAgZWxzZSBpZiAoY3VycmVudE1vZGUgPT09IFwiRkFRXCIpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxGQVEgLz4gKVxyXG4gIH0gXHJcbiAgZWxzZSAge1xyXG4gICAgY29udGVudCA9ICggPEdvb2RieWUgLz4gKSBcclxuICB9IFxyXG5cclxuICBcclxucmV0dXJuIChcclxuICAgIDw+IFxyXG4gICAgICB7Y29udGVudH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=