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
          children: ["Text", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
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
          className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3J1c2hMaXN0LmpzIl0sIm5hbWVzIjpbIkNydXNoTGlzdCIsInVzZVN0YXRlIiwiY3VycmVudE5hbWUiLCJzZXROYW1lIiwiY3VycmVudExhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJjdXJyZW50RW1haWwiLCJzZXRFbWFpbCIsImN1cnJlbnRDaGVjayIsInNldENoZWNrIiwic2F2ZVVzZXJJbmZvIiwiY2FuY2VsIiwic3VibWl0Q3J1c2hlcyIsImNvbnRhY3RQcmVmZXJlbmNlIiwic3R5bGVzIiwibWFpbiIsIlVzZXJJbmZvIiwidGl0bGVTZWN0aW9uIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJjcnVzaExpc3QiLCJjcnVzaElucHV0IiwiUHJlZmVyZW5jZSIsImNvbnRhaW5lciIsImNoZWNrbWFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBR0RDLHNEQUFRLENBQUMsRUFBRCxDQUhQO0FBQUEsTUFHekJDLFdBSHlCO0FBQUEsTUFHWkMsT0FIWTs7QUFBQSxtQkFJT0Ysc0RBQVEsQ0FBQyxFQUFELENBSmY7QUFBQSxNQUl6QkcsZUFKeUI7QUFBQSxNQUlSQyxXQUpROztBQUFBLG1CQUtDSixzREFBUSxDQUFDLEVBQUQsQ0FMVDtBQUFBLE1BS3pCSyxZQUx5QjtBQUFBLE1BS1hDLFFBTFc7O0FBQUEsbUJBTUFOLHNEQUFRLENBQUMsT0FBRCxDQU5SO0FBQUEsTUFNMUJPLFlBTjBCO0FBQUEsTUFNWkMsUUFOWTs7QUFRcEMsV0FBU0MsWUFBVCxHQUF1QixDQUV0Qjs7QUFFRCxXQUFTQyxNQUFULEdBQWlCO0FBRWJSLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQUksWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRixlQUFXLENBQUMsRUFBRCxDQUFY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LENBQUNZLFNBQTFCO0FBQUEsMENBQ0E7QUFBTyxjQUFFLEVBQUMsZUFBVjtBQUEwQixnQkFBSSxFQUFDLFVBQS9CO0FBQTBDLG1CQUFPLEVBQUUsbUJBQU07QUFBQ2IsK0JBQWlCO0FBQUc7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUVBO0FBQU0scUJBQVMsRUFBR0Msb0VBQU0sQ0FBQ2E7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEQsZUFXQztBQUFPLFlBQUUsRUFBQyxhQUFWO0FBQXdCLGtCQUFRLE1BQWhDO0FBQWlDLGNBQUksRUFBQyxLQUF0QztBQUE0QyxxQkFBVyxFQUFDLGNBQXhEO0FBQXVFLG1CQUFTLEVBQUViLG9FQUFNLENBQUNZLFNBQXpGO0FBQW9HLGlCQUFPLEVBQUM7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkE7QUFpREg7O0dBOUZ1QjFCLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODM4YzZmNWUwZDk4OTA2NTg2ZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9TdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENydXNoTGlzdCgpIHtcclxuXHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBbY3VycmVudE5hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRMYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3RbY3VycmVudENoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZSgnZmFsc2UnKVxyXG5cclxuZnVuY3Rpb24gc2F2ZVVzZXJJbmZvKCl7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWwoKXtcclxuXHJcbiAgICBzZXROYW1lKCcnKVxyXG4gICAgc2V0RW1haWwoJycpXHJcbiAgICBzZXRMYXN0TmFtZSgnJylcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdENydXNoZXMoKXtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RQcmVmZXJlbmNlKCl7XHJcblxyXG4vKiAvLyBHZXQgdGhlIGNoZWNrYm94XHJcbmNvbnN0IGNoZWNrRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkVtYWlsUHJlZmZlcmVkXCIpO1xyXG5jb25zdCAgY2hlY2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUZXh0UHJlZmZlcmVkXCIpO1xyXG4vLyBHZXQgdGhlIG91dHB1dCB0ZXh0XHJcbmNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQaG9uZU51bWJlclwiKTtcclxuY29uc3QgdGhhbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUaGFua3NcIik7XHJcblxyXG4vLyBJZiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgZGlzcGxheSB0aGUgb3V0cHV0IHRleHRcclxuaWYgKGNoZWNrRW1haWwuY2hlY2tlZCA9PSB0cnVlKXtcclxuICAgIHRoYW5rcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxufSBpZiAoY2hlY2tUZXh0LmNoZWNrZWQgPT0gdHJ1ZSl7XHJcbiAgICBwaG9uZU51bS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICB9IGVsc2Uge1xyXG5cclxuICAgIH0gKi9cclxufVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBhbnRoZXIgQ3J1c2ggTGlzdDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlVzZXJJbmZvIH0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9IHtzdHlsZXMudGl0bGVTZWN0aW9ufT4gWW91ciBJbmZvOjwvaDI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuaW5wdXR9IG9uQ2hhbmdlPXtlID0+IHsgc2V0TmFtZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnROYW1lfSB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJGaXJzdCBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9e2UgPT4geyBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRMYXN0TmFtZX0gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiTGFzdCBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9e2UgPT4geyBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRFbWFpbH0gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiRW1haWwgYWRkcmVzc1wiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7IHNhdmVVc2VySW5mbygpIH19ZGlzYWJsZWQ9e2N1cnJlbnROYW1lID09PSAnJyB8fCBjdXJyZW50TGFzdE5hbWUgPT09ICcnIHx8IGN1cnJlbnRFbWFpbCA9PT0gJyd9PiBTYXZlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4geyBjYW5jZWwoKX19ID4gQ2FuY2VsIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3J1c2hMaXN0IH0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9IHtzdHlsZXMudGl0bGVTZWN0aW9ufSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb2xsYXBzaWJsZVwiPllvdXIgQ3J1c2hlczo8L2gyPiAgXHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9ICAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gIC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAgLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4geyBzdWJtaXRDcnVzaGVzKCkgfX0gLypkaXNhYmxlZD17Y3VycmVudFRpdGxlID09PSAnJ30gKi8+IFN1Ym1pdCBDcnVzaCBMaXN0IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0vKiBvbkNsaWNrPXsoKSA9PiB7IGNvbXBsZXRlKCkgfX0gKi8+IENhbmNlbCA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5QcmVmZXJlbmNlfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ge3N0eWxlcy50aXRsZVNlY3Rpb259PiBDb250YWN0IFByZWZlcmVuY2U6PC9oMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9IHtzdHlsZXMuY29udGFpbmVyfT5FbWFpbFxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJFbWFpbFByZWZlcnJlZFwidHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17KCkgPT4ge2NvbnRhY3RQcmVmZXJlbmNlKCl9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ge3N0eWxlcy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ge3N0eWxlcy5jb250YWluZXJ9PlRleHRcclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiVGV4dFByZWZlcnJlZFwiIHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9eygpID0+IHtjb250YWN0UHJlZmVyZW5jZSgpfX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9IHtzdHlsZXMuY2hlY2ttYXJrfT48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+IFxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJQaG9uZU51bWJlclwiIHJlcXVpcmVkIHR5cGU9XCJ0ZWxcIiBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gcGF0dGVybj1cIlswLTldezN9LVswLTldezN9LVswLTldezR9XCIvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=