module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/CMS/addEvent/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("firebase");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var _jsxFileName = '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/CMS/addEvent/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyBflE79fHdIcTACJzodRtTyBWsBdBR8LYE",
    authDomain: "events-madcity.firebaseapp.com",
    databaseURL: "https://events-madcity.firebaseio.com/",
    projectId: "events-madcity",
    storageBucket: "events-madcity.appspot.com",
    messagingSenderId: "1000322236144"
};
if (!__WEBPACK_IMPORTED_MODULE_2_firebase__["apps"].length) {
    __WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"](config);
}

// Get a reference to the database service
var database = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]();

var AddEvent = function (_Component) {
    _inherits(AddEvent, _Component);

    function AddEvent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddEvent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddEvent.__proto__ || Object.getPrototypeOf(AddEvent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            barName: '',
            eventName: '',
            eventPrice: ''
        }, _this.barNameInputChanged = function (event) {
            var changedName = event.target.value;
            _this.setState({ barName: changedName });
        }, _this.eventNameInputChanged = function (event) {
            var changedName = event.target.value;
            _this.setState({ eventName: changedName });
        }, _this.eventPriceInputChanged = function (event) {
            var changedName = event.target.value;
            _this.setState({ eventPrice: changedName });
        }, _this.writeUserData = function () {
            var street = 'atkins';
            var id = Math.floor(Math.random() * 9876543);

            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/' + street + '/bars/' + id + '/').set({
                barName: _this.state.barName,
                eventName: _this.state.eventName,
                eventPrice: _this.state.eventPrice
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AddEvent, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { className: 'cancel', onClick: function onClick() {
                            return __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/');
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    'X'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    'Add Your\'s event'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    },
                    'Bar Name',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.barNameInputChanged, value: this.state.barName, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    },
                    'Event Name',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.eventNameInputChanged, value: this.state.eventName, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    'Event Attendance',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.eventPriceInputChanged, value: this.state.eventPrice, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { className: 'submit', onClick: function onClick() {
                            return _this2.writeUserData();
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    'ADD EVENT'
                )
            );
        }
    }]);

    return AddEvent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddEvent);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/CMS/addEvent/index.js");


/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=addEvent.js.map