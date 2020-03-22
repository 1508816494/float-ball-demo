(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/cu-float-ball/cu-float-ball"],{

/***/ 31:
/*!*****************************************************************************************************!*\
  !*** E:/Programme/ACode/HBuilder/uniApp/float-ball-demo/components/cu-float-ball/cu-float-ball.vue ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cu_float_ball_vue_vue_type_template_id_7eea3dcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cu-float-ball.vue?vue&type=template&id=7eea3dcf& */ 32);
/* harmony import */ var _cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cu-float-ball.vue?vue&type=script&lang=js& */ 34);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _cu_float_ball_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cu-float-ball.vue?vue&type=style&index=0&lang=css& */ 36);
/* harmony import */ var _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cu_float_ball_vue_vue_type_template_id_7eea3dcf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cu_float_ball_vue_vue_type_template_id_7eea3dcf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _cu_float_ball_vue_vue_type_template_id_7eea3dcf___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/Programme/ACode/HBuilder/uniApp/float-ball-demo/components/cu-float-ball/cu-float-ball.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 32:
/*!************************************************************************************************************************************!*\
  !*** E:/Programme/ACode/HBuilder/uniApp/float-ball-demo/components/cu-float-ball/cu-float-ball.vue?vue&type=template&id=7eea3dcf& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_template_id_7eea3dcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cu-float-ball.vue?vue&type=template&id=7eea3dcf& */ 33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_template_id_7eea3dcf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_template_id_7eea3dcf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_template_id_7eea3dcf___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_template_id_7eea3dcf___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 33:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Programme/ACode/HBuilder/uniApp/float-ball-demo/components/cu-float-ball/cu-float-ball.vue?vue&type=template&id=7eea3dcf& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.items, function(item, index) {
    var m0 = _vm.ballItemL((index * 180) / (_vm.items.length - 1))
    var m1 = _vm.ballItemT((index * 180) / (_vm.items.length - 1))
    return {
      $orig: _vm.__get_orig(item),
      m0: m0,
      m1: m1
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 34:
/*!******************************************************************************************************************************!*\
  !*** E:/Programme/ACode/HBuilder/uniApp/float-ball-demo/components/cu-float-ball/cu-float-ball.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cu-float-ball.vue?vue&type=script&lang=js& */ 35);
/* harmony import */ var _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 35:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Programme/ACode/HBuilder/uniApp/float-ball-demo/components/cu-float-ball/cu-float-ball.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
//
//
//
//
var _default2 =
{
  data: function data() {
    return {
      pointerEvents: 'none',
      moveDirection: 'all',
      cuBallX: 0,
      cuBallY: 0,
      old: {
        cuBallX: 0,
        cuBallY: 0 },

      scale: 1,
      ballShow: false,
      ballPos: 'left',
      ballHideProcess: null,
      ballTouch: false,
      ballView: {
        width: 0,
        height: 0 },

      cuBall: {
        width: '50px',
        height: '50px',
        top: '0',
        left: '-25px',
        color: '#000000',
        backgroundColor: 'grey', //'inherit',
        borderRadius: '25px' },

      cuArea: {
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        right: 'auto',
        bottom: 'auto' },

      screen: {
        width: 0,
        height: 0 },

      window: {
        width: 0,
        height: 0,
        top: 0,
        bottom: 0 } };


  },
  props: {
    ballOpacity: {
      default: 0.9,
      type: [Number, String] },

    items: {
      default: function _default() {return Array;},
      type: Array },

    damping: {
      default: 30,
      type: [String, Number] },

    showCover: {
      default: '',
      type: String },

    hideCover: {
      default: '',
      type: String },

    area: {
      default: function _default() {return {};},
      type: Object },


    ball: {
      default: function _default() {return {};},
      type: Object } },


  beforeMount: function beforeMount() {
    var info = uni.getSystemInfoSync();
    this.scale = 750 / info.windowWidth;
    this.screen.height = info.windowHeight;
    this.screen.width = info.windowWidth;
    this.window.top = info.windowTop;
    this.cuArea = Object.assign(this.cuArea, this.area);
    this.cuBall = Object.assign(this.cuBall, this.ball);
  },
  mounted: function mounted() {
    this.$nextTick(function () {var _this = this;
      this.cuBallX = this.sizeDeal(this.cuBall.left)[0];
      this.cuBallY = this.sizeDeal(this.cuBall.top)[0];
      var query = uni.createSelectorQuery().in(this);
      query.select(".cu-float-main").boundingClientRect(function (data) {
        _this.cuArea.width = data.width;
        _this.cuArea.height = data.height;
        _this.cuArea.top = data.top;
        _this.cuArea.bottom = data.bottom;
        _this.cuArea.left = data.left;
        _this.cuArea.right = data.right;
      }).exec();
      query.select(".cu-float-ball").boundingClientRect(function (data) {
        _this.cuBall.width = data.width;
        _this.cuBall.height = data.height;
        _this.cuBall.top = data.top;
        _this.cuBall.bottom = data.bottom;
        _this.cuBall.left = data.left;
        _this.cuBall.right = data.right;
        // 初始化this.ballView
        _this.ballItemL();
        _this.ballItemT();
      }).exec();
    });
  },
  computed: {
    ballItemsT: function ballItemsT() {
      var l = this.sizeDeal(this.cuBall.height);
      return l[0] / 2 + l[1];
    },
    ballItemsL: function ballItemsL() {
      var l = this.sizeDeal(this.cuBall.width);
      return l[0] / 2 + l[1];
    },
    ballL: function ballL() {
      var bl = this.sizeDeal(this.cuBall.left);
      return bl[2];
    },
    ballT: function ballT() {
      var bb = this.sizeDeal(this.cuBall.top);
      return bb[2];
    },
    ballW: function ballW() {
      var bw = this.sizeDeal(this.cuBall.width);
      return bw[2];
    },
    ballH: function ballH() {
      var bh = this.sizeDeal(this.cuBall.height);
      return bh[2];
    },
    ballBGC: function ballBGC() {
      return this.cuBall.backgroundColor;
    },
    ballC: function ballC() {
      return this.cuBall.color;
    },
    ballBR: function ballBR() {
      var br = this.sizeDeal(this.cuBall.borderRadius);
      return br[2];
    },
    areaW: function areaW() {
      var w = this.sizeDeal(this.cuArea.width);
      var bw = this.sizeDeal(this.cuBall.width);
      return 'calc( ' + w[2] + ' + ' + bw[2] + ' )';
    },
    areaL: function areaL() {
      var l = this.sizeDeal(this.cuBall.width);
      return -l[0] / 2 + l[1];
    },
    mainH: function mainH() {
      var h = this.sizeDeal(this.cuArea.height);
      return h[2];
    },
    mainW: function mainW() {
      var w = this.sizeDeal(this.cuArea.width);
      return w[2];
    },
    mainL: function mainL() {
      var l = this.sizeDeal(this.cuArea.left);
      return l[2];
    },
    mainT: function mainT() {
      var t = this.sizeDeal(this.cuArea.top);
      return t[2];
    } },

  watch: {
    ball: function ball(v) {
      this.cuBall = Object.assign(this.cuBall, v);
    },
    area: function area(v) {
      this.cuArea = Object.assign(this.cuArea, v);
    } },

  methods: {
    ballItemL: function ballItemL(deg) {
      var w = this.sizeDeal(this.cuBall.width);
      var h = this.sizeDeal(this.cuBall.height);
      var l = w[0] > h[0] ? w[0] * 1.25 : h[0] + w[0] * 0.25;
      var r;
      if (this.items.length > 4) {
        r = l * (this.items.length - 1) / Math.PI;
      } else
      {
        r = 1.25 * w[0];
      }
      this.ballView.width = 2 * r;
      var x = Math.sin(deg / 180 * Math.PI) * r;
      if (this.ballPos == 'left') {
        return x - w[0] / 2 + w[1];
      } else
      {
        return -x - w[0] / 2 + w[1];
      }
    },
    ballItemT: function ballItemT(deg) {
      var w = this.sizeDeal(this.cuBall.width);
      var h = this.sizeDeal(this.cuBall.height);
      var l = w[0] > h[0] ? w[0] + h[0] * 0.25 : h[0] * 1.25;
      var r;
      if (this.items.length > 4) {
        r = l * (this.items.length - 1) / Math.PI;
      } else
      {
        r = 1.25 * h[0];
      }
      this.ballView.height = 2 * r;
      var x = Math.abs(Math.cos(deg / 180 * Math.PI) * r);
      if (deg > 90) {
        return x - h[0] / 2 + h[1];
      } else
      {
        return -(x + h[0] / 2) + h[1];
      }
    },
    itemClick: function itemClick(e) {
      this.$emit('itemsTap', { itemIndex: e.currentTarget.dataset.index });
    },
    cuFloatClick: function cuFloatClick() {
      this.ballHide();
    },
    sizeDeal: function sizeDeal(size) {
      // 分离字体大小和单位,rpx 转 px
      var s = Number.isNaN(parseFloat(size)) ? 0 : parseFloat(size);
      var u = size.toString().replace(/[0-9]/g, '').replace('-', '');
      if (u == 'rpx') {
        s /= this.scale;
        u = 'px';
      } else if (u == '') {
        u = 'px';
      } else if (u == 'vw') {
        u = 'px';
        s = s / 100 * 750 / this.scale;
      }
      return [s, u, s + u];
    },
    ballChange: function ballChange(e) {
      this.old.cuBallX = e.detail.x;
      this.old.cuBallY = e.detail.y;
    },
    ballHide: function ballHide(delay) {
      // ball隐藏执行
      if (!this.ballShow && delay || !delay) {
        this.pointerEvents = 'none';
        this.ballShow = false;
        if (this.cuBallX <= this.cuArea.width / 2) {
          this.cuBallX = 0;
        } else {
          this.cuBallX = this.cuArea.right;
        }
      }

    },
    ballHideDelayClear: function ballHideDelayClear() {
      // ball隐藏清除
      if (this.ballHideProcess) {
        clearTimeout(this.ballHideProcess);
      }
    },
    ballHideDelay: function ballHideDelay(e) {
      // ball隐藏触发
      var h = this.sizeDeal(this.cuBall.height);
      this.cuBallX = this.old.cuBallX;
      this.old.cuBallY = this.old.cuBallY < this.cuArea.height - h[0] ? this.old.cuBallY : this.old.cuBallY - 1;
      this.old.cuBallY = this.old.cuBallY > 0 ? this.old.cuBallY : 1;
      this.cuBallY = this.old.cuBallY;
      if (this.cuBallX <= this.cuArea.width / 2) {
        this.ballPos = 'left';
      } else {
        this.ballPos = 'right';
      }
      this.ballHideProcess = setTimeout(this.ballHide, 3000, true);
    },
    ballClick: function ballClick() {
      this.ballShow = !this.ballShow;
      var h = this.sizeDeal(this.cuBall.height);
      if (this.cuBallX >= this.cuBall.width / 2 && this.cuBallX <= this.cuArea.width - this.cuBall.width / 2 && this.cuBallY < this.cuArea.height - this.ballView.height / 2 - h[0] && this.cuBallY > this.ballView.height / 2) {} else
      {
        if (this.cuBallX <= this.cuBall.width / 2) {
          this.cuBallX = this.cuBall.width;
        } else
        if (this.cuBallX > this.cuArea.width - this.cuBall.width / 2) {
          this.cuBallX = this.cuArea.width - this.cuBall.width;
        }
        if (this.cuBallY <= this.ballView.height / 2) {
          this.cuBallY = this.ballView.height / 2;
        } else
        if (this.cuBallY > this.cuArea.height - this.ballView.height / 2 - h[0]) {
          this.cuBallY = this.cuArea.height - this.ballView.height / 2 - h[0];
        }
      }
      if (this.ballShow) {
        this.pointerEvents = 'all';
      } else
      {
        this.pointerEvents = 'none';
        this.ballHide();
      }
      this.$emit('ballClick', { 'status': this.ballShow ? 'show' : 'hide' });
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 36:
/*!**************************************************************************************************************************************!*\
  !*** E:/Programme/ACode/HBuilder/uniApp/float-ball-demo/components/cu-float-ball/cu-float-ball.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cu-float-ball.vue?vue&type=style&index=0&lang=css& */ 37);
/* harmony import */ var _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_APP_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_APP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cu_float_ball_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 37:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Programme/ACode/HBuilder/uniApp/float-ball-demo/components/cu-float-ball/cu-float-ball.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/cu-float-ball/cu-float-ball.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cu-float-ball/cu-float-ball-create-component',
    {
        'components/cu-float-ball/cu-float-ball-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(31))
        })
    },
    [['components/cu-float-ball/cu-float-ball-create-component']]
]);
