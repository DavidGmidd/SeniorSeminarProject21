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



var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\src\\pages\\index.js",
    _s = $RefreshSig$();

/* eslint-disable react/no-unescaped-entities*/

/*"start": "next start -p $PORT", */







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
          lineNumber: 25,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
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
            lineNumber: 31,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: function onClick() {
              setCurrentMode("Values");
            },
            children: "Our Values"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: function onClick() {
              setCurrentMode("FAQ");
            },
            children: "FAQs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plyr,
          id: "player",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
            src: "https://cdn.plyr.io/3.6.4/plyr.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            height: "100%",
            width: "100%",
            opacity: "0.5",
            src: "https://player.vimeo.com/video/538885546?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: " Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury! "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 10
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "How it works:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            height: "100%",
            width: "100%",
            opacity: "0.5",
            src: "https://player.vimeo.com/video/538941352?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqs,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqsTitle,
              children: " FAQs "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " Who is eligible? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " All seniors in the class of 2021 and 2021.5 can submit a virtual crush list, even if you are off-campus or remote. We will ask you to include your email when you submit your crushes to verify that you are a senior. "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " When is this? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " Seniors can fill out their virtual crush list between May 10 to May 17 by 5:00 pm. You will get notified if you match with any of your crushes on May 18. "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " Who can see my crush list? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " No one can see the list you submit. Only if you match with your crush will your name and email be shared with them."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " How do I submit my crushes? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: [" Click on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "My Crushes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 21
                }, this), " at the bottom of the website to fill out your list. The form will ask you to include the email addresses of your crushes. "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " How do I find my crush's email? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: [" There are several ways you can find your crush's email. You can search their name in the directory, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://directory.middlebury.edu/",
                  children: "found here"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 117
                }, this), ", or start typing their name into Outlook until their email appears.  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " What happens if I match with one of my crushes? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
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
              lineNumber: 95,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, this)]
    }, void 0, true);
  } else if (currentMode === "CrushList") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_CrushList__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }, this);
  } else if (currentMode === "Values") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Values__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }, this);
  } else if (currentMode === "FAQ") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_FAQ__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRNb2RlIiwic2V0Q3VycmVudE1vZGUiLCJjb250ZW50Iiwic3R5bGVzIiwibWFpbiIsIk1lbnVDb250YWluZXIiLCJidXR0b25NZW51IiwicGx5ciIsImludHJvIiwiZmFxcyIsImZhcXNUaXRsZSIsImZvb3RlciIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLE1BQUQsQ0FIakI7QUFBQSxNQUd0QkMsV0FIc0I7QUFBQSxNQUdUQyxjQUhTOztBQUs3QixNQUFJQyxPQUFKOztBQUVBLE1BQUlGLFdBQVcsS0FBSyxNQUFwQixFQUE0QjtBQUUxQkUsV0FBTyxnQkFDUDtBQUFBLDhCQUNBLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFLQTtBQUFNLGlCQUFTLEVBQUdDLDhEQUFNLENBQUNDLElBQXpCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRCw4REFBTSxDQUFDRSxhQUF2QjtBQUFBLGtDQUVFO0FBQVEscUJBQVMsRUFBRUYsOERBQU0sQ0FBQ0csVUFBMUI7QUFBc0MsbUJBQU8sRUFBRSxtQkFBTTtBQUFDTCw0QkFBYyxDQUFDLE1BQUQsQ0FBZDtBQUF1QixhQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQVEscUJBQVMsRUFBRUUsOERBQU0sQ0FBQ0csVUFBMUI7QUFBc0MsbUJBQU8sRUFBRSxtQkFBTTtBQUFDTCw0QkFBYyxDQUFDLFFBQUQsQ0FBZDtBQUF5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LEVBQUVQLDhEQUFNLENBQUNRLE1BQTFCO0FBQUEsbUNBQ0U7QUFBUSx1QkFBUyxFQUFFUiw4REFBTSxDQUFDUyxNQUExQjtBQUFrQyxxQkFBTyxFQUFFLG1CQUFNO0FBQUNYLDhCQUFjLENBQUMsV0FBRCxDQUFkO0FBQTRCLGVBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBO0FBQUEsb0JBREE7QUErRUQsR0FqRkQsTUFtRkssSUFBSUQsV0FBVyxLQUFLLFdBQXBCLEVBQWlDO0FBQ3BDRSxXQUFPLGdCQUFLLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNELEdBRkksTUFHQSxJQUFJRixXQUFXLEtBQUssUUFBcEIsRUFBOEI7QUFDL0JFLFdBQU8sZ0JBQUsscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBRUgsR0FISSxNQUdFLElBQUlGLFdBQVcsS0FBSyxLQUFwQixFQUEyQjtBQUNoQ0UsV0FBTyxnQkFBSyxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDRDs7QUFHSCxzQkFDSTtBQUFBLGNBQ0dBO0FBREgsbUJBREo7QUFLQzs7R0ExR3VCSixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMwZTE2MTEyNWUwOTcwMDQyOWM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMqL1xyXG5cclxuICAgLypcInN0YXJ0XCI6IFwibmV4dCBzdGFydCAtcCAkUE9SVFwiLCAqL1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ3J1c2hMaXN0IGZyb20gJy4uL3BhZ2VzL0NydXNoTGlzdCc7XHJcbmltcG9ydCBWYWx1ZXMgZnJvbSAnLi4vcGFnZXMvVmFsdWVzJztcclxuaW1wb3J0IEZBUSBmcm9tICcuLi9wYWdlcy9GQVEnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gXHJcbiAgY29uc3QgW2N1cnJlbnRNb2RlLCBzZXRDdXJyZW50TW9kZV0gPSB1c2VTdGF0ZSgnSG9tZScpO1xyXG4gIFxyXG4gIGxldCBjb250ZW50O1xyXG5cclxuICBpZiAoY3VycmVudE1vZGUgPT09IFwiSG9tZVwiKSB7XHJcblxyXG4gICAgY29udGVudCA9IChcclxuICAgIDw+IFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIFdlbGNvbWU8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT0ge3N0eWxlcy5tYWlufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuICAgICBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZSgnSG9tZScpfX0+SG9tZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiRkFRXCIpfX0+RkFRczwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGx5cn0gaWQ9XCJwbGF5ZXJcIiA+XHJcbiAgICAgIDxzY3JpcHQgc3JjPSBcImh0dHBzOi8vY2RuLnBseXIuaW8vMy42LjQvcGx5ci5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81Mzg4ODU1NDY/YmFja2dyb3VuZD0xJmNvbnRyb2xzPTBcIlxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiID5cclxuICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30gPlxyXG4gICAgICAgICA8cD4gR3JhZHVhdGlvbiBpcyBhcm91bmQgdGhlIGNvcm5lciwgYW5kIHdlIHdhbnQgdG8gaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvdXQgb2YgeW91ciBsYXN0IHdlZWtzIGF0IE1pZGRsZWJ1cnkhIDwvcD4gXHJcbiAgICAgIFxyXG4gICAgIHsvKn0gPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3dpdHdvcmtzfSA+ICovfVxyXG4gICAgICAgICA8cD5Ib3cgaXQgd29ya3M6PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNTM4OTQxMzUyP2JhY2tncm91bmQ9MSZjb250cm9scz0wXCJcclxuICAgICAgZnJhbWVCb3JkZXI9XCIwXCIgPlxyXG4gICAgICA8L2lmcmFtZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFxc30gPiBcclxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZhcXNUaXRsZX0+IEZBUXMgPC9oMj5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gV2hvIGlzIGVsaWdpYmxlPyA8L3N1bW1hcnk+XHJcbiAgICAgIDxoND4gQWxsIHNlbmlvcnMgaW4gdGhlIGNsYXNzIG9mIDIwMjEgYW5kIDIwMjEuNSBjYW4gc3VibWl0IGEgdmlydHVhbCBjcnVzaCBsaXN0LCBldmVuIGlmIHlvdSBhcmUgb2ZmLWNhbXB1cyBvciByZW1vdGUuIFdlIHdpbGwgYXNrIHlvdSB0byBpbmNsdWRlIHlvdXIgZW1haWwgd2hlbiB5b3Ugc3VibWl0IHlvdXIgY3J1c2hlcyB0byB2ZXJpZnkgdGhhdCB5b3UgYXJlIGEgc2VuaW9yLiA8L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IFdoZW4gaXMgdGhpcz8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IFNlbmlvcnMgY2FuIGZpbGwgb3V0IHRoZWlyIHZpcnR1YWwgY3J1c2ggbGlzdCBiZXR3ZWVuIE1heSAxMCB0byBNYXkgMTcgYnkgNTowMCBwbS4gWW91IHdpbGwgZ2V0IG5vdGlmaWVkIGlmIHlvdSBtYXRjaCB3aXRoIGFueSBvZiB5b3VyIGNydXNoZXMgb24gTWF5IDE4LiA8L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IFdobyBjYW4gc2VlIG15IGNydXNoIGxpc3Q/IDwvc3VtbWFyeT5cclxuICAgICAgPGg0PiBObyBvbmUgY2FuIHNlZSB0aGUgbGlzdCB5b3Ugc3VibWl0LiBPbmx5IGlmIHlvdSBtYXRjaCB3aXRoIHlvdXIgY3J1c2ggd2lsbCB5b3VyIG5hbWUgYW5kIGVtYWlsIGJlIHNoYXJlZCB3aXRoIHRoZW0uPC9oND5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBIb3cgZG8gSSBzdWJtaXQgbXkgY3J1c2hlcz8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IENsaWNrIG9uIDxiPk15IENydXNoZXM8L2I+IGF0IHRoZSBib3R0b20gb2YgdGhlIHdlYnNpdGUgdG8gZmlsbCBvdXQgeW91ciBsaXN0LiBUaGUgZm9ybSB3aWxsIGFzayB5b3UgdG8gaW5jbHVkZSB0aGUgZW1haWwgYWRkcmVzc2VzIG9mIHlvdXIgY3J1c2hlcy4gPC9oND5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBIb3cgZG8gSSBmaW5kIG15IGNydXNoJmFwb3M7cyBlbWFpbD8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IFRoZXJlIGFyZSBzZXZlcmFsIHdheXMgeW91IGNhbiBmaW5kIHlvdXIgY3J1c2gmYXBvcztzIGVtYWlsLiBZb3UgY2FuIHNlYXJjaCB0aGVpciBuYW1lIGluIHRoZSBkaXJlY3RvcnksIDxhIGhyZWY9IFwiaHR0cHM6Ly9kaXJlY3RvcnkubWlkZGxlYnVyeS5lZHUvXCI+Zm91bmQgaGVyZTwvYT4sIG9yIHN0YXJ0IHR5cGluZyB0aGVpciBuYW1lIGludG8gT3V0bG9vayB1bnRpbCB0aGVpciBlbWFpbCBhcHBlYXJzLiAgPC9oND5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBXaGF0IGhhcHBlbnMgaWYgSSBtYXRjaCB3aXRoIG9uZSBvZiBteSBjcnVzaGVzPyA8L3N1bW1hcnk+XHJcbiAgICAgIDxoND4gWW91IHdpbGwgZ2V0IG5vdGlmaWVkIGJ5IGVtYWlsIG9uIE1heSAxOC4gVGhlIGVtYWlsIHdpbGwgaW5jbHVkZSB0aGVpciBuYW1lIGFuZCBlbWFpbCBhZGRyZXNzIGZvciB5b3UgdG8gcmVhY2ggb3V0IHRvIHRoZW0sIGlmIHlvdSBjaG9vc2UgdG8gZG8gc28uPC9oND4gICAgXHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PiBcclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudE1vZGUoXCJDcnVzaExpc3RcIil9fT5NeSBDcnVzaGVzPC9idXR0b24+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPiBcclxuXHJcbiAgICAgIDwvPikgXHJcbiAgfVxyXG5cclxuICBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJDcnVzaExpc3RcIikge1xyXG4gICAgY29udGVudCA9ICggPENydXNoTGlzdCAgLz4gKVxyXG4gIH0gXHJcbiAgZWxzZSBpZiAoY3VycmVudE1vZGUgPT09IFwiVmFsdWVzXCIpIHtcclxuICAgICAgY29udGVudCA9ICggPFZhbHVlcyAvPiApXHJcblxyXG4gIH0gZWxzZSBpZiAoY3VycmVudE1vZGUgPT09IFwiRkFRXCIpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxGQVEgLz4gKVxyXG4gIH0gXHJcblxyXG4gIFxyXG5yZXR1cm4gKFxyXG4gICAgPD4gXHJcbiAgICAgIHtjb250ZW50fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=