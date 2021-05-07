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
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styles/Home.module.css */ "./src/Styles/Home.module.css");
/* harmony import */ var _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_CrushList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CrushList */ "./src/pages/CrushList.js");
/* harmony import */ var _pages_Values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Values */ "./src/pages/Values.js");
/* harmony import */ var _pages_FAQ__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/FAQ */ "./src/pages/FAQ.js");
/* harmony import */ var _pages_Welcome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Welcome */ "./src/pages/Welcome.js");



var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\index.js",
    _s = $RefreshSig$();

/* eslint-disable react/no-unescaped-entities*/








function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Home'),
      currentMode = _useState[0],
      setCurrentMode = _useState[1];

  var content;

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
            src: "images/Logo5.PNG",
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: function onClick() {
              setCurrentMode('Home');
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: function onClick() {
              setCurrentMode("Values");
            },
            children: "Our Values"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: function onClick() {
              setCurrentMode("FAQ");
            },
            children: "FAQs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 9
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
            src: "https://player.vimeo.com/video/545681677?background=1&controls=0",
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
              lineNumber: 65,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqsHome,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqsTitle,
              children: " FAQs "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " Who is eligible? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " All seniors in the class of 2021 and 2021.5 can submit a virtual crush list, even if you are off-campus or remote. We will ask you to include your email when you submit your crushes to verify that you are a senior. "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " When is this? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " Seniors can fill out their virtual crush list between May 10 to May 17 by 5:00 pm. You will get notified if you match with any of your crushes on May 18. "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " Who can see my crush list? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " No one can see the list you submit. Only if you match with your crush will your name and email be shared with them."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " How do I submit my crushes? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: [" Click on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "My Crushes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 21
                }, this), " at the bottom of the website to fill out your list. The form will ask you to include the email addresses of your crushes. "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " How do I find my crush's email? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: [" There are several ways you can find your crush's email. You can search their name in the directory, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.linkDirectory,
                  href: "https://directory.middlebury.edu/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "found here"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 117
                }, this), ", or start typing their name into Outlook until their email appears.  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " What happens if I match with one of my crushes? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
              onClick: function onClick() {
                setCurrentMode("CrushList");
              },
              children: "My Crushes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
      lineNumber: 110,
      columnNumber: 17
    }, this);
  } else if (currentMode === "Values") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Values__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }, this);
  } else if (currentMode === "FAQ") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_FAQ__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Welcome__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRNb2RlIiwic2V0Q3VycmVudE1vZGUiLCJjb250ZW50Iiwic3R5bGVzIiwibWFpbiIsIk1lbnVDb250YWluZXIiLCJMb2dvIiwiYnV0dG9uTWVudSIsInBseXIiLCJpbnRybyIsImhvd2l0d29ya3MiLCJpbnN0cnVjdGlvbnNDb250YWluZXIiLCJpbnN0cnVjdGlvbnMiLCJmYXFzSG9tZSIsImZhcXNUaXRsZSIsImxpbmtEaXJlY3RvcnkiLCJmb290ZXIiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFHU0Msc0RBQVEsQ0FBQyxNQUFELENBSGpCO0FBQUEsTUFHdEJDLFdBSHNCO0FBQUEsTUFHVEMsY0FIUzs7QUFLN0IsTUFBSUMsT0FBSjs7QUFFQSxNQUFJRixXQUFXLEtBQUssTUFBcEIsRUFBNEI7QUFFMUJFLFdBQU8sZ0JBQ1A7QUFBQSw4QkFDQSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBS0E7QUFBTSxpQkFBUyxFQUFHQyw4REFBTSxDQUFDQyxJQUF6QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsYUFBdkI7QUFBQSxrQ0FDQTtBQUFLLGVBQUcsRUFBQyxrQkFBVDtBQUE0QixxQkFBUyxFQUFFRiw4REFBTSxDQUFDRztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBRUU7QUFBUSxxQkFBUyxFQUFFSCw4REFBTSxDQUFDSSxVQUExQjtBQUFzQyxtQkFBTyxFQUFFLG1CQUFNO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNEOztBQUdILHNCQUNJO0FBQUEsY0FDR0E7QUFESCxtQkFESjtBQUtDOztHQWpIdUJKLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzMwMmY4NTZlZWE1YTk2NWNjMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyovXHJcblxyXG4gIFxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ3J1c2hMaXN0IGZyb20gJy4uL3BhZ2VzL0NydXNoTGlzdCc7XHJcbmltcG9ydCBWYWx1ZXMgZnJvbSAnLi4vcGFnZXMvVmFsdWVzJztcclxuaW1wb3J0IEZBUSBmcm9tICcuLi9wYWdlcy9GQVEnO1xyXG5pbXBvcnQgV2VsY29tZSBmcm9tICcuLi9wYWdlcy9XZWxjb21lJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRNb2RlLCBzZXRDdXJyZW50TW9kZV0gPSB1c2VTdGF0ZSgnSG9tZScpO1xyXG4gIFxyXG4gIGxldCBjb250ZW50O1xyXG5cclxuICBpZiAoY3VycmVudE1vZGUgPT09IFwiSG9tZVwiKSB7XHJcblxyXG4gICAgY29udGVudCA9IChcclxuICAgIDw+IFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIFdlbGNvbWU8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT0ge3N0eWxlcy5tYWlufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuICAgICAgPGltZyBzcmM9XCJpbWFnZXMvTG9nbzUuUE5HXCIgY2xhc3NOYW1lPXtzdHlsZXMuTG9nb30vPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKCdIb21lJyl9fT5Ib21lPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoXCJWYWx1ZXNcIil9fT5PdXIgVmFsdWVzPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoXCJGQVFcIil9fT5GQVFzPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGx5cn0gaWQ9XCJwbGF5ZXJcIiA+XHJcblxyXG4gICAgICB7LyogPHZpZGVvIHdpZHRoPVwiNDAwcHhcIiBoZWlnaHQ9XCIzMDBweFwiIGNvbnRyb2xzPlxyXG4gIDxzb3VyY2Ugc3JjPVwiaW1hZ2VzL21pZGRsZWJ1cnlfNzIwLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIi8+XHJcbiAgICAgICAgPC92aWRlbz4gKi99XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxpZnJhbWVcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgb3BhY2l0eT1cIjAuNVwiXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzU0NTY4MTY3Nz9iYWNrZ3JvdW5kPTEmY29udHJvbHM9MFwiXHJcbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCIgPlxyXG4gICAgICAgIDwvaWZyYW1lPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30gPlxyXG4gICAgICAgICA8cD4gR3JhZHVhdGlvbiBpcyBhcm91bmQgdGhlIGNvcm5lciwgYW5kIHdlIHdhbnQgdG8gaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvdXQgb2YgeW91ciBsYXN0IHdlZWtzIGF0IE1pZGRsZWJ1cnkhIDwvcD4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3dpdHdvcmtzfSA+IFxyXG4gICAgICAgICAgICA8cD5Ib3cgaXQgd29ya3M6PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiA8aWZyYW1lXHJcbiAgICAgIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBvcGFjaXR5PVwiMC41XCJcclxuICAgICAgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzU0NTcxMjAzMT9iYWNrZ3JvdW5kPTEmY29udHJvbHM9MFwiXHJcbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiID5cclxuICAgICAgPC9pZnJhbWU+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluc3RydWN0aW9uc0NvbnRhaW5lcn0+IFxyXG4gICAgICA8aW1nIHNyYz1cImltYWdlcy9maW5hbF9ob3dfaXRfd29ya3MucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5zdHJ1Y3Rpb25zfS8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYXFzSG9tZX0gPiBcclxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZhcXNUaXRsZX0+IEZBUXMgPC9oMj5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBXaG8gaXMgZWxpZ2libGU/IDwvc3VtbWFyeT5cclxuICAgICAgPGg0PiBBbGwgc2VuaW9ycyBpbiB0aGUgY2xhc3Mgb2YgMjAyMSBhbmQgMjAyMS41IGNhbiBzdWJtaXQgYSB2aXJ0dWFsIGNydXNoIGxpc3QsIGV2ZW4gaWYgeW91IGFyZSBvZmYtY2FtcHVzIG9yIHJlbW90ZS4gV2Ugd2lsbCBhc2sgeW91IHRvIGluY2x1ZGUgeW91ciBlbWFpbCB3aGVuIHlvdSBzdWJtaXQgeW91ciBjcnVzaGVzIHRvIHZlcmlmeSB0aGF0IHlvdSBhcmUgYSBzZW5pb3IuIDwvaDQ+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gV2hlbiBpcyB0aGlzPyA8L3N1bW1hcnk+XHJcbiAgICAgIDxoND4gU2VuaW9ycyBjYW4gZmlsbCBvdXQgdGhlaXIgdmlydHVhbCBjcnVzaCBsaXN0IGJldHdlZW4gTWF5IDEwIHRvIE1heSAxNyBieSA1OjAwIHBtLiBZb3Ugd2lsbCBnZXQgbm90aWZpZWQgaWYgeW91IG1hdGNoIHdpdGggYW55IG9mIHlvdXIgY3J1c2hlcyBvbiBNYXkgMTguIDwvaDQ+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gV2hvIGNhbiBzZWUgbXkgY3J1c2ggbGlzdD8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IE5vIG9uZSBjYW4gc2VlIHRoZSBsaXN0IHlvdSBzdWJtaXQuIE9ubHkgaWYgeW91IG1hdGNoIHdpdGggeW91ciBjcnVzaCB3aWxsIHlvdXIgbmFtZSBhbmQgZW1haWwgYmUgc2hhcmVkIHdpdGggdGhlbS48L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IEhvdyBkbyBJIHN1Ym1pdCBteSBjcnVzaGVzPyA8L3N1bW1hcnk+XHJcbiAgICAgIDxoND4gQ2xpY2sgb24gPGI+TXkgQ3J1c2hlczwvYj4gYXQgdGhlIGJvdHRvbSBvZiB0aGUgd2Vic2l0ZSB0byBmaWxsIG91dCB5b3VyIGxpc3QuIFRoZSBmb3JtIHdpbGwgYXNrIHlvdSB0byBpbmNsdWRlIHRoZSBlbWFpbCBhZGRyZXNzZXMgb2YgeW91ciBjcnVzaGVzLiA8L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IEhvdyBkbyBJIGZpbmQgbXkgY3J1c2gmYXBvcztzIGVtYWlsPyA8L3N1bW1hcnk+XHJcbiAgICAgIDxoND4gVGhlcmUgYXJlIHNldmVyYWwgd2F5cyB5b3UgY2FuIGZpbmQgeW91ciBjcnVzaCZhcG9zO3MgZW1haWwuIFlvdSBjYW4gc2VhcmNoIHRoZWlyIG5hbWUgaW4gdGhlIGRpcmVjdG9yeSwgPGEgY2xhc3NOYW1lPSB7c3R5bGVzLmxpbmtEaXJlY3RvcnkgfWhyZWY9IFwiaHR0cHM6Ly9kaXJlY3RvcnkubWlkZGxlYnVyeS5lZHUvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPmZvdW5kIGhlcmU8L2E+LCBvciBzdGFydCB0eXBpbmcgdGhlaXIgbmFtZSBpbnRvIE91dGxvb2sgdW50aWwgdGhlaXIgZW1haWwgYXBwZWFycy4gIDwvaDQ+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gV2hhdCBoYXBwZW5zIGlmIEkgbWF0Y2ggd2l0aCBvbmUgb2YgbXkgY3J1c2hlcz8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IFlvdSB3aWxsIGdldCBub3RpZmllZCBieSBlbWFpbCBvbiBNYXkgMTguIFRoZSBlbWFpbCB3aWxsIGluY2x1ZGUgdGhlaXIgbmFtZSBhbmQgZW1haWwgYWRkcmVzcyBmb3IgeW91IHRvIHJlYWNoIG91dCB0byB0aGVtLCBpZiB5b3UgY2hvb3NlIHRvIGRvIHNvLjwvaDQ+ICAgIFxyXG4gICAgICA8L2RldGFpbHM+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+IFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIkNydXNoTGlzdFwiKX19Pk15IENydXNoZXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+IFxyXG5cclxuICAgICAgPC8+KSBcclxuICB9XHJcblxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIkNydXNoTGlzdFwiKSB7XHJcbiAgICBjb250ZW50ID0gKCA8Q3J1c2hMaXN0ICAvPiApXHJcbiAgfSBcclxuICBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJWYWx1ZXNcIikge1xyXG4gICAgICBjb250ZW50ID0gKCA8VmFsdWVzIC8+IClcclxuICB9IFxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIkZBUVwiKSB7XHJcbiAgICBjb250ZW50ID0gKCA8RkFRIC8+IClcclxuICB9IFxyXG4gIGVsc2UgIHtcclxuICAgIGNvbnRlbnQgPSAoIDxXZWxjb21lIC8+ICkgXHJcbiAgfSBcclxuXHJcbiAgXHJcbnJldHVybiAoXHJcbiAgICA8PiBcclxuICAgICAge2NvbnRlbnR9XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==