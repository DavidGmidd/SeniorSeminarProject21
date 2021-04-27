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



var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\Values.js",
    _s = $RefreshSig$();





function Values() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      currentView = _useState[0],
      setCurrentView = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MenuContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setView("Home");
        },
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setMode("Values");
        },
        children: "Our Values"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setMode("FAQ");
        },
        children: "FAQ"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(Values, "Iun4DBWnvvbwRDLPflOEEJ3NEH4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1ZhbHVlcy5qcyJdLCJuYW1lcyI6WyJWYWx1ZXMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRWaWV3Iiwic2V0Q3VycmVudFZpZXciLCJzdHlsZXMiLCJNZW51Q29udGFpbmVyIiwiYnV0dG9uTWVudSIsInNldFZpZXciLCJzZXRNb2RlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUlPQyxzREFBUSxFQUpmO0FBQUEsTUFJeEJDLFdBSndCO0FBQUEsTUFJWEMsY0FKVzs7QUFRN0Isc0JBQ0U7QUFBQSw0QkFFRjtBQUFLLGVBQVMsRUFBRUMsb0VBQU0sQ0FBQ0MsYUFBdkI7QUFBQSw4QkFFQTtBQUFRLGlCQUFTLEVBQUVELG9FQUFNLENBQUNFLFVBQTFCO0FBQXNDLGVBQU8sRUFBRSxtQkFBTTtBQUFDQyxpQkFBTyxDQUFDLE1BQUQsQ0FBUDtBQUFnQixTQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBR0E7QUFBUSxpQkFBUyxFQUFFSCxvRUFBTSxDQUFDRSxVQUExQjtBQUFzQyxlQUFPLEVBQUUsbUJBQU07QUFBQ0UsaUJBQU8sQ0FBQyxRQUFELENBQVA7QUFBa0IsU0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxlQUlBO0FBQVEsaUJBQVMsRUFBRUosb0VBQU0sQ0FBQ0UsVUFBMUI7QUFBc0MsZUFBTyxFQUFFLG1CQUFNO0FBQUNFLGlCQUFPLENBQUMsS0FBRCxDQUFQO0FBQWUsU0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRSxlQVNKO0FBQUEsZ0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRJO0FBQUEsa0JBREY7QUFnQkg7O0dBeEJ1QlQsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOGMyN2Q2YWVhMGJkMzlkODRhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL2luZGV4JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWYWx1ZXMoKSB7XHJcblxyXG5cclxuIFxyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Q3VycmVudFZpZXddID0gdXNlU3RhdGUoKTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lbnVDb250YWluZXJ9PlxyXG4gICAgIFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkhvbWVcIil9fT5Ib21lPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZShcIkZBUVwiKX19PkZBUTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2PlxyXG4gICAge2NvbnRlbnR9XHJcbiAgPC9kaXY+XHJcbjwvPlxyXG5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9