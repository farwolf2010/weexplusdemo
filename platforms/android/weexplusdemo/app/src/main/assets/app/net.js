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
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ({

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(76)
)

/* script */
__vue_exports__ = __webpack_require__(77)

/* template */
var __vue_template__ = __webpack_require__(78)
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
__vue_options__.__file = "/Users/zhengjiangrong/Documents/GitHub/weexplusdemo/src/native/net.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-31e76a1c"
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

/***/ 76:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 77:
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


exports.default = {
  components: {},
  props: {},
  data: function data() {
    return {
      text: ''
    };
  },

  methods: {
    all: function all() {
      var _this = this;

      this.net.post('search.do', { keyword: '权利' }, function (res) {
        _this.text = res;
      });
    },
    submit: function submit() {
      var _this2 = this;

      var net = weex.requireModule('net');
      var process = weex.requireModule('progress');
      var url = 'http://59.110.169.246/movie/search.do';
      var param = {};
      param.keyword = '权利';
      var header = {};
      header.token = '11111';
      //        net.get(url,param,header,()=>{
      net.post(url, param, header, function () {
        //        net.postJson(url,param,header,()=>{
        //start
        process.show();
      }, function (res) {
        //success
        _this2.text = res;
      }, function () {
        //compelete
        process.dismiss();
      }, function () {
        //exception
      });
    },
    openPhoto: function openPhoto() {
      var self = this;
      var photo = weex.requireModule('photo');
      photo.openPhoto(500, 800, '#000000', '#ffffff', '#ffffff', function (e) {

        self.src = e.path;
        var param = {};
        var header = {};
        var path = {};
        path.file = e.path;
        var net = weex.requireModule("net");
        net.postFile('http://xxx/upload', param, header, path, function () {
          //start
        }, function (e) {
          //succcess
          var modal = weex.requireModule("modal");
          modal.toast({ message: '上传成功！' });
        }, function () {
          //compelete

        }, function () {
          //exception
          var modal = weex.requireModule("modal");
          modal.toast({ message: '上传异常！' });
        });
      });
    },
    download: function download() {
      var _this3 = this;

      var net = weex.requireModule("net");
      var url = 'https://qd.myapp.com/myapp/qqteam/pcqq/QQ9.0.8_3.exe';
      net.download(url, function (process) {
        _this3.text = process.percent + "%";
      }, function (res) {
        //compelete
        _this3.text = res;
      }, function () {
        //exception
        _this3.text = '下载异常';
      });
    }
  },
  created: function created() {}
};

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('head', {
    attrs: {
      "title": "网络访问"
    }
  }), _c('scroller', {
    staticStyle: {
      alignItems: "center"
    }
  }, [_c('button', {
    staticStyle: {
      marginTop: "100px"
    },
    attrs: {
      "text": "网络请求"
    },
    on: {
      "click": _vm.submit
    }
  }), _c('button', {
    staticStyle: {
      marginTop: "30px"
    },
    attrs: {
      "text": "上传文件"
    },
    on: {
      "click": _vm.openPhoto
    }
  }), _c('button', {
    staticStyle: {
      marginTop: "30px"
    },
    attrs: {
      "text": "下载文件"
    },
    on: {
      "click": _vm.download
    }
  }), _c('button', {
    staticStyle: {
      marginTop: "30px"
    },
    attrs: {
      "text": "全局封装"
    },
    on: {
      "click": _vm.all
    }
  }), _c('text', {
    staticStyle: {
      color: "#000000"
    }
  }, [_vm._v(_vm._s(_vm.text))])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });