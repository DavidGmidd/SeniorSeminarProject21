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
      currentPhoneNum = _useState4[0],
      setPhoneNum = _useState4[1];

  function saveUserInfo() {}

  function cancel() {
    setName('');
    setEmail('');
    setLastName('');
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
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
          lineNumber: 62,
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
          lineNumber: 63,
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
          lineNumber: 64,
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
          lineNumber: 65,
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
          lineNumber: 66,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,
          onClick: function onClick() {
            cancel();
          },
          children: " Cancel "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.crushInput
          /* onChange={e => { setTitle(e.target.value) }} value={currentTitle}*/
          ,
          type: "text",
          "aria-label": "title",
          placeholder: "Crush Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
          lineNumber: 81,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button
          /* onClick={() => { complete() }} */
          ,
          children: " Cancel "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.Preference,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleSection,
          children: " Contact Preference:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.checkmark
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          children: ["Text:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "TextPreferred",
            type: "checkbox",
            onClick: function onClick() {
              contactPreference();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.checkmark
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "PhoneNumber",
          required: true,
          type: "tel",
          placeholder: "Phone Number",
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.phoneinput,
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
          onChange: function onChange(e) {
            setPhoneNum(e.target.value);
          },
          value: currentPhoneNum
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(CrushList, "8GoElqVU//AoWwZ7dxK6JmvnEgw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3J1c2hMaXN0LmpzIl0sIm5hbWVzIjpbIkNydXNoTGlzdCIsInVzZVN0YXRlIiwiY3VycmVudE5hbWUiLCJzZXROYW1lIiwiY3VycmVudExhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJjdXJyZW50RW1haWwiLCJzZXRFbWFpbCIsImN1cnJlbnRQaG9uZU51bSIsInNldFBob25lTnVtIiwic2F2ZVVzZXJJbmZvIiwiY2FuY2VsIiwic3VibWl0Q3J1c2hlcyIsImNvbnRhY3RQcmVmZXJlbmNlIiwic3R5bGVzIiwibWFpbiIsIlVzZXJJbmZvIiwidGl0bGVTZWN0aW9uIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJjcnVzaExpc3QiLCJjcnVzaElucHV0IiwiUHJlZmVyZW5jZSIsImNvbnRhaW5lciIsImNoZWNrbWFyayIsInBob25laW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUdEQyxzREFBUSxDQUFDLEVBQUQsQ0FIUDtBQUFBLE1BR3pCQyxXQUh5QjtBQUFBLE1BR1pDLE9BSFk7O0FBQUEsbUJBSU9GLHNEQUFRLENBQUMsRUFBRCxDQUpmO0FBQUEsTUFJekJHLGVBSnlCO0FBQUEsTUFJUkMsV0FKUTs7QUFBQSxtQkFLQ0osc0RBQVEsQ0FBQyxFQUFELENBTFQ7QUFBQSxNQUt6QkssWUFMeUI7QUFBQSxNQUtYQyxRQUxXOztBQUFBLG1CQU1NTixzREFBUSxDQUFDLE9BQUQsQ0FOZDtBQUFBLE1BTTFCTyxlQU4wQjtBQUFBLE1BTVRDLFdBTlM7O0FBUXBDLFdBQVNDLFlBQVQsR0FBdUIsQ0FFdEI7O0FBRUQsV0FBU0MsTUFBVCxHQUFpQjtBQUViUixXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FJLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUYs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TyxtQkFBUyxFQUFHYixvRUFBTSxDQUFDWSxTQUExQjtBQUFBLDJDQUNBO0FBQU8sY0FBRSxFQUFDLGVBQVY7QUFBMEIsZ0JBQUksRUFBQyxVQUEvQjtBQUEwQyxtQkFBTyxFQUFFLG1CQUFNO0FBQUNiLCtCQUFpQjtBQUFHO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFFQTtBQUFNLHFCQUFTLEVBQUdDLG9FQUFNLENBQUNhO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBELGVBV0M7QUFBTyxZQUFFLEVBQUMsYUFBVjtBQUF3QixrQkFBUSxNQUFoQztBQUFpQyxjQUFJLEVBQUMsS0FBdEM7QUFBNEMscUJBQVcsRUFBQyxjQUF4RDtBQUF1RSxtQkFBUyxFQUFFYixvRUFBTSxDQUFDYyxVQUF6RjtBQUFxRyxpQkFBTyxFQUFDLDRCQUE3RztBQUEwSSxrQkFBUSxFQUFFLGtCQUFBVCxDQUFDLEVBQUk7QUFBRVYsdUJBQVcsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUE2QixXQUF4TDtBQUEwTCxlQUFLLEVBQUViO0FBQWpNO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZBO0FBaURIOztHQTlGdUJSLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2RiNjI3MDgxOWM4YzlhZWI3MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENydXNoTGlzdCgpIHtcclxuXHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBbY3VycmVudE5hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRMYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3RbY3VycmVudFBob25lTnVtLCBzZXRQaG9uZU51bV0gPSB1c2VTdGF0ZSgnZmFsc2UnKVxyXG5cclxuZnVuY3Rpb24gc2F2ZVVzZXJJbmZvKCl7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWwoKXtcclxuXHJcbiAgICBzZXROYW1lKCcnKVxyXG4gICAgc2V0RW1haWwoJycpXHJcbiAgICBzZXRMYXN0TmFtZSgnJylcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdENydXNoZXMoKXtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RQcmVmZXJlbmNlKCl7XHJcblxyXG4vKiAvLyBHZXQgdGhlIGNoZWNrYm94XHJcbmNvbnN0IGNoZWNrRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkVtYWlsUHJlZmZlcmVkXCIpO1xyXG5jb25zdCAgY2hlY2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUZXh0UHJlZmZlcmVkXCIpO1xyXG4vLyBHZXQgdGhlIG91dHB1dCB0ZXh0XHJcbmNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQaG9uZU51bWJlclwiKTtcclxuY29uc3QgdGhhbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUaGFua3NcIik7XHJcblxyXG4vLyBJZiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgZGlzcGxheSB0aGUgb3V0cHV0IHRleHRcclxuaWYgKGNoZWNrRW1haWwuY2hlY2tlZCA9PSB0cnVlKXtcclxuICAgIHRoYW5rcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxufSBpZiAoY2hlY2tUZXh0LmNoZWNrZWQgPT0gdHJ1ZSl7XHJcbiAgICBwaG9uZU51bS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICB9IGVsc2Uge1xyXG5cclxuICAgIH0gKi9cclxufVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBhbnRoZXIgQ3J1c2ggTGlzdDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlVzZXJJbmZvIH0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9IHtzdHlsZXMudGl0bGVTZWN0aW9ufT4gWW91ciBJbmZvOjwvaDI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuaW5wdXR9IG9uQ2hhbmdlPXtlID0+IHsgc2V0TmFtZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnROYW1lfSB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJGaXJzdCBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9e2UgPT4geyBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRMYXN0TmFtZX0gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiTGFzdCBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9e2UgPT4geyBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRFbWFpbH0gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiRW1haWwgYWRkcmVzc1wiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7IHNhdmVVc2VySW5mbygpIH19ZGlzYWJsZWQ9e2N1cnJlbnROYW1lID09PSAnJyB8fCBjdXJyZW50TGFzdE5hbWUgPT09ICcnIHx8IGN1cnJlbnRFbWFpbCA9PT0gJyd9PiBTYXZlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4geyBjYW5jZWwoKX19ID4gQ2FuY2VsIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3J1c2hMaXN0IH0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9IHtzdHlsZXMudGl0bGVTZWN0aW9ufSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb2xsYXBzaWJsZVwiPllvdXIgQ3J1c2hlczo8L2gyPiAgXHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9ICAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gIC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAgLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4geyBzdWJtaXRDcnVzaGVzKCkgfX0gLypkaXNhYmxlZD17Y3VycmVudFRpdGxlID09PSAnJ30gKi8+IFN1Ym1pdCBDcnVzaCBMaXN0IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0vKiBvbkNsaWNrPXsoKSA9PiB7IGNvbXBsZXRlKCkgfX0gKi8+IENhbmNlbCA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5QcmVmZXJlbmNlfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ge3N0eWxlcy50aXRsZVNlY3Rpb259PiBDb250YWN0IFByZWZlcmVuY2U6PC9oMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9IHtzdHlsZXMuY29udGFpbmVyfT5FbWFpbFxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJFbWFpbFByZWZlcnJlZFwidHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17KCkgPT4ge2NvbnRhY3RQcmVmZXJlbmNlKCl9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ge3N0eWxlcy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ge3N0eWxlcy5jb250YWluZXJ9PlRleHQ6XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIlRleHRQcmVmZXJyZWRcIiB0eXBlPVwiY2hlY2tib3hcIiBvbkNsaWNrPXsoKSA9PiB7Y29udGFjdFByZWZlcmVuY2UoKX19Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSB7c3R5bGVzLmNoZWNrbWFya30+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPiBcclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiUGhvbmVOdW1iZXJcIiByZXF1aXJlZCB0eXBlPVwidGVsXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5waG9uZWlucHV0fSBwYXR0ZXJuPVwiWzAtOV17M30tWzAtOV17M30tWzAtOV17NH1cIiBvbkNoYW5nZT17ZSA9PiB7IHNldFBob25lTnVtKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFBob25lTnVtfS8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==