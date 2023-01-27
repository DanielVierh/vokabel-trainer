const languages = [];
const langContainer = document.getElementById("langContainer");
const addLanguagePack_1 = document.getElementById("addLanguagePack_1")
const addLanguagePack_2 = document.getElementById("addLanguagePack_2")
const homepage = document.getElementById("homepage");




/**
 * #####################################################################################
 * Save Object
 * Erweiterungen:
 *  voc_Saveobject.currentId = Representation of language package for better asignment
 */
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

// #####################################################################################
// Init
window.onload = init();
function init() {
    if(homepage) {
        load_Data_from_Storage();
    }
}

// #####################################################################################
// Load Data

function load_Data_from_Storage() {
    if (localStorage.getItem('vocableTrainer_save_Object') != null) {
        voc_Saveobject = JSON.parse(localStorage.getItem('vocableTrainer_save_Object'));
        try {
            for (let i = 0; i < voc_Saveobject.languagePacks.length; i++) {
                languages.push(voc_Saveobject.languagePacks[i].language_Name)
            }
            renderLanguages();
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
            save_into_Storage();
            setTimeout(() => {
                window.location = 'languageMenu.html'
            }, 200);
        };
        langContainer.appendChild(languageButton);
    }
}

// #####################################################################################
function create_Id() {
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '#', 'A', 'B', 'C', 'D', '!', 'E', '$'];
    let id = '';
    for (let i = 1; i <= 15; i++) {
        const randomNumb = parseInt(Math.random() * chars.length)
        id = id + chars[randomNumb]
    }
    return id;
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

    if (language_already_exists === false) {
        voc_Saveobject.languagePacks.push(new LanguagePack(create_Id(), languageName))
        console.log('Save_Obj', voc_Saveobject);
        save_into_Storage();
        window.location.reload();
    }
}