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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script.js */ \"./src/js/script.js\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home.js */ \"./src/js/home.js\");\n/* harmony import */ var _js_home_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_home_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_languageMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/languageMenu.js */ \"./src/js/languageMenu.js\");\n/* harmony import */ var _js_languageMenu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_languageMenu_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ (() => {

eval("const languages = [];\r\nconst langContainer = document.getElementById(\"langContainer\");\r\nconst addLanguagePack_1 = document.getElementById(\"addLanguagePack_1\")\r\nconst addLanguagePack_2 = document.getElementById(\"addLanguagePack_2\")\r\nconst homepage = document.getElementById(\"homepage\");\r\n\r\n\r\n\r\n\r\n/**\r\n * #####################################################################################\r\n * Save Object\r\n * Erweiterungen:\r\n *  voc_Saveobject.currentId = Representation of language package for better asignment\r\n */\r\nlet voc_Saveobject = {\r\n    languagePacks: [],\r\n    settings: {\r\n        appeareance: 'light',\r\n        name_of_my_language: 'Deutsch'\r\n    },\r\n    showLanguage: ''\r\n}\r\n\r\n\r\n/**\r\n * #####################################################################################\r\n * Language Class\r\n */\r\nclass LanguagePack {\r\n    constructor(id, language_Name) {\r\n        this.id = id;\r\n        this.language_Name = language_Name;\r\n        this.level_1_DB = [];\r\n        this.level_2_DB = [];\r\n        this.level_3_DB = [];\r\n        this.level_4_DB = [];\r\n        this.testfail_DB = [];\r\n        this.word_DB = [];\r\n    }\r\n}\r\n\r\n// #####################################################################################\r\n// Init\r\nwindow.onload = init();\r\nfunction init() {\r\n    if(homepage) {\r\n        load_Data_from_Storage();\r\n    }\r\n}\r\n\r\n// #####################################################################################\r\n// Load Data\r\n\r\nfunction load_Data_from_Storage() {\r\n    if (localStorage.getItem('vocableTrainer_save_Object') != null) {\r\n        voc_Saveobject = JSON.parse(localStorage.getItem('vocableTrainer_save_Object'));\r\n        try {\r\n            for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {\r\n                languages.push(voc_Saveobject.languagePacks[i].language_Name)\r\n            }\r\n            renderLanguages();\r\n        } catch (error) {\r\n            console.warn('Loadingerror', error)\r\n        }\r\n    } else {\r\n        console.log('Save Obj konnte nicht geladen werden');\r\n    }\r\n}\r\n\r\nfunction save_into_Storage() {\r\n    localStorage.setItem('vocableTrainer_save_Object', JSON.stringify(voc_Saveobject));\r\n    console.log('SaveObj', voc_Saveobject);\r\n}\r\n\r\n\r\n// #####################################################################################\r\nfunction renderLanguages() {\r\n    for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {\r\n        let languageButton = document.createElement(\"div\");\r\n        languageButton.innerHTML = voc_Saveobject.languagePacks[i].language_Name;\r\n        languageButton.classList.add('languageBtn')\r\n        languageButton.id = voc_Saveobject.languagePacks[i].id;\r\n        languageButton.onclick = function () {\r\n            voc_Saveobject.showLanguage = this.innerHTML;\r\n            voc_Saveobject.currentId = this.id;\r\n            save_into_Storage();\r\n            setTimeout(() => {\r\n                window.location = 'languageMenu.html'\r\n            }, 200);\r\n        };\r\n        langContainer.appendChild(languageButton);\r\n    }\r\n}\r\n\r\n// #####################################################################################\r\nfunction create_Id() {\r\n    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '#', 'A', 'B', 'C', 'D', '!', 'E', '$'];\r\n    let id = '';\r\n    for (let i = 1; i <= 15; i++) {\r\n        const randomNumb = parseInt(Math.random() * chars.length)\r\n        id = id + chars[randomNumb]\r\n    }\r\n    return id;\r\n}\r\n\r\n// #####################################################################################\r\n\r\nif (addLanguagePack_1) {\r\n    addLanguagePack_1.addEventListener(\"click\", () => {\r\n        create_new_languge_pack();\r\n    })\r\n}\r\nif (addLanguagePack_2) {\r\n    addLanguagePack_2.addEventListener(\"click\", () => {\r\n        create_new_languge_pack();\r\n    })\r\n}\r\n\r\n//? Generate Language Package\r\nfunction create_new_languge_pack() {\r\n    const languageName = window.prompt(\"Welche Sprache möchtest du lernen?\")\r\n    let language_already_exists = false;\r\n\r\n    for (let i = 0; i < languages.length; i++) {\r\n        if (languageName === languages[i]) {\r\n            alert(\"Du hast bereits ein Sprachpaket mit diesem Namen\")\r\n            language_already_exists = true;\r\n            break;\r\n        }\r\n    }\r\n\r\n    if (language_already_exists === false && languageName !== null && languageName.length > 4) {\r\n        voc_Saveobject.languagePacks.push(new LanguagePack(create_Id(), languageName))\r\n        console.log('Save_Obj', voc_Saveobject);\r\n        save_into_Storage();\r\n        window.location.reload();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://project-template/./src/js/home.js?");

/***/ }),

/***/ "./src/js/languageMenu.js":
/*!********************************!*\
  !*** ./src/js/languageMenu.js ***!
  \********************************/
/***/ (() => {

eval("const lngLabel = document.getElementById(\"lngLabel\");\r\nconst langMenu = document.getElementById(\"langMenu\");\r\nconst new_Words_Area = document.getElementById(\"new_Words_Area\")\r\nconst menu_Area = document.getElementById(\"menu_Area\")\r\nconst addVocable_1 = document.getElementById(\"addVocable_1\")\r\nconst addVocable_2 = document.getElementById(\"addVocable_2\")\r\nconst hide_Inputfields = document.getElementById(\"hide_Inputfields\")\r\nconst btn_Save_new_Vocable = document.getElementById(\"btn_Save_new_Vocable\");\r\nconst inp_word_own = document.getElementById(\"inp_word_own\");\r\nconst inp_word_foreign = document.getElementById(\"inp_word_foreign\");\r\nconst myWordsArea = document.getElementById(\"myWordsArea\");\r\nconst showMyVocables = document.getElementById(\"showMyVocables\");\r\nconst wordsWrapper = document.getElementById(\"wordsWrapper\")\r\nconst hide_myWords = document.getElementById(\"hide_myWords\")\r\n/**\r\n * #####################################################################################\r\n * Save Object\r\n * voc_Saveobject.currentId = Representation of language package for better asignment\r\n */\r\nlet voc_Saveobject = {\r\n    languagePacks: [],\r\n    settings: {\r\n        appeareance: 'light',\r\n        name_of_my_language: 'Deutsch'\r\n    },\r\n    showLanguage: ''\r\n}\r\n\r\n\r\n// #####################################################################################\r\n// Init\r\nwindow.onload = init();\r\nfunction init() {\r\n    if(langMenu) {\r\n        load_Data_from_Storage();\r\n    }\r\n}\r\n\r\n// #####################################################################################\r\n// Load Data\r\n\r\nfunction load_Data_from_Storage() {\r\n    if (localStorage.getItem('vocableTrainer_save_Object') != null) {\r\n        voc_Saveobject = JSON.parse(localStorage.getItem('vocableTrainer_save_Object'));\r\n        console.log('SaveObj', voc_Saveobject);\r\n        try {\r\n            lngLabel.innerHTML = voc_Saveobject.showLanguage;\r\n        } catch (error) {\r\n            console.warn('Loadingerror', error)\r\n        }\r\n    } else {\r\n        console.log('Save Obj konnte nicht geladen werden');\r\n    }\r\n}\r\n\r\nfunction save_into_Storage() {\r\n    localStorage.setItem('vocableTrainer_save_Object', JSON.stringify(voc_Saveobject));\r\n    console.log('SaveObj', voc_Saveobject);\r\n}\r\n\r\n\r\n\r\n// Add new Vocable\r\n\r\nif(addVocable_1) {\r\n    addVocable_1.addEventListener(\"click\", ()=> {\r\n        showInputArea();\r\n    })\r\n}\r\nif(addVocable_2) {\r\n    addVocable_2.addEventListener(\"click\", ()=> {\r\n        showInputArea();\r\n    })\r\n}\r\n\r\nif(showMyVocables) {\r\n    showMyVocables.addEventListener(\"click\", ()=> {\r\n        showWords();\r\n    })\r\n}\r\n\r\n\r\n\r\nfunction showInputArea() {\r\n    menu_Area.style.display = 'none'\r\n    new_Words_Area.style.display = 'flex'\r\n}\r\n\r\n\r\nfunction showWords() {\r\n    menu_Area.style.display = 'none'\r\n    myWordsArea.style.display = 'flex'\r\n    const langId = voc_Saveobject.currentId;\r\n    for(let i = 0; i < voc_Saveobject.languagePacks.length; i++) {\r\n        console.log('In Schleife 1');\r\n        if(voc_Saveobject.languagePacks[i].id === langId) {\r\n            const wordbook = voc_Saveobject.languagePacks[i].word_DB\r\n            for(let j = 0; j < wordbook.length; j++) {\r\n                let row = document.createElement('div')\r\n                row.classList.add(\"row\")\r\n\r\n                let cell = document.createElement('div')\r\n                cell.classList.add(\"cell\")\r\n                cell.innerHTML = wordbook[j].ownLangWord\r\n                cell.id = wordbook[j].wordId\r\n\r\n                let cellr = document.createElement('div')\r\n                cellr.classList.add(\"cell\")\r\n                cellr.classList.add(\"cellr\")\r\n                cellr.innerHTML = wordbook[j].foreignLangWord\r\n                cellr.id = wordbook[j].wordId\r\n\r\n                row.appendChild(cell)\r\n                row.appendChild(cellr)\r\n\r\n                wordsWrapper.appendChild(row)\r\n\r\n            }\r\n            break;\r\n        }\r\n    }\r\n}\r\n\r\nif(hide_Inputfields) {\r\n    hide_Inputfields.addEventListener(\"click\", ()=> {\r\n        showMenu();\r\n    })\r\n}\r\n\r\nif(hide_myWords) {\r\n    hide_myWords.addEventListener(\"click\", ()=> {\r\n        showMenu();\r\n    })\r\n}\r\n\r\nfunction showMenu() {\r\n    // new_Words_Area.style.display = 'none'\r\n    // myWordsArea.style.display = 'none'\r\n    // menu_Area.style.display = 'flex'\r\n    location.reload();\r\n}\r\n\r\nclass Vocable {\r\n    constructor(ownLangWord, foreignLangWord, wordId, voableStatus) {\r\n        this.ownLangWord = ownLangWord;\r\n        this.foreignLangWord = foreignLangWord;\r\n        this.wordId = wordId;\r\n        this.voableStatus = voableStatus;\r\n    }\r\n}\r\n\r\n\r\n// Eingegebenes Wort hinzufügen\r\nif(btn_Save_new_Vocable) {\r\n    btn_Save_new_Vocable.addEventListener(\"click\", ()=> {\r\n\r\n        // Reset Textfields\r\n        const word = inp_word_own.value;\r\n        const translation = inp_word_foreign.value;\r\n        const langId = voc_Saveobject.currentId;\r\n\r\n        if(word.length !== '' && translation !== '') {\r\n            for(let i = 0; i < voc_Saveobject.languagePacks.length; i++) {\r\n                if(voc_Saveobject.languagePacks[i].id === langId) {\r\n                    voc_Saveobject.languagePacks[i].word_DB.push(new Vocable(word, translation, create_Id(), 0))\r\n                    save_into_Storage();\r\n                    break;\r\n                }\r\n            }\r\n            inp_word_own.value = '';\r\n            inp_word_foreign.value = '';\r\n        }else {\r\n            alert(\"Beide Felder müssen ausgefüllt sein\")\r\n        }\r\n    })\r\n}\r\n\r\n\r\nfunction create_Id() {\r\n    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '#', 'A', 'B', 'C', 'D', '!', 'E', '$'];\r\n    let id = '';\r\n    for (let i = 1; i <= 15; i++) {\r\n        const randomNumb = parseInt(Math.random() * chars.length)\r\n        id = id + chars[randomNumb]\r\n    }\r\n    return id;\r\n}\r\n\n\n//# sourceURL=webpack://project-template/./src/js/languageMenu.js?");

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