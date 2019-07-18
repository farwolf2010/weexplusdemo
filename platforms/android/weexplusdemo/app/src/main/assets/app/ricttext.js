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
/******/ 	return __webpack_require__(__webpack_require__.s = 103);
/******/ })
/************************************************************************/
/******/ ({

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(104)
)

/* script */
__vue_exports__ = __webpack_require__(105)

/* template */
var __vue_template__ = __webpack_require__(106)
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
__vue_options__.__file = "/Users/zhengjiangrong/Documents/GitHub/weexplusdemo/src/native/ricttext.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-50f55310"
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

/***/ 104:
/***/ (function(module, exports) {

module.exports = {
  "indicator": {
    "width": "750",
    "height": "316",
    "position": "absolute",
    "itemColor": "#777777",
    "itemSelectedColor": "#ffffff",
    "itemSize": "20",
    "top": "120",
    "left": "1"
  },
  "slider": {
    "width": "750",
    "height": "316"
  },
  "frame": {
    "width": "750",
    "height": "316",
    "position": "relative"
  },
  "image": {
    "width": "750",
    "height": "316"
  }
}

/***/ }),

/***/ 105:
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
  props: {},
  data: function data() {
    return {
      items: [],
      src: 'root:file/index.html',
      txt: ''
    };
  },

  methods: {
    okk: function okk() {
      var im = weex.requireModule('nim');
      var p = { account: '11' };
      p.navBarBgColor = '#ff553e';
      p.theme = 'white';
      im.openP2P(p);
    },
    chathello: function chathello() {
      var im = weex.requireModule('nim');
      var p = { account: 'helloworld1' };
      p.navBarBgColor = '#ff553e';
      p.theme = 'white';
      im.openP2P(p);
      this.okk();
    },
    chat11: function chat11() {
      var _this = this;

      var im = weex.requireModule('nim');
      //        let p={account: '11'}
      //        p.navBarBgColor='#ff553e'
      //        p.theme='white'
      //        im.openP2P(p)
      im.recent(function (res) {
        _this.items = res;
      });
    },
    tenv: function tenv() {

      this.ok();
    },
    ok: function ok() {
      //        this.toast('sss')

      this.chat();
    },
    chat: function chat() {
      var im = weex.requireModule('nim');
      var p = { account: 'helloworld1' };
      p.navBarBgColor = '#ff553e';
      p.theme = 'white';
      im.openP2P(p);
    },
    onLoad: function onLoad() {
      //        let im = weex.requireModule('nim')
      //        im.regist({appKey:'86984f84905337af232230f9e140b113'})
      //        im.login({account: 'helloworld1', token: '7c2ad9cedfa2971efbbf58fbd1e67378'}, (res) => {
      //          this.alert('helloworld1登陆成功')
      //
      //        })
    }
  },
  created: function created() {
    this.txt = '🍷被朋友深夜放毒\n' + '我给圈友们也来一个&\n' + '火锅配莫斯卡托粉红起泡酒\n' + '好会享受，一群人喝得好欢！\n' + '关键时刻还来放毒\n' + '地主家没有点余粮怎么得了！\n' + '#原产原装原标#\n' + '澳洲Robert Oatley，蝉联7年James Halliday五星级酒庄！\n' + '作为Robert Oatley中国唯一官方合作伙伴，独家授权，原产原装原标，酒庄直发ABM，质量品质绝对保障！找我绝对没错啦！';
  }
};

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      alignItems: "center",
      justifyContent: "center"
    }
  }, [_c('richtext', [_c('span', {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("1111")]), _c('image', {
    staticStyle: {
      width: "100px",
      height: "100px"
    },
    attrs: {
      "src": "root:img/logo.png"
    }
  }), _c('span', {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("1111")]), _c('image', {
    staticStyle: {
      width: "100px",
      height: "100px"
    },
    attrs: {
      "src": "root:img/2.gif"
    }
  }), _c('image', {
    staticStyle: {
      width: "100px",
      height: "100px"
    },
    attrs: {
      "src": "root:img/logo.png"
    }
  }), _c('image', {
    staticStyle: {
      width: "100px",
      height: "100px"
    },
    attrs: {
      "src": "root:img/logo.png"
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });