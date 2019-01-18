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
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ({

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(88)
)

/* script */
__vue_exports__ = __webpack_require__(89)

/* template */
var __vue_template__ = __webpack_require__(90)
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
__vue_options__.__file = "/Users/zhengjiangrong/Desktop/weexplusdemo/src/native/pageA.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-03dacbe6"
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

/***/ 88:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 89:
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
      name: '1111'

    };
  },

  methods: {
    pushToB: function pushToB() {
      var nav = weex.requireModule('navigator');
      nav.push('root:demo/module/navigator.js');
    },
    presentB: function presentB() {
      var nav = weex.requireModule('navigator');
      nav.present('pageB.js');
      //        nav.present('demo/input.js')
    },
    pushBParam: function pushBParam() {
      var nav = weex.requireModule('navigator');
      nav.pushParam('pageB.js', { name: this.name });
    },
    presentBParam: function presentBParam() {
      var nav = weex.requireModule('navigator');
      nav.presentFull({ url: 'pageB.js', param: { name: this.name } });
    },
    pushForParam: function pushForParam() {
      var _this = this;

      var nav = weex.requireModule('navigator');
      nav.pushFull({ url: 'pageB.js', param: { name: this.name } }, function (res) {
        _this.alert(JSON.stringify(res));
      });
    },
    onLoad: function onLoad() {
      var nav = weex.requireModule('navigator');
      nav.setRoot('A');
      nav.setPageId('A');
    }
  },
  created: function created() {}
};

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('head', {
    attrs: {
      "title": "pageA"
    }
  }), _c('div', {
    staticStyle: {
      alignItems: "center",
      justifyContent: "center"
    }
  }, [_c('image', {
    staticStyle: {
      width: "100px",
      height: "100px"
    },
    attrs: {
      "src": "root:img/logo.png"
    }
  }), _c('input', {
    staticStyle: {
      width: "500px",
      height: "100px",
      borderColor: "#0088fb",
      borderWidth: "1px"
    },
    attrs: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        _vm.name = $event.target.attr.value
      }
    }
  }), _c('button', {
    staticStyle: {
      marginTop: "30px"
    },
    attrs: {
      "text": "push到pageB"
    },
    on: {
      "Click": _vm.pushToB
    }
  }), _c('button', {
    staticStyle: {
      marginTop: "30px"
    },
    attrs: {
      "text": "present到pageB"
    },
    on: {
      "Click": _vm.presentB
    }
  }), _c('button', {
    staticStyle: {
      marginTop: "30px"
    },
    attrs: {
      "text": "push传参数到pageB"
    },
    on: {
      "Click": _vm.pushBParam
    }
  }), _c('button', {
    staticStyle: {
      marginTop: "30px"
    },
    attrs: {
      "text": "present传参数到pageB"
    },
    on: {
      "Click": _vm.presentBParam
    }
  }), _c('button', {
    staticStyle: {
      marginTop: "30px"
    },
    attrs: {
      "text": "pushForParam"
    },
    on: {
      "Click": _vm.pushForParam
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });