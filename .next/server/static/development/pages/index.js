module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/user/Header.jsx":
/*!************************************!*\
  !*** ./components/user/Header.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Header() {
  return __jsx("nav", {
    style: {
      position: "absolute",
      top: "0",
      width: "100%"
    },
    className: "navbar navbar-expand-md navbar-light bg-light"
  }, __jsx("a", {
    className: "navbar-brand",
    href: "/"
  }, "Homvery"), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, __jsx("span", {
    className: "navbar-toggler-icon"
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, __jsx("form", {
    className: "form-inline my-2 my-lg-0 ml-auto"
  }, __jsx("button", {
    className: "btn btn-outline-success my-2 my-sm-0",
    onClick: () => {
      localStorage.clear();
      location.href = "/login";
    }
  }, "Logout"))));
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_user_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/user/Header */ "./components/user/Header.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index() {
  const [login, setLogin] = Object(react_use__WEBPACK_IMPORTED_MODULE_1__["useLocalStorage"])("login", false);
  const {
    0: user,
    1: setUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [admin, setAdmin] = Object(react_use__WEBPACK_IMPORTED_MODULE_1__["useLocalStorage"])("admin", false);
  const [username, setUsername] = Object(react_use__WEBPACK_IMPORTED_MODULE_1__["useLocalStorage"])("username", "");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!login || admin) location.href = "/login";
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/user?phone=${username}`).then(r => {
      setUsers(r.data.result);
    });
  }, []);
  return __jsx("section", null, __jsx(_components_user_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("section", {
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
  }, "Hello ", username, " !"), user.tasks ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Your tasks are :", user.tasks.map((task, index) => __jsx("div", {
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
  }, __jsx("b", null, "Task Name"), __jsx("br", null), task.taskName, __jsx("br", null), __jsx("b", null, "Address"), __jsx("br", null), task.address, __jsx("br", null), __jsx("b", null, "Task Assigned At"), __jsx("br", null), moment__WEBPACK_IMPORTED_MODULE_3___default()(task.createdAt).format("MMMM Do YYYY, h:mm:ss a"))))) : "You have no tasks assigned !", __jsx("p", {
    className: "mt-5 mb-3 text-muted"
  }, "\xA9 2019 - Homvery"))));
}

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akash.joshi/code/homvery/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-use":
/*!****************************!*\
  !*** external "react-use" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map