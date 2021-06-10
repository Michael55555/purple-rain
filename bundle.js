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

/***/ "./src/drop.js":
/*!*********************!*\
  !*** ./src/drop.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Drop {\n  constructor() {\n    this.x = Math.random() * innerWidth;\n    this.y = -20;\n    this.v = Math.random() * 30 + 10; \n    this.width = Math.random() * 5 + 5;\n    this.height = Math.random() * 5 + 15;\n    this.fillStyle = `rgba(154, 18, 179, ${this.v / 40})`\n  }\n  move() {\n    this.y += this.v; \n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drop);\n\n\n//# sourceURL=webpack://purple-rain/./src/drop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop.js */ \"./src/drop.js\");\n\n\nlet ctx = null;\nlet drops = new Array(50).fill().map(() => new _drop_js__WEBPACK_IMPORTED_MODULE_0__.default());\n\nfunction init() {\n  const canvas = document.querySelector(\"canvas\");\n\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n\n  ctx = canvas.getContext(\"2d\");\n  animate();\n}\n\nfunction render() {\n  for (let i = 0; i < 4; i++) {\n    drops.push(new _drop_js__WEBPACK_IMPORTED_MODULE_0__.default());\n  }\n\n  ctx.clearRect(0, 0, innerWidth, innerHeight);\n\n  for (let drop of drops) {\n    drop.move();\n    ctx.fillStyle = drop.fillStyle;\n    ctx.fillRect(drop.x, drop.y, drop.width, drop.height);\n  }\n\n  drops = drops.filter((drop) => drop.y < innerHeight);\n}\n\nfunction animate() {\n  setTimeout(() => {\n    requestAnimationFrame(animate);\n  }, 1000 / 50);\n  render();\n}\n\nonload = init;\n\n\n//# sourceURL=webpack://purple-rain/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;