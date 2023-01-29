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
const wordsWrapper = document.getElementById("wordsWrapper")
const hide_myWords = document.getElementById("hide_myWords")
/**
 * #####################################################################################
 * Save Object
 * voc_Saveobject.currentId = Representation of language package for better asignment
 */
let voc_Saveobject = {
    languagePacks: [],
    settings: {
        appeareance: 'light',
        name_of_my_language: 'Deutsch'
    },
    showLanguage: ''
}


// #####################################################################################
// Init
window.onload = init();
function init() {
    if(langMenu) {
        load_Data_from_Storage();
    }
}

// #####################################################################################
// Load Data

function load_Data_from_Storage() {
    if (localStorage.getItem('vocableTrainer_save_Object') != null) {
        voc_Saveobject = JSON.parse(localStorage.getItem('vocableTrainer_save_Object'));
        console.log('SaveObj', voc_Saveobject);
        try {
            lngLabel.innerHTML = voc_Saveobject.showLanguage;
        } catch (error) {
            console.warn('Loadingerror', error)
        }
    } else {
        console.log('Save Obj konnte nicht geladen werden');
    }
}

function save_into_Storage() {
    localStorage.setItem('vocableTrainer_save_Object', JSON.stringify(voc_Saveobject));
    console.log('SaveObj', voc_Saveobject);
}



// Add new Vocable

if(addVocable_1) {
    addVocable_1.addEventListener("click", ()=> {
        showInputArea();
    })
}
if(addVocable_2) {
    addVocable_2.addEventListener("click", ()=> {
        showInputArea();
    })
}

if(showMyVocables) {
    showMyVocables.addEventListener("click", ()=> {
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
    console.log('Vor Schleife');
    for(let i = 0; i < voc_Saveobject.languagePacks.length; i++) {
        console.log('In Schleife 1');
        if(voc_Saveobject.languagePacks[i].id === langId) {
            const wordbook = voc_Saveobject.languagePacks[i].word_DB
            for(let j = 0; j < wordbook.length; j++) {
                let row = document.createElement('div')
                row.classList.add("row")

                let cell = document.createElement('div')
                cell.classList.add("cell")
                cell.innerHTML = wordbook[j].ownLangWord

                let cellr = document.createElement('div')
                cellr.classList.add("cell")
                cellr.classList.add("cellr")
                cellr.innerHTML = wordbook[j].foreignLangWord

                row.appendChild(cell)
                row.appendChild(cellr)

                wordsWrapper.appendChild(row)

            }
            break;
        }
    }
}

if(hide_Inputfields) {
    hide_Inputfields.addEventListener("click", ()=> {
        showMenu();
    })
}

if(hide_myWords) {
    hide_myWords.addEventListener("click", ()=> {
        showMenu();
    })
}

function showMenu() {
    // new_Words_Area.style.display = 'none'
    // myWordsArea.style.display = 'none'
    // menu_Area.style.display = 'flex'
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
if(btn_Save_new_Vocable) {
    btn_Save_new_Vocable.addEventListener("click", ()=> {

        // Reset Textfields
        const word = inp_word_own.value;
        const translation = inp_word_foreign.value;
        const langId = voc_Saveobject.currentId;

        if(word.length !== '' && translation !== '') {
            for(let i = 0; i < voc_Saveobject.languagePacks.length; i++) {
                if(voc_Saveobject.languagePacks[i].id === langId) {
                    voc_Saveobject.languagePacks[i].word_DB.push(new Vocable(word, translation, create_Id(), 0))
                    save_into_Storage();
                    break;
                }
            }
            inp_word_own.value = '';
            inp_word_foreign.value = '';
        }else {
            alert("Beide Felder müssen ausgefüllt sein")
        }
    })
}


function create_Id() {
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '#', 'A', 'B', 'C', 'D', '!', 'E', '$'];
    let id = '';
    for (let i = 1; i <= 15; i++) {
        const randomNumb = parseInt(Math.random() * chars.length)
        id = id + chars[randomNumb]
    }
    return id;
}
