/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project-template/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/storage.js */ \"./src/js/storage.js\");\n/* harmony import */ var _js_storage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_storage_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/script.js */ \"./src/js/script.js\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/home.js */ \"./src/js/home.js\");\n/* harmony import */ var _js_home_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_home_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\n\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ (() => {

eval("const languages = ['Englisch', 'Spanisch', 'Französisch'];\r\nconst langContainer = document.getElementById(\"langContainer\");\r\nconst addLanguagePack_1 = document.getElementById(\"addLanguagePack_1\")\r\nconst addLanguagePack_2 = document.getElementById(\"addLanguagePack_2\")\r\n\r\n\r\nwindow.onload = init();\r\n\r\n\r\n/**\r\n * #####################################################################################\r\n * Save Object\r\n */\r\nlet voc_Saveobject = {\r\n    languagePacks: [],\r\n    settings: {\r\n        appeareance: 'light',\r\n        name_of_my_language: 'Deutsch'\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * #####################################################################################\r\n * Language Class\r\n */\r\nclass LanguagePack {\r\n    constructor(id, language_Name) {\r\n        this.id = id;\r\n        this.language_Name = language_Name;\r\n        this.level_1_DB = [];\r\n        this.level_2_DB = [];\r\n        this.level_3_DB = [];\r\n        this.level_4_DB = [];\r\n        this.testfail_DB = [];\r\n        this.word_DB = [];\r\n    }\r\n}\r\n\r\n// #####################################################################################\r\n\r\nfunction init() {\r\n    renderLanguages();\r\n}\r\n\r\n\r\n// #####################################################################################\r\nfunction renderLanguages() {\r\n    for(let i = 0; i < languages.length; i++) {\r\n        let atag = document.createElement(\"a\");\r\n        atag.innerHTML = languages[i];\r\n        langContainer.appendChild(atag);\r\n    }\r\n}\r\n\r\n// #####################################################################################\r\nfunction create_Id() {\r\n    const chars = ['0','1','2','3','4','5','6','7','8','9','0','#','A','B','C','D','!','E','$'];\r\n    let id = '';\r\n    for(let i = 1; i <= 15; i++) {\r\n        const randomNumb = parseInt(Math.random() * chars.length)\r\n        id = id + chars[randomNumb]\r\n    }\r\n    return id;\r\n}\r\n\r\n// #####################################################################################\r\n\r\nif(addLanguagePack_1) {\r\n    addLanguagePack_1.addEventListener(\"click\", ()=> {\r\n        create_new_languge_pack();\r\n    })\r\n}\r\nif(addLanguagePack_2) {\r\n    addLanguagePack_2.addEventListener(\"click\", ()=> {\r\n        create_new_languge_pack();\r\n    })\r\n}\r\n\r\n//? Generate Language Package\r\nfunction create_new_languge_pack() {\r\n    const languageName = window.prompt(\"Welche Sprache möchtest du lernen?\")\r\n    let language_already_exists = false;\r\n\r\n    for(let i = 0; i < languages.length; i++) {\r\n        if(languageName === languages[i]) {\r\n            alert(\"Du hast bereits ein Sprachpaket mit diesem Namen\")\r\n            language_already_exists = true;\r\n            break;\r\n        }\r\n    }\r\n\r\n    if(language_already_exists === false) {\r\n        voc_Saveobject.languagePacks.push(new LanguagePack(create_Id(), languageName))\r\n        console.log('Save_Obj', voc_Saveobject);\r\n    }\r\n}\n\n//# sourceURL=webpack://project-template/./src/js/home.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://project-template/./src/js/script.js?");

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