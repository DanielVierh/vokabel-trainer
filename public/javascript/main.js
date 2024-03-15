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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script.js */ \"./src/js/script.js\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home.js */ \"./src/js/home.js\");\n/* harmony import */ var _js_languageMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/languageMenu.js */ \"./src/js/languageMenu.js\");\n/* harmony import */ var _js_cards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/cards.js */ \"./src/js/cards.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n// import \"./js/store.js\"\n\n\n\n\n\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/js/store.js\");\n\n\nconst card = document.querySelector('.card');\nconst btnNext = document.getElementById(\"btnNext\");\nconst vocCards = document.getElementById(\"vocCards\");\nconst crdFront = document.getElementById(\"crdFront\");\nconst crdBack = document.getElementById(\"crdBack\");\nlet cardBackSideIsVisible = false;\nlet allVocables = [];\nlet voc_Saveobject\n\n\n// #####################################################################################\n// Init\nwindow.onload = () => {\n    if(vocCards) {\n        load_Data_from_Storage();\n    }\n}\n\n// #####################################################################################\n// Load Data\n\nfunction load_Data_from_Storage() {\n    voc_Saveobject = _store_js__WEBPACK_IMPORTED_MODULE_0__.load_Data_from_LocalStorage()\n    setTimeout(() => {\n        try {\n            loadAllWords()\n            pickRandomWord()\n        } catch (error) {\n            console.warn('Loadingerror', error)\n        }\n    }, 300);\n}\n\n// Karte drehen\n\nif (card) {\n    card.addEventListener('click', () => {\n        flipCard()\n    });\n}\n\nfunction flipCard() {\n    card.classList.toggle('is-flipped');\n    if(cardBackSideIsVisible === false) {\n        cardBackSideIsVisible = true;\n        btnNext.classList.add(\"active\")\n    }else {\n        cardBackSideIsVisible = false;\n        btnNext.classList.remove(\"active\");\n    }\n}\n\n\n//  Array mit allen Wörtern erstellen\nfunction loadAllWords() {\n    const langId = voc_Saveobject.currentId;\n    for(let i = 0; i < voc_Saveobject.languagePacks.length; i++) {\n        if(voc_Saveobject.languagePacks[i].id === langId) {\n            allVocables = voc_Saveobject.languagePacks[i].word_DB;\n            console.log('allVocables', allVocables);\n            break;\n        }\n    }\n    console.log('Vokabeln:', allVocables);\n}\n\n\n//\nfunction pickRandomWord() {\n    for(let i = 0; i < 100; i++) {\n        const random = parseInt(Math.random() * allVocables.length)\n        crdFront.innerHTML = allVocables[random].ownLangWord\n        crdBack.innerHTML = allVocables[random].foreignLangWord\n    }\n}\n\nif(btnNext) {\n    btnNext.addEventListener('click', ()=> {\n        flipCard()\n        setTimeout(() => {\n            pickRandomWord();\n        }, 400);\n    })\n}\n\n\n//# sourceURL=webpack://project-template/./src/js/cards.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_Id\": () => (/* binding */ create_Id)\n/* harmony export */ });\n\n\nconst create_Id = ()=> {\n    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '#', 'A', 'B', 'C', 'D', '!', 'E', '$'];\n    let id = '';\n    for (let i = 1; i <= 15; i++) {\n        const randomNumb = parseInt(Math.random() * chars.length)\n        id = id + chars[randomNumb]\n    }\n    return id;\n}\n\n\n\n\n//# sourceURL=webpack://project-template/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/js/store.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/js/functions.js\");\n\n\n\nconst languages = [];\nconst langContainer = document.getElementById(\"langContainer\");\nconst addLanguagePack_1 = document.getElementById(\"addLanguagePack_1\")\nconst addLanguagePack_2 = document.getElementById(\"addLanguagePack_2\")\nconst homepage = document.getElementById(\"homepage\");\nlet voc_Saveobject\n\n/**\n * #####################################################################################\n * Language Class\n */\nclass LanguagePack {\n    constructor(id, language_Name) {\n        this.id = id;\n        this.language_Name = language_Name;\n        this.level_1_DB = [];\n        this.level_2_DB = [];\n        this.level_3_DB = [];\n        this.level_4_DB = [];\n        this.testfail_DB = [];\n        this.word_DB = [];\n    }\n}\n\n\n\nwindow.onload = init();\n\nfunction init() {\n    if(homepage) {\n        load_Data_from_Storage();\n        console.log('Home.js');\n    }\n}\n\n// #####################################################################################\n// Load Data\n\nfunction load_Data_from_Storage() {\n    voc_Saveobject = _store_js__WEBPACK_IMPORTED_MODULE_0__.load_Data_from_LocalStorage()\n\n    setTimeout(() => {\n        console.log('voc_Saveobject', voc_Saveobject);\n        try {\n            for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {\n                languages.push(voc_Saveobject.languagePacks[i].language_Name)\n            }\n            renderLanguages();\n        } catch (error) {\n            console.warn('Loadingerror', error)\n        }\n    }, 300);\n}\n\n\n// #####################################################################################\nfunction renderLanguages() {\n    for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {\n        let languageButton = document.createElement(\"div\");\n        languageButton.innerHTML = voc_Saveobject.languagePacks[i].language_Name;\n        languageButton.classList.add('languageBtn')\n        languageButton.id = voc_Saveobject.languagePacks[i].id;\n        languageButton.onclick = function () {\n            voc_Saveobject.showLanguage = this.innerHTML;\n            voc_Saveobject.currentId = this.id;\n            _store_js__WEBPACK_IMPORTED_MODULE_0__.save_Data_into_LocalStorage();\n            setTimeout(() => {\n                window.location = 'languageMenu.html'\n            }, 200);\n        };\n        langContainer.appendChild(languageButton);\n    }\n}\n\n// #####################################################################################\n\nif (addLanguagePack_1) {\n    addLanguagePack_1.addEventListener(\"click\", () => {\n        create_new_languge_pack();\n    })\n}\nif (addLanguagePack_2) {\n    addLanguagePack_2.addEventListener(\"click\", () => {\n        create_new_languge_pack();\n    })\n}\n\n//? Generate Language Package\nfunction create_new_languge_pack() {\n    const languageName = window.prompt(\"Welche Sprache möchtest du lernen?\")\n    let language_already_exists = false;\n\n    for (let i = 0; i < languages.length; i++) {\n        if (languageName === languages[i]) {\n            alert(\"Du hast bereits ein Sprachpaket mit diesem Namen\")\n            language_already_exists = true;\n            break;\n        }\n    }\n\n    if (language_already_exists === false && languageName !== null && languageName.length > 4) {\n        const newLang = new LanguagePack(_functions_js__WEBPACK_IMPORTED_MODULE_1__.create_Id(), languageName)\n        console.log('newLang', newLang);\n        _store_js__WEBPACK_IMPORTED_MODULE_0__.add_Language_to_SaveObj(newLang);\n        window.location.reload();\n    }\n}\n\n\n// Function to detect if you hold your device in portrait or landscape mode\nfunction portrait_or_landscape() {\n    // @media (orientation: landscape) {\n    //     body {\n    //       flex-direction: row;\n    //     }\n    //   }\n      \n    //   @media (orientation: portrait) {\n    //     body {\n    //       flex-direction: column;\n    //     }\n    //   }\n\n\n}\n\nscreen.addEventListener(\"orientationchange\", () => {\n    console.log(`The orientation of the screen is: ${screen.orientation}`);\n  });\n\n//# sourceURL=webpack://project-template/./src/js/home.js?");

/***/ }),

/***/ "./src/js/languageMenu.js":
/*!********************************!*\
  !*** ./src/js/languageMenu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/js/store.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/js/functions.js\");\n\n\n\nconst lngLabel = document.getElementById(\"lngLabel\");\nconst langMenu = document.getElementById(\"langMenu\");\nconst new_Words_Area = document.getElementById(\"new_Words_Area\")\nconst menu_Area = document.getElementById(\"menu_Area\")\nconst addVocable_1 = document.getElementById(\"addVocable_1\")\nconst addVocable_2 = document.getElementById(\"addVocable_2\")\nconst hide_Inputfields = document.getElementById(\"hide_Inputfields\")\nconst btn_Save_new_Vocable = document.getElementById(\"btn_Save_new_Vocable\");\nconst inp_word_own = document.getElementById(\"inp_word_own\");\nconst inp_word_foreign = document.getElementById(\"inp_word_foreign\");\nconst myWordsArea = document.getElementById(\"myWordsArea\");\nconst showMyVocables = document.getElementById(\"showMyVocables\");\nconst wordsWrapper = document.getElementById(\"wordsWrapper\");\nconst hide_myWords = document.getElementById(\"hide_myWords\");\nconst btn_translate = document.getElementById('btn_translate');\nconst inp_lang_short_code = document.getElementById('inp_lang_short_code');\nlet voc_Saveobject;\n\n\n// #####################################################################################\n// Init\nwindow.onload = init();\nfunction init() {\n    if (langMenu) {\n        load_Data_from_Storage();\n        console.log('LanguageMenu.js');\n    }\n}\n\n// #####################################################################################\n// Load Data\n\nfunction load_Data_from_Storage() {\n    voc_Saveobject = _store_js__WEBPACK_IMPORTED_MODULE_0__.load_Data_from_LocalStorage()\n    setTimeout(() => {\n        console.log('voc_Saveobject', voc_Saveobject);\n        try {\n            lngLabel.innerHTML = voc_Saveobject.showLanguage;\n        } catch (error) {\n            console.warn('Loadingerror', error)\n        }\n    }, 200);\n}\n\n\n// Add new Vocable\n\nif (addVocable_1) {\n    addVocable_1.addEventListener(\"click\", () => {\n        showInputArea();\n    })\n}\nif (addVocable_2) {\n    addVocable_2.addEventListener(\"click\", () => {\n        showInputArea();\n    })\n}\n\nif (showMyVocables) {\n    showMyVocables.addEventListener(\"click\", () => {\n        showWords();\n    })\n}\n\n\n\nfunction showInputArea() {\n    menu_Area.style.display = 'none'\n    new_Words_Area.style.display = 'flex'\n}\n\n\nfunction showWords() {\n    menu_Area.style.display = 'none'\n    myWordsArea.style.display = 'flex'\n    const langId = voc_Saveobject.currentId;\n    for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {\n        console.log('In Schleife 1');\n        if (voc_Saveobject.languagePacks[i].id === langId) {\n            const wordbook = voc_Saveobject.languagePacks[i].word_DB\n            for (let j = 0; j < wordbook.length; j++) {\n                let row = document.createElement('div')\n                row.classList.add(\"row\")\n\n                let cell = document.createElement('div')\n                cell.classList.add(\"cell\")\n                cell.innerHTML = wordbook[j].ownLangWord\n                cell.id = wordbook[j].wordId\n\n                let cellr = document.createElement('div')\n                cellr.classList.add(\"cell\")\n                cellr.classList.add(\"cellr\")\n                cellr.innerHTML = wordbook[j].foreignLangWord\n                cellr.id = wordbook[j].wordId\n\n                row.appendChild(cell)\n                row.appendChild(cellr)\n\n                wordsWrapper.appendChild(row)\n\n            }\n            break;\n        }\n    }\n}\n\nif (hide_Inputfields) {\n    hide_Inputfields.addEventListener(\"click\", () => {\n        showMenu();\n    })\n}\n\nif (hide_myWords) {\n    hide_myWords.addEventListener(\"click\", () => {\n        showMenu();\n    })\n}\n\nfunction showMenu() {\n    location.reload();\n}\n\nclass Vocable {\n    constructor(ownLangWord, foreignLangWord, wordId, voableStatus) {\n        this.ownLangWord = ownLangWord;\n        this.foreignLangWord = foreignLangWord;\n        this.wordId = wordId;\n        this.voableStatus = voableStatus;\n    }\n}\n\n\n// Eingegebenes Wort hinzufügen\nif (btn_Save_new_Vocable) {\n    btn_Save_new_Vocable.addEventListener(\"click\", () => {\n\n        // Reset Textfields\n        const word = inp_word_own.value;\n        const translation = inp_word_foreign.value;\n        const langId = voc_Saveobject.currentId;\n\n        if (word.length !== '' && translation !== '') {\n            for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {\n                if (voc_Saveobject.languagePacks[i].id === langId) {\n                    voc_Saveobject.languagePacks[i].word_DB.push(new Vocable(word, translation, _functions_js__WEBPACK_IMPORTED_MODULE_1__.create_Id(), 0))\n                    _store_js__WEBPACK_IMPORTED_MODULE_0__.updateSaveObj(voc_Saveobject);\n                    break;\n                }\n            }\n            inp_word_own.value = '';\n            inp_word_foreign.value = '';\n        } else {\n            alert(\"Beide Felder müssen ausgefüllt sein\")\n        }\n    })\n}\n\n\n\nasync function fetchTranslation(sourceLang, targetLang, sourceText) {\n    const url = \"https://translate.googleapis.com/translate_a/single?client=gtx&sl=\" +\n        sourceLang + \"&tl=\" + targetLang + \"&dt=t&q=\" + encodeURI(sourceText);\n\n    try {\n        const response = await fetch(url);\n        if (!response.ok) {\n            throw new Error('Network response was not ok');\n        }\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error('Error fetching translation:', error);\n        return null;\n    }\n}\n\n\n\n\n//* Translate Text \n\nif (btn_translate) {\n    btn_translate.addEventListener('click', () => {\n        if (inp_word_own.value !== '') {\n            const sourceLang = \"de\"; //TODO - Dynamisch machen\n            let targetLang = \"en\"; //TODO - Dynamisch machen\n            if(inp_lang_short_code.value !== '') {\n                targetLang = inp_lang_short_code.value;\n            }\n            const sourceText = inp_word_own.value;\n\n            fetchTranslation(sourceLang, targetLang, sourceText)\n                .then(translation => {\n                    const translatedText = translation[0][0][0]\n                    console.log(\"Translation:\", translatedText);\n                    inp_word_foreign.value = translatedText;\n                })\n                .catch(error => {\n                    console.error(\"Translation error:\", error);\n                });\n        }\n    })\n}\n\n//# sourceURL=webpack://project-template/./src/js/languageMenu.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://project-template/./src/js/script.js?");

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add_Language_to_SaveObj\": () => (/* binding */ add_Language_to_SaveObj),\n/* harmony export */   \"load_Data_from_LocalStorage\": () => (/* binding */ load_Data_from_LocalStorage),\n/* harmony export */   \"save_Data_into_LocalStorage\": () => (/* binding */ save_Data_into_LocalStorage),\n/* harmony export */   \"updateSaveObj\": () => (/* binding */ updateSaveObj),\n/* harmony export */   \"voc_Saveobject\": () => (/* binding */ voc_Saveobject)\n/* harmony export */ });\nlet voc_Saveobject = {\n    languagePacks: [],\n    settings: {\n        appeareance: 'light',\n        name_of_my_language: 'Deutsch'\n    },\n    showLanguage: ''\n}\n\nwindow.onload = load_Data_from_LocalStorage()\n\nfunction load_Data_from_LocalStorage() {\n    if (localStorage.getItem('vocableTrainer_save_Object') != null) {\n        voc_Saveobject = JSON.parse(localStorage.getItem('vocableTrainer_save_Object'));\n        return voc_Saveobject\n    } else {\n        // Keine Einträge vorhanden\n        console.warn('Keine Daten geladen')\n    }\n}\n\nconst save_Data_into_LocalStorage = ()=> {\n    localStorage.setItem('vocableTrainer_save_Object', JSON.stringify(voc_Saveobject));\n}\n\n//Exported Functions\nconst add_Language_to_SaveObj = (newlanguage)=> {\n    voc_Saveobject.languagePacks.push(newlanguage)\n    save_Data_into_LocalStorage()\n}\n\nconst updateSaveObj = (svObj) => {\n    console.log('New Saveobj', svObj);\n    voc_Saveobject = svObj;\n    save_Data_into_LocalStorage();\n}\n\n\n\n//# sourceURL=webpack://project-template/./src/js/store.js?");

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