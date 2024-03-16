const languages = [];
const langContainer = document.getElementById("langContainer");
const addLanguagePack_1 = document.getElementById("addLanguagePack_1")
const addLanguagePack_2 = document.getElementById("addLanguagePack_2")
const homepage = document.getElementById("homepage");
const card = document.querySelector('.card');
const btnNext = document.getElementById("btnNext");
const vocCards = document.getElementById("vocCards");
const crdFront = document.getElementById("crdFront");
const crdBack = document.getElementById("crdBack");
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
const inp_lang_short_code = document.getElementById('inp_lang_short_code');
const btn_add_new_lang = document.getElementById('btn_add_new_lang');

const modal_language_menu = document.getElementById('modal_language_menu');
const modal_new_words = document.getElementById('modal_new_words');
const modal_words = document.getElementById('modal_words');


let cardBackSideIsVisible = false;
let allVocables = [];

let voc_Saveobject = {
    languagePacks: [],
    settings: {
        appeareance: 'light',
        name_of_my_language: 'Deutsch'
    },
    showLanguage: ''
}

/**
 * #####################################################################################
 * Language Class
 */
class LanguagePack {
    constructor(id, language_Name) {
        this.id = id;
        this.language_Name = language_Name;
        this.level_1_DB = [];
        this.level_2_DB = [];
        this.level_3_DB = [];
        this.level_4_DB = [];
        this.testfail_DB = [];
        this.word_DB = [];
    }
}

class Modal {
    static modal_list = [modal_language_menu, modal_new_words, modal_words];
    static open_modal(modal) {
        this.close_all_modals();
        modal.classList.add('active');
    }

    static close_all_modals() {
        for (let i = 0; i < this.modal_list.length; i++) {
            this.modal_list[i].classList.remove('active');
        }
    }
}




window.onload = init();

function init() {
    load_Data_from_LocalStorage()
}

// #####################################################################################
// Load Data

function load_Data_from_LocalStorage() {
    if (localStorage.getItem('vocableTrainer_save_Object') != null) {
        voc_Saveobject = JSON.parse(localStorage.getItem('vocableTrainer_save_Object'));
        try {
            renderLanguages();
        } catch (error) {
            
        }
    } else {
        // Keine Einträge vorhanden
        console.warn('Keine Daten geladen')
    }
}


// #####################################################################################
function renderLanguages() {
    for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {
        let languageButton = document.createElement("div");
        languageButton.innerHTML = voc_Saveobject.languagePacks[i].language_Name;
        languageButton.classList.add('languageBtn')
        languageButton.id = voc_Saveobject.languagePacks[i].id;
        languageButton.onclick = function () {
            voc_Saveobject.showLanguage = this.innerHTML;
            voc_Saveobject.currentId = this.id;
            save_Data_into_LocalStorage();
            setTimeout(() => {
                console.log('Yes');
                Modal.open_modal(modal_language_menu);
                lngLabel.innerHTML = this.innerHTML;
            }, 200);
        };
        langContainer.appendChild(languageButton);
    }
}

// #####################################################################################

btn_add_new_lang.addEventListener('click', ()=> {
    create_new_languge_pack();
})

//? Generate Language Package
function create_new_languge_pack() {
    const languageName = window.prompt("Welche Sprache möchtest du lernen?")
    let language_already_exists = false;

    for (let i = 0; i < languages.length; i++) {
        if (languageName === languages[i]) {
            alert("Du hast bereits ein Sprachpaket mit diesem Namen")
            language_already_exists = true;
            break;
        }
    }

    if (language_already_exists === false && languageName !== null && languageName.length > 4) {
        const newLang = new LanguagePack(create_Id(), languageName)
        console.log('newLang', newLang);
        add_Language_to_SaveObj(newLang);
        window.location.reload();
    }
}


// Function to detect if you hold your device in portrait or landscape mode
function portrait_or_landscape() {
    // @media (orientation: landscape) {
    //     body {
    //       flex-direction: row;
    //     }
    //   }
      
    //   @media (orientation: portrait) {
    //     body {
    //       flex-direction: column;
    //     }
    //   }


}

screen.addEventListener("orientationchange", () => {
    console.log(`The orientation of the screen is: ${screen.orientation}`);
  });


const save_Data_into_LocalStorage = ()=> {
    localStorage.setItem('vocableTrainer_save_Object', JSON.stringify(voc_Saveobject));
}

//Exported Functions
const add_Language_to_SaveObj = (newlanguage)=> {
    voc_Saveobject.languagePacks.push(newlanguage)
    save_Data_into_LocalStorage()
}

const updateSaveObj = (svObj) => {
    console.log('New Saveobj', svObj);
    voc_Saveobject = svObj;
    save_Data_into_LocalStorage();
}


// Karte drehen

if (card) {
    card.addEventListener('click', () => {
        flipCard()
    });
}

function flipCard() {
    card.classList.toggle('is-flipped');
    if(cardBackSideIsVisible === false) {
        cardBackSideIsVisible = true;
        btnNext.classList.add("active")
    }else {
        cardBackSideIsVisible = false;
        btnNext.classList.remove("active");
    }
}


//  Array mit allen Wörtern erstellen
function loadAllWords() {
    const langId = voc_Saveobject.currentId;
    for(let i = 0; i < voc_Saveobject.languagePacks.length; i++) {
        if(voc_Saveobject.languagePacks[i].id === langId) {
            allVocables = voc_Saveobject.languagePacks[i].word_DB;
            console.log('allVocables', allVocables);
            break;
        }
    }
    console.log('Vokabeln:', allVocables);
}


//
function pickRandomWord() {
    for(let i = 0; i < 100; i++) {
        const random = parseInt(Math.random() * allVocables.length)
        crdFront.innerHTML = allVocables[random].ownLangWord
        crdBack.innerHTML = allVocables[random].foreignLangWord
    }
}

if(btnNext) {
    btnNext.addEventListener('click', ()=> {
        flipCard()
        setTimeout(() => {
            pickRandomWord();
        }, 400);
    })
}

const create_Id = ()=> {
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '#', 'A', 'B', 'C', 'D', '!', 'E', '$'];
    let id = '';
    for (let i = 1; i <= 15; i++) {
        const randomNumb = parseInt(Math.random() * chars.length)
        id = id + chars[randomNumb]
    }
    return id;
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
                    updateSaveObj(voc_Saveobject);
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




//* Translate Text 

if (btn_translate) {
    btn_translate.addEventListener('click', () => {
        if (inp_word_own.value !== '') {
            const sourceLang = "de"; //TODO - Dynamisch machen
            let targetLang = "en"; //TODO - Dynamisch machen
            if(inp_lang_short_code.value !== '') {
                targetLang = inp_lang_short_code.value;
            }
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