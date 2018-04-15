webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BarList__ = __webpack_require__("./components/BarList.js");
var _jsxFileName = '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
if (!__WEBPACK_IMPORTED_MODULE_3_firebase__["apps"].length) {
  __WEBPACK_IMPORTED_MODULE_3_firebase__["initializeApp"](config);
}

// Get a reference to the database service
var database = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]();

function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function (childSnapshot) {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;

    returnArr.push(item);
  });

  return returnArr;
};

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      bars: [{ name: 'example', eventCost: '$5', eventName: 'test' }],
      atkins: false,
      willy: false,
      state: false
    }, _this.buildBarObject = function (barName, eventCost, eventName) {

      _this.state.bars.push({ name: barName, eventCost: eventCost, eventName: eventName });
    }, _this.locationButtonClicked = function (street) {
      // get data from firebase db using street param
      __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + street + '/').once('value').then(function (snapshot) {
        var bars = snapshotToArray(snapshot)[0];

        // pass data from firebase to function
        bars.map(function (bar) {
          return _this.buildBarObject(bar.name, bar.eventCost, bar.eventName);
        });
      });
      // console.log(this.state.bars)
      setTimeout(function () {
        _this.setState({ atkins: true });
      }, 500);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var listOfBars = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        this.state.bars.map(function (bar) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BarList__["a" /* default */]
          // click={() => this.checkedItem(index)}
          , { name: bar.name,
            eventCost: bar.eventCost,
            eventName: bar.eventName, __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          });
        })
      );

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-672118279',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-672118279',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          ' Choose your ',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'strike',
            {
              className: 'jsx-672118279',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            'destiny'
          ),
          ' street '
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-672118279' + ' ' + 'streetSelection',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.state.willy ? null : _this2.locationButtonClicked('willy');
              }, className: 'jsx-672118279' + ' ' + 'streetBtn',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              }
            },
            'Willy Street'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.state.atkins ? null : _this2.locationButtonClicked('atkins');
              }, className: 'jsx-672118279' + ' ' + 'streetBtn',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            },
            'Atkins Street ',
            this.state.atkins ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-672118279',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              },
              'X'
            ) : null
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.state.state ? null : _this2.locationButtonClicked('state');
              }, className: 'jsx-672118279' + ' ' + 'streetBtn',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            'State Street'
          )
        ),
        listOfBars,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '672118279',
          css: 'div.jsx-672118279{margin:auto;width:80%;padding:10px;}h1.jsx-672118279{text-align:center;}.streetSelection.jsx-672118279{padding:10px;border:2px solid #000;}.streetBtn.jsx-672118279{width:150px;height:50px;border:1px solid #000;border-radius:3px;margin:1% 2%;font-size:12px;}.streetBtn.jsx-672118279:hover{cursor:pointer;background-color:#eee;}button.jsx-672118279:focus{outline:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGa0IsQUFHdUIsQUFLSSxBQUdMLEFBSUQsQUFRRyxBQUlLLFVBQUMsRUF2QlQsQUFZQSxDQUpVLEVBWUEsR0FmeEIsSUFKaUIsRUFZTyxXQVh4QixBQU9BLEVBWUEsU0FQb0Isa0JBQ0wsYUFDRSxlQUNqQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5kcmlpa29zdC9EZXNrdG9wL1JlYWN0L0xvY2FsRW52aXJvbm1lbnRQcm9qZWN0L2V2ZW50cy1tYWRjaXR5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5cbmltcG9ydCBCYXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQmFyTGlzdCc7XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2Vcbi8vIFRPRE86IFJlcGxhY2Ugd2l0aCB5b3VyIHByb2plY3QncyBjdXN0b21pemVkIGNvZGUgc25pcHBldFxuY29uc3QgY29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QmZsRTc5ZkhkSWNUQUNKem9kUnRUeUJXc0JkQlI4TFlFXCIsXG4gIGF1dGhEb21haW46IFwiZXZlbnRzLW1hZGNpdHkuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZXZlbnRzLW1hZGNpdHkuZmlyZWJhc2Vpby5jb20vXCIsXG4gIHByb2plY3RJZDogXCJldmVudHMtbWFkY2l0eVwiLFxuICBzdG9yYWdlQnVja2V0OiBcImV2ZW50cy1tYWRjaXR5LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMDAzMjIyMzYxNDRcIlxufTtcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufVxuXG4vLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRhdGFiYXNlIHNlcnZpY2VcbmNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcblxuZnVuY3Rpb24gc25hcHNob3RUb0FycmF5KHNuYXBzaG90KSB7XG4gIHZhciByZXR1cm5BcnIgPSBbXTtcblxuICBzbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkU25hcHNob3QpIHtcbiAgICAgIHZhciBpdGVtID0gY2hpbGRTbmFwc2hvdC52YWwoKTtcbiAgICAgIGl0ZW0ua2V5ID0gY2hpbGRTbmFwc2hvdC5rZXk7XG5cbiAgICAgIHJldHVybkFyci5wdXNoKGl0ZW0pO1xuICB9KTtcblxuICByZXR1cm4gcmV0dXJuQXJyO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGJhcnM6IFt7bmFtZTogJ2V4YW1wbGUnLCBldmVudENvc3Q6ICckNScsIGV2ZW50TmFtZTogJ3Rlc3QnfV0sXG4gICAgYXRraW5zOiBmYWxzZSxcbiAgICB3aWxseTogZmFsc2UsXG4gICAgc3RhdGU6IGZhbHNlXG4gIH1cblxuICBidWlsZEJhck9iamVjdCA9IChiYXJOYW1lLCBldmVudENvc3QsIGV2ZW50TmFtZSkgPT4ge1xuXG4gICAgdGhpcy5zdGF0ZS5iYXJzLnB1c2goe25hbWU6IGJhck5hbWUsIGV2ZW50Q29zdDogZXZlbnRDb3N0LCBldmVudE5hbWU6IGV2ZW50TmFtZX0pXG4gIH1cblxuICBsb2NhdGlvbkJ1dHRvbkNsaWNrZWQgPSAoc3RyZWV0KSA9PiB7XG4gICAgLy8gZ2V0IGRhdGEgZnJvbSBmaXJlYmFzZSBkYiB1c2luZyBzdHJlZXQgcGFyYW1cbiAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignLycgKyBzdHJlZXQgKyAnLycpLm9uY2UoJ3ZhbHVlJykudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgIGNvbnN0IGJhcnMgPSBzbmFwc2hvdFRvQXJyYXkoc25hcHNob3QpWzBdO1xuXG4gICAgICAvLyBwYXNzIGRhdGEgZnJvbSBmaXJlYmFzZSB0byBmdW5jdGlvblxuICAgICAgYmFycy5tYXAoYmFyID0+IHRoaXMuYnVpbGRCYXJPYmplY3QoYmFyLm5hbWUsIGJhci5ldmVudENvc3QsIGJhci5ldmVudE5hbWUpKTtcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmJhcnMpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2V0U3RhdGUoe2F0a2luczogdHJ1ZX0pIH0sIDUwMCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBsaXN0T2ZCYXJzID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuYmFycy5tYXAoKGJhcikgPT4ge1xuICAgICAgICAgIHJldHVybiA8QmFyTGlzdFxuICAgICAgICAgICAgLy8gY2xpY2s9eygpID0+IHRoaXMuY2hlY2tlZEl0ZW0oaW5kZXgpfVxuICAgICAgICAgICAgbmFtZT17YmFyLm5hbWV9XG4gICAgICAgICAgICBldmVudENvc3Q9e2Jhci5ldmVudENvc3R9XG4gICAgICAgICAgICBldmVudE5hbWU9e2Jhci5ldmVudE5hbWV9IC8+XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+IENob29zZSB5b3VyIDxzdHJpa2U+ZGVzdGlueTwvc3RyaWtlPiBzdHJlZXQgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlZXRTZWxlY3Rpb25cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0cmVldEJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhdGUud2lsbHkgPyBudWxsIDogdGhpcy5sb2NhdGlvbkJ1dHRvbkNsaWNrZWQoJ3dpbGx5Jyl9PldpbGx5IFN0cmVldDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3RyZWV0QnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5zdGF0ZS5hdGtpbnMgPyBudWxsIDogdGhpcy5sb2NhdGlvbkJ1dHRvbkNsaWNrZWQoJ2F0a2lucycpfT5BdGtpbnMgU3RyZWV0IHt0aGlzLnN0YXRlLmF0a2lucyA/IDxzcGFuPlg8L3NwYW4+IDogbnVsbH08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0cmVldEJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhdGUuc3RhdGUgPyBudWxsIDogdGhpcy5sb2NhdGlvbkJ1dHRvbkNsaWNrZWQoJ3N0YXRlJyl9PlN0YXRlIFN0cmVldDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bGlzdE9mQmFyc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGRpdiB7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICAgIGgxe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuc3RyZWV0U2VsZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICAgIH1cbiAgICAgIC5zdHJlZXRCdG4ge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDElIDIlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICAuc3RyZWV0QnRuOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgfVxuXG4gICAgICBidXR0b246Zm9jdXMge291dGxpbmU6MDt9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(config, 'config', '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/index.js');
  reactHotLoader.register(database, 'database', '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/index.js');
  reactHotLoader.register(snapshotToArray, 'snapshotToArray', '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/index.js');
  reactHotLoader.register(Index, 'Index', '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/andriikost/Desktop/React/LocalEnvironmentProject/events-madcity/pages/index.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.51f1c307f31646d66d2f.hot-update.js.map