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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            id: "PhoneNumber",
            required: true,
            type: "tel",
            placeholder: "Phone Number",
            className: _pages_Styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3J1c2hMaXN0LmpzIl0sIm5hbWVzIjpbIkNydXNoTGlzdCIsInVzZVN0YXRlIiwiY3VycmVudE5hbWUiLCJzZXROYW1lIiwiY3VycmVudExhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJjdXJyZW50RW1haWwiLCJzZXRFbWFpbCIsImN1cnJlbnRDaGVjayIsInNldENoZWNrIiwic2F2ZVVzZXJJbmZvIiwiY2FuY2VsIiwic3VibWl0Q3J1c2hlcyIsImNvbnRhY3RQcmVmZXJlbmNlIiwic3R5bGVzIiwibWFpbiIsIlVzZXJJbmZvIiwidGl0bGVTZWN0aW9uIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJjcnVzaExpc3QiLCJjcnVzaElucHV0IiwiUHJlZmVyZW5jZSIsImNvbnRhaW5lciIsImNoZWNrbWFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBR0RDLHNEQUFRLENBQUMsRUFBRCxDQUhQO0FBQUEsTUFHekJDLFdBSHlCO0FBQUEsTUFHWkMsT0FIWTs7QUFBQSxtQkFJT0Ysc0RBQVEsQ0FBQyxFQUFELENBSmY7QUFBQSxNQUl6QkcsZUFKeUI7QUFBQSxNQUlSQyxXQUpROztBQUFBLG1CQUtDSixzREFBUSxDQUFDLEVBQUQsQ0FMVDtBQUFBLE1BS3pCSyxZQUx5QjtBQUFBLE1BS1hDLFFBTFc7O0FBQUEsbUJBTUFOLHNEQUFRLENBQUMsT0FBRCxDQU5SO0FBQUEsTUFNMUJPLFlBTjBCO0FBQUEsTUFNWkMsUUFOWTs7QUFRcEMsV0FBU0MsWUFBVCxHQUF1QixDQUV0Qjs7QUFFRCxXQUFTQyxNQUFULEdBQWlCO0FBRWJSLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQUksWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRixlQUFXLENBQUMsRUFBRCxDQUFY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LENBQUNZLFNBQTFCO0FBQUEsMENBQ0E7QUFBTyxjQUFFLEVBQUMsZUFBVjtBQUEwQixnQkFBSSxFQUFDLFVBQS9CO0FBQTBDLG1CQUFPLEVBQUUsbUJBQU07QUFBQ2IsK0JBQWlCO0FBQUc7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUVBO0FBQU0scUJBQVMsRUFBR0Msb0VBQU0sQ0FBQ2E7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQSxlQUdBO0FBQU8sY0FBRSxFQUFDLGFBQVY7QUFBd0Isb0JBQVEsTUFBaEM7QUFBaUMsZ0JBQUksRUFBQyxLQUF0QztBQUE0Qyx1QkFBVyxFQUFDLGNBQXhEO0FBQXVFLHFCQUFTLEVBQUViLG9FQUFNLENBQUNZLFNBQXpGO0FBQW9HLG1CQUFPLEVBQUM7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZBO0FBZ0RIOztHQTdGdUIxQixTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzOWFkOTgyNzVlMzdmMjA1OTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZXMvU3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcnVzaExpc3QoKSB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgW2N1cnJlbnROYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50TGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0W2N1cnJlbnRDaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoJ2ZhbHNlJylcclxuXHJcbmZ1bmN0aW9uIHNhdmVVc2VySW5mbygpe1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsKCl7XHJcblxyXG4gICAgc2V0TmFtZSgnJylcclxuICAgIHNldEVtYWlsKCcnKVxyXG4gICAgc2V0TGFzdE5hbWUoJycpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRDcnVzaGVzKCl7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWN0UHJlZmVyZW5jZSgpe1xyXG5cclxuLyogLy8gR2V0IHRoZSBjaGVja2JveFxyXG5jb25zdCBjaGVja0VtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJFbWFpbFByZWZmZXJlZFwiKTtcclxuY29uc3QgIGNoZWNrVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGV4dFByZWZmZXJlZFwiKTtcclxuLy8gR2V0IHRoZSBvdXRwdXQgdGV4dFxyXG5jb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUGhvbmVOdW1iZXJcIik7XHJcbmNvbnN0IHRoYW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGhhbmtzXCIpO1xyXG5cclxuLy8gSWYgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGRpc3BsYXkgdGhlIG91dHB1dCB0ZXh0XHJcbmlmIChjaGVja0VtYWlsLmNoZWNrZWQgPT0gdHJ1ZSl7XHJcbiAgICB0aGFua3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbn0gaWYgKGNoZWNrVGV4dC5jaGVja2VkID09IHRydWUpe1xyXG4gICAgcGhvbmVOdW0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgfSBlbHNlIHtcclxuXHJcbiAgICB9ICovXHJcbn1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5QYW50aGVyIENydXNoIExpc3Q8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Vc2VySW5mbyB9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSB7c3R5bGVzLnRpdGxlU2VjdGlvbn0+IFlvdXIgSW5mbzo8L2gyPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmlucHV0fSBvbkNoYW5nZT17ZSA9PiB7IHNldE5hbWUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50TmFtZX0gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiRmlyc3QgTmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuaW5wdXR9IG9uQ2hhbmdlPXtlID0+IHsgc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50TGFzdE5hbWV9IHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkxhc3QgTmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuaW5wdXR9IG9uQ2hhbmdlPXtlID0+IHsgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50RW1haWx9IHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkVtYWlsIGFkZHJlc3NcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4geyBzYXZlVXNlckluZm8oKSB9fWRpc2FibGVkPXtjdXJyZW50TmFtZSA9PT0gJycgfHwgY3VycmVudExhc3ROYW1lID09PSAnJyB8fCBjdXJyZW50RW1haWwgPT09ICcnfT4gU2F2ZSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHsgY2FuY2VsKCl9fSA+IENhbmNlbCA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNydXNoTGlzdCB9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSB7c3R5bGVzLnRpdGxlU2VjdGlvbn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29sbGFwc2libGVcIj5Zb3VyIENydXNoZXM6PC9oMj4gIFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAgLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gLyogb25DaGFuZ2U9e2UgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gdmFsdWU9e2N1cnJlbnRUaXRsZX0qLyB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyID0gXCJDcnVzaCBFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9ICAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ge3N0eWxlcy5jcnVzaElucHV0fSAvKiBvbkNoYW5nZT17ZSA9PiB7IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9fSB2YWx1ZT17Y3VycmVudFRpdGxlfSovIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIkNydXNoIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSB7c3R5bGVzLmNydXNoSW5wdXR9IC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9IHtzdHlsZXMuY3J1c2hJbnB1dH0gIC8qIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpIH19IHZhbHVlPXtjdXJyZW50VGl0bGV9Ki8gdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiQ3J1c2ggRW1haWxcIiAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHsgc3VibWl0Q3J1c2hlcygpIH19IC8qZGlzYWJsZWQ9e2N1cnJlbnRUaXRsZSA9PT0gJyd9ICovPiBTdWJtaXQgQ3J1c2ggTGlzdCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259Lyogb25DbGljaz17KCkgPT4geyBjb21wbGV0ZSgpIH19ICovPiBDYW5jZWwgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMuUHJlZmVyZW5jZX0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9IHtzdHlsZXMudGl0bGVTZWN0aW9ufT4gQ29udGFjdCBQcmVmZXJlbmNlOjwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSB7c3R5bGVzLmNvbnRhaW5lcn0+RW1haWxcclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiRW1haWxQcmVmZXJyZWRcInR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9eygpID0+IHtjb250YWN0UHJlZmVyZW5jZSgpfX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9IHtzdHlsZXMuY2hlY2ttYXJrfT48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9IHtzdHlsZXMuY29udGFpbmVyfT5UZXh0XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIlRleHRQcmVmZXJyZWRcIiB0eXBlPVwiY2hlY2tib3hcIiBvbkNsaWNrPXsoKSA9PiB7Y29udGFjdFByZWZlcmVuY2UoKX19Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSB7c3R5bGVzLmNoZWNrbWFya30+PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJQaG9uZU51bWJlclwiIHJlcXVpcmVkIHR5cGU9XCJ0ZWxcIiBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gcGF0dGVybj1cIlswLTldezN9LVswLTldezN9LVswLTldezR9XCIvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=