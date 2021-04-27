webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ "./src/pages/Styles/Home.module.css");
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CrushList */ "./src/pages/CrushList.js");
/* harmony import */ var _pages_Values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Values */ "./src/pages/Values.js");
/* harmony import */ var _pages_FAQ__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/FAQ */ "./src/pages/FAQ.js");



var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\index.js",
    _s = $RefreshSig$();

/* eslint-disable react/no-unescaped-entities*/







function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Home'),
      currentMode = _useState[0],
      setCurrentMode = _useState[1]; // const setMode = (param) => {
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


  var content;

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
            onClick: function onClick() {
              setCurrentMode();
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: function onClick() {
              setCurrentMode("Values");
            },
            children: "Our Values"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: function onClick() {
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
              onClick: function onClick() {
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

_s(Home, "I5xj7wXQCVACcyuKBtdKFOIE39g=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRNb2RlIiwic2V0Q3VycmVudE1vZGUiLCJjb250ZW50Iiwic3R5bGVzIiwibWFpbiIsIk1lbnVDb250YWluZXIiLCJidXR0b25NZW51IiwicGx5ciIsImludHJvIiwiaG93aXR3b3JrcyIsImJ1dHRvbkNvbnRhaW5lciIsImZvb3RlciIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLE1BQUQsQ0FIakI7QUFBQSxNQUd0QkMsV0FIc0I7QUFBQSxNQUdUQyxjQUhTLGlCQUs3QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQUlDLE9BQUo7O0FBRUEsTUFBSUYsV0FBVyxLQUFLLE1BQXBCLEVBQTRCO0FBRTFCRSxXQUFPLGdCQUNQO0FBQUEsOEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUtBO0FBQU0saUJBQVMsRUFBR0Msb0VBQU0sQ0FBQ0MsSUFBekI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVELG9FQUFNLENBQUNFLGFBQXZCO0FBQUEsa0NBRUU7QUFBUSxxQkFBUyxFQUFFRixvRUFBTSxDQUFDRyxVQUExQjtBQUFzQyxtQkFBTyxFQUFFLG1CQUFNO0FBQUNMLDRCQUFjO0FBQUcsYUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFRLHFCQUFTLEVBQUVFLG9FQUFNLENBQUNHLFVBQTFCO0FBQXNDLG1CQUFPLEVBQUUsbUJBQU07QUFBQ0wsNEJBQWMsQ0FBQyxRQUFELENBQWQ7QUFBeUIsYUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFJRTtBQUFRLHFCQUFTLEVBQUVFLG9FQUFNLENBQUNHLFVBQTFCO0FBQXNDLG1CQUFPLEVBQUUsbUJBQU07QUFBQ0wsNEJBQWMsQ0FBQyxLQUFELENBQWQ7QUFBc0IsYUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUU7QUFBSyxtQkFBUyxFQUFFRSxvRUFBTSxDQUFDSSxJQUF2QjtBQUE2QixZQUFFLEVBQUMsUUFBaEM7QUFBQSxrQ0FFQTtBQUFRLGVBQUcsRUFBRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkEsZUFNRTtBQUNBLGtCQUFNLEVBQUMsTUFEUDtBQUNjLGlCQUFLLEVBQUMsTUFEcEI7QUFDMkIsbUJBQU8sRUFBQyxLQURuQztBQUVBLGVBQUcsRUFBQyxrRUFGSjtBQUdBLHVCQUFXLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GLGVBV0E7QUFBSyxxQkFBUyxFQUFFSixvRUFBTSxDQUFDSyxLQUF2QjtBQUFBLG1DQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYQSxlQWtCQTtBQUFLLHFCQUFTLEVBQUVMLG9FQUFNLENBQUNNLFVBQXZCO0FBQUEsbUNBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCQSxlQXNCQTtBQUNBLGtCQUFNLEVBQUMsTUFEUDtBQUNjLGlCQUFLLEVBQUMsTUFEcEI7QUFDMkIsbUJBQU8sRUFBQyxLQURuQztBQUVBLGVBQUcsRUFBQyxrRUFGSjtBQUdBLHVCQUFXLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRCQSxlQTRCQTtBQUFLLHFCQUFTLEVBQUVOLG9FQUFNLENBQUNPO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUJBLGVBOEJFO0FBQVEscUJBQVMsRUFBRVAsb0VBQU0sQ0FBQ1EsTUFBMUI7QUFBQSxtQ0FDRTtBQUFRLHVCQUFTLEVBQUVSLG9FQUFNLENBQUNTLE1BQTFCO0FBQWtDLHFCQUFPLEVBQUUsbUJBQU07QUFBQ1gsOEJBQWMsQ0FBQyxXQUFELENBQWQ7QUFBNEIsZUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEE7QUFBQSxvQkFEQTtBQXFERCxHQXZERCxNQXlESyxJQUFJRCxXQUFXLEtBQUssV0FBcEIsRUFBaUM7QUFDcENFLFdBQU8sZ0JBQUsscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0QsR0FGSSxNQUdBLElBQUlGLFdBQVcsS0FBSyxRQUFwQixFQUE4QjtBQUMvQkUsV0FBTyxnQkFBSyxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFFSCxHQUhJLE1BR0UsSUFBSUYsV0FBVyxLQUFLLEtBQXBCLEVBQTJCO0FBQ2hDRSxXQUFPLGdCQUFLLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNEOztBQUdILHNCQUNJO0FBQUEsY0FDR0E7QUFESCxtQkFESjtBQUtDOztHQTlGdUJKLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGIxZjIwNGZiYmE2MzY1NjE4NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyovXHJcblxyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENydXNoTGlzdCBmcm9tICcuLi9wYWdlcy9DcnVzaExpc3QnO1xyXG5pbXBvcnQgVmFsdWVzIGZyb20gJy4uL3BhZ2VzL1ZhbHVlcyc7XHJcbmltcG9ydCBGQVEgZnJvbSAnLi4vcGFnZXMvRkFRJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuIFxyXG4gIGNvbnN0IFtjdXJyZW50TW9kZSwgc2V0Q3VycmVudE1vZGVdID0gdXNlU3RhdGUoJ0hvbWUnKTtcclxuICBcclxuICAvLyBjb25zdCBzZXRNb2RlID0gKHBhcmFtKSA9PiB7XHJcbiAgIFxyXG4gIC8vICAgaWYgKHBhcmFtID09PSB1bmRlZmluZWQgKSB7XHJcbiAgLy8gICAgIHNldEN1cnJlbnRNb2RlKFwiSG9tZVwiKVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICBlbHNlIGlmIChwYXJhbSA9PT0gJ0NydXNoTGlzdCcpIHtcclxuICAvLyAgICAgc2V0Q3VycmVudE1vZGUoJ0NydXNoTGlzdCcpO1xyXG4gIC8vICAgfSBlbHNlIGlmIChwYXJhbSA9PT0gJ1ZhbHVlcycpe1xyXG4gIC8vICAgICBzZXRDdXJyZW50TW9kZSgnVmFsdWVzJyk7ICAgIFxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgc2V0Q3VycmVudE1vZGUoXCJGQVFcIilcclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG5cclxuICBsZXQgY29udGVudDtcclxuXHJcbiAgaWYgKGN1cnJlbnRNb2RlID09PSBcIkhvbWVcIikge1xyXG5cclxuICAgIGNvbnRlbnQgPSAoXHJcbiAgICA8PiBcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+UGFudGhlciBDcnVzaCBXZWxjb21lPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9IHtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcbiAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoKX19PkhvbWU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIlZhbHVlc1wiKX19Pk91ciBWYWx1ZXM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIkZBUVwiKX19PkZBUTwvYnV0dG9uPlxyXG4gICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9PiBDb250YWN0PC9idXR0b24+ICovfVxyXG4gICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbHlyfSBpZD1cInBsYXllclwiID5cclxuICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9IFwiL3BhdGgvdG8vcGx5ci5jc3NcIiAvPiAqL31cclxuICAgICAgPHNjcmlwdCBzcmM9IFwiaHR0cHM6Ly9jZG4ucGx5ci5pby8zLjYuNC9wbHlyLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG4gIHsvKiBDb2RlIHdlIG5lZWQgZm9yIHZpZGVvXHJcbiAgbG9vcD0xJmNvbnRyb2xzPTAmc2lkZWRvY2s9MCZhdXRvcGxheT0xJmJhY2tncm91bmQ9MSAgIG5ldyBtaW5lOiA1MzMzODE3NDAgY2hyaXMnczogMzY4ODQ5MDA2IG1pbmU6IDUzMjMwMjU0NCAgdmltZW86IDc2OTc5ODcxKi99XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBvcGFjaXR5PVwiMC41XCJcclxuICAgICAgICBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNTM4ODg1NTQ2P2JhY2tncm91bmQ9MSZjb250cm9scz0wXCJcclxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIiA+XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99ID5cclxuICAgICAgICAgPHA+IEdyYWR1YXRpb24gaXMgYXJvdW5kIHRoZSBjb3JuZXIsIGFuZCB3ZSB3YW50IHRvIGhlbHAgeW91IG1ha2UgdGhlIG1vc3Qgb3V0IG9mIHlvdXIgbGFzdCB3ZWVrcyBhdCBNaWRkbGVidXJ5IDwvcD4gXHJcblxyXG4gICAgICAgICAgey8qIDxwPkdyYWR1YXRpb24gY29tZXMgc29vbmVyIHRoYW4geW91IHRoaW5rLCBzbyB0cnkgdG8gbWFrZSB0aGUgbW9zdCBvZiBpdCB3aGlsZSB5b3UgY2FuITwvcD4gKi99XHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG93aXR3b3Jrc30gPlxyXG4gICAgICAgICA8cD5Ib3cgaXQgd29ya3M6PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNTM4OTQxMzUyP2JhY2tncm91bmQ9MSZjb250cm9scz0wXCJcclxuICAgICAgZnJhbWVCb3JkZXI9XCIwXCIgPlxyXG4gICAgICA8L2lmcmFtZT5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+IFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIkNydXNoTGlzdFwiKX19Pk15IENydXNoZXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+IFxyXG5cclxuICAgICAgPC8+KSBcclxuICB9XHJcblxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIkNydXNoTGlzdFwiKSB7XHJcbiAgICBjb250ZW50ID0gKCA8Q3J1c2hMaXN0ICAvPiApXHJcbiAgfSBcclxuICBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJWYWx1ZXNcIikge1xyXG4gICAgICBjb250ZW50ID0gKCA8VmFsdWVzIC8+IClcclxuXHJcbiAgfSBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJGQVFcIikge1xyXG4gICAgY29udGVudCA9ICggPEZBUSAvPiApXHJcbiAgfSBcclxuXHJcbiAgXHJcbnJldHVybiAoXHJcbiAgICA8PiBcclxuICAgICAge2NvbnRlbnR9XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==