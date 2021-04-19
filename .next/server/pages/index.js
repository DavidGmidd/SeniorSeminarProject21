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

eval("// Exports\nmodule.exports = {\n\t\"plyr\": \"Home_plyr__3WLyy\",\n\t\"main\": \"Home_main__2fVYg\",\n\t\"body\": \"Home_body__1ZFtJ\",\n\t\"title\": \"Home_title__33w7p\",\n\t\"input\": \"Home_input__3pJ9E\",\n\t\"button\": \"Home_button__3jpQE\",\n\t\"UserInfo\": \"Home_UserInfo__3tdsp\",\n\t\"crushInput\": \"Home_crushInput__1PaEY\",\n\t\"intro\": \"Home_intro__1Nh_4\",\n\t\"container\": \"Home_container__18WyQ\",\n\t\"phoneinput\": \"Home_phoneinput__2xP-2\",\n\t\"checkmark\": \"Home_checkmark__2ImlX\",\n\t\"footer\": \"Home_footer__CkrbQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcz8yZjcxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwbHlyXCI6IFwiSG9tZV9wbHlyX18zV0x5eVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzJmVllnXCIsXG5cdFwiYm9keVwiOiBcIkhvbWVfYm9keV9fMVpGdEpcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzMzdzdwXCIsXG5cdFwiaW5wdXRcIjogXCJIb21lX2lucHV0X18zcEo5RVwiLFxuXHRcImJ1dHRvblwiOiBcIkhvbWVfYnV0dG9uX18zanBRRVwiLFxuXHRcIlVzZXJJbmZvXCI6IFwiSG9tZV9Vc2VySW5mb19fM3Rkc3BcIixcblx0XCJjcnVzaElucHV0XCI6IFwiSG9tZV9jcnVzaElucHV0X18xUGFFWVwiLFxuXHRcImludHJvXCI6IFwiSG9tZV9pbnRyb19fMU5oXzRcIixcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMThXeVFcIixcblx0XCJwaG9uZWlucHV0XCI6IFwiSG9tZV9waG9uZWlucHV0X18yeFAtMlwiLFxuXHRcImNoZWNrbWFya1wiOiBcIkhvbWVfY2hlY2ttYXJrX18ySW1sWFwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19Da3JiUVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Styles/Home.module.css\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ \"./src/pages/Styles/Home.module.css\");\n/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CrushList */ \"./src/pages/CrushList.js\");\n\n\nvar _jsxFileName = \"/Users/thomastarantino/Desktop/Seniorseminar/SeniorSeminarProject21/src/pages/index.js\";\n\n/* eslint-disable react/no-unescaped-entities*/\n\n\n\n //import player from '../pages/Styles/plyr.css';\n\n //import middlebury_720 from '../images/middlebury_720.mp4';\n\nfunction Home() {\n  const {\n    0: currentMode,\n    1: setCurrentMode\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Welcome\");\n  let content;\n\n  if (currentMode === \"CrushList\") {\n    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }, this);\n  } else if (currentMode === \"Welcome\") {\n    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"Panther Crush Welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plyr,\n          id: \"player\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n            src: \"https://cdn.plyr.io/3.6.4/plyr.js\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n            height: \"100%\",\n            width: \"100%\",\n            opacity: \"0.5\",\n            src: \"https://player.vimeo.com/video/538885546?background=1&controls=0\",\n            frameBorder: \"0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \" Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 10\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n            height: \"100%\",\n            width: \"100%\",\n            opacity: \"0.5\",\n            src: \"https://player.vimeo.com/video/538886370?background=1&controls=0\",\n            frameBorder: \"0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonContainer\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n              onClick: () => {\n                setCurrentMode(\"CrushList\");\n              },\n              children: \"My Crushes\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 11\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true);\n  } else {\n    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: \"  \"\n    }, void 0, false);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: content\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJIb21lIiwiY3VycmVudE1vZGUiLCJzZXRDdXJyZW50TW9kZSIsInVzZVN0YXRlIiwiY29udGVudCIsInN0eWxlcyIsIm1haW4iLCJwbHlyIiwiaW50cm8iLCJidXR0b25Db250YWluZXIiLCJmb290ZXIiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUU3QixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUMsU0FBRCxDQUE5QztBQUVBLE1BQUlDLE9BQUo7O0FBRUEsTUFBSUgsV0FBVyxLQUFLLFdBQXBCLEVBQWlDO0FBRS9CRyxXQUFPLGdCQUFLLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNELEdBSEQsTUFJSyxJQUFJSCxXQUFXLEtBQUssU0FBcEIsRUFBK0I7QUFDbENHLFdBQU8sZ0JBQ1A7QUFBQSw4QkFDQSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBS0E7QUFBTSxpQkFBUyxFQUFHQyxvRUFBTSxDQUFDQyxJQUF6QjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsSUFBdkI7QUFBNkIsWUFBRSxFQUFDLFFBQWhDO0FBQUEsa0NBRUE7QUFBUSxlQUFHLEVBQUU7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZBLGVBTUU7QUFDQSxrQkFBTSxFQUFDLE1BRFA7QUFDYyxpQkFBSyxFQUFDLE1BRHBCO0FBQzJCLG1CQUFPLEVBQUMsS0FEbkM7QUFFQSxlQUFHLEVBQUMsa0VBRko7QUFHQSx1QkFBVyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQVdBO0FBQUsscUJBQVMsRUFBRUYsb0VBQU0sQ0FBQ0csS0FBdkI7QUFBQSxtQ0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEEsZUFrQkE7QUFDQSxrQkFBTSxFQUFDLE1BRFA7QUFDYyxpQkFBSyxFQUFDLE1BRHBCO0FBQzJCLG1CQUFPLEVBQUMsS0FEbkM7QUFFQSxlQUFHLEVBQUMsa0VBRko7QUFHQSx1QkFBVyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQkEsZUF3QkE7QUFBSyxxQkFBUyxFQUFFSCxvRUFBTSxDQUFDSTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCQSxlQTBCRTtBQUFRLHFCQUFTLEVBQUVKLG9FQUFNLENBQUNLLE1BQTFCO0FBQUEsbUNBQ0U7QUFBUSx1QkFBUyxFQUFFTCxvRUFBTSxDQUFDTSxNQUExQjtBQUFrQyxxQkFBTyxFQUFFLE1BQU07QUFBQ1QsOEJBQWMsQ0FBQyxXQUFELENBQWQ7QUFBNEIsZUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEE7QUFBQSxvQkFEQTtBQXdDRCxHQXpDSSxNQTBDQTtBQUNIRSxXQUFPLGdCQUFJO0FBQUE7QUFBQSxxQkFBWDtBQUNEOztBQUVILHNCQUNJO0FBQUEsY0FDR0E7QUFESCxtQkFESjtBQUtDIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzKi9cblxuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuLy9pbXBvcnQgcGxheWVyIGZyb20gJy4uL3BhZ2VzL1N0eWxlcy9wbHlyLmNzcyc7XG5pbXBvcnQgQ3J1c2hMaXN0IGZyb20gJy4uL3BhZ2VzL0NydXNoTGlzdCc7XG4vL2ltcG9ydCBtaWRkbGVidXJ5XzcyMCBmcm9tICcuLi9pbWFnZXMvbWlkZGxlYnVyeV83MjAubXA0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbY3VycmVudE1vZGUsIHNldEN1cnJlbnRNb2RlXSA9IHVzZVN0YXRlKFwiV2VsY29tZVwiKTtcblxuICBsZXQgY29udGVudDtcblxuICBpZiAoY3VycmVudE1vZGUgPT09IFwiQ3J1c2hMaXN0XCIpIHtcblxuICAgIGNvbnRlbnQgPSAoIDxDcnVzaExpc3QvPiApXG4gIH0gXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIldlbGNvbWVcIikge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgPD4gXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UGFudGhlciBDcnVzaCBXZWxjb21lPC90aXRsZT5cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbiBjbGFzc05hbWU9IHtzdHlsZXMubWFpbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBseXJ9IGlkPVwicGxheWVyXCIgPlxuICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9IFwiL3BhdGgvdG8vcGx5ci5jc3NcIiAvPiAqL31cbiAgICAgIDxzY3JpcHQgc3JjPSBcImh0dHBzOi8vY2RuLnBseXIuaW8vMy42LjQvcGx5ci5qc1wiPjwvc2NyaXB0PlxuXG4gIHsvKiBDb2RlIHdlIG5lZWQgZm9yIHZpZGVvXG4gIGxvb3A9MSZjb250cm9scz0wJnNpZGVkb2NrPTAmYXV0b3BsYXk9MSZiYWNrZ3JvdW5kPTEgICBuZXcgbWluZTogNTMzMzgxNzQwIGNocmlzJ3M6IDM2ODg0OTAwNiBtaW5lOiA1MzIzMDI1NDQgIHZpbWVvOiA3Njk3OTg3MSovfVxuICAgICAgICA8aWZyYW1lXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBvcGFjaXR5PVwiMC41XCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzUzODg4NTU0Nj9iYWNrZ3JvdW5kPTEmY29udHJvbHM9MFwiXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiID5cbiAgICAgICAgPC9pZnJhbWU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvfSA+XG4gICAgICAgICA8cD4gR3JhZHVhdGlvbiBpcyBhcm91bmQgdGhlIGNvcm5lciwgYW5kIHdlIHdhbnQgdG8gaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvdXQgb2YgeW91ciBsYXN0IHdlZWtzIGF0IE1pZGRsZWJ1cnkgPC9wPiBcblxuICAgICAgICAgIHsvKiA8cD5HcmFkdWF0aW9uIGNvbWVzIHNvb25lciB0aGFuIHlvdSB0aGluaywgc28gdHJ5IHRvIG1ha2UgdGhlIG1vc3Qgb2YgaXQgd2hpbGUgeW91IGNhbiE8L3A+ICovfVxuICAgICAgXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGlmcmFtZVxuICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxuICAgICAgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzUzODg4NjM3MD9iYWNrZ3JvdW5kPTEmY29udHJvbHM9MFwiXG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIiA+XG4gICAgICA8L2lmcmFtZT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PiBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiQ3J1c2hMaXN0XCIpfX0+TXkgQ3J1c2hlczwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj4gXG5cbiAgICAgIDwvPikgXG4gIH1cbiAgZWxzZSB7XG4gICAgY29udGVudCA9ICg8PiAgPC8+KTtcbiAgfVxuICBcbnJldHVybiAoXG4gICAgPD4gXG4gICAgICB7Y29udGVudH1cbiAgICA8Lz5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

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