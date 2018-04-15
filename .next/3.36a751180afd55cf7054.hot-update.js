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
          className: 'jsx-2408765965',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-2408765965',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          ' Choose your ',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'strike',
            {
              className: 'jsx-2408765965',
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
            className: 'jsx-2408765965' + ' ' + 'streetSelection',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.state.willy ? null : _this2.locationButtonClicked('willy');
              }, className: 'jsx-2408765965' + ' ' + 'streetBtn',
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
              }, className: 'jsx-2408765965' + ' ' + 'streetBtn',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            },
            'Atkins Street ',
            this.state.atkins ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-2408765965',
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
              }, className: 'jsx-2408765965' + ' ' + 'streetBtn',
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
          styleId: '2408765965',
          css: 'div.jsx-2408765965{margin:auto;width:80%;padding:10px;}h1.jsx-2408765965{text-align:center;}.streetSelection.jsx-2408765965{margin:auto;width:80%;padding:10px;border:2px solid #000;}.streetBtn.jsx-2408765965{width:150px;height:50px;border:1px solid #000;border-radius:3px;margin:1% 2%;font-size:12px;}.streetBtn.jsx-2408765965:hover{cursor:pointer;background-color:#eee;}button.jsx-2408765965:focus{outline:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGa0IsQUFHdUIsQUFLSSxBQUdOLEFBTUEsQUFRRyxBQUlLLFVBQUMsRUF6QlQsQUFRRixBQU1FLEdBUVUsR0FqQnhCLElBSmlCLEFBUUYsRUFNUyxXQWJ4QixBQVF3QixFQWF4QixTQVBvQixXQUxwQixPQU1lLGFBQ0UsZUFDakIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZHJpaWtvc3QvRGVza3RvcC9SZWFjdC9Mb2NhbEVudmlyb25tZW50UHJvamVjdC9ldmVudHMtbWFkY2l0eSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xuXG5pbXBvcnQgQmFyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0Jhckxpc3QnO1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG4vLyBUT0RPOiBSZXBsYWNlIHdpdGggeW91ciBwcm9qZWN0J3MgY3VzdG9taXplZCBjb2RlIHNuaXBwZXRcbmNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUJmbEU3OWZIZEljVEFDSnpvZFJ0VHlCV3NCZEJSOExZRVwiLFxuICBhdXRoRG9tYWluOiBcImV2ZW50cy1tYWRjaXR5LmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2V2ZW50cy1tYWRjaXR5LmZpcmViYXNlaW8uY29tL1wiLFxuICBwcm9qZWN0SWQ6IFwiZXZlbnRzLW1hZGNpdHlcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJldmVudHMtbWFkY2l0eS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDAwMzIyMjM2MTQ0XCJcbn07XG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbn1cblxuLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkYXRhYmFzZSBzZXJ2aWNlXG5jb25zdCBkYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG5cbmZ1bmN0aW9uIHNuYXBzaG90VG9BcnJheShzbmFwc2hvdCkge1xuICB2YXIgcmV0dXJuQXJyID0gW107XG5cbiAgc25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihjaGlsZFNuYXBzaG90KSB7XG4gICAgICB2YXIgaXRlbSA9IGNoaWxkU25hcHNob3QudmFsKCk7XG4gICAgICBpdGVtLmtleSA9IGNoaWxkU25hcHNob3Qua2V5O1xuXG4gICAgICByZXR1cm5BcnIucHVzaChpdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJldHVybkFycjtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBiYXJzOiBbe25hbWU6ICdleGFtcGxlJywgZXZlbnRDb3N0OiAnJDUnLCBldmVudE5hbWU6ICd0ZXN0J31dLFxuICAgIGF0a2luczogZmFsc2UsXG4gICAgd2lsbHk6IGZhbHNlLFxuICAgIHN0YXRlOiBmYWxzZVxuICB9XG5cbiAgYnVpbGRCYXJPYmplY3QgPSAoYmFyTmFtZSwgZXZlbnRDb3N0LCBldmVudE5hbWUpID0+IHtcblxuICAgIHRoaXMuc3RhdGUuYmFycy5wdXNoKHtuYW1lOiBiYXJOYW1lLCBldmVudENvc3Q6IGV2ZW50Q29zdCwgZXZlbnROYW1lOiBldmVudE5hbWV9KVxuICB9XG5cbiAgbG9jYXRpb25CdXR0b25DbGlja2VkID0gKHN0cmVldCkgPT4ge1xuICAgIC8vIGdldCBkYXRhIGZyb20gZmlyZWJhc2UgZGIgdXNpbmcgc3RyZWV0IHBhcmFtXG4gICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy8nICsgc3RyZWV0ICsgJy8nKS5vbmNlKCd2YWx1ZScpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICBjb25zdCBiYXJzID0gc25hcHNob3RUb0FycmF5KHNuYXBzaG90KVswXTtcblxuICAgICAgLy8gcGFzcyBkYXRhIGZyb20gZmlyZWJhc2UgdG8gZnVuY3Rpb25cbiAgICAgIGJhcnMubWFwKGJhciA9PiB0aGlzLmJ1aWxkQmFyT2JqZWN0KGJhci5uYW1lLCBiYXIuZXZlbnRDb3N0LCBiYXIuZXZlbnROYW1lKSk7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5iYXJzKVxuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnNldFN0YXRlKHthdGtpbnM6IHRydWV9KSB9LCA1MDApO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbGlzdE9mQmFycyA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmJhcnMubWFwKChiYXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gPEJhckxpc3RcbiAgICAgICAgICAgIC8vIGNsaWNrPXsoKSA9PiB0aGlzLmNoZWNrZWRJdGVtKGluZGV4KX1cbiAgICAgICAgICAgIG5hbWU9e2Jhci5uYW1lfVxuICAgICAgICAgICAgZXZlbnRDb3N0PXtiYXIuZXZlbnRDb3N0fVxuICAgICAgICAgICAgZXZlbnROYW1lPXtiYXIuZXZlbnROYW1lfSAvPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPiBDaG9vc2UgeW91ciA8c3RyaWtlPmRlc3Rpbnk8L3N0cmlrZT4gc3RyZWV0IDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWV0U2VsZWN0aW9uXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdHJlZXRCdG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0YXRlLndpbGx5ID8gbnVsbCA6IHRoaXMubG9jYXRpb25CdXR0b25DbGlja2VkKCd3aWxseScpfT5XaWxseSBTdHJlZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0cmVldEJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhdGUuYXRraW5zID8gbnVsbCA6IHRoaXMubG9jYXRpb25CdXR0b25DbGlja2VkKCdhdGtpbnMnKX0+QXRraW5zIFN0cmVldCB7dGhpcy5zdGF0ZS5hdGtpbnMgPyA8c3Bhbj5YPC9zcGFuPiA6IG51bGx9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdHJlZXRCdG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0YXRlLnN0YXRlID8gbnVsbCA6IHRoaXMubG9jYXRpb25CdXR0b25DbGlja2VkKCdzdGF0ZScpfT5TdGF0ZSBTdHJlZXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xpc3RPZkJhcnN9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG4gICAgICBoMXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnN0cmVldFNlbGVjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICAgIH1cbiAgICAgIC5zdHJlZXRCdG4ge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDElIDIlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICAuc3RyZWV0QnRuOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgfVxuXG4gICAgICBidXR0b246Zm9jdXMge291dGxpbmU6MDt9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/index.js */'
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
//# sourceMappingURL=3.36a751180afd55cf7054.hot-update.js.map