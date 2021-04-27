webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/Values.js":
/*!*****************************!*\
  !*** ./src/pages/Values.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Values; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ "./src/pages/Styles/Home.module.css");
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/index */ "./src/pages/index.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\Values.js";




function Values(setMode) {
  var _this = this;

  setMode = function setMode() {
    _this.props.setMode();
  };

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
        lineNumber: 19,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setMode("Values");
        },
        children: "Our Values"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setMode("FAQ");
        },
        children: "FAQ"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: " TESTING  VALUES PAGE ! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}
_c = Values;

var _c;

$RefreshReg$(_c, "Values");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1ZhbHVlcy5qcyJdLCJuYW1lcyI6WyJWYWx1ZXMiLCJzZXRNb2RlIiwicHJvcHMiLCJzdHlsZXMiLCJNZW51Q29udGFpbmVyIiwiYnV0dG9uTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7QUFBQTs7QUFHdENBLFNBQU8sR0FBRyxtQkFBTTtBQUNkLFNBQUksQ0FBQ0MsS0FBTCxDQUFXRCxPQUFYO0FBQ0gsR0FGQzs7QUFHRSxzQkFDRTtBQUFBLDRCQUVGO0FBQUssZUFBUyxFQUFFRSxvRUFBTSxDQUFDQyxhQUF2QjtBQUFBLDhCQUVBO0FBQVEsaUJBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsVUFBMUI7QUFBc0MsZUFBTyxFQUFFLG1CQUFNO0FBQUNKLGlCQUFPO0FBQUcsU0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQVEsaUJBQVMsRUFBRUUsb0VBQU0sQ0FBQ0UsVUFBMUI7QUFBc0MsZUFBTyxFQUFFLG1CQUFNO0FBQUNKLGlCQUFPLENBQUMsUUFBRCxDQUFQO0FBQWtCLFNBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEEsZUFJQTtBQUFRLGlCQUFTLEVBQUVFLG9FQUFNLENBQUNFLFVBQTFCO0FBQXNDLGVBQU8sRUFBRSxtQkFBTTtBQUFDSixpQkFBTyxDQUFDLEtBQUQsQ0FBUDtBQUFlLFNBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkUsZUFTSjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRJO0FBQUEsa0JBREY7QUFnQkg7S0F0QnVCRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4YWNkOWUzNDVmYTJhZWU4YzcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vcGFnZXMvaW5kZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhbHVlcyhzZXRNb2RlKSB7XHJcblxyXG5cclxuICBzZXRNb2RlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5zZXRNb2RlKClcclxufVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcbiAgICAgXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKCl9fT5Ib21lPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZShcIkZBUVwiKX19PkZBUTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2PlxyXG4gICAgPGgxPiBURVNUSU5HICBWQUxVRVMgUEFHRSAhIDwvaDE+XHJcbiAgPC9kaXY+XHJcbjwvPlxyXG5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9