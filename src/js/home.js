import * as store from "./store.js";
import * as functions from "./functions.js";

const languages = [];
const langContainer = document.getElementById("langContainer");
const addLanguagePack_1 = document.getElementById("addLanguagePack_1")
const addLanguagePack_2 = document.getElementById("addLanguagePack_2")
const homepage = document.getElementById("homepage");
let voc_Saveobject

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



window.onload = init();

function init() {
    if(homepage) {
        load_Data_from_Storage();
        console.log('Home.js');
    }
}

// #####################################################################################
// Load Data

function load_Data_from_Storage() {
    voc_Saveobject = store.load_Data_from_LocalStorage()

    setTimeout(() => {
        console.log('voc_Saveobject', voc_Saveobject);
        try {
            for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {
                languages.push(voc_Saveobject.languagePacks[i].language_Name)
            }
            renderLanguages();
        } catch (error) {
            console.warn('Loadingerror', error)
        }
    }, 300);
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
            store.save_Data_into_LocalStorage();
            setTimeout(() => {
                window.location = 'languageMenu.html'
            }, 200);
        };
        langContainer.appendChild(languageButton);
    }
}

// #####################################################################################

if (addLanguagePack_1) {
    addLanguagePack_1.addEventListener("click", () => {
        create_new_languge_pack();
    })
}
if (addLanguagePack_2) {
    addLanguagePack_2.addEventListener("click", () => {
        create_new_languge_pack();
    })
}

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
        const newLang = new LanguagePack(functions.create_Id, languageName)
        console.log('newLang', newLang);
        store.add_Language_to_SaveObj(newLang);
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