/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/modal.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/modal.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#modal {\\n  padding: 15px;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%) scale(0);\\n  transition: 200ms ease-in-out;\\n  z-index: 10;\\n  background-color: rgb(230, 229, 229);\\n  height: 700px;\\n  width: 350px;\\n  border-radius: 5px;\\n  box-shadow: 0 7px 15px 0px #000000;\\n}\\n\\n#modal.active {\\n  transform: translate(-50%, -50%) scale(1);\\n}\\n\\n#modal__window {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n/* Overlay */\\n#overlay {\\n  position: fixed;\\n  opacity: 0;\\n  transition: 200ms ease-in-out;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: rgba(0, 0, 0, .5);\\n  pointer-events: none;\\n}\\n\\n#overlay.active {\\n  opacity: 1;\\n  pointer-events: all;\\n}\\n\\n/* Modal contents */\\n#pick-block {\\n  /* Pick board */\\n  width: 300px;\\n  height: 300px;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  border: 7px solid rgb(63, 63, 63);\\n  border-left-color: rgb(88, 88, 88);\\n  border-bottom-color: rgb(109, 109, 109);\\n  border-right-color: rgb(150, 150, 150);\\n}\\n\\n#piece-container {\\n  /* Piece(ship) to be dragged container */\\n  height: 150px;\\n  width: 150px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#piece {\\n  /* Piece(ship) to be dragged */\\n  display: flex;\\n}\\n\\n.horizontal {\\n  flex-direction: row;\\n}\\n\\n.vertical {\\n  flex-direction: column;\\n}\\n\\n#piece .cell {\\n  /* Piece cells */\\n  background-color: rgb(59, 59, 59);\\n  height: 30px;\\n  width: 30px;\\n}\\n\\n#buttons {\\n  /* Random/Start buttons container */\\n  display: flex;\\n  gap: 30px;\\n}\\n\\n#buttons button {\\n  /* Random/Start buttons */\\n  width: 110px;\\n}\\n\\n@media only screen and (min-width: 768px) {\\n  #modal {\\n    height: 800px;\\n    width: 500px;\\n  }\\n\\n  #modal__window {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: center;\\n    height: 100%;\\n    padding-bottom: 30px;\\n    padding-top: 20px;\\n  }\\n\\n  #buttons button {\\n    width: 130px;\\n    height: 40px;\\n    font-size: large;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/assets/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./AlfaSlabOne-Regular.ttf */ \"./src/assets/AlfaSlabOne-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./target.png */ \"./src/assets/target.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./hit.png */ \"./src/assets/hit.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'MyFont';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  margin: 0;\\n  border: 0;\\n}\\n\\n#game-window {\\n  background-color: rgb(228, 226, 224);\\n  display: grid;\\n  grid-template-rows: 7% 86% 7%;\\n  height: 100vh;\\n}\\n\\nheader {\\n  font-family: 'MyFont';\\n  text-align: center;\\n  font-size: 3rem;\\n  grid-row: 1 / 2;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  text-shadow: 0 17px 5px rgb(163, 163, 163);\\n}\\n\\n/* Content */\\n#content {\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n  grid-template-rows: 50% 50%;\\n  position: relative;\\n}\\n\\n#first-block,\\n#second-block {\\n  width: 280px;\\n  height: 280px;\\n  border: 7px solid rgb(63, 63, 63);\\n  border-left-color: rgb(88, 88, 88);\\n  border-bottom-color: rgb(109, 109, 109);\\n  border-right-color: rgb(150, 150, 150);\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  box-shadow: 5px 5px 15px rgb(96, 98, 99);\\n}\\n\\n.cell,\\n.miss,\\n.hit {\\n  border: 1px solid gray;\\n}\\n\\n#second-block .cell:hover {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n\\n.miss {\\n  background-color: rgba(102, 94, 94, 0.233);\\n}\\n\\n.hit {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-color: rgba(102, 94, 94, 0.233);\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n\\n/* Footer */\\na {\\n  text-decoration: none;\\n}\\n\\n#footer {\\n  grid-row: 3 / 4;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n\\n.git {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 0.8rem;\\n  height: 100%;\\n  gap: 10px;\\n}\\n\\nbutton {\\n  background-color: rgba(236, 227, 227, 0.233);\\n  border: 5px solid rgb(63, 63, 63);\\n  border-left-color: rgb(88, 88, 88);\\n  border-bottom-color: rgb(109, 109, 109);\\n  border-right-color: rgb(150, 150, 150);\\n  font-family: 'MyFont';\\n  font-size: 1rem;\\n  cursor: pointer;\\n}\\n\\n/* New game button */\\n#new-game {\\n  position: absolute;\\n  align-items: center;\\n  justify-self: center;\\n}\\n\\n#new-game:active {\\n  background-color: rgba(107, 100, 100, 0.233);\\n}\\n\\n/* Desktop */\\n@media only screen and (min-width: 768px) {\\n  header {\\n    padding-top: 80px;\\n    font-size: 6rem;\\n  }\\n\\n  #content {\\n    grid-template-columns: 50% 50%;\\n    display: flex;\\n    justify-content: center;\\n    gap: 10%;\\n  }\\n\\n  #first-block,\\n  #second-block {\\n    width: 350px;\\n    height: 350px;\\n  }\\n\\n  #new-game {\\n    border-width: 5px;\\n    bottom: 8%;\\n    font-size: 1.5rem;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/modal.css":
/*!******************************!*\
  !*** ./src/assets/modal.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/modal.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/assets/modal.css?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeOrientation\": () => (/* binding */ changeOrientation),\n/* harmony export */   \"clearDisplayShips\": () => (/* binding */ clearDisplayShips),\n/* harmony export */   \"createGrid\": () => (/* binding */ createGrid),\n/* harmony export */   \"displayShip\": () => (/* binding */ displayShip),\n/* harmony export */   \"loadModal\": () => (/* binding */ loadModal),\n/* harmony export */   \"markHit\": () => (/* binding */ markHit),\n/* harmony export */   \"markMiss\": () => (/* binding */ markMiss),\n/* harmony export */   \"renderShip\": () => (/* binding */ renderShip)\n/* harmony export */ });\nconst createGrid = function () {\n  const firstBoard = document.getElementById('first-block');\n  const secondBoard = document.getElementById('second-block');\n  const pickBoard = document.getElementById('pick-block');\n  firstBoard.innerHTML = '';\n  secondBoard.innerHTML = '';\n  const arr = [firstBoard, secondBoard, pickBoard];\n\n  arr.forEach((board) => {\n    const container = board;\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const square = document.createElement('div');\n        square.classList.add('cell');\n        square.dataset.x = i;\n        square.dataset.y = j;\n        container.appendChild(square);\n        // If elements are from pickBoard allow Dropping events\n        if (board === arr[2]) {\n          square.addEventListener('dragover', (e) => {\n            e.preventDefault();\n          });\n        }\n      }\n    }\n  });\n};\n\nconst markMiss = function (cell) {\n  cell.classList.add('miss');\n  cell.classList.remove('cell');\n};\n\nconst markHit = function (cell) {\n  cell.classList.add('hit');\n  cell.classList.remove('cell');\n};\n\nconst loadModal = function () {\n  const modal = document.getElementById('modal');\n  const overlay = document.getElementById('overlay');\n  if (modal.classList.contains('active')) {\n    modal.classList.remove('active');\n    overlay.classList.remove('active');\n  } else {\n    modal.classList.add('active');\n    overlay.classList.add('active');\n  }\n};\n\n// Render ship(piece) to be dragged onto the pickBoard\nconst renderShip = function (a) {\n  const container = document.getElementById('piece-container');\n  container.innerHTML = '';\n  const piece = document.createElement('div');\n  piece.dataset.length = a;\n  piece.dataset.orientation = 'h';\n  piece.id = 'piece';\n  piece.classList.add('horizontal');\n  piece.draggable = true;\n  for (let i = 0; i < a; i++) {\n    const cell = document.createElement('div');\n    cell.classList.add('cell');\n    piece.appendChild(cell);\n  }\n  container.appendChild(piece);\n};\n\n// Change orientation of ship to be dragged\nconst changeOrientation = function () {\n  const piece = document.getElementById('piece');\n  if (piece.classList.contains('horizontal')) {\n    piece.classList.remove('horizontal');\n    piece.classList.add('vertical');\n    piece.dataset.orientation = 'v';\n  } else {\n    piece.classList.remove('vertical');\n    piece.classList.add('horizontal');\n    piece.dataset.orientation = 'h';\n  }\n};\n\n// Display ship on pickBoard after being dropped there\nconst displayShip = function (arr, cells) {\n  const index = arr[0].toString() + arr[1].toString();\n  const cell = cells[Number(index)];\n  cell.style.backgroundColor = 'rgb(59, 59, 59)';\n};\n\nconst clearDisplayShips = function (cells) {\n  cells.forEach((cell) => cell.style.backgroundColor = '');\n};\n\n\n//# sourceURL=webpack://odin-battleship/./src/display.js?");

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/factories/ship.js\");\n\n\nconst GameBoard = () => {\n  // Ship container\n  const ships = [];\n\n  // Create the Board array\n  const board = (() => {\n    const arr = [];\n    for (let i = 0; i < 10; i++) {\n      const row = [];\n      arr.push(row);\n      for (let j = 0; j < 10; j++) {\n        const cell = [''];\n        row.push(cell);\n      }\n    }\n    return arr;\n  })();\n\n  // Check coordinates for validity\n  const validateInterval = (a, b, c, d) => {\n    if (a < 10 && a >= 0 && b < 10 && b >= 0) {\n      if (c === 'h' && b + d <= 10) return true;\n      if (c === 'v' && a + d <= 10) return true;\n    }\n    return false;\n  };\n\n  // Random coordinates generator\n  const randomCoord = (length) => {\n    const coord = [];\n    const orientation = ['h', 'v'];\n    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);\n\n    for (let i = 0; i < 4; i++) {\n      if (i === 2) coord.push(orientation[random(0, 1)]);\n      else if (i === 3) coord.push(length);\n      else coord.push(random(0, 9));\n    }\n    return coord;\n  };\n\n  // Return board area or false if area is invalid\n  const getBoardArea = (x, y, orientation = 'h', length = 1) => {\n    let field = false;\n    if (orientation === 'h' && validateInterval(x, y, orientation, length)) {\n      const row = board[x];\n      field = row.slice(y, y + length);\n    }\n    if (orientation === 'v' && validateInterval(x, y, orientation, length)) {\n      field = [];\n      for (let i = x; i < (x + length); i++) {\n        field.push(board[i][y]);\n      }\n    }\n    return field;\n  };\n\n  return {\n    // testing(a) {\n    //   console.log(\n    //     `Ships are: ${ships}\\n`,\n    //     `Is board empty ${this.isEmpty('board')}\\n`,\n    //     `Are all sunk: ${this.allSunk()}\\n`,\n    //     `Ships locations are: ${a}\\n`,\n    //     `Board is: ${this.getBoard()}`,\n    //   );\n    // },\n\n    // Return board\n    getBoard() {\n      return board;\n    },\n\n    // Clear all board's cells and ships array\n    newBoard() {\n      board.forEach((row) => row.forEach((cell) => cell[0] = ''));\n      while (ships.length > 0) ships.pop();\n    },\n\n    // Get occupied cells by ships, to use them for visual rendering\n    getCellsOfShip(x, y, orientation, length) {\n      const cells = [];\n      for (let i = 0; i < length; i++) {\n        if (orientation === 'h') cells.push([x, y + i]);\n        if (orientation === 'v') cells.push([x + i, y]);\n      }\n      return cells;\n    },\n\n    // Check if area is empty, return true or false, or 'invalid area'\n    isEmpty(x, y, orientation, length) {\n      const area = getBoardArea(x, y, orientation, length);\n      // Check if entire board is empty, every row should return true\n      if (x === 'board') {\n        if (board.every((row) => (row.every((cell) => cell[0] === '')) === true)) return true;\n        return false;\n      }\n      // Check if area is empty or return invalid area input\n      if (Array.isArray(area) && area.every((cell) => cell[0] === '')) {\n        return true;\n      }\n      return false;\n    },\n\n    // Place ship at coordinates if condition var is true or array type\n    placeShip(x, y, orientation, length) {\n      const condition = this.isEmpty(x, y, orientation, length);\n      if (Array.isArray(condition) || condition === true) {\n        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\n        const area = getBoardArea(x, y, orientation, length);\n        // Place the ship in each cell from selected area\n        area.forEach((cell) => cell[0] = ship);\n        // Add ship to board's ships array\n        ships.push(ship);\n      }\n      return this;\n    },\n\n    // Attack a position and return that position\n    receiveAttack(x, y) {\n      const cell = board[x][y][0];\n      if (cell === 0 || cell === 1) return;\n      if (typeof cell === 'object') {\n        cell.hit();\n        board[x][y][0] = 1;\n      } else board[x][y][0] = 0;\n      return board[x][y][0];\n    },\n\n    // Check if all ships have been sunk\n    allSunk() {\n      return ships.every((ship) => ship.isSunk() === true);\n    },\n\n    // Populate the board with random ships and return cells occupied by the ships\n    randomShips() {\n      const shipLengths = [5, 4, 3, 2, 1];\n      let arr = [];\n      let coordinates = randomCoord(shipLengths[0]);\n\n      while (ships.length < 5) {\n        const condition = this.isEmpty(...coordinates);\n        if (Array.isArray(condition) || condition === true) {\n          this.placeShip(...coordinates);\n          arr = arr.concat(this.getCellsOfShip(...coordinates));\n          shipLengths.shift();\n        } else coordinates = randomCoord(shipLengths[0]);\n      }\n      return arr;\n    },\n\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n\n//# sourceURL=webpack://odin-battleship/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (board) => {\n  // Array containing all 100 available attacks\n  const attacks = (() => {\n    const arr = [];\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        arr.push([i, j]);\n      }\n    }\n    return arr;\n  })();\n\n  // Array containing attacks recommended after hitting a ship\n  const recommendedAttacks = [];\n\n  // Return random number to select a random attack\n  const random = () => Math.floor(Math.random() * ((attacks.length - 1) - 0 + 1) + 0);\n\n  // Return index of attack to remove recommended attack from the 'attacks' array\n  const indxOfAtk = (a, b) => attacks.findIndex((element) => element[0] === a && element[1] === b);\n\n  // Check if a specific attack is included in the attacks list\n  const isIncluded = (x, y) => attacks.some((attack) => attack[0] === x && attack[1] === y);\n\n  // Add attacks to recommended list if it's present in the attacks list too\n  const addRecommended = (a, b) => {\n    let x = a - 1;\n    let y = b;\n    if (x >= 0 && isIncluded(x, y)) recommendedAttacks.push([x, y]);\n\n    x = a + 1;\n    if (x <= 9 && isIncluded(x, y)) recommendedAttacks.push([x, y]);\n\n    x = a;\n    y = b - 1;\n    if (y >= 0 && isIncluded(x, y)) recommendedAttacks.push([x, y]);\n\n    y = b + 1;\n    if (y <= 9 && isIncluded(x, y)) recommendedAttacks.push([x, y]);\n  };\n\n  return {\n    // How many attacks are left\n    attacksAvailable() {\n      return attacks.length;\n    },\n\n    // Execute an attack\n    attack() {\n      let coordinates;\n\n      // Check if we have recommended attacks or use a random attack\n      if (recommendedAttacks.length > 0) {\n        coordinates = recommendedAttacks[0];\n        recommendedAttacks.shift();\n      } else {\n        coordinates = attacks[random()];\n      }\n\n      // Set coordinates\n      const result = board.receiveAttack(...coordinates);\n      const x = coordinates[0];\n      const y = coordinates[1];\n\n      // Remove the attack from the main attacks array\n      attacks.splice(indxOfAtk(x, y), 1);\n\n      // If the hit was a success, add the adjacent coordinates to recommended attacks\n      if (result === 1) addRecommended(x, y);\n\n      return [x, y, result];\n    },\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://odin-battleship/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (a) => {\n  const length = a;\n  let timesHit = 0;\n  return {\n    isSunk() {\n      if (timesHit === length) return true;\n      return false;\n    },\n\n    hit() {\n      timesHit += 1;\n      return this;\n    },\n\n    getHealth() {\n      return length - timesHit;\n    },\n\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://odin-battleship/./src/factories/ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newGame\": () => (/* binding */ newGame),\n/* harmony export */   \"playTurn\": () => (/* binding */ playTurn),\n/* harmony export */   \"retrieveHumanDomBoard\": () => (/* binding */ retrieveHumanDomBoard)\n/* harmony export */ });\n/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/gameboard */ \"./src/factories/gameboard.js\");\n/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\n\n// Player boards, AI player, div's of humanBoard and gameOngoing to be accessed by other functions\nlet humanBoard;\nlet robotBoard;\nlet enemy;\nlet humanSquareCells;\nlet gameOngoing = true;\n\nfunction newGame() {\n// Create boards for both players, and create AI player\n  humanBoard = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  robotBoard = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  enemy = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(humanBoard);\n\n  // Populate robot board with random ships\n  robotBoard.randomShips();\n\n  // Set game condition to true and return the human board to be used for ship placing\n  gameOngoing = true;\n  return humanBoard;\n}\n\n// Visually marks the gameboards with hits or misses and check for winner\nfunction checkForWinner(person, result, cell, board) {\n  if (result === 1) (0,_display__WEBPACK_IMPORTED_MODULE_2__.markHit)(cell);\n  if (result === 0) (0,_display__WEBPACK_IMPORTED_MODULE_2__.markMiss)(cell);\n  if (board.allSunk() === true) {\n    gameOngoing = false;\n    alert(`All ships have been sunk. ${person} the game!`);\n    return;\n  }\n  return false;\n}\n\n// Play robot's turn\nfunction playRobot() {\n  // Attack on human board by robot and mark cell according to result\n  const result = enemy.attack();\n  const index = Number(result[0].toString() + result[1].toString());\n  const cell = humanSquareCells[index];\n  checkForWinner('Computer has won', result[2], cell, humanBoard);\n}\n\n// Play human's turn\nfunction playTurn(e) {\n  // If cell hasn't been attacked yet\n  if (e.target.classList.contains('cell') && gameOngoing === true) {\n    // Attack robot board and mark cell according to result\n    const result = robotBoard.receiveAttack(e.target.dataset.x, e.target.dataset.y);\n    // If human hasn't won, play the robot's move\n    if (!checkForWinner('You have won', result, e.target, robotBoard)) playRobot();\n  }\n}\n\nfunction retrieveHumanDomBoard(board) {\n  humanSquareCells = Array.from(board.childNodes);\n}\n\n\n//# sourceURL=webpack://odin-battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _assets_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/modal.css */ \"./src/assets/modal.css\");\n\n\n\n\n\n// Initial game load\n(0,_display__WEBPACK_IMPORTED_MODULE_0__.createGrid)();\nlet humanBoard = (0,_game__WEBPACK_IMPORTED_MODULE_1__.newGame)();\nlet shipLengths = [5, 4, 3, 2, 1];\n(0,_display__WEBPACK_IMPORTED_MODULE_0__.loadModal)();\n(0,_display__WEBPACK_IMPORTED_MODULE_0__.renderShip)(5);\naddListenersToNewCells();\n\n// Attacking by clicking the computer's board\ndocument.getElementById('second-block').addEventListener('click', (e) => {\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.playTurn)(e);\n});\n\n// New game button\ndocument.getElementById('new-game').addEventListener('click', () => {\n  for (let i = 5; i > 0; i--) shipLengths.push(i);\n  (0,_display__WEBPACK_IMPORTED_MODULE_0__.createGrid)();\n  humanBoard = (0,_game__WEBPACK_IMPORTED_MODULE_1__.newGame)();\n  (0,_display__WEBPACK_IMPORTED_MODULE_0__.loadModal)();\n  (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderShip)(5);\n  addListenersToNewCells();\n});\n\n// Change orientation of ship\ndocument.getElementById('piece-container').addEventListener('click', () => {\n  (0,_display__WEBPACK_IMPORTED_MODULE_0__.changeOrientation)();\n});\n\n// Drag & drop the selected ship(piece) to pick-board\nfunction addListenersToNewCells() {\n  const selectingCells = Array.from(document.getElementById('pick-block').childNodes);\n  selectingCells.forEach((cell) => cell.addEventListener('drop', (e) => {\n    // Get length and orientation from piece and x/y from cell dropped onto\n    const piece = document.getElementById('piece');\n    const x = Number(e.target.dataset.x);\n    const y = Number(e.target.dataset.y);\n    const { orientation } = piece.dataset;\n    const length = Number(piece.dataset.length);\n\n    if (humanBoard.isEmpty(x, y, orientation, length)) {\n      humanBoard.placeShip(x, y, orientation, length);\n      const cells = humanBoard.getCellsOfShip(x, y, orientation, length);\n      cells.forEach((cell) => (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayShip)(cell, selectingCells));\n      shipLengths.shift();\n      (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderShip)(shipLengths[0]);\n    }\n  }));\n}\n\n// Start game button\ndocument.getElementById('start').addEventListener('click', () => {\n  // Check if all ships have been placed\n  const firstBoard = document.getElementById('first-block');\n  const pickBoard = document.getElementById('pick-block');\n  if (shipLengths.length < 1) {\n    firstBoard.innerHTML = pickBoard.innerHTML;\n    pickBoard.innerHTML = '';\n    (0,_game__WEBPACK_IMPORTED_MODULE_1__.retrieveHumanDomBoard)(firstBoard);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.loadModal)();\n  }\n});\n\n// Random ships button\ndocument.getElementById('random').addEventListener('click', () => {\n  const selectingCells = Array.from(document.getElementById('pick-block').childNodes);\n  (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearDisplayShips)(selectingCells);\n  humanBoard.newBoard();\n  const cells = humanBoard.randomShips();\n  cells.forEach((cell) => (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayShip)(cell, selectingCells));\n  shipLengths = [];\n  document.getElementById('piece').innerHTML = '';\n});\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/assets/AlfaSlabOne-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/AlfaSlabOne-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76486fb5cc170dab15a5.ttf\";\n\n//# sourceURL=webpack://odin-battleship/./src/assets/AlfaSlabOne-Regular.ttf?");

/***/ }),

/***/ "./src/assets/hit.png":
/*!****************************!*\
  !*** ./src/assets/hit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb537526dbac1edfa6ef.png\";\n\n//# sourceURL=webpack://odin-battleship/./src/assets/hit.png?");

/***/ }),

/***/ "./src/assets/target.png":
/*!*******************************!*\
  !*** ./src/assets/target.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a92f1de0514bd82550d8.png\";\n\n//# sourceURL=webpack://odin-battleship/./src/assets/target.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;