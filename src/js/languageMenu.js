import * as store from "./store.js";
import * as functions from "./functions.js";

const lngLabel = document.getElementById("lngLabel");
const langMenu = document.getElementById("langMenu");
const new_Words_Area = document.getElementById("new_Words_Area")
const menu_Area = document.getElementById("menu_Area")
const addVocable_1 = document.getElementById("addVocable_1")
const addVocable_2 = document.getElementById("addVocable_2")
const hide_Inputfields = document.getElementById("hide_Inputfields")
const btn_Save_new_Vocable = document.getElementById("btn_Save_new_Vocable");
const inp_word_own = document.getElementById("inp_word_own");
const inp_word_foreign = document.getElementById("inp_word_foreign");
const myWordsArea = document.getElementById("myWordsArea");
const showMyVocables = document.getElementById("showMyVocables");
const wordsWrapper = document.getElementById("wordsWrapper");
const hide_myWords = document.getElementById("hide_myWords");
const btn_translate = document.getElementById('btn_translate');
let voc_Saveobject;


// #####################################################################################
// Init
window.onload = init();
function init() {
    if (langMenu) {
        load_Data_from_Storage();
        console.log('LanguageMenu.js');
    }
}

// #####################################################################################
// Load Data

function load_Data_from_Storage() {
    voc_Saveobject = store.load_Data_from_LocalStorage()
    setTimeout(() => {
        console.log('voc_Saveobject', voc_Saveobject);
        try {
            lngLabel.innerHTML = voc_Saveobject.showLanguage;
        } catch (error) {
            console.warn('Loadingerror', error)
        }
    }, 200);
}


// Add new Vocable

if (addVocable_1) {
    addVocable_1.addEventListener("click", () => {
        showInputArea();
    })
}
if (addVocable_2) {
    addVocable_2.addEventListener("click", () => {
        showInputArea();
    })
}

if (showMyVocables) {
    showMyVocables.addEventListener("click", () => {
        showWords();
    })
}



function showInputArea() {
    menu_Area.style.display = 'none'
    new_Words_Area.style.display = 'flex'
}


function showWords() {
    menu_Area.style.display = 'none'
    myWordsArea.style.display = 'flex'
    const langId = voc_Saveobject.currentId;
    for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {
        console.log('In Schleife 1');
        if (voc_Saveobject.languagePacks[i].id === langId) {
            const wordbook = voc_Saveobject.languagePacks[i].word_DB
            for (let j = 0; j < wordbook.length; j++) {
                let row = document.createElement('div')
                row.classList.add("row")

                let cell = document.createElement('div')
                cell.classList.add("cell")
                cell.innerHTML = wordbook[j].ownLangWord
                cell.id = wordbook[j].wordId

                let cellr = document.createElement('div')
                cellr.classList.add("cell")
                cellr.classList.add("cellr")
                cellr.innerHTML = wordbook[j].foreignLangWord
                cellr.id = wordbook[j].wordId

                row.appendChild(cell)
                row.appendChild(cellr)

                wordsWrapper.appendChild(row)

            }
            break;
        }
    }
}

if (hide_Inputfields) {
    hide_Inputfields.addEventListener("click", () => {
        showMenu();
    })
}

if (hide_myWords) {
    hide_myWords.addEventListener("click", () => {
        showMenu();
    })
}

function showMenu() {
    location.reload();
}

class Vocable {
    constructor(ownLangWord, foreignLangWord, wordId, voableStatus) {
        this.ownLangWord = ownLangWord;
        this.foreignLangWord = foreignLangWord;
        this.wordId = wordId;
        this.voableStatus = voableStatus;
    }
}


// Eingegebenes Wort hinzufügen
if (btn_Save_new_Vocable) {
    btn_Save_new_Vocable.addEventListener("click", () => {

        // Reset Textfields
        const word = inp_word_own.value;
        const translation = inp_word_foreign.value;
        const langId = voc_Saveobject.currentId;

        if (word.length !== '' && translation !== '') {
            for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {
                if (voc_Saveobject.languagePacks[i].id === langId) {
                    voc_Saveobject.languagePacks[i].word_DB.push(new Vocable(word, translation, functions.create_Id(), 0))
                    store.updateSaveObj(voc_Saveobject);
                    break;
                }
            }
            inp_word_own.value = '';
            inp_word_foreign.value = '';
        } else {
            alert("Beide Felder müssen ausgefüllt sein")
        }
    })
}



async function fetchTranslation(sourceLang, targetLang, sourceText) {
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
        sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching translation:', error);
        return null;
    }
}






if (btn_translate) {
    btn_translate.addEventListener('click', () => {
        if (inp_word_own.value !== '') {
            const sourceLang = "de"; //TODO - Dynamisch machen
            const targetLang = "en"; //TODO - Dynamisch machen
            const sourceText = inp_word_own.value;

            fetchTranslation(sourceLang, targetLang, sourceText)
                .then(translation => {
                    const translatedText = translation[0][0][0]
                    console.log("Translation:", translatedText);
                    inp_word_foreign.value = translatedText;
                })
                .catch(error => {
                    console.error("Translation error:", error);
                });
        }
    })
}