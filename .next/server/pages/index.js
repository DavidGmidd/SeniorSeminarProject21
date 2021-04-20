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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CrushList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ \"./src/pages/Styles/Home.module.css\");\n/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/thomastarantino/Desktop/Seniorseminar/SeniorSeminarProject21/src/pages/CrushList.js\";\n\n\n\n\nfunction CrushList() {\n  const {\n    0: currentName,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const {\n    0: currentLastName,\n    1: setLastName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const {\n    0: currentEmail,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const {\n    0: currentPhoneNum,\n    1: setPhoneNum\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n\n  function saveUserInfo() {}\n\n  function cancel() {\n    setName('');\n    setEmail('');\n    setLastName('');\n  }\n\n  function submitCrushes() {}\n\n  function contactPreference() {\n    /* // Get the checkbox\n    const checkEmail = document.getElementById(\"EmailPreffered\");\n    const  checkText = document.getElementById(\"TextPreffered\");\n    // Get the output text\n    const phoneNum = document.getElementById(\"PhoneNumber\");\n    const thanks = document.getElementById(\"Thanks\");\n    \n    // If the checkbox is checked, display the output text\n    if (checkEmail.checked == true){\n        thanks.style.display = \"block\";\n    \n    } if (checkText.checked == true){\n        phoneNum.style.display = \"block\";\n    \n      } else {\n    \n        } */\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Panther Crush List\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plyr,\n        id: \"player\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n          src: \"https://player.vimeo.com/video/536975744?background=1&loop=0\",\n          width: \"100%\",\n          height: \"100%\",\n          frameborder: \"0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ3J1c2hMaXN0LmpzPzcxNmYiXSwibmFtZXMiOlsiQ3J1c2hMaXN0IiwiY3VycmVudE5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJjdXJyZW50TGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImN1cnJlbnRFbWFpbCIsInNldEVtYWlsIiwiY3VycmVudFBob25lTnVtIiwic2V0UGhvbmVOdW0iLCJzYXZlVXNlckluZm8iLCJjYW5jZWwiLCJzdWJtaXRDcnVzaGVzIiwiY29udGFjdFByZWZlcmVuY2UiLCJzdHlsZXMiLCJtYWluIiwicGx5ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBR2hDLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUF5QkMsc0RBQVEsQ0FBQyxFQUFELENBQXZDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBaUNGLHNEQUFRLENBQUMsRUFBRCxDQUEvQztBQUNBLFFBQU07QUFBQSxPQUFDRyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUEyQkosc0RBQVEsQ0FBQyxFQUFELENBQXpDO0FBQ0EsUUFBSztBQUFBLE9BQUNLLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBaUNOLHNEQUFRLENBQUMsRUFBRCxDQUE5Qzs7QUFFSixXQUFTTyxZQUFULEdBQXVCLENBRXRCOztBQUVELFdBQVNDLE1BQVQsR0FBaUI7QUFFYlQsV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBSyxZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FGLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFFSDs7QUFFRCxXQUFTTyxhQUFULEdBQXdCLENBRXZCOztBQUVELFdBQVNDLGlCQUFULEdBQTRCO0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQzs7QUFFRyxzQkFFQTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSTtBQUFNLGVBQVMsRUFBRUMsb0VBQU0sQ0FBQ0MsSUFBeEI7QUFBQSw2QkFFQTtBQUFLLGlCQUFTLEVBQUVELG9FQUFNLENBQUNFLElBQXZCO0FBQTZCLFVBQUUsRUFBRSxRQUFqQztBQUFBLCtCQUNBO0FBQVEsYUFBRyxFQUFDLDhEQUFaO0FBQ0EsZUFBSyxFQUFDLE1BRE47QUFDYSxnQkFBTSxFQUFDLE1BRHBCO0FBRUEscUJBQVcsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZBO0FBa0JIIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL0NydXNoTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3J1c2hMaXN0KCkge1xuXG4gICAgICAgIFxuICAgIGNvbnN0IFtjdXJyZW50TmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2N1cnJlbnRMYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjdXJyZW50RW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdFtjdXJyZW50UGhvbmVOdW0sIHNldFBob25lTnVtXSA9IHVzZVN0YXRlKCcnKVxuXG5mdW5jdGlvbiBzYXZlVXNlckluZm8oKXtcblxufVxuXG5mdW5jdGlvbiBjYW5jZWwoKXtcblxuICAgIHNldE5hbWUoJycpXG4gICAgc2V0RW1haWwoJycpXG4gICAgc2V0TGFzdE5hbWUoJycpXG5cbn1cblxuZnVuY3Rpb24gc3VibWl0Q3J1c2hlcygpe1xuXG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RQcmVmZXJlbmNlKCl7XG5cbi8qIC8vIEdldCB0aGUgY2hlY2tib3hcbmNvbnN0IGNoZWNrRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkVtYWlsUHJlZmZlcmVkXCIpO1xuY29uc3QgIGNoZWNrVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGV4dFByZWZmZXJlZFwiKTtcbi8vIEdldCB0aGUgb3V0cHV0IHRleHRcbmNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQaG9uZU51bWJlclwiKTtcbmNvbnN0IHRoYW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGhhbmtzXCIpO1xuXG4vLyBJZiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgZGlzcGxheSB0aGUgb3V0cHV0IHRleHRcbmlmIChjaGVja0VtYWlsLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgdGhhbmtzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbn0gaWYgKGNoZWNrVGV4dC5jaGVja2VkID09IHRydWUpe1xuICAgIHBob25lTnVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgfSBlbHNlIHtcblxuICAgIH0gKi9cbn1cblxuICAgIHJldHVybiAoXG4gICAgICAgXG4gICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIExpc3Q8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGx5cn0gaWQ9IFwicGxheWVyXCI+XG4gICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzUzNjk3NTc0ND9iYWNrZ3JvdW5kPTEmbG9vcD0wXCIgXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBcbiAgICAgICAgZnJhbWVib3JkZXI9XCIwXCIgPlxuICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/CrushList.js\n");

/***/ }),

/***/ "./src/pages/Styles/Home.module.css":
/*!******************************************!*\
  !*** ./src/pages/Styles/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"plyr\": \"Home_plyr__3WLyy\",\n\t\"howitworks\": \"Home_howitworks__26Van\",\n\t\"main\": \"Home_main__2fVYg\",\n\t\"body\": \"Home_body__1ZFtJ\",\n\t\"title\": \"Home_title__33w7p\",\n\t\"input\": \"Home_input__3pJ9E\",\n\t\"button\": \"Home_button__3jpQE\",\n\t\"UserInfo\": \"Home_UserInfo__3tdsp\",\n\t\"crushInput\": \"Home_crushInput__1PaEY\",\n\t\"intro\": \"Home_intro__1Nh_4\",\n\t\"container\": \"Home_container__18WyQ\",\n\t\"phoneinput\": \"Home_phoneinput__2xP-2\",\n\t\"checkmark\": \"Home_checkmark__2ImlX\",\n\t\"footer\": \"Home_footer__CkrbQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcz8yZjcxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBseXJcIjogXCJIb21lX3BseXJfXzNXTHl5XCIsXG5cdFwiaG93aXR3b3Jrc1wiOiBcIkhvbWVfaG93aXR3b3Jrc19fMjZWYW5cIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18yZlZZZ1wiLFxuXHRcImJvZHlcIjogXCJIb21lX2JvZHlfXzFaRnRKXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zM3c3cFwiLFxuXHRcImlucHV0XCI6IFwiSG9tZV9pbnB1dF9fM3BKOUVcIixcblx0XCJidXR0b25cIjogXCJIb21lX2J1dHRvbl9fM2pwUUVcIixcblx0XCJVc2VySW5mb1wiOiBcIkhvbWVfVXNlckluZm9fXzN0ZHNwXCIsXG5cdFwiY3J1c2hJbnB1dFwiOiBcIkhvbWVfY3J1c2hJbnB1dF9fMVBhRVlcIixcblx0XCJpbnRyb1wiOiBcIkhvbWVfaW50cm9fXzFOaF80XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzE4V3lRXCIsXG5cdFwicGhvbmVpbnB1dFwiOiBcIkhvbWVfcGhvbmVpbnB1dF9fMnhQLTJcIixcblx0XCJjaGVja21hcmtcIjogXCJIb21lX2NoZWNrbWFya19fMkltbFhcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fQ2tyYlFcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Styles/Home.module.css\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ \"./src/pages/Styles/Home.module.css\");\n/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CrushList */ \"./src/pages/CrushList.js\");\n\n\nvar _jsxFileName = \"/Users/thomastarantino/Desktop/Seniorseminar/SeniorSeminarProject21/src/pages/index.js\";\n\n/* eslint-disable react/no-unescaped-entities*/\n\n\n\n //import player from '../pages/Styles/plyr.css';\n\n //import middlebury_720 from '../images/middlebury_720.mp4';\n\nfunction Home() {\n  const {\n    0: currentMode,\n    1: setCurrentMode\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Welcome\");\n  let content;\n\n  if (currentMode === \"CrushList\") {\n    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }, this);\n  } else if (currentMode === \"Welcome\") {\n    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"Panther Crush Welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plyr,\n          id: \"player\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n            src: \"https://cdn.plyr.io/3.6.4/plyr.js\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n            height: \"100%\",\n            width: \"100%\",\n            opacity: \"0.5\",\n            src: \"https://player.vimeo.com/video/538885546?background=1&controls=0\",\n            frameBorder: \"0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \" Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 10\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.howitworks,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"How it works:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 10\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n            height: \"100%\",\n            width: \"100%\",\n            opacity: \"0.5\",\n            src: \"https://player.vimeo.com/video/538941352?background=1&controls=0\",\n            frameBorder: \"0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonContainer\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n              onClick: () => {\n                setCurrentMode(\"CrushList\");\n              },\n              children: \"My Crushes\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 11\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true);\n  } else {\n    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: \"  \"\n    }, void 0, false);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: content\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJIb21lIiwiY3VycmVudE1vZGUiLCJzZXRDdXJyZW50TW9kZSIsInVzZVN0YXRlIiwiY29udGVudCIsInN0eWxlcyIsIm1haW4iLCJwbHlyIiwiaW50cm8iLCJob3dpdHdvcmtzIiwiYnV0dG9uQ29udGFpbmVyIiwiZm9vdGVyIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFFN0IsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLFNBQUQsQ0FBOUM7QUFFQSxNQUFJQyxPQUFKOztBQUVBLE1BQUlILFdBQVcsS0FBSyxXQUFwQixFQUFpQztBQUUvQkcsV0FBTyxnQkFBSyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDRCxHQUhELE1BSUssSUFBSUgsV0FBVyxLQUFLLFNBQXBCLEVBQStCO0FBQ2xDRyxXQUFPLGdCQUNQO0FBQUEsOEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUtBO0FBQU0saUJBQVMsRUFBR0Msb0VBQU0sQ0FBQ0MsSUFBekI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVELG9FQUFNLENBQUNFLElBQXZCO0FBQTZCLFlBQUUsRUFBQyxRQUFoQztBQUFBLGtDQUVBO0FBQVEsZUFBRyxFQUFFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQSxlQU1FO0FBQ0Esa0JBQU0sRUFBQyxNQURQO0FBQ2MsaUJBQUssRUFBQyxNQURwQjtBQUMyQixtQkFBTyxFQUFDLEtBRG5DO0FBRUEsZUFBRyxFQUFDLGtFQUZKO0FBR0EsdUJBQVcsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFXQTtBQUFLLHFCQUFTLEVBQUVGLG9FQUFNLENBQUNHLEtBQXZCO0FBQUEsbUNBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhBLGVBa0JBO0FBQUsscUJBQVMsRUFBRUgsb0VBQU0sQ0FBQ0ksVUFBdkI7QUFBQSxtQ0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJBLGVBc0JBO0FBQ0Esa0JBQU0sRUFBQyxNQURQO0FBQ2MsaUJBQUssRUFBQyxNQURwQjtBQUMyQixtQkFBTyxFQUFDLEtBRG5DO0FBRUEsZUFBRyxFQUFDLGtFQUZKO0FBR0EsdUJBQVcsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdEJBLGVBNEJBO0FBQUsscUJBQVMsRUFBRUosb0VBQU0sQ0FBQ0s7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1QkEsZUE4QkU7QUFBUSxxQkFBUyxFQUFFTCxvRUFBTSxDQUFDTSxNQUExQjtBQUFBLG1DQUNFO0FBQVEsdUJBQVMsRUFBRU4sb0VBQU0sQ0FBQ08sTUFBMUI7QUFBa0MscUJBQU8sRUFBRSxNQUFNO0FBQUNWLDhCQUFjLENBQUMsV0FBRCxDQUFkO0FBQTRCLGVBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBO0FBQUEsb0JBREE7QUE0Q0QsR0E3Q0ksTUE4Q0E7QUFDSEUsV0FBTyxnQkFBSTtBQUFBO0FBQUEscUJBQVg7QUFDRDs7QUFFSCxzQkFDSTtBQUFBLGNBQ0dBO0FBREgsbUJBREo7QUFLQyIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyovXG5cblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbi8vaW1wb3J0IHBsYXllciBmcm9tICcuLi9wYWdlcy9TdHlsZXMvcGx5ci5jc3MnO1xuaW1wb3J0IENydXNoTGlzdCBmcm9tICcuLi9wYWdlcy9DcnVzaExpc3QnO1xuLy9pbXBvcnQgbWlkZGxlYnVyeV83MjAgZnJvbSAnLi4vaW1hZ2VzL21pZGRsZWJ1cnlfNzIwLm1wNCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2N1cnJlbnRNb2RlLCBzZXRDdXJyZW50TW9kZV0gPSB1c2VTdGF0ZShcIldlbGNvbWVcIik7XG5cbiAgbGV0IGNvbnRlbnQ7XG5cbiAgaWYgKGN1cnJlbnRNb2RlID09PSBcIkNydXNoTGlzdFwiKSB7XG5cbiAgICBjb250ZW50ID0gKCA8Q3J1c2hMaXN0Lz4gKVxuICB9IFxuICBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJXZWxjb21lXCIpIHtcbiAgICBjb250ZW50ID0gKFxuICAgIDw+IFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlBhbnRoZXIgQ3J1c2ggV2VsY29tZTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuXG4gICAgPG1haW4gY2xhc3NOYW1lPSB7c3R5bGVzLm1haW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbHlyfSBpZD1cInBsYXllclwiID5cbiAgey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcIi9wYXRoL3RvL3BseXIuY3NzXCIgLz4gKi99XG4gICAgICA8c2NyaXB0IHNyYz0gXCJodHRwczovL2Nkbi5wbHlyLmlvLzMuNi40L3BseXIuanNcIj48L3NjcmlwdD5cblxuICB7LyogQ29kZSB3ZSBuZWVkIGZvciB2aWRlb1xuICBsb29wPTEmY29udHJvbHM9MCZzaWRlZG9jaz0wJmF1dG9wbGF5PTEmYmFja2dyb3VuZD0xICAgbmV3IG1pbmU6IDUzMzM4MTc0MCBjaHJpcydzOiAzNjg4NDkwMDYgbWluZTogNTMyMzAyNTQ0ICB2aW1lbzogNzY5Nzk4NzEqL31cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgb3BhY2l0eT1cIjAuNVwiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81Mzg4ODU1NDY/YmFja2dyb3VuZD0xJmNvbnRyb2xzPTBcIlxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIiA+XG4gICAgICAgIDwvaWZyYW1lPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30gPlxuICAgICAgICAgPHA+IEdyYWR1YXRpb24gaXMgYXJvdW5kIHRoZSBjb3JuZXIsIGFuZCB3ZSB3YW50IHRvIGhlbHAgeW91IG1ha2UgdGhlIG1vc3Qgb3V0IG9mIHlvdXIgbGFzdCB3ZWVrcyBhdCBNaWRkbGVidXJ5IDwvcD4gXG5cbiAgICAgICAgICB7LyogPHA+R3JhZHVhdGlvbiBjb21lcyBzb29uZXIgdGhhbiB5b3UgdGhpbmssIHNvIHRyeSB0byBtYWtlIHRoZSBtb3N0IG9mIGl0IHdoaWxlIHlvdSBjYW4hPC9wPiAqL31cbiAgICAgIFxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG93aXR3b3Jrc30gPlxuICAgICAgICAgPHA+SG93IGl0IHdvcmtzOjwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aWZyYW1lXG4gICAgICBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgb3BhY2l0eT1cIjAuNVwiXG4gICAgICBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNTM4OTQxMzUyP2JhY2tncm91bmQ9MSZjb250cm9scz0wXCJcbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiID5cbiAgICAgIDwvaWZyYW1lPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+IFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoXCJDcnVzaExpc3RcIil9fT5NeSBDcnVzaGVzPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPiBcblxuICAgICAgPC8+KSBcbiAgfVxuICBlbHNlIHtcbiAgICBjb250ZW50ID0gKDw+ICA8Lz4pO1xuICB9XG4gIFxucmV0dXJuIChcbiAgICA8PiBcbiAgICAgIHtjb250ZW50fVxuICAgIDwvPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });