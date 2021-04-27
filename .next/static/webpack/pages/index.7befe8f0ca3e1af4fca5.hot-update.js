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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Values'),
      currentView = _useState[0],
      setView = _useState[1];

  var content;

  if (currentView === 'Home') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_index__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, this);
  } else if (currentView === 'Values') {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Values, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FAQ__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
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
      lineNumber: 38,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(Values, "mXgu/rhLL1F0ygB3UKDK6xYHcSA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1ZhbHVlcy5qcyJdLCJuYW1lcyI6WyJWYWx1ZXMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRWaWV3Iiwic2V0VmlldyIsImNvbnRlbnQiLCJzdHlsZXMiLCJNZW51Q29udGFpbmVyIiwiYnV0dG9uTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUlBQyxzREFBUSxDQUFDLFFBQUQsQ0FKUjtBQUFBLE1BSXhCQyxXQUp3QjtBQUFBLE1BSVhDLE9BSlc7O0FBTS9CLE1BQUlDLE9BQUo7O0FBRUEsTUFBR0YsV0FBVyxLQUFLLE1BQW5CLEVBQTJCO0FBQ3pCRSxXQUFPLGdCQUFLLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUVELEdBSEQsTUFHTyxJQUFHRixXQUFXLEtBQUssUUFBbkIsRUFBNkI7QUFDbENFLFdBQU8sZ0JBQUsscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDRCxHQUZNLE1BRUE7QUFDTEEsV0FBTyxnQkFBSyxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDRDs7QUFJQyxzQkFDRTtBQUFBLDRCQUVGO0FBQUssZUFBUyxFQUFFQyxvRUFBTSxDQUFDQyxhQUF2QjtBQUFBLDhCQUVBO0FBQVEsaUJBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsVUFBMUI7QUFBc0MsZUFBTyxFQUFFLG1CQUFNO0FBQUNKLGlCQUFPLENBQUMsTUFBRCxDQUFQO0FBQWdCLFNBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsZUFHQTtBQUFRLGlCQUFTLEVBQUVFLG9FQUFNLENBQUNFLFVBQTFCO0FBQXNDLGVBQU8sRUFBRSxtQkFBTTtBQUFDSixpQkFBTyxDQUFDLFFBQUQsQ0FBUDtBQUFrQixTQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBLGVBSUE7QUFBUSxpQkFBUyxFQUFFRSxvRUFBTSxDQUFDRSxVQUExQjtBQUFzQyxlQUFPLEVBQUUsbUJBQU07QUFBQ0osaUJBQU8sQ0FBQyxLQUFELENBQVA7QUFBZSxTQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZFLGVBU0o7QUFBQSxnQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEk7QUFBQSxrQkFERjtBQWdCSDs7R0FuQ3VCSixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiZWZlOGYwY2EzZTFhZjRmY2E1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vcGFnZXMvaW5kZXgnO1xyXG5pbXBvcnQgRkFRIGZyb20gJy4vRkFRJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWYWx1ZXMoKSB7XHJcblxyXG5cclxuIFxyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgnVmFsdWVzJyk7XHJcblxyXG4gIGxldCBjb250ZW50O1xyXG5cclxuICBpZihjdXJyZW50VmlldyA9PT0gJ0hvbWUnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8SG9tZS8+KVxyXG5cclxuICB9IGVsc2UgaWYoY3VycmVudFZpZXcgPT09ICdWYWx1ZXMnKSB7XHJcbiAgICBjb250ZW50ID0gKCA8VmFsdWVzLz4pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRlbnQgPSAoIDxGQVEvPilcclxuICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuICAgICBcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJIb21lXCIpfX0+SG9tZTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0VmlldyhcIlZhbHVlc1wiKX19Pk91ciBWYWx1ZXM8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldFZpZXcoXCJGQVFcIil9fT5GQVE8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdj5cclxuICAgIHtjb250ZW50fVxyXG4gIDwvZGl2PlxyXG48Lz5cclxuXHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==