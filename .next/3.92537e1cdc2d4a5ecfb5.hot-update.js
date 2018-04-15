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
          className: 'jsx-3746063211',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-3746063211',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          ' Choose your ',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'strike',
            {
              className: 'jsx-3746063211',
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
            className: 'jsx-3746063211' + ' ' + 'SearchArea',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.state.willy ? null : _this2.locationButtonClicked('willy');
              }, className: 'jsx-3746063211' + ' ' + 'streetBtn',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            },
            'Willy Street'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.state.atkins ? null : _this2.locationButtonClicked('atkins');
              }, className: 'jsx-3746063211' + ' ' + 'streetBtn',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            'Atkins Street'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.state.state ? null : _this2.locationButtonClicked('state');
              }, className: 'jsx-3746063211' + ' ' + 'streetBtn',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            'State Street'
          )
        ),
        listOfBars,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3746063211',
          css: '.streetBtn.jsx-3746063211{width:100px;height:50px;border:1px solid #000;border-radius:3px;margin:1% 2%;}.streetBtn.jsx-3746063211:hover{cursor:pointer;background-color:#eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGa0IsQUFHcUIsQUFPRyxZQU5ILEdBT1UsU0FOQSxhQU94QixTQU5vQixrQkFDTCxhQUNmIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyaWlrb3N0L0Rlc2t0b3AvUmVhY3QvTG9jYWxFbnZpcm9ubWVudFByb2plY3QvZXZlbnRzLW1hZGNpdHkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcblxuaW1wb3J0IEJhckxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9CYXJMaXN0JztcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuLy8gVE9ETzogUmVwbGFjZSB3aXRoIHlvdXIgcHJvamVjdCdzIGN1c3RvbWl6ZWQgY29kZSBzbmlwcGV0XG5jb25zdCBjb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCZmxFNzlmSGRJY1RBQ0p6b2RSdFR5QldzQmRCUjhMWUVcIixcbiAgYXV0aERvbWFpbjogXCJldmVudHMtbWFkY2l0eS5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9ldmVudHMtbWFkY2l0eS5maXJlYmFzZWlvLmNvbS9cIixcbiAgcHJvamVjdElkOiBcImV2ZW50cy1tYWRjaXR5XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZXZlbnRzLW1hZGNpdHkuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTAwMDMyMjIzNjE0NFwiXG59O1xuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59XG5cbi8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgZGF0YWJhc2Ugc2VydmljZVxuY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuXG5mdW5jdGlvbiBzbmFwc2hvdFRvQXJyYXkoc25hcHNob3QpIHtcbiAgdmFyIHJldHVybkFyciA9IFtdO1xuXG4gIHNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oY2hpbGRTbmFwc2hvdCkge1xuICAgICAgdmFyIGl0ZW0gPSBjaGlsZFNuYXBzaG90LnZhbCgpO1xuICAgICAgaXRlbS5rZXkgPSBjaGlsZFNuYXBzaG90LmtleTtcblxuICAgICAgcmV0dXJuQXJyLnB1c2goaXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXR1cm5BcnI7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYmFyczogW3tuYW1lOiAnZXhhbXBsZScsIGV2ZW50Q29zdDogJyQ1JywgZXZlbnROYW1lOiAndGVzdCd9XSxcbiAgICBhdGtpbnM6IGZhbHNlLFxuICAgIHdpbGx5OiBmYWxzZSxcbiAgICBzdGF0ZTogZmFsc2VcbiAgfVxuXG4gIGJ1aWxkQmFyT2JqZWN0ID0gKGJhck5hbWUsIGV2ZW50Q29zdCwgZXZlbnROYW1lKSA9PiB7XG5cbiAgICB0aGlzLnN0YXRlLmJhcnMucHVzaCh7bmFtZTogYmFyTmFtZSwgZXZlbnRDb3N0OiBldmVudENvc3QsIGV2ZW50TmFtZTogZXZlbnROYW1lfSlcbiAgfVxuXG4gIGxvY2F0aW9uQnV0dG9uQ2xpY2tlZCA9IChzdHJlZXQpID0+IHtcbiAgICAvLyBnZXQgZGF0YSBmcm9tIGZpcmViYXNlIGRiIHVzaW5nIHN0cmVldCBwYXJhbVxuICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvJyArIHN0cmVldCArICcvJykub25jZSgndmFsdWUnKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgYmFycyA9IHNuYXBzaG90VG9BcnJheShzbmFwc2hvdClbMF07XG5cbiAgICAgIC8vIHBhc3MgZGF0YSBmcm9tIGZpcmViYXNlIHRvIGZ1bmN0aW9uXG4gICAgICBiYXJzLm1hcChiYXIgPT4gdGhpcy5idWlsZEJhck9iamVjdChiYXIubmFtZSwgYmFyLmV2ZW50Q29zdCwgYmFyLmV2ZW50TmFtZSkpO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYmFycylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7YXRraW5zOiB0cnVlfSkgfSwgNTAwKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGxpc3RPZkJhcnMgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5iYXJzLm1hcCgoYmFyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxCYXJMaXN0XG4gICAgICAgICAgICAvLyBjbGljaz17KCkgPT4gdGhpcy5jaGVja2VkSXRlbShpbmRleCl9XG4gICAgICAgICAgICBuYW1lPXtiYXIubmFtZX1cbiAgICAgICAgICAgIGV2ZW50Q29zdD17YmFyLmV2ZW50Q29zdH1cbiAgICAgICAgICAgIGV2ZW50TmFtZT17YmFyLmV2ZW50TmFtZX0gLz5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT4gQ2hvb3NlIHlvdXIgPHN0cmlrZT5kZXN0aW55PC9zdHJpa2U+IHN0cmVldCA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlYXJjaEFyZWFcIj5cbiAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3N0cmVldHMvd2lsbHknKX0+V2lsbHkgU3RyZWV0PC9idXR0b24+ICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3RyZWV0QnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5zdGF0ZS53aWxseSA/IG51bGwgOiB0aGlzLmxvY2F0aW9uQnV0dG9uQ2xpY2tlZCgnd2lsbHknKX0+V2lsbHkgU3RyZWV0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdHJlZXRCdG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0YXRlLmF0a2lucyA/IG51bGwgOiB0aGlzLmxvY2F0aW9uQnV0dG9uQ2xpY2tlZCgnYXRraW5zJyl9PkF0a2lucyBTdHJlZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0cmVldEJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhdGUuc3RhdGUgPyBudWxsIDogdGhpcy5sb2NhdGlvbkJ1dHRvbkNsaWNrZWQoJ3N0YXRlJyl9PlN0YXRlIFN0cmVldDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bGlzdE9mQmFyc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdHJlZXRCdG4ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDElIDIlO1xuICAgICAgfVxuICAgICAgLnN0cmVldEJ0bjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=pages/index.js */'
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
//# sourceMappingURL=3.92537e1cdc2d4a5ecfb5.hot-update.js.map