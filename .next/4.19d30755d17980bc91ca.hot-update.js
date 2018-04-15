webpackHotUpdate(4,{

/***/ "./pages/CMS/addEvent/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var _jsxFileName = '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/CMS/addEvent/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






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
        }, _this.writeUserData = function (userId, name, email, imageUrl) {
            // firebase.database().ref('users/' + userId).set({
            //   username: name,
            //   email: email,
            //   profile_picture : imageUrl
            // });
            console.log(_this.state);
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
                        lineNumber: 39
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { className: 'cancel', onClick: function onClick() {
                            return __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/');
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                        }
                    },
                    'X'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    },
                    'Add Your\'s event'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    },
                    'Bar Name',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.barNameInputChanged, value: this.state.barName, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    },
                    'Event Name',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.eventNameInputChanged, value: this.state.eventName, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    'Event Attendance',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.eventPriceInputChanged, value: this.state.eventPrice, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { className: 'submit', onClick: function onClick() {
                            return _this2.writeUserData();
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        }
                    },
                    'ADD EVENT'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return AddEvent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = AddEvent;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(AddEvent, 'AddEvent', '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/CMS/addEvent/index.js');
    reactHotLoader.register(_default, 'default', '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/CMS/addEvent/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/CMS/addEvent")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.19d30755d17980bc91ca.hot-update.js.map