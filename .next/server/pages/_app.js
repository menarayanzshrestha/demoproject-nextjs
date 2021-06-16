/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.json":
/*!***********************!*\
  !*** ./firebase.json ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiKey":"AIzaSyDvOjuu8jr5xVBRXzci47o19s-NNcMMKCw","authDomain":"amtproject-ba048.firebaseapp.com","projectId":"amtproject-ba048","storageBucket":"amtproject-ba048.appspot.com","messagingSenderId":"718510788349","appId":"1:718510788349:web:c724b605f0e93358017894","measurementId":"G-YPZD0YE382"}');

/***/ }),

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/media/narayanz/New Volume/Other Projects/nextjs/midAdminMaker/auth.js\";\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = ({\n  children\n}) => {\n  (0,_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.default)();\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    return firebase_app__WEBPACK_IMPORTED_MODULE_4___default().auth().onIdTokenChanged(async user => {\n      console.log(\"auth changed\");\n      console.log(user ? user.id : \"Nothing\");\n\n      if (!user) {\n        setUser(null);\n        nookies__WEBPACK_IMPORTED_MODULE_2___default().set(undefined, \"token\", \"\", {});\n        return;\n      }\n\n      const token = await user.getIdToken();\n      setUser(user);\n      nookies__WEBPACK_IMPORTED_MODULE_2___default().set(undefined, \"token\", token, {});\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, undefined);\n};\nconst useAuth = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljZS1uZXh0anMvLi9hdXRoLmpzPzBiZDgiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJmaXJlYmFzZUNsaWVudCIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZSIsIm9uSWRUb2tlbkNoYW5nZWQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJub29raWVzIiwidW5kZWZpbmVkIiwidG9rZW4iLCJnZXRJZFRva2VuIiwidXNlQXV0aCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBakM7QUFFTyxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDNUNDLDBEQUFjO0FBQ2QsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLElBQUQsQ0FBaEM7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsV0FBT0Msd0RBQUEsR0FBZ0JDLGdCQUFoQixDQUFpQyxNQUFPTCxJQUFQLElBQWdCO0FBQ3RETSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFJLEdBQUdBLElBQUksQ0FBQ1EsRUFBUixHQUFhLFNBQTdCOztBQUNBLFVBQUksQ0FBQ1IsSUFBTCxFQUFXO0FBQ1RDLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDQVEsMERBQUEsQ0FBWUMsU0FBWixFQUF1QixPQUF2QixFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQztBQUNBO0FBQ0Q7O0FBRUQsWUFBTUMsS0FBSyxHQUFHLE1BQU1YLElBQUksQ0FBQ1ksVUFBTCxFQUFwQjtBQUNBWCxhQUFPLENBQUNELElBQUQsQ0FBUDtBQUNBUyx3REFBQSxDQUFZQyxTQUFaLEVBQXVCLE9BQXZCLEVBQWdDQyxLQUFoQyxFQUF1QyxFQUF2QztBQUNELEtBWk0sQ0FBUDtBQWFELEdBZFEsRUFjTixFQWRNLENBQVQ7QUFlQSxzQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRVg7QUFBRixLQUE3QjtBQUFBLGNBQXdDRjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFHRCxDQXRCTTtBQXVCQSxNQUFNZSxPQUFPLEdBQUcsTUFBTUMsaURBQVUsQ0FBQ25CLFdBQUQsQ0FBaEMiLCJmaWxlIjoiLi9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBub29raWVzIGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgZmlyZWJhc2VDbGllbnQgZnJvbSBcIi4vZmlyZWJhc2VDbGllbnRcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBmaXJlYmFzZUNsaWVudCgpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkub25JZFRva2VuQ2hhbmdlZChhc3luYyAodXNlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJhdXRoIGNoYW5nZWRcIik7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyID8gdXNlci5pZCA6IFwiTm90aGluZ1wiKTtcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICBub29raWVzLnNldCh1bmRlZmluZWQsIFwidG9rZW5cIiwgXCJcIiwge30pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKCk7XG4gICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgbm9va2llcy5zZXQodW5kZWZpbmVkLCBcInRva2VuXCIsIHRva2VuLCB7fSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciB9fT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./auth.js\n");

/***/ }),

/***/ "./firebaseClient.js":
/*!***************************!*\
  !*** ./firebaseClient.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ firebaseClient; }\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst FIREBASE_CONFIG = __webpack_require__(/*! ./firebase.json */ \"./firebase.json\");\n\nfunction firebaseClient() {\n  if (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(FIREBASE_CONFIG);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljZS1uZXh0anMvLi9maXJlYmFzZUNsaWVudC5qcz8yMGY2Il0sIm5hbWVzIjpbIkZJUkVCQVNFX0NPTkZJRyIsInJlcXVpcmUiLCJmaXJlYmFzZUNsaWVudCIsImZpcmViYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxNQUFNQSxlQUFlLEdBQUdDLG1CQUFPLENBQUMsd0NBQUQsQ0FBL0I7O0FBSWUsU0FBU0MsY0FBVCxHQUF5QjtBQUN0QyxNQUFHLENBQUNDLDZEQUFKLEVBQXlCO0FBQ3ZCQSxpRUFBQSxDQUF1QkgsZUFBdkI7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vZmlyZWJhc2VDbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5jb25zdCBGSVJFQkFTRV9DT05GSUcgPSByZXF1aXJlKFwiLi9maXJlYmFzZS5qc29uXCIpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlyZWJhc2VDbGllbnQoKXtcbiAgaWYoIWZpcmViYXNlLmFwcHMubGVuZ3RoKXtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKEZJUkVCQVNFX0NPTkZJRylcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebaseClient.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth */ \"./auth.js\");\n\nvar _jsxFileName = \"/media/narayanz/New Volume/Other Projects/nextjs/midAdminMaker/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  console.log(\"heer is auth page\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljZS1uZXh0anMvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFmLEVBQXVDO0FBQ25DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLHNCQUNJLDhEQUFDLCtDQUFEO0FBQUEsMkJBQ0ksOERBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRUQsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRoUHJvdmlkZXJ9IGZyb20gXCIuLi9hdXRoXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcbiAgICBjb25zb2xlLmxvZyhcImhlZXIgaXMgYXV0aCBwYWdlXCIpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/auth");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();