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






 //import instructions from '../../images/panther_crush_how_it_works.png'

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
          lineNumber: 26,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
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
            lineNumber: 32,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: function onClick() {
              setCurrentMode("Values");
            },
            children: "Our Values"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMenu,
            onClick: function onClick() {
              setCurrentMode("FAQ");
            },
            children: "FAQs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
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
            src: "https://player.vimeo.com/video/545681677?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: " Graduation is around the corner, and we want to help you make the most out of your last weeks at Middlebury! "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 10
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
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            height: "100%",
            width: "100%",
            opacity: "0.5",
            src: "https://player.vimeo.com/video/545681544?background=1&controls=0",
            frameBorder: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faqsHome,
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
                children: " All seniors in the class of 2021 and 2021.5 can submit a virtual crush list, even if you are off-campus or remote. We will ask you to include your email when you submit your crushes to verify that you are a senior. "
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
                  className: _Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.linkDirectory,
                  href: "https://directory.middlebury.edu/",
                  target: "_blank",
                  rel: "noreferrer",
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
          lineNumber: 37,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRNb2RlIiwic2V0Q3VycmVudE1vZGUiLCJjb250ZW50Iiwic3R5bGVzIiwibWFpbiIsIk1lbnVDb250YWluZXIiLCJidXR0b25NZW51IiwicGx5ciIsImludHJvIiwiaG93aXR3b3JrcyIsImZhcXNIb21lIiwiZmFxc1RpdGxlIiwibGlua0RpcmVjdG9yeSIsImZvb3RlciIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFHU0Msc0RBQVEsQ0FBQyxNQUFELENBSGpCO0FBQUEsTUFHdEJDLFdBSHNCO0FBQUEsTUFHVEMsY0FIUzs7QUFLN0IsTUFBSUMsT0FBSjs7QUFFQSxNQUFJRixXQUFXLEtBQUssTUFBcEIsRUFBNEI7QUFFMUJFLFdBQU8sZ0JBQ1A7QUFBQSw4QkFDQSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBS0E7QUFBTSxpQkFBUyxFQUFHQyw4REFBTSxDQUFDQyxJQUF6QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsYUFBdkI7QUFBQSxrQ0FFRTtBQUFRLHFCQUFTLEVBQUVGLDhEQUFNLENBQUNHLFVBQTFCO0FBQXNDLG1CQUFPLEVBQUUsbUJBQU07QUFBQ0wsNEJBQWMsQ0FBQyxNQUFELENBQWQ7QUFBdUIsYUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFRLHFCQUFTLEVBQUVFLDhEQUFNLENBQUNHLFVBQTFCO0FBQXNDLG1CQUFPLEVBQUUsbUJB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QTtBQUFBLG9CQXZCQSxlQTRCQTtBQUFBLHNDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkJBLGVBMERFO0FBQVEscUJBQVMsRUFBRVQsOERBQU0sQ0FBQ1UsTUFBMUI7QUFBQSxtQ0FDRTtBQUFRLHVCQUFTLEVBQUVWLDhEQUFNLENBQUNXLE1BQTFCO0FBQWtDLHFCQUFPLEVBQUUsbUJBQU07QUFBQ2IsOEJBQWMsQ0FBQyxXQUFELENBQWQ7QUFBNEIsZUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEE7QUFBQSxvQkFEQTtBQStFRCxHQWpGRCxNQW1GSyxJQUFJRCxXQUFXLEtBQUssV0FBcEIsRUFBaUM7QUFDcENFLFdBQU8sZ0JBQUsscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0QsR0FGSSxNQUdBLElBQUlGLFdBQVcsS0FBSyxRQUFwQixFQUE4QjtBQUMvQkUsV0FBTyxnQkFBSyxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFFSCxHQUhJLE1BR0UsSUFBSUYsV0FBVyxLQUFLLEtBQXBCLEVBQTJCO0FBQ2hDRSxXQUFPLGdCQUFLLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNEOztBQUdILHNCQUNJO0FBQUEsY0FDR0E7QUFESCxtQkFESjtBQUtDOztHQTFHdUJKLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjIxZWZkYjBiNDA5NDlhYWZjNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyovXHJcblxyXG4gICAvKlwic3RhcnRcIjogXCJuZXh0IHN0YXJ0IC1wICRQT1JUXCIsICovXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDcnVzaExpc3QgZnJvbSAnLi4vcGFnZXMvQ3J1c2hMaXN0JztcclxuaW1wb3J0IFZhbHVlcyBmcm9tICcuLi9wYWdlcy9WYWx1ZXMnO1xyXG5pbXBvcnQgRkFRIGZyb20gJy4uL3BhZ2VzL0ZBUSc7XHJcbi8vaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuLi8uLi9pbWFnZXMvcGFudGhlcl9jcnVzaF9ob3dfaXRfd29ya3MucG5nJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gXHJcbiAgY29uc3QgW2N1cnJlbnRNb2RlLCBzZXRDdXJyZW50TW9kZV0gPSB1c2VTdGF0ZSgnSG9tZScpO1xyXG4gIFxyXG4gIGxldCBjb250ZW50O1xyXG5cclxuICBpZiAoY3VycmVudE1vZGUgPT09IFwiSG9tZVwiKSB7XHJcblxyXG4gICAgY29udGVudCA9IChcclxuICAgIDw+IFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIFdlbGNvbWU8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT0ge3N0eWxlcy5tYWlufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuICAgICBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbk1lbnV9IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZSgnSG9tZScpfX0+SG9tZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiVmFsdWVzXCIpfX0+T3VyIFZhbHVlczwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWVudX0gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRNb2RlKFwiRkFRXCIpfX0+RkFRczwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGx5cn0gaWQ9XCJwbGF5ZXJcIiA+XHJcbiAgICAgIDxzY3JpcHQgc3JjPSBcImh0dHBzOi8vY2RuLnBseXIuaW8vMy42LjQvcGx5ci5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81NDU2ODE2Nzc/YmFja2dyb3VuZD0xJmNvbnRyb2xzPTBcIlxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiID5cclxuICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30gPlxyXG4gICAgICAgICA8cD4gR3JhZHVhdGlvbiBpcyBhcm91bmQgdGhlIGNvcm5lciwgYW5kIHdlIHdhbnQgdG8gaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvdXQgb2YgeW91ciBsYXN0IHdlZWtzIGF0IE1pZGRsZWJ1cnkhIDwvcD4gXHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvd2l0d29ya3N9ID4gXHJcbiAgICAgICAgIDxwPkhvdyBpdCB3b3Jrczo8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNTQ1NjgxNTQ0P2JhY2tncm91bmQ9MSZjb250cm9scz0wXCJcclxuICAgICAgZnJhbWVCb3JkZXI9XCIwXCIgPlxyXG4gICAgICA8L2lmcmFtZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYXFzSG9tZX0gPiBcclxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZhcXNUaXRsZX0+IEZBUXMgPC9oMj5cclxuXHJcbiAgICAgIDxkZXRhaWxzPiBcclxuICAgICAgICA8c3VtbWFyeT4gV2hvIGlzIGVsaWdpYmxlPyA8L3N1bW1hcnk+XHJcbiAgICAgIDxoND4gQWxsIHNlbmlvcnMgaW4gdGhlIGNsYXNzIG9mIDIwMjEgYW5kIDIwMjEuNSBjYW4gc3VibWl0IGEgdmlydHVhbCBjcnVzaCBsaXN0LCBldmVuIGlmIHlvdSBhcmUgb2ZmLWNhbXB1cyBvciByZW1vdGUuIFdlIHdpbGwgYXNrIHlvdSB0byBpbmNsdWRlIHlvdXIgZW1haWwgd2hlbiB5b3Ugc3VibWl0IHlvdXIgY3J1c2hlcyB0byB2ZXJpZnkgdGhhdCB5b3UgYXJlIGEgc2VuaW9yLiA8L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IFdoZW4gaXMgdGhpcz8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IFNlbmlvcnMgY2FuIGZpbGwgb3V0IHRoZWlyIHZpcnR1YWwgY3J1c2ggbGlzdCBiZXR3ZWVuIE1heSAxMCB0byBNYXkgMTcgYnkgNTowMCBwbS4gWW91IHdpbGwgZ2V0IG5vdGlmaWVkIGlmIHlvdSBtYXRjaCB3aXRoIGFueSBvZiB5b3VyIGNydXNoZXMgb24gTWF5IDE4LiA8L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IFdobyBjYW4gc2VlIG15IGNydXNoIGxpc3Q/IDwvc3VtbWFyeT5cclxuICAgICAgPGg0PiBObyBvbmUgY2FuIHNlZSB0aGUgbGlzdCB5b3Ugc3VibWl0LiBPbmx5IGlmIHlvdSBtYXRjaCB3aXRoIHlvdXIgY3J1c2ggd2lsbCB5b3VyIG5hbWUgYW5kIGVtYWlsIGJlIHNoYXJlZCB3aXRoIHRoZW0uPC9oND5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBIb3cgZG8gSSBzdWJtaXQgbXkgY3J1c2hlcz8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IENsaWNrIG9uIDxiPk15IENydXNoZXM8L2I+IGF0IHRoZSBib3R0b20gb2YgdGhlIHdlYnNpdGUgdG8gZmlsbCBvdXQgeW91ciBsaXN0LiBUaGUgZm9ybSB3aWxsIGFzayB5b3UgdG8gaW5jbHVkZSB0aGUgZW1haWwgYWRkcmVzc2VzIG9mIHlvdXIgY3J1c2hlcy4gPC9oND5cclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgICAgPGRldGFpbHM+IFxyXG4gICAgICAgIDxzdW1tYXJ5PiBIb3cgZG8gSSBmaW5kIG15IGNydXNoJmFwb3M7cyBlbWFpbD8gPC9zdW1tYXJ5PlxyXG4gICAgICA8aDQ+IFRoZXJlIGFyZSBzZXZlcmFsIHdheXMgeW91IGNhbiBmaW5kIHlvdXIgY3J1c2gmYXBvcztzIGVtYWlsLiBZb3UgY2FuIHNlYXJjaCB0aGVpciBuYW1lIGluIHRoZSBkaXJlY3RvcnksIDxhIGNsYXNzTmFtZT0ge3N0eWxlcy5saW5rRGlyZWN0b3J5IH1ocmVmPSBcImh0dHBzOi8vZGlyZWN0b3J5Lm1pZGRsZWJ1cnkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5mb3VuZCBoZXJlPC9hPiwgb3Igc3RhcnQgdHlwaW5nIHRoZWlyIG5hbWUgaW50byBPdXRsb29rIHVudGlsIHRoZWlyIGVtYWlsIGFwcGVhcnMuICA8L2g0PlxyXG4gICAgICA8L2RldGFpbHM+XHJcblxyXG4gICAgICA8ZGV0YWlscz4gXHJcbiAgICAgICAgPHN1bW1hcnk+IFdoYXQgaGFwcGVucyBpZiBJIG1hdGNoIHdpdGggb25lIG9mIG15IGNydXNoZXM/IDwvc3VtbWFyeT5cclxuICAgICAgPGg0PiBZb3Ugd2lsbCBnZXQgbm90aWZpZWQgYnkgZW1haWwgb24gTWF5IDE4LiBUaGUgZW1haWwgd2lsbCBpbmNsdWRlIHRoZWlyIG5hbWUgYW5kIGVtYWlsIGFkZHJlc3MgZm9yIHlvdSB0byByZWFjaCBvdXQgdG8gdGhlbSwgaWYgeW91IGNob29zZSB0byBkbyBzby48L2g0PiAgICBcclxuICAgICAgPC9kZXRhaWxzPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+IFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50TW9kZShcIkNydXNoTGlzdFwiKX19Pk15IENydXNoZXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+IFxyXG5cclxuICAgICAgPC8+KSBcclxuICB9XHJcblxyXG4gIGVsc2UgaWYgKGN1cnJlbnRNb2RlID09PSBcIkNydXNoTGlzdFwiKSB7XHJcbiAgICBjb250ZW50ID0gKCA8Q3J1c2hMaXN0ICAvPiApXHJcbiAgfSBcclxuICBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJWYWx1ZXNcIikge1xyXG4gICAgICBjb250ZW50ID0gKCA8VmFsdWVzIC8+IClcclxuXHJcbiAgfSBlbHNlIGlmIChjdXJyZW50TW9kZSA9PT0gXCJGQVFcIikge1xyXG4gICAgY29udGVudCA9ICggPEZBUSAvPiApXHJcbiAgfSBcclxuXHJcbiAgXHJcbnJldHVybiAoXHJcbiAgICA8PiBcclxuICAgICAge2NvbnRlbnR9XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==