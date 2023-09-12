webpackHotUpdate_N_E("pages/login",{

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: registerUser, login, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant stripe\\frontend\\components\\auth.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* /lib/auth.js */




var API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //register a new user

var registerUser = function registerUser(username, email, password) {
  //prevent function from being ran on the server
  if (false) {}

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(API_URL, "/auth/local/register"), {
      username: username,
      email: email,
      password: password
    }).then(function (res) {
      //set token response from Strapi for server validation
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("token", res.data.jwt);
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("username", username); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    })["catch"](function (error) {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
var login = function login(identifier, password) {
  //prevent function from being ran on the server
  if (false) {}

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(API_URL, "/auth/local/"), {
      identifier: identifier,
      password: password
    }).then(function (res) {
      //set token response from Strapi for server validation
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("token", res.data.jwt);
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("username", identifier); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    })["catch"](function (error) {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
var logout = function logout() {
  //remove token and user cookie
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("token");
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("username");
  delete window.__user; // sync logout between multiple windows

  window.localStorage.setItem("logout", Date.now()); //redirect to the home page

  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
}; //Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement

var withAuthSync = function withAuthSync(Component) {
  var _s = $RefreshSig$();

  var Wrapper = function Wrapper(props) {
    _s();

    var syncLogout = function syncLogout(event) {
      if (event.key === "logout") {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      window.addEventListener("storage", syncLogout);
      return function () {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);
    return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 12
      }
    }));
  };

  _s(Wrapper, "OD7bBpZva5O2jO+Puf00hKivP7c=");

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJlZ2lzdGVyVXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsIkNvb2tpZSIsInNldCIsImRhdGEiLCJqd3QiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJsb2dpbiIsImlkZW50aWZpZXIiLCJsb2dvdXQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJfX3VzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiRGF0ZSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIkNvbXBvbmVudCIsIldyYXBwZXIiLCJwcm9wcyIsInN5bmNMb2dvdXQiLCJldmVudCIsImtleSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbSIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBQW5ELEMsQ0FFQTs7QUFDTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBa0JDLFFBQWxCLEVBQStCO0FBQ3pEO0FBQ0EsYUFBbUMsRUFFbEM7O0FBQ0QsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxnREFBSyxDQUNGQyxJQURILFdBQ1daLE9BRFgsMkJBQzBDO0FBQUVLLGNBQVEsRUFBUkEsUUFBRjtBQUFZQyxXQUFLLEVBQUxBLEtB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RCxPQURtQzs7QUFvQnpDLE1BQUlELFNBQVMsQ0FBQ1UsZUFBZCxFQUErQjtBQUM3QlQsV0FBTyxDQUFDUyxlQUFSLEdBQTBCVixTQUFTLENBQUNVLGVBQXBDO0FBQ0Q7O0FBRUQsU0FBT1QsT0FBUDtBQUNELENBekJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjVhOTdjZGRlNmJiNzk3MDYyY2VjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvbGliL2F1dGguanMgKi9cblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG5cbi8vcmVnaXN0ZXIgYSBuZXcgdXNlclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9ICh1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gIC8vcHJldmVudCBmdW5jdGlvbiBmcm9tIGJlaW5nIHJhbiBvbiB0aGUgc2VydmVyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvbG9jYWwvcmVnaXN0ZXJgLCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXG4gICAgICAgIENvb2tpZS5zZXQoXCJ0b2tlblwiLCByZXMuZGF0YS5qd3QpO1xuICAgICAgICBDb29raWUuc2V0KFwidXNlcm5hbWVcIiwgdXNlcm5hbWUpO1xuXG4gICAgICAgIC8vcmVzb2x2ZSB0aGUgcHJvbWlzZSB0byBzZXQgbG9hZGluZyB0byBmYWxzZSBpbiBTaWduVXAgZm9ybVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIC8vcmVkaXJlY3QgYmFjayB0byBob21lIHBhZ2UgZm9yIHJlc3RhdXJhbmNlIHNlbGVjdGlvblxuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvL3JlamVjdCB0aGUgcHJvbWlzZSBhbmQgcGFzcyB0aGUgZXJyb3Igb2JqZWN0IGJhY2sgdG8gdGhlIGZvcm1cbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IChpZGVudGlmaWVyLCBwYXNzd29yZCkgPT4ge1xuICAvL3ByZXZlbnQgZnVuY3Rpb24gZnJvbSBiZWluZyByYW4gb24gdGhlIHNlcnZlclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvbG9jYWwvYCwgeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvL3NldCB0b2tlbiByZXNwb25zZSBmcm9tIFN0cmFwaSBmb3Igc2VydmVyIHZhbGlkYXRpb25cbiAgICAgICAgQ29va2llLnNldChcInRva2VuXCIsIHJlcy5kYXRhLmp3dCk7XG4gICAgICAgIENvb2tpZS5zZXQoXCJ1c2VybmFtZVwiLCBpZGVudGlmaWVyKTtcblxuICAgICAgICAvL3Jlc29sdmUgdGhlIHByb21pc2UgdG8gc2V0IGxvYWRpbmcgdG8gZmFsc2UgaW4gU2lnblVwIGZvcm1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW5jZSBzZWxlY3Rpb25cbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy9yZWplY3QgdGhlIHByb21pc2UgYW5kIHBhc3MgdGhlIGVycm9yIG9iamVjdCBiYWNrIHRvIHRoZSBmb3JtXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAvL3JlbW92ZSB0b2tlbiBhbmQgdXNlciBjb29raWVcbiAgQ29va2llLnJlbW92ZShcInRva2VuXCIpO1xuICBDb29raWUucmVtb3ZlKFwidXNlcm5hbWVcIik7XG4gIGRlbGV0ZSB3aW5kb3cuX191c2VyO1xuICAvLyBzeW5jIGxvZ291dCBiZXR3ZWVuIG11bHRpcGxlIHdpbmRvd3NcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9nb3V0XCIsIERhdGUubm93KCkpO1xuICAvL3JlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2VcbiAgUm91dGVyLnB1c2goXCIvXCIpO1xufTtcblxuLy9IaWdoZXIgT3JkZXIgQ29tcG9uZW50IHRvIHdyYXAgb3VyIHBhZ2VzIGFuZCBsb2dvdXQgc2ltdWx0YW5lb3VzbHkgbG9nZ2VkIGluIHRhYnNcbi8vIFRISVMgSVMgTk9UIFVTRUQgaW4gdGhlIHR1dG9yaWFsLCBvbmx5IHByb3ZpZGVkIGlmIHlvdSB3YW50ZWQgdG8gaW1wbGVtZW50XG5leHBvcnQgY29uc3Qgd2l0aEF1dGhTeW5jID0gKENvbXBvbmVudCkgPT4ge1xuICBjb25zdCBXcmFwcGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgc3luY0xvZ291dCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJsb2dvdXRcIikge1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBzeW5jTG9nb3V0KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHN5bmNMb2dvdXQpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2dvdXRcIik7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gIH07XG5cbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gIH1cblxuICByZXR1cm4gV3JhcHBlcjtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9