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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
            src: "https://cdn.plyr.io/3.6.4/plyr.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            height: "100%",
            width: "100%",
            opacity: "0.5",
            src: "https://player.vimeo.com/video/545681677?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: " Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury! "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 10
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.howitworks,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "How it works:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/final_how_it_works.png",
            style: "width:100px;height:100px;"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqsHome,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqsTitle,
              children: " FAQs "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " Who is eligible? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " All seniors in the class of 2021 and 2021.5 can submit a virtual crush list, even if you are off-campus or remote. We will ask you to include your email when you submit your crushes to verify that you are a senior. "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " When is this? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " Seniors can fill out their virtual crush list between May 10 to May 17 by 5:00 pm. You will get notified if you match with any of your crushes on May 18. "
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
                children: " Who can see my crush list? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " No one can see the list you submit. Only if you match with your crush will your name and email be shared with them."
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
                children: " How do I submit my crushes? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: [" Click on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "My Crushes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 21
                }, this), " at the bottom of the website to fill out your list. The form will ask you to include the email addresses of your crushes. "]
              }, void 0, true, {
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
                children: " How do I find my crush's email? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
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
                  lineNumber: 87,
                  columnNumber: 117
                }, this), ", or start typing their name into Outlook until their email appears.  "]
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
                children: " What happens if I match with one of my crushes? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
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
              lineNumber: 98,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
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
      lineNumber: 107,
      columnNumber: 17
    }, this);
  } else if (currentMode === "Values") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Values__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }, this);
  } else if (currentMode === "FAQ") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_FAQ__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Welcome__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRNb2RlIiwic2V0Q3VycmVudE1vZGUiLCJjb250ZW50Iiwic3R5bGVzIiwibWFpbiIsIk1lbnVDb250YWluZXIiLCJidXR0b25NZW51IiwicGx5ciIsImludHJvIiwiaG93aXR3b3JrcyIsImZhcXNIb21lIiwiZmFxc1RpdGxlIiwibGlua0RpcmVjdG9yeSIsImZvb3RlciIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLE1BQUQsQ0FIakI7QUFBQSxNQUd0QkMsV0FIc0I7QUFBQSxNQUdUQyxjQUhTOztBQUs3QixNQUFJQyxPQUFKOztBQUVBLE1BQUlGLFdBQVcsS0FBSyxNQUFwQixFQUE0QjtBQUUxQkUsV0FBTyxnQkFDUDtBQUFBLDhCQUNBLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFLQTtBQUFNLGlCQUFTLEVBQUdDLDhEQUFNLENBQUNDLElBQXpCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRCw4REFBTSxDQUFDRSxhQUF2QjtBQUFBLGtDQUVFO0FBQVEscUJBQVMsRUFBRUYsOERBQU0sQ0FBQ0csVUFBMUI7QUFBc0MsbUJBQU8sRUFBRSxtQkFBTTtBQUFDTCw0QkFBYyxDQUFDLE1BQUQsQ0FBZDtBQUF1QixhQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQVEscUJBQVMsRUFBRUUsOERBQU0sQ0FBQ0csVUFBMUI7QUFBc0MsbUJBQU8sRUFBRSxtQkFB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RixlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCQSxlQTJERTtBQUFRLHFCQUFTLEVBQUVULDhEQUFNLENBQUNVLE1BQTFCO0FBQUEsbUNBQ0U7QUFBUSx1QkFBUyxFQUFFViw4REFBTSxDQUFDVyxNQUExQjtBQUFrQyxxQkFBTyxFQUFFLG1CQUFNO0FBQUNiLDhCQUFjLENBQUMsV0FBRCxDQUFkO0FBQTRCLGVBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBO0FBQUEsb0JBREE7QUFnRkQsR0FsRkQsTUFvRkssSUFBSUQsV0FBVyxLQUFLLFdBQXBCLEVBQWlDO0FBQ3BDRSxXQUFPLGdCQUFLLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNELEdBRkksTUFHQSxJQUFJRixXQUFXLEtBQUssUUFBcEIsRUFBOEI7QUFDL0JFLFdBQU8sZ0JBQUsscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0gsR0FGSSxNQUdBLElBQUlGLFdBQVcsS0FBSyxLQUFwQixFQUEyQjtBQUM5QkUsV0FBTyxnQkFBSyxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDRCxHQUZJLE1BR0M7QUFDSkEsV0FBTyxnQkFBSyxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDRDs7QUFHSCxzQkFDSTtBQUFBLGNBQ0dBO0FBREgsbUJBREo7QUFLQzs7R0E5R3VCSixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRiYmVjMGRjODk4NWRhMjM1YzllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMqL1xyXG5cclxuICBcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENydXNoTGlzdCBmcm9tICcuLi9wYWdlcy9DcnVzaExpc3QnO1xyXG5pbXBvcnQgVmFsdWVzIGZyb20gJy4uL3BhZ2VzL1ZhbHVlcyc7XHJcbmltcG9ydCBGQVEgZnJvbSAnLi4vcGFnZXMvRkFRJztcclxuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi4vcGFnZXMvV2VsY29tZSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50TW9kZSwgc2V0Q3VycmVudE1vZGVdID0gdXNlU3RhdGUoJ0hvbWUnKTtcclxuICBcclxuICBsZXQgY29udGVudDtcclxuXHJcbiAgaWYgKGN1cnJlbnRNb2RlID09PSBcIkhvbWVcIikge1xyXG5cclxuICAgIGNvbnRlbnQgPSAoXHJcbiAgICA8PiBcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+UGFudGhlciBDcnVzaCBXZWxjb21lPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9IHtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcbiAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25NZW51fSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoJ0hvbWUnKX19PkhvbWU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIlZhbHVlc1wiKX19Pk91ciBWYWx1ZXM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIkZBUVwiKX19PkZBUXM8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBseXJ9IGlkPVwicGxheWVyXCIgPlxyXG4gICAgICA8c2NyaXB0IHNyYz0gXCJodHRwczovL2Nkbi5wbHlyLmlvLzMuNi40L3BseXIuanNcIj48L3NjcmlwdD5cclxuXHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBvcGFjaXR5PVwiMC41XCJcclxuICAgICAgICBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNTQ1NjgxNjc3P2JhY2tncm91bmQ9MSZjb250cm9scz0wXCJcclxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIiA+XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99ID5cclxuICAgICAgICAgPHA+IEdyYWR1YXRpb24gaXMgYXJvdW5kIHRoZSBjb3JuZXIsIGFuZCB3ZSB3YW50IHRvIGhlbHAgeW91IG1ha2UgdGhlIG1vc3Qgb3V0IG9mIHlvdXIgbGFzdCB3ZWVrcyBhdCBNaWRkbGVidXJ5ISA8L3A+IFxyXG4gICAgICBcclxuICAgICAgXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3dpdHdvcmtzfSA+IFxyXG4gICAgICAgICA8cD5Ib3cgaXQgd29ya3M6PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPGlmcmFtZVxyXG4gICAgICBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgb3BhY2l0eT1cIjAuNVwiXHJcbiAgICAgIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81NDU3MTIwMzE/YmFja2dyb3VuZD0xJmNvbnRyb2xzPTBcIlxyXG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIiA+XHJcbiAgICAgIDwvaWZyYW1lPiAqL31cclxuICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZmluYWxfaG93X2l0X3dvcmtzLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwcHg7aGVpZ2h0OjEwMHB4O1wiLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYXFzSG9tZX0gPiBcclxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZhcXNUaXRsZX0+IEZBUXMgPC9oMj5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gV2hvIGlzIGVsaWdpYmxlPyA8L3N1bW1hcnk+XHJcbiAgICAgIDxoND4gQWxsIHNlbmlvcnMgaW4gdGhlIGNsYXNzIG9mIDIwMjEgYW5kIDIwMjEuNSBjYW4gc3VibWl0IGEgdmlydHVhbCBjcnVzaCBsaXN0LCBldmVuIGlmIHlvdSBhcmUgb2ZmLWNhbXB1cyBvciByZW1vdGUuIFdlIHdpbGwgYXNrIHlvdSB0byBpbmNsdWRlIHlvdXIgZW1haWwgd2hlbiB5b3Ugc3VibWl0IHlvdXIgY3J1c2hlcyB0byB2ZXJpZnkgdGhhdCB5b3UgYXJlIGEgc2VuaW9yLiA8L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IFdoZW4gaXMgdGhpcz8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IFNlbmlvcnMgY2FuIGZpbGwgb3V0IHRoZWlyIHZpcnR1YWwgY3J1c2ggbGlzdCBiZXR3ZWVuIE1heSAxMCB0byBNYXkgMTcgYnkgNTowMCBwbS4gWW91IHdpbGwgZ2V0IG5vdGlmaWVkIGlmIHlvdSBtYXRjaCB3aXRoIGFueSBvZiB5b3VyIGNydXNoZXMgb24gTWF5IDE4LiA8L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IFdobyBjYW4gc2VlIG15IGNydXNoIGxpc3Q/IDwvc3VtbWFyeT5cclxuICAgICAgPGg0PiBObyBvbmUgY2FuIHNlZSB0aGUgbGlzdCB5b3Ugc3VibWl0LiBPbmx5IGlmIHlvdSBtYXRjaCB3aXRoIHlvdXIgY3J1c2ggd2lsbCB5b3VyIG5hbWUgYW5kIGVtYWlsIGJlIHNoYXJlZCB3aXRoIHRoZW0uPC9oND5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBIb3cgZG8gSSBzdWJtaXQgbXkgY3J1c2hlcz8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IENsaWNrIG9uIDxiPk15IENydXNoZXM8L2I+IGF0IHRoZSBib3R0b20gb2YgdGhlIHdlYnNpdGUgdG8gZmlsbCBvdXQgeW91ciBsaXN0LiBUaGUgZm9ybSB3aWxsIGFzayB5b3UgdG8gaW5jbHVkZSB0aGUgZW1haWwgYWRkcmVzc2VzIG9mIHlvdXIgY3J1c2hlcy4gPC9oND5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBIb3cgZG8gSSBmaW5kIG15IGNydXNoJmFwb3M7cyBlbWFpbD8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IFRoZXJlIGFyZSBzZXZlcmFsIHdheXMgeW91IGNhbiBmaW5kIHlvdXIgY3J1c2gmYXBvcztzIGVtYWlsLiBZb3UgY2FuIHNlYXJjaCB0aGVpciBuYW1lIGluIHRoZSBkaXJlY3RvcnksIDxhIGNsYXNzTmFtZT0ge3N0eWxlcy5saW5rRGlyZWN0b3J5IH1ocmVmPSBcImh0dHBzOi8vZGlyZWN0b3J5Lm1pZGRsZWJ1cnkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5mb3VuZCBoZXJlPC9hPiwgb3Igc3RhcnQgdHlwaW5nIHRoZWlyIG5hbWUgaW50byBPdXRsb29rIHVudGlsIHRoZWlyIGVtYWlsIGFwcGVhcnMuICA8L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IFdoYXQgaGFwcGVucyBpZiBJIG1hdGNoIHdpdGggb25lIG9mIG15IGNydXNoZXM/IDwvc3VtbWFyeT5cclxuICAgICAgPGg0PiBZb3Ugd2lsbCBnZXQgbm90aWZpZWQgYnkgZW1haWwgb24gTWF5IDE4LiBUaGUgZW1haWwgd2lsbCBpbmNsdWRlIHRoZWlyIG5hbWUgYW5kIGVtYWlsIGFkZHJlc3MgZm9yIHlvdSB0byByZWFjaCBvdXQgdG8gdGhlbSwgaWYgeW91IGNob29zZSB0byBkbyBzby48L2g0PiAgICBcclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+IFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIkNydXNoTGlzdFwiKX19Pk15IENydXNoZXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+IFxyXG5cclxuICAgICAgPC8+KSBcclxuICB9XHJcblxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIkNydXNoTGlzdFwiKSB7XHJcbiAgICBjb250ZW50ID0gKCA8Q3J1c2hMaXN0ICAvPiApXHJcbiAgfSBcclxuICBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJWYWx1ZXNcIikge1xyXG4gICAgICBjb250ZW50ID0gKCA8VmFsdWVzIC8+IClcclxuICB9IFxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIkZBUVwiKSB7XHJcbiAgICBjb250ZW50ID0gKCA8RkFRIC8+IClcclxuICB9IFxyXG4gIGVsc2UgIHtcclxuICAgIGNvbnRlbnQgPSAoIDxXZWxjb21lIC8+ICkgXHJcbiAgfSBcclxuXHJcbiAgXHJcbnJldHVybiAoXHJcbiAgICA8PiBcclxuICAgICAge2NvbnRlbnR9XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==