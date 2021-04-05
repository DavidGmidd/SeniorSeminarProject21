webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/CrushList.js":
/*!****************************!*\
  !*** ./pages/CrushList.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrushList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Styles/Home.module.css */ "./pages/Styles/Home.module.css");
/* harmony import */ var _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");


var _jsxFileName = "C:\\Users\\dgny9\\Desktop\\Spring2021\\SeminarCS\\Project\\WebApp\\SeniorSeminarProject21\\pages\\CrushList.js",
    _s = $RefreshSig$();






function CrushList() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      currentName = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      currentLastName = _useState2[0],
      setLastName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      currentEmail = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('false'),
      currentCheck = _useState4[0],
      setCheck = _useState4[1];

  function saveUserInfo() {}

  function cancel() {
    setName('');
    setEmail('');
    setName('');
  }

  function submitCrushes() {}

  function contactPreference() {
    /* // Get the checkbox
    const checkEmail = document.getElementById("EmailPreffered");
    const  checkText = document.getElementById("TextPreffered");
    // Get the output text
    const phoneNum = document.getElementById("PhoneNumber");
    const thanks = document.getElementById("Thanks");
    
    // If the checkbox is checked, display the output text
    if (checkEmail.checked == true){
        thanks.style.display = "block";
    
    } if (checkText.checked == true){
        phoneNum.style.display = "block";
    
      } else {
    
        } */
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Panther Crush List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.UserInfo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleSection,
          children: " Your Info:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
          onChange: function onChange(e) {
            setName(e.target.value);
          },
          value: currentName,
          type: "text",
          "aria-label": "title",
          placeholder: "First Name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
          onChange: function onChange(e) {
            setLastName(e.target.value);
          },
          value: currentLastName,
          type: "text",
          "aria-label": "title",
          placeholder: "Last Name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
          onChange: function onChange(e) {
            setEmail(e.target.value);
          },
          value: currentEmail,
          type: "text",
          "aria-label": "title",
          placeholder: "Email address",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,
          onClick: function onClick() {
            saveUserInfo();
          },
          disabled: currentName === '' || currentLastName === '' || currentEmail === '',
          children: " Save "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,
          onClick: function onClick() {
            cancel();
          },
          children: " Cancel "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushList,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleSection,
          type: "button",
          "class": "collapsible",
          children: "Your Crushes:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,
          onClick: function onClick() {
            submitCrushes();
          }
          /*disabled={currentTitle === ''} */
          ,
          children: " Submit Crush List "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "reset",
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button
          /* onClick={() => { complete() }} */

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.Preference,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleSection,
          children: " Contact Preference:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "EmailPreferred",
            type: "checkbox",
            onClick: function onClick() {
              contactPreference();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.checkmark
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          children: ["Text", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "TextPreferred",
            type: "checkbox",
            onClick: function onClick() {
              contactPreference();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.checkmark
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          id: "Thanks",
          children: "Thank you!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "PhoneNumber",
          required: true,
          type: "",
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.phoneInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(CrushList, "WFqPi8o4v5CIwlWilausloSPwJE=");

_c = CrushList;

var _c;

$RefreshReg$(_c, "CrushList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3J1c2hMaXN0LmpzIl0sIm5hbWVzIjpbIkNydXNoTGlzdCIsInVzZVN0YXRlIiwiY3VycmVudE5hbWUiLCJzZXROYW1lIiwiY3VycmVudExhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJjdXJyZW50RW1haWwiLCJzZXRFbWFpbCIsImN1cnJlbnRDaGVjayIsInNldENoZWNrIiwic2F2ZVVzZXJJbmZvIiwiY2FuY2VsIiwic3VibWl0Q3J1c2hlcyIsImNvbnRhY3RQcmVmZXJlbmNlIiwic3R5bGVzIiwibWFpbiIsIlVzZXJJbmZvIiwidGl0bGVTZWN0aW9uIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJjcnVzaExpc3QiLCJjcnVzaElucHV0IiwiUHJlZmVyZW5jZSIsImNvbnRhaW5lciIsImNoZWNrbWFyayIsInBob25lSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUdEQyxzREFBUSxDQUFDLEVBQUQsQ0FIUDtBQUFBLE1BR3pCQyxXQUh5QjtBQUFBLE1BR1pDLE9BSFk7O0FBQUEsbUJBSU9GLHNEQUFRLENBQUMsRUFBRCxDQUpmO0FBQUEsTUFJekJHLGVBSnlCO0FBQUEsTUFJUkMsV0FKUTs7QUFBQSxtQkFLQ0osc0RBQVEsQ0FBQyxFQUFELENBTFQ7QUFBQSxNQUt6QkssWUFMeUI7QUFBQSxNQUtYQyxRQUxXOztBQUFBLG1CQU1BTixzREFBUSxDQUFDLE9BQUQsQ0FOUjtBQUFBLE1BTTFCTyxZQU4wQjtBQUFBLE1BTVpDLFFBTlk7O0FBUXBDLFdBQVNDLFlBQVQsR0FBdUIsQ0FFdEI7O0FBRUQsV0FBU0MsTUFBVCxHQUFpQjtBQUNiUixXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FJLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUosV0FBTyxD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T0M7QUFBTyxtQkFBUyxFQUFHYixvRUFBTSxDQUFDWSxTQUExQjtBQUFBLDBDQUNBO0FBQU8sY0FBRSxFQUFDLGVBQVY7QUFBMEIsZ0JBQUksRUFBQyxVQUEvQjtBQUEwQyxtQkFBTyxFQUFFLG1CQUFNO0FBQUNiLCtCQUFpQjtBQUFHO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFFQTtBQUFNLHFCQUFTLEVBQUdDLG9FQUFNLENBQUNhO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBELGVBWUM7QUFBRyxZQUFFLEVBQUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRCxlQWFDO0FBQU8sWUFBRSxFQUFDLGFBQVY7QUFBd0Isa0JBQVEsTUFBaEM7QUFBaUMsY0FBSSxFQUFDLEVBQXRDO0FBQXlDLG1CQUFTLEVBQUViLG9FQUFNLENBQUNjO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZBO0FBbURIOztHQS9GdUI1QixTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlY2QzNGUyMGY3YTg3NTMyZTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcnVzaExpc3QoKSB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgW2N1cnJlbnROYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50TGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0W2N1cnJlbnRDaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoJ2ZhbHNlJylcclxuXHJcbmZ1bmN0aW9uIHNhdmVVc2VySW5mbygpe1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsKCl7XHJcbiAgICBzZXROYW1lKCcnKVxyXG4gICAgc2V0RW1haWwoJycpXHJcbiAgICBzZXROYW1lKCcnKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0Q3J1c2hlcygpe1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdFByZWZlcmVuY2UoKXtcclxuXHJcbi8qIC8vIEdldCB0aGUgY2hlY2tib3hcclxuY29uc3QgY2hlY2tFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRW1haWxQcmVmZmVyZWRcIik7XHJcbmNvbnN0ICBjaGVja1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRleHRQcmVmZmVyZWRcIik7XHJcbi8vIEdldCB0aGUgb3V0cHV0IHRleHRcclxuY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBob25lTnVtYmVyXCIpO1xyXG5jb25zdCB0aGFua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRoYW5rc1wiKTtcclxuXHJcbi8vIElmIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBkaXNwbGF5IHRoZSBvdXRwdXQgdGV4dFxyXG5pZiAoY2hlY2tFbWFpbC5jaGVja2VkID09IHRydWUpe1xyXG4gICAgdGhhbmtzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG59IGlmIChjaGVja1RleHQuY2hlY2tlZCA9PSB0cnVlKXtcclxuICAgIHBob25lTnVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgfSAqL1xyXG59XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UGFudGhlciBDcnVzaCBMaXN0PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlckluZm8gfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ge3N0eWxlcy50aXRsZVNlY3Rpb259PiBZb3VyIEluZm86PC9oMj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9e2UgPT4geyBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudE5hbWV9IHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkZpcnN0IE5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmlucHV0fSBvbkNoYW5nZT17ZSA9PiB7IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudExhc3ROYW1lfSB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJMYXN0IE5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmlucHV0fSBvbkNoYW5nZT17ZSA9PiB7IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudEVtYWlsfSB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJFbWFpbCBhZGRyZXNzXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHsgc2F2ZVVzZXJJbmZvKCkgfX1kaXNhYmxlZD17Y3VycmVudE5hbWUgPT09ICcnIHx8IGN1cnJlbnRMYXN0TmFtZSA9PT0gJycgfHwgY3VycmVudEVtYWlsID09PSAnJ30+IFNhdmUgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7IGNhbmNlbCgpfX0gPiBDYW5jZWwgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcnVzaExpc3QgfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ge3N0eWxlcy50aXRsZVNlY3Rpb259IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvbGxhcHNpYmxlXCI+WW91ciBDcnVzaGVzOjwvaDI+ICBcclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gIC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAgLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9ICAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7IHN1Ym1pdENydXNoZXMoKSB9fSAvKmRpc2FibGVkPXtjdXJyZW50VGl0bGUgPT09ICcnfSAqLz4gU3VibWl0IENydXNoIExpc3QgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyZXNldCcgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufS8qIG9uQ2xpY2s9eygpID0+IHsgY29tcGxldGUoKSB9fSAqLyAvPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5QcmVmZXJlbmNlfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ge3N0eWxlcy50aXRsZVNlY3Rpb259PiBDb250YWN0IFByZWZlcmVuY2U6PC9oMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9IHtzdHlsZXMuY29udGFpbmVyfT5FbWFpbFxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJFbWFpbFByZWZlcnJlZFwidHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17KCkgPT4ge2NvbnRhY3RQcmVmZXJlbmNlKCl9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ge3N0eWxlcy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ge3N0eWxlcy5jb250YWluZXJ9PlRleHRcclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiVGV4dFByZWZlcnJlZFwiIHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9eygpID0+IHtjb250YWN0UHJlZmVyZW5jZSgpfX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9IHtzdHlsZXMuY2hlY2ttYXJrfT48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+IFxyXG5cclxuICAgICAgICAgICAgPHAgaWQ9XCJUaGFua3NcIj5UaGFuayB5b3UhPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJQaG9uZU51bWJlclwiIHJlcXVpcmVkIHR5cGU9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5waG9uZUlucHV0fS8+IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=