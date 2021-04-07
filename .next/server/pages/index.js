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

var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\CrushList.js";




function CrushList() {
  const {
    0: currentName,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: currentLastName,
    1: setLastName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: currentEmail,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: currentPhoneNum,
    1: setPhoneNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');

  function saveUserInfo() {}

  function cancel() {
    setName('');
    setEmail('');
    setLastName('');
  }

  function submitCrushes() {}

  function contactPreference() {
    /* // Get the checkbox
    const checkEmail = document.getElementById("EmailPreffered");
    const  checkText = document.getElementById("TextPreffered");
    // Get the output text
    const phoneNum = document.getElementById("PhoneNumber");
    const thanks = document.getElementById("Thanks");
    
    // If the checkbox is checked, display the output text
    if (checkEmail.checked == true){
        thanks.style.display = "block";
    
    } if (checkText.checked == true){
        phoneNum.style.display = "block";
    
      } else {
    
        } */
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Panther Crush List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.UserInfo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleSection,
          children: " Your Info:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
            onChange: e => {
              setName(e.target.value);
            },
            value: currentName,
            type: "text",
            "aria-label": "title",
            placeholder: "First Name",
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
            onChange: e => {
              setLastName(e.target.value);
            },
            value: currentLastName,
            type: "text",
            "aria-label": "title",
            placeholder: "Last Name",
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
            onChange: e => {
              setEmail(e.target.value);
            },
            value: currentEmail,
            type: "text",
            "aria-label": "title",
            placeholder: "Email address",
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
            onClick: () => {
              saveUserInfo();
            },
            disabled: currentName === '' || currentLastName === '' || currentEmail === '',
            children: " Save "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
            onClick: () => {
              cancel();
            },
            children: " Cancel "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushList,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleSection,
          type: "button",
          children: "Your Crushes:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
          onClick: () => {
            submitCrushes();
          }
          /*disabled={currentTitle === ''} */
          ,
          children: " Submit Crush List "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button
          /* onClick={() => { complete() }} */
          ,
          children: " Cancel "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Preference,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleSection,
          children: " Contact Preference:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
          children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "EmailPreferred",
            type: "checkbox",
            onClick: () => {
              contactPreference();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.checkmark
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
          children: ["Text:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "TextPreferred",
            type: "checkbox",
            onClick: () => {
              contactPreference();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.checkmark
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "PhoneNumber",
          type: "tel",
          placeholder: "Phone Number",
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.phoneinput,
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
          onChange: e => {
            setPhoneNum(e.target.value);
          },
          value: currentPhoneNum
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
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
	"plyr": "Home_plyr__3WLyy",
	"main": "Home_main__2fVYg",
	"body": "Home_body__1ZFtJ",
	"title": "Home_title__33w7p",
	"input": "Home_input__3pJ9E",
	"button": "Home_button__3jpQE",
	"UserInfo": "Home_UserInfo__3tdsp",
	"crushInput": "Home_crushInput__1PaEY",
	"intro": "Home_intro__1Nh_4",
	"overview": "Home_overview__20Fo0",
	"information": "Home_information__xq52L",
	"container": "Home_container__18WyQ",
	"phoneinput": "Home_phoneinput__2xP-2",
	"checkmark": "Home_checkmark__2ImlX",
	"footer": "Home_footer__CkrbQ"
};


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


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\index.js";

/* eslint-disable react/no-unescaped-entities*/



 //import player from '../pages/Styles/plyr.css';

 //import middlebury_720 from '../images/middlebury_720.mp4';

function Home() {
  const {
    0: currentMode,
    1: setCurrentMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Welcome");
  let content;

  if (currentMode === "CrushList") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, this);
  } else if (currentMode === "Welcome") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Panther Crush Welcome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Graduation comes sooner than you think, so try to make the most of it while you can!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overview,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "How it works:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.information,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "We're taking the long-lived tradition of Crush Lists and making it more accessible for seniors"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "If you are a senior (class of 2021 and 2021.5), you can anonymously submit names of up to seven senior \"crushes\" between May 16 to May 21 by 5:00 pm "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Privacy is important to us, so all of your personal information and the names you submit will be kept completely anonymous. Only if you match with your crush will your name be shared with them "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "You will get notified by email on May 22nd if you match with any of your crushes. After that, you can take it from there "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonContainer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
          onClick: () => {
            setCurrentMode("CrushList");
          },
          children: "Give me my crush"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, this)]
    }, void 0, true);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: "  "
    }, void 0, false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plyr,
    id: "player",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdn.plyr.io/3.6.4/plyr.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
      height: "100%",
      width: "100%",
      opacity: "0.5",
      src: "https://player.vimeo.com/video/533381740?background=1&controls=0",
      frameBorder: "0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }, this), content]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 3
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NydXNoTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDcnVzaExpc3QiLCJjdXJyZW50TmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMYXN0TmFtZSIsInNldExhc3ROYW1lIiwiY3VycmVudEVtYWlsIiwic2V0RW1haWwiLCJjdXJyZW50UGhvbmVOdW0iLCJzZXRQaG9uZU51bSIsInNhdmVVc2VySW5mbyIsImNhbmNlbCIsInN1Ym1pdENydXNoZXMiLCJjb250YWN0UHJlZmVyZW5jZSIsInN0eWxlcyIsIm1haW4iLCJVc2VySW5mbyIsInRpdGxlU2VjdGlvbiIsImlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwiY3J1c2hMaXN0IiwiY3J1c2hJbnB1dCIsIlByZWZlcmVuY2UiLCJjb250YWluZXIiLCJjaGVja21hcmsiLCJwaG9uZWlucHV0IiwiSG9tZSIsImN1cnJlbnRNb2RlIiwic2V0Q3VycmVudE1vZGUiLCJjb250ZW50IiwiaW50cm8iLCJvdmVydmlldyIsImluZm9ybWF0aW9uIiwiYnV0dG9uQ29udGFpbmVyIiwiZm9vdGVyIiwicGx5ciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNB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RUFBTSxDQUFDUSxNQUExQjtBQUFrQyxpQkFBTyxFQUFFLE1BQU07QUFBQ1MsMEJBQWMsQ0FBQyxXQUFELENBQWQ7QUFBNEIsV0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJGO0FBQUEsb0JBREE7QUE2QkQsR0E5QkksTUErQkE7QUFDSEMsV0FBTyxnQkFBSTtBQUFBO0FBQUEscUJBQVg7QUFDRDs7QUFFSCxzQkFFRTtBQUFLLGFBQVMsRUFBRWxCLG9FQUFNLENBQUN3QixJQUF2QjtBQUE2QixNQUFFLEVBQUMsUUFBaEM7QUFBQSw0QkFFSTtBQUFRLFNBQUcsRUFBRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQU1FO0FBQ0UsWUFBTSxFQUFDLE1BRFQ7QUFDZ0IsV0FBSyxFQUFDLE1BRHRCO0FBQzZCLGFBQU8sRUFBQyxLQURyQztBQUVFLFNBQUcsRUFBQyxrRUFGTjtBQUdFLGlCQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsRUFXR04sT0FYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQWlCTSxDOzs7Ozs7Ozs7OztBQ3pFTixzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcnVzaExpc3QoKSB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgW2N1cnJlbnROYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50TGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0W2N1cnJlbnRQaG9uZU51bSwgc2V0UGhvbmVOdW1dID0gdXNlU3RhdGUoJycpXHJcblxyXG5mdW5jdGlvbiBzYXZlVXNlckluZm8oKXtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbCgpe1xyXG5cclxuICAgIHNldE5hbWUoJycpXHJcbiAgICBzZXRFbWFpbCgnJylcclxuICAgIHNldExhc3ROYW1lKCcnKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0Q3J1c2hlcygpe1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdFByZWZlcmVuY2UoKXtcclxuXHJcbi8qIC8vIEdldCB0aGUgY2hlY2tib3hcclxuY29uc3QgY2hlY2tFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRW1haWxQcmVmZmVyZWRcIik7XHJcbmNvbnN0ICBjaGVja1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRleHRQcmVmZmVyZWRcIik7XHJcbi8vIEdldCB0aGUgb3V0cHV0IHRleHRcclxuY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBob25lTnVtYmVyXCIpO1xyXG5jb25zdCB0aGFua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRoYW5rc1wiKTtcclxuXHJcbi8vIElmIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBkaXNwbGF5IHRoZSBvdXRwdXQgdGV4dFxyXG5pZiAoY2hlY2tFbWFpbC5jaGVja2VkID09IHRydWUpe1xyXG4gICAgdGhhbmtzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG59IGlmIChjaGVja1RleHQuY2hlY2tlZCA9PSB0cnVlKXtcclxuICAgIHBob25lTnVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgfSAqL1xyXG59XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UGFudGhlciBDcnVzaCBMaXN0PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlckluZm8gfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ge3N0eWxlcy50aXRsZVNlY3Rpb259PiBZb3VyIEluZm86PC9oMj5cclxuICAgICAgICAgICAgPGRldGFpbHM+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuaW5wdXR9IG9uQ2hhbmdlPXtlID0+IHsgc2V0TmFtZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnROYW1lfSB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJGaXJzdCBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9e2UgPT4geyBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRMYXN0TmFtZX0gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiTGFzdCBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9e2UgPT4geyBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRFbWFpbH0gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiRW1haWwgYWRkcmVzc1wiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7IHNhdmVVc2VySW5mbygpIH19ZGlzYWJsZWQ9e2N1cnJlbnROYW1lID09PSAnJyB8fCBjdXJyZW50TGFzdE5hbWUgPT09ICcnIHx8IGN1cnJlbnRFbWFpbCA9PT0gJyd9PiBTYXZlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4geyBjYW5jZWwoKX19ID4gQ2FuY2VsIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2RldGFpbHM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcnVzaExpc3QgfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ge3N0eWxlcy50aXRsZVNlY3Rpb259IHR5cGU9XCJidXR0b25cIj5Zb3VyIENydXNoZXM6PC9oMj4gIFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAgLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9ICAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gIC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIiAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHsgc3VibWl0Q3J1c2hlcygpIH19IC8qZGlzYWJsZWQ9e2N1cnJlbnRUaXRsZSA9PT0gJyd9ICovPiBTdWJtaXQgQ3J1c2ggTGlzdCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259Lyogb25DbGljaz17KCkgPT4geyBjb21wbGV0ZSgpIH19ICovPiBDYW5jZWwgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMuUHJlZmVyZW5jZX0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9IHtzdHlsZXMudGl0bGVTZWN0aW9ufT4gQ29udGFjdCBQcmVmZXJlbmNlOjwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSB7c3R5bGVzLmNvbnRhaW5lcn0+RW1haWxcclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiRW1haWxQcmVmZXJyZWRcInR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9eygpID0+IHtjb250YWN0UHJlZmVyZW5jZSgpfX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9IHtzdHlsZXMuY2hlY2ttYXJrfT48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9IHtzdHlsZXMuY29udGFpbmVyfT5UZXh0OlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJUZXh0UHJlZmVycmVkXCIgdHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17KCkgPT4ge2NvbnRhY3RQcmVmZXJlbmNlKCl9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ge3N0eWxlcy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD4gXHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIlBob25lTnVtYmVyXCIgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCIgY2xhc3NOYW1lPXtzdHlsZXMucGhvbmVpbnB1dH0gcGF0dGVybj1cIlswLTldezN9LVswLTldezN9LVswLTldezR9XCIgb25DaGFuZ2U9e2UgPT4geyBzZXRQaG9uZU51bShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRQaG9uZU51bX0vPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgKTtcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBseXJcIjogXCJIb21lX3BseXJfXzNXTHl5XCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMmZWWWdcIixcblx0XCJib2R5XCI6IFwiSG9tZV9ib2R5X18xWkZ0SlwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fMzN3N3BcIixcblx0XCJpbnB1dFwiOiBcIkhvbWVfaW5wdXRfXzNwSjlFXCIsXG5cdFwiYnV0dG9uXCI6IFwiSG9tZV9idXR0b25fXzNqcFFFXCIsXG5cdFwiVXNlckluZm9cIjogXCJIb21lX1VzZXJJbmZvX18zdGRzcFwiLFxuXHRcImNydXNoSW5wdXRcIjogXCJIb21lX2NydXNoSW5wdXRfXzFQYUVZXCIsXG5cdFwiaW50cm9cIjogXCJIb21lX2ludHJvX18xTmhfNFwiLFxuXHRcIm92ZXJ2aWV3XCI6IFwiSG9tZV9vdmVydmlld19fMjBGbzBcIixcblx0XCJpbmZvcm1hdGlvblwiOiBcIkhvbWVfaW5mb3JtYXRpb25fX3hxNTJMXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzE4V3lRXCIsXG5cdFwicGhvbmVpbnB1dFwiOiBcIkhvbWVfcGhvbmVpbnB1dF9fMnhQLTJcIixcblx0XCJjaGVja21hcmtcIjogXCJIb21lX2NoZWNrbWFya19fMkltbFhcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fQ2tyYlFcIlxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyovXHJcblxyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuLy9pbXBvcnQgcGxheWVyIGZyb20gJy4uL3BhZ2VzL1N0eWxlcy9wbHlyLmNzcyc7XHJcbmltcG9ydCBDcnVzaExpc3QgZnJvbSAnLi4vcGFnZXMvQ3J1c2hMaXN0JztcclxuLy9pbXBvcnQgbWlkZGxlYnVyeV83MjAgZnJvbSAnLi4vaW1hZ2VzL21pZGRsZWJ1cnlfNzIwLm1wNCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBbY3VycmVudE1vZGUsIHNldEN1cnJlbnRNb2RlXSA9IHVzZVN0YXRlKFwiV2VsY29tZVwiKTtcclxuXHJcbiAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gIGlmIChjdXJyZW50TW9kZSA9PT0gXCJDcnVzaExpc3RcIikge1xyXG5cclxuICAgIGNvbnRlbnQgPSAoIDxDcnVzaExpc3QvPiApXHJcbiAgfSBcclxuICBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJXZWxjb21lXCIpIHtcclxuICAgIGNvbnRlbnQgPSAoXHJcbiAgICA8PiBcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+UGFudGhlciBDcnVzaCBXZWxjb21lPC90aXRsZT5cclxuXHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8bWFpbiBjbGFzc05hbWU9IHtzdHlsZXMubWFpbn0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvfSA+XHJcbiAgICAgICAgICAgIDxwPkdyYWR1YXRpb24gY29tZXMgc29vbmVyIHRoYW4geW91IHRoaW5rLCBzbyB0cnkgdG8gbWFrZSB0aGUgbW9zdCBvZiBpdCB3aGlsZSB5b3UgY2FuITwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fSA+XHJcbiAgICAgICAgICAgIDxoMz5Ib3cgaXQgd29ya3M6PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvcm1hdGlvbn0gPlxyXG4gICAgICAgICAgICA8cD5XZSdyZSB0YWtpbmcgdGhlIGxvbmctbGl2ZWQgdHJhZGl0aW9uIG9mIENydXNoIExpc3RzIGFuZCBtYWtpbmcgaXQgbW9yZSBhY2Nlc3NpYmxlIGZvciBzZW5pb3JzPC9wPlxyXG4gICAgICAgICAgICA8cD5JZiB5b3UgYXJlIGEgc2VuaW9yIChjbGFzcyBvZiAyMDIxIGFuZCAyMDIxLjUpLCB5b3UgY2FuIGFub255bW91c2x5IHN1Ym1pdCBuYW1lcyBvZiB1cCB0byBzZXZlbiBzZW5pb3IgXCJjcnVzaGVzXCIgYmV0d2VlbiBNYXkgMTYgdG8gTWF5IDIxIGJ5IDU6MDAgcG0gPC9wPlxyXG4gICAgICAgICAgICA8cD5Qcml2YWN5IGlzIGltcG9ydGFudCB0byB1cywgc28gYWxsIG9mIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gYW5kIHRoZSBuYW1lcyB5b3Ugc3VibWl0IHdpbGwgYmUga2VwdCBjb21wbGV0ZWx5IGFub255bW91cy4gT25seSBpZiB5b3UgbWF0Y2ggd2l0aCB5b3VyIGNydXNoIHdpbGwgeW91ciBuYW1lIGJlIHNoYXJlZCB3aXRoIHRoZW0gPC9wPiBcclxuICAgICAgICAgICAgPHA+WW91IHdpbGwgZ2V0IG5vdGlmaWVkIGJ5IGVtYWlsIG9uIE1heSAyMm5kIGlmIHlvdSBtYXRjaCB3aXRoIGFueSBvZiB5b3VyIGNydXNoZXMuIEFmdGVyIHRoYXQsIHlvdSBjYW4gdGFrZSBpdCBmcm9tIHRoZXJlIDwvcD4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+IFxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+IFxyXG4gIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoXCJDcnVzaExpc3RcIil9fT5HaXZlIG1lIG15IGNydXNoPC9idXR0b24+XHJcbiAgPC9mb290ZXI+XHJcbiAgICAgIDwvPikgXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgY29udGVudCA9ICg8PiAgPC8+KTtcclxuICB9XHJcbiAgXHJcbnJldHVybiAoXHJcblxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGx5cn0gaWQ9XCJwbGF5ZXJcIiA+XHJcbiAgey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcIi9wYXRoL3RvL3BseXIuY3NzXCIgLz4gKi99XHJcbiAgICAgIDxzY3JpcHQgc3JjPSBcImh0dHBzOi8vY2RuLnBseXIuaW8vMy42LjQvcGx5ci5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICB7LyogQ29kZSB3ZSBuZWVkIGZvciB2aWRlb1xyXG4gIGxvb3A9MSZjb250cm9scz0wJnNpZGVkb2NrPTAmYXV0b3BsYXk9MSZiYWNrZ3JvdW5kPTEgICBuZXcgbWluZTogNTMzMzgxNzQwIGNocmlzJ3M6IDM2ODg0OTAwNiBtaW5lOiA1MzIzMDI1NDQgIHZpbWVvOiA3Njk3OTg3MSovfVxyXG4gICAgPGlmcmFtZVxyXG4gICAgICBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgb3BhY2l0eT1cIjAuNVwiXHJcbiAgICAgIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81MzMzODE3NDA/YmFja2dyb3VuZD0xJmNvbnRyb2xzPTBcIlxyXG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIiA+XHJcbiAgICA8L2lmcmFtZT5cclxuICAgIHtjb250ZW50fVxyXG4gIFxyXG5cclxuICA8L2Rpdj5cclxuICApOyB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9