webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_user_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user/Header */ "./components/user/Header.jsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Index() {
  var _useLocalStorage = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useLocalStorage"])("login", false),
      _useLocalStorage2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLocalStorage, 2),
      login = _useLocalStorage2[0],
      setLogin = _useLocalStorage2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      user = _useState[0],
      setUsers = _useState[1];

  var _useLocalStorage3 = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useLocalStorage"])("admin", false),
      _useLocalStorage4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLocalStorage3, 2),
      admin = _useLocalStorage4[0],
      setAdmin = _useLocalStorage4[1];

  var _useLocalStorage5 = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useLocalStorage"])("username", ""),
      _useLocalStorage6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLocalStorage5, 2),
      username = _useLocalStorage6[0],
      setUsername = _useLocalStorage6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!login || admin) location.href = "/login";
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/user?phone=".concat(username)).then(function (r) {
      setUsers(r.data.result);
    });
  }, []);
  return __jsx("section", null, __jsx(_components_user_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("section", {
    style: {
      width: "100vw",
      textAlign: "center"
    },
    className: "text-center vsc-initialized"
  }, __jsx("div", {
    style: {
      marginTop: "5em",
      padding: "1em"
    }
  }, __jsx("i", {
    width: "72",
    height: "72",
    className: "mb-4 material-icons"
  }, "home"), __jsx("h1", {
    className: "h3 mb-3 font-weight-normal"
  }, "Hello ", username, " !"), user.tasks ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Your tasks are :", user.tasks.map(function (task, index) {
    return __jsx("div", {
      style: {
        marginTop: "1em"
      },
      key: index,
      className: "ml-auto mr-auto card container"
    }, __jsx("div", {
      className: "card-body",
      style: {
        textAlign: "left"
      }
    }, __jsx("b", null, "Task Name"), __jsx("br", null), task.taskName, __jsx("br", null), __jsx("b", null, "Address"), __jsx("br", null), task.address, __jsx("br", null), __jsx("b", null, "Task Assigned At"), __jsx("br", null), moment__WEBPACK_IMPORTED_MODULE_4___default()(task.createdAt).format("MMMM Do YYYY, h:mm:ss a")));
  })) : "You have no tasks assigned !", __jsx("p", {
    className: "mt-5 mb-3 text-muted"
  }, "\xA9 2019 - Homvery"))));
}

/***/ })

})
//# sourceMappingURL=index.js.87e04351842f3ba9343e.hot-update.js.map