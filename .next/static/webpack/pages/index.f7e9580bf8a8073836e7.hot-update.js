webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/FAQ.js":
/*!**************************!*\
  !*** ./src/pages/FAQ.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FAQ; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ "./src/pages/Styles/Home.module.css");
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/index */ "./src/pages/index.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\FAQ.js";




function FAQ(setMode) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MenuContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setMode();
        },
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setMode("Values");
        },
        children: "Our Values"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setMode("FAQ");
        },
        children: "FAQ"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: " TESTING  FAQ PAGE ! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 2
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 2
    }, this)]
  }, void 0, true);
}
_c = FAQ;

var _c;

$RefreshReg$(_c, "FAQ");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0ZBUS5qcyJdLCJuYW1lcyI6WyJGQVEiLCJzZXRNb2RlIiwic3R5bGVzIiwiTWVudUNvbnRhaW5lciIsImJ1dHRvbk1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYUMsT0FBYixFQUFzQjtBQUlyQyxzQkFDQTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQyxvRUFBTSxDQUFDQyxhQUF2QjtBQUFBLDhCQUVBO0FBQVEsaUJBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsVUFBMUI7QUFBdUMsZUFBTyxFQUFFLG1CQUFNO0FBQUNILGlCQUFPO0FBQUcsU0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQVEsaUJBQVMsRUFBRUMsb0VBQU0sQ0FBQ0UsVUFBMUI7QUFBdUMsZUFBTyxFQUFFLG1CQUFNO0FBQUNILGlCQUFPLENBQUMsUUFBRCxDQUFQO0FBQWtCLFNBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEEsZUFJQTtBQUFRLGlCQUFTLEVBQUVDLG9FQUFNLENBQUNFLFVBQTFCO0FBQXNDLGVBQU8sRUFBRSxtQkFBTTtBQUFDSCxpQkFBTyxDQUFDLEtBQUQsQ0FBUDtBQUFlLFNBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFPQztBQUFBLDZCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBEO0FBQUEsa0JBREE7QUFjQztLQWxCdUJELEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjdlOTU4MGJmOGE4MDczODM2ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZBUShzZXRNb2RlKSB7XHJcblxyXG4gIFxyXG5cclxucmV0dXJuKFxyXG48PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuICAgICBcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gIG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKCl9fT5Ib21lPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9ICBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZShcIlZhbHVlc1wiKX19Pk91ciBWYWx1ZXM8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldE1vZGUoXCJGQVFcIil9fT5GQVE8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuIDxkaXY+XHJcbiA8aDE+IFRFU1RJTkcgIEZBUSBQQUdFICEgPC9oMT5cclxuPC9kaXY+XHJcbjwvPlxyXG4pO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=