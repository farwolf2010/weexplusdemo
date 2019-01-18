// { "framework": "Vue"} 

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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(52)
)

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(54)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhengjiangrong/Desktop/weexplusdemo/src/native/demo/module/photo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-51b4d214"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  props: {},
  data: function data() {
    return {
      src: ''
    };
  },

  methods: {
    showMonthPicker: function showMonthPicker(param, callback) {
      var date = new Date();
      var year = date.getFullYear();
      var mon = date.getMonth() + 1;
      var start = param.start;
      var end = param.end;
      var bgcolor = param.bgcolor;
      var btncolor = param.btncolor;
      if (start == undefined) {
        start = 1970;
      }
      if (end == undefined) {
        end = year;
      }

      if (bgcolor == undefined) {
        bgcolor = '#000000';
      }
      if (btncolor == undefined) {
        btncolor = '#ffffff';
      }

      var p = weex.requireModule('fpicker');
      p.setCount(2);
      p.setTheme(bgcolor, btncolor);
      var years = [];
      var month = [];
      for (var i = end; i >= start; i--) {
        years.push(i + '');
      }
      for (var _i = 1; _i <= 12; _i++) {
        month.push(_i + '');
      }
      p.setItems1(years);
      p.setItems2(month);
      p.select(1, years.indexOf(year + ''));
      p.select(2, month.indexOf(mon + ''));
      p.setDone(function (res) {
        var m = month[res.index2];
        if (m < 10) {
          m = '0' + m;
        }
        callback(years[res.index1] + '-' + m);
      });
      p.show();
    },
    time: function time() {
      var _this = this;

      this.showMonthPicker({}, function (res) {
        _this.alert(res);
      });
    },
    openAll: function openAll() {

      var self = this;
      var photo = weex.requireModule('photo');
      photo.open(500, 800, '#000000', '#ffffff', '#ffffff', function (e) {
        self.src = e.path;
      });
    }
  },
  created: function created() {}
};

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('head', {
    attrs: {
      "title": "相机/相册"
    }
  }), _c('button', {
    attrs: {
      "text": "打开全部"
    },
    on: {
      "click": _vm.time
    }
  }), _c('image', {
    staticStyle: {
      width: "500px",
      height: "700px"
    },
    attrs: {
      "src": _vm.src
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });