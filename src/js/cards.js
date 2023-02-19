const card = document.querySelector('.card');
const btnNext = document.getElementById("btnNext");
const vocCards = document.getElementById("vocCards");
const crdFront = document.getElementById("crdFront");
const crdBack = document.getElementById("crdBack");

let cardBackSideIsVisible = false;

let allVocables = [];


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
    if(vocCards) {
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
            loadAllWords()
            pickRandomWord()
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
