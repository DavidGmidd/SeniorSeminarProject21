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
            lineNumber: 38,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            height: "100%",
            width: "100%",
            opacity: "0.5",
            src: "https://player.vimeo.com/video/538885546?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: " Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury! "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.howitworks,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "How it works:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            height: "100%",
            width: "100%",
            opacity: "0.5",
            src: "https://player.vimeo.com/video/538941352?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqs,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqsTitle,
              children: " FAQs "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " Who is eligible? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " Seniors in the class of 2021 and 2021.5. We will ask you to include your email when you submit your crushes to verify that you are a senior. "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " When is this? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " Seniors can fill out their virtual crush list between May 10 to May 17 by 5:00 pm. You will get notified if you match with any of your crushes on May 18. "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " Who can see my crush list? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " No one can see the list you submit. Only if you match with your crush will your name and email be shared with them."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " How do I submit my crushes? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: [" Click on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "My Crushes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 21
                }, this), " at the bottom of the website to fill out your list. The form will ask you to include the email addresses of your crushes. "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " How do I find my crush's email? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: [" There are several ways you can find your crush's email. You can search their name in the directory, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://directory.middlebury.edu/",
                  children: "found here"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 117
                }, this), ", or start typing their name into Outlook until their email appears.  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
                children: " What happens if I match with one of my crushes? "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: " You will get notified by email on May 18. The email will include their name and email address for you to reach out to them, if you choose to do so."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
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
              lineNumber: 96,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
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
      lineNumber: 105,
      columnNumber: 17
    }, this);
  } else if (currentMode === "Values") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Values__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }, this);
  } else if (currentMode === "FAQ") {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_FAQ__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRNb2RlIiwic2V0Q3VycmVudE1vZGUiLCJjb250ZW50Iiwic3R5bGVzIiwibWFpbiIsIk1lbnVDb250YWluZXIiLCJidXR0b25NZW51IiwicGx5ciIsImludHJvIiwiaG93aXR3b3JrcyIsImZhcXMiLCJmYXFzVGl0bGUiLCJmb290ZXIiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFHU0Msc0RBQVEsQ0FBQyxNQUFELENBSGpCO0FBQUEsTUFHdEJDLFdBSHNCO0FBQUEsTUFHVEMsY0FIUzs7QUFLN0IsTUFBSUMsT0FBSjs7QUFFQSxNQUFJRixXQUFXLEtBQUssTUFBcEIsRUFBNEI7QUFFMUJFLFdBQU8sZ0JBQ1A7QUFBQSw4QkFDQSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBS0E7QUFBTSxpQkFBUyxFQUFHQyw4REFBTSxDQUFDQyxJQUF6QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsYUFBdkI7QUFBQSxrQ0FFRTtBQUFRLHFCQUFTLEVBQUVGLDhEQUFNLENBQUNHLFVBQTFCO0FBQXNDLG1CQUFPLEVBQUUsbUJBQU07QUFBQ0wsNEJBQWMsQ0FBQyxNQUFELENBQWQ7QUFBdUIsYUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFRLHFCQUFTLEVBQUVFLDhEQUFNLENBQUNHLFVBQTFCO0FBQXNDLG1CQUFPLEVBQUUsbUJBQU07QUFBQ0wsNEJBQWMsQ0FBQyxR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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCQSxlQTJERTtBQUFRLHFCQUFTLEVBQUVSLDhEQUFNLENBQUNTLE1BQTFCO0FBQUEsbUNBQ0U7QUFBUSx1QkFBUyxFQUFFVCw4REFBTSxDQUFDVSxNQUExQjtBQUFrQyxxQkFBTyxFQUFFLG1CQUFNO0FBQUNaLDhCQUFjLENBQUMsV0FBRCxDQUFkO0FBQTRCLGVBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBO0FBQUEsb0JBREE7QUFnRkQsR0FsRkQsTUFvRkssSUFBSUQsV0FBVyxLQUFLLFdBQXBCLEVBQWlDO0FBQ3BDRSxXQUFPLGdCQUFLLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNELEdBRkksTUFHQSxJQUFJRixXQUFXLEtBQUssUUFBcEIsRUFBOEI7QUFDL0JFLFdBQU8sZ0JBQUsscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBRUgsR0FISSxNQUdFLElBQUlGLFdBQVcsS0FBSyxLQUFwQixFQUEyQjtBQUNoQ0UsV0FBTyxnQkFBSyxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDRDs7QUFHSCxzQkFDSTtBQUFBLGNBQ0dBO0FBREgsbUJBREo7QUFLQzs7R0EzR3VCSixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjODhkNWQwMTVkMjE4Mjk3OGY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMqL1xyXG5cclxuICAgLypcInN0YXJ0XCI6IFwibmV4dCBzdGFydCAtcCAkUE9SVFwiLCAqL1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ3J1c2hMaXN0IGZyb20gJy4uL3BhZ2VzL0NydXNoTGlzdCc7XHJcbmltcG9ydCBWYWx1ZXMgZnJvbSAnLi4vcGFnZXMvVmFsdWVzJztcclxuaW1wb3J0IEZBUSBmcm9tICcuLi9wYWdlcy9GQVEnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gXHJcbiAgY29uc3QgW2N1cnJlbnRNb2RlLCBzZXRDdXJyZW50TW9kZV0gPSB1c2VTdGF0ZSgnSG9tZScpO1xyXG4gIFxyXG4gIGxldCBjb250ZW50O1xyXG5cclxuICBpZiAoY3VycmVudE1vZGUgPT09IFwiSG9tZVwiKSB7XHJcblxyXG4gICAgY29udGVudCA9IChcclxuICAgIDw+IFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIFdlbGNvbWU8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT0ge3N0eWxlcy5tYWlufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuICAgICBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZSgnSG9tZScpfX0+SG9tZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiRkFRXCIpfX0+RkFRczwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGx5cn0gaWQ9XCJwbGF5ZXJcIiA+XHJcbiAgey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcIi9wYXRoL3RvL3BseXIuY3NzXCIgLz4gKi99XHJcbiAgICAgIDxzY3JpcHQgc3JjPSBcImh0dHBzOi8vY2RuLnBseXIuaW8vMy42LjQvcGx5ci5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81Mzg4ODU1NDY/YmFja2dyb3VuZD0xJmNvbnRyb2xzPTBcIlxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiID5cclxuICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30gPlxyXG4gICAgICAgICA8cD4gR3JhZHVhdGlvbiBpcyBhcm91bmQgdGhlIGNvcm5lciwgYW5kIHdlIHdhbnQgdG8gaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvdXQgb2YgeW91ciBsYXN0IHdlZWtzIGF0IE1pZGRsZWJ1cnkhIDwvcD4gXHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG93aXR3b3Jrc30gPlxyXG4gICAgICAgICA8cD5Ib3cgaXQgd29ya3M6PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNTM4OTQxMzUyP2JhY2tncm91bmQ9MSZjb250cm9scz0wXCJcclxuICAgICAgZnJhbWVCb3JkZXI9XCIwXCIgPlxyXG4gICAgICA8L2lmcmFtZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFxc30gPiBcclxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZhcXNUaXRsZX0+IEZBUXMgPC9oMj5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gV2hvIGlzIGVsaWdpYmxlPyA8L3N1bW1hcnk+XHJcbiAgICAgIDxoND4gU2VuaW9ycyBpbiB0aGUgY2xhc3Mgb2YgMjAyMSBhbmQgMjAyMS41LiBXZSB3aWxsIGFzayB5b3UgdG8gaW5jbHVkZSB5b3VyIGVtYWlsIHdoZW4geW91IHN1Ym1pdCB5b3VyIGNydXNoZXMgdG8gdmVyaWZ5IHRoYXQgeW91IGFyZSBhIHNlbmlvci4gPC9oND5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBXaGVuIGlzIHRoaXM/IDwvc3VtbWFyeT5cclxuICAgICAgPGg0PiBTZW5pb3JzIGNhbiBmaWxsIG91dCB0aGVpciB2aXJ0dWFsIGNydXNoIGxpc3QgYmV0d2VlbiBNYXkgMTAgdG8gTWF5IDE3IGJ5IDU6MDAgcG0uIFlvdSB3aWxsIGdldCBub3RpZmllZCBpZiB5b3UgbWF0Y2ggd2l0aCBhbnkgb2YgeW91ciBjcnVzaGVzIG9uIE1heSAxOC4gPC9oND5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBXaG8gY2FuIHNlZSBteSBjcnVzaCBsaXN0PyA8L3N1bW1hcnk+XHJcbiAgICAgIDxoND4gTm8gb25lIGNhbiBzZWUgdGhlIGxpc3QgeW91IHN1Ym1pdC4gT25seSBpZiB5b3UgbWF0Y2ggd2l0aCB5b3VyIGNydXNoIHdpbGwgeW91ciBuYW1lIGFuZCBlbWFpbCBiZSBzaGFyZWQgd2l0aCB0aGVtLjwvaDQ+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gSG93IGRvIEkgc3VibWl0IG15IGNydXNoZXM/IDwvc3VtbWFyeT5cclxuICAgICAgPGg0PiBDbGljayBvbiA8Yj5NeSBDcnVzaGVzPC9iPiBhdCB0aGUgYm90dG9tIG9mIHRoZSB3ZWJzaXRlIHRvIGZpbGwgb3V0IHlvdXIgbGlzdC4gVGhlIGZvcm0gd2lsbCBhc2sgeW91IHRvIGluY2x1ZGUgdGhlIGVtYWlsIGFkZHJlc3NlcyBvZiB5b3VyIGNydXNoZXMuIDwvaDQ+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gSG93IGRvIEkgZmluZCBteSBjcnVzaCZhcG9zO3MgZW1haWw/IDwvc3VtbWFyeT5cclxuICAgICAgPGg0PiBUaGVyZSBhcmUgc2V2ZXJhbCB3YXlzIHlvdSBjYW4gZmluZCB5b3VyIGNydXNoJmFwb3M7cyBlbWFpbC4gWW91IGNhbiBzZWFyY2ggdGhlaXIgbmFtZSBpbiB0aGUgZGlyZWN0b3J5LCA8YSBocmVmPSBcImh0dHBzOi8vZGlyZWN0b3J5Lm1pZGRsZWJ1cnkuZWR1L1wiPmZvdW5kIGhlcmU8L2E+LCBvciBzdGFydCB0eXBpbmcgdGhlaXIgbmFtZSBpbnRvIE91dGxvb2sgdW50aWwgdGhlaXIgZW1haWwgYXBwZWFycy4gIDwvaDQ+XHJcbiAgICAgIDwvZGV0YWlscz5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gV2hhdCBoYXBwZW5zIGlmIEkgbWF0Y2ggd2l0aCBvbmUgb2YgbXkgY3J1c2hlcz8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IFlvdSB3aWxsIGdldCBub3RpZmllZCBieSBlbWFpbCBvbiBNYXkgMTguIFRoZSBlbWFpbCB3aWxsIGluY2x1ZGUgdGhlaXIgbmFtZSBhbmQgZW1haWwgYWRkcmVzcyBmb3IgeW91IHRvIHJlYWNoIG91dCB0byB0aGVtLCBpZiB5b3UgY2hvb3NlIHRvIGRvIHNvLjwvaDQ+ICAgIFxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT4gXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiQ3J1c2hMaXN0XCIpfX0+TXkgQ3J1c2hlczwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj4gXHJcblxyXG4gICAgICA8Lz4pIFxyXG4gIH1cclxuXHJcbiAgZWxzZSBpZiAoY3VycmVudE1vZGUgPT09IFwiQ3J1c2hMaXN0XCIpIHtcclxuICAgIGNvbnRlbnQgPSAoIDxDcnVzaExpc3QgIC8+IClcclxuICB9IFxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIlZhbHVlc1wiKSB7XHJcbiAgICAgIGNvbnRlbnQgPSAoIDxWYWx1ZXMgLz4gKVxyXG5cclxuICB9IGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIkZBUVwiKSB7XHJcbiAgICBjb250ZW50ID0gKCA8RkFRIC8+IClcclxuICB9IFxyXG5cclxuICBcclxucmV0dXJuIChcclxuICAgIDw+IFxyXG4gICAgICB7Y29udGVudH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9