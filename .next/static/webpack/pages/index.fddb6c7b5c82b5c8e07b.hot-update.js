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
/* harmony import */ var _FAQ__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FAQ */ "./src/pages/FAQ.js");



var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\Values.js",
    _s = $RefreshSig$();






function Values() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      currentView = _useState[0],
      setView = _useState[1];

  var content;

  if (currentView === 'FAQ') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FAQ__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, this);
  } else if (currentView === 'Home') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_index__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Values, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this);
  }

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
        lineNumber: 33,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setView("Values");
        },
        children: "Our Values"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonMenu,
        onClick: function onClick() {
          setView("FAQ");
        },
        children: "FAQ"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(Values, "qvJKXRAaT3GSFt4tuWx1zTYQ/s0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1ZhbHVlcy5qcyJdLCJuYW1lcyI6WyJWYWx1ZXMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRWaWV3Iiwic2V0VmlldyIsImNvbnRlbnQiLCJzdHlsZXMiLCJNZW51Q29udGFpbmVyIiwiYnV0dG9uTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUlBQyxzREFBUSxFQUpSO0FBQUEsTUFJeEJDLFdBSndCO0FBQUEsTUFJWEMsT0FKVzs7QUFNL0IsTUFBSUMsT0FBSjs7QUFFQSxNQUFHRixXQUFXLEtBQUssS0FBbkIsRUFBMEI7QUFDeEJFLFdBQU8sZ0JBQUsscUVBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBRUQsR0FIRCxNQUdPLElBQUdGLFdBQVcsS0FBSyxNQUFuQixFQUEyQjtBQUNoQ0UsV0FBTyxnQkFBSyxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDRCxHQUZNLE1BRUE7QUFDTEEsV0FBTyxnQkFBSyxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNEOztBQUlDLHNCQUNFO0FBQUEsNEJBRUY7QUFBSyxlQUFTLEVBQUVDLG9FQUFNLENBQUNDLGFBQXZCO0FBQUEsOEJBRUE7QUFBUSxpQkFBUyxFQUFFRCxvRUFBTSxDQUFDRSxVQUExQjtBQUFzQyxlQUFPLEVBQUUsbUJBQU07QUFBQ0osaUJBQU8sQ0FBQyxNQUFELENBQVA7QUFBZ0IsU0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQVEsaUJBQVMsRUFBRUUsb0VBQU0sQ0FBQ0UsVUFBMUI7QUFBc0MsZUFBTyxFQUFFLG1CQUFNO0FBQUNKLGlCQUFPLENBQUMsUUFBRCxDQUFQO0FBQWtCLFNBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEEsZUFJQTtBQUFRLGlCQUFTLEVBQUVFLG9FQUFNLENBQUNFLFVBQTFCO0FBQXNDLGVBQU8sRUFBRSxtQkFBTTtBQUFDSixpQkFBTyxDQUFDLEtBQUQsQ0FBUDtBQUFlLFNBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkUsZUFRSjtBQUFBLGdCQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSTtBQUFBLGtCQURGO0FBZUg7O0dBbEN1QkosTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZGRiNmM3YjVjODJiNWM4ZTA3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL2luZGV4JztcclxuaW1wb3J0IEZBUSBmcm9tICcuL0ZBUSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmFsdWVzKCkge1xyXG5cclxuXHJcbiBcclxuICBjb25zdCBbY3VycmVudFZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gIGlmKGN1cnJlbnRWaWV3ID09PSAnRkFRJykge1xyXG4gICAgY29udGVudCA9ICggPEZBUS8+KVxyXG5cclxuICB9IGVsc2UgaWYoY3VycmVudFZpZXcgPT09ICdIb21lJykge1xyXG4gICAgY29udGVudCA9ICggPEhvbWUvPilcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGVudCA9ICggPFZhbHVlcy8+KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lbnVDb250YWluZXJ9PlxyXG4gICAgIFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkhvbWVcIil9fT5Ib21lPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRWaWV3KFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIkZBUVwiKX19PkZBUTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICB7Y29udGVudH1cclxuICA8L2Rpdj5cclxuPC8+XHJcblxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=