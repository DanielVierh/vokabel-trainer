import * as store from "./store.js";

const card = document.querySelector('.card');
const btnNext = document.getElementById("btnNext");
const vocCards = document.getElementById("vocCards");
const crdFront = document.getElementById("crdFront");
const crdBack = document.getElementById("crdBack");
let cardBackSideIsVisible = false;
let allVocables = [];
let voc_Saveobject


// #####################################################################################
// Init
window.onload = () => {
    if(vocCards) {
        load_Data_from_Storage();
    }
}

// #####################################################################################
// Load Data

function load_Data_from_Storage() {
    voc_Saveobject = store.load_Data_from_LocalStorage()
    setTimeout(() => {
        try {
            loadAllWords()
            pickRandomWord()
        } catch (error) {
            console.warn('Loadingerror', error)
        }
    }, 300);
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
