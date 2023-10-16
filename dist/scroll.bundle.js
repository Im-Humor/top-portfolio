"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktop_portfolio"] = self["webpackChunktop_portfolio"] || []).push([["scroll"],{

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   snapScroll: () => (/* binding */ snapScroll)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\n\nconst allSlides = document.querySelectorAll(\".slide\");\n\nconst snapScroll = () => {\n\tlet scrollHeight = 0;\n\tlet downDir = true;\n\tconst currentHeight = window.scrollY;\n\tif (currentHeight > scrollHeight) {\n\t\tdownDir = true;\n\t} else if (currentHeight < scrollHeight) {\n\t\tdownDir = false;\n\t}\n\tscrollHeight = currentHeight;\n\tfor (let x = 0; x < allSlides.length; x++) {\n\t\tconst slidePos = allSlides[x].getBoundingClientRect();\n\t\tconst viewHeight = window.visualViewport.height;\n\t\tif (downDir === true && slidePos.y > 0 && slidePos.y < viewHeight) {\n\t\t\tallSlides[x].scrollIntoView({ behavior: \"smooth\" });\n\t\t} else if (downDir === false && slidePos.y > 0 && slidePos.y < viewHeight) {\n\t\t\tallSlides[x - 1].scrollIntoView({ behavior: \"smooth\" });\n\t\t}\n\t}\n};\n\n\n//# sourceURL=webpack://top-portfolio/./src/scroll.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scroll.js"));
/******/ }
]);