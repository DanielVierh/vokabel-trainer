const languages = ['Englisch', 'Spanisch', 'Französisch'];
const langContainer = document.getElementById("langContainer");
const addLanguagePack_1 = document.getElementById("addLanguagePack_1")
const addLanguagePack_2 = document.getElementById("addLanguagePack_2")


window.onload = init();


/**
 * #####################################################################################
 * Save Object
 */
let voc_Saveobject = {
    languagePacks: [],
    settings: {
        appeareance: 'light',
        name_of_my_language: 'Deutsch'
    }
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

function init() {
    renderLanguages();
}


// #####################################################################################
function renderLanguages() {
    for(let i = 0; i < languages.length; i++) {
        let atag = document.createElement("a");
        atag.innerHTML = languages[i];
        langContainer.appendChild(atag);
    }
}

// #####################################################################################
function create_Id() {
    const chars = ['0','1','2','3','4','5','6','7','8','9','0','#','A','B','C','D','!','E','$'];
    let id = '';
    for(let i = 1; i <= 15; i++) {
        const randomNumb = parseInt(Math.random() * chars.length)
        id = id + chars[randomNumb]
    }
    return id;
}

// #####################################################################################

if(addLanguagePack_1) {
    addLanguagePack_1.addEventListener("click", ()=> {
        create_new_languge_pack();
    })
}
if(addLanguagePack_2) {
    addLanguagePack_2.addEventListener("click", ()=> {
        create_new_languge_pack();
    })
}

//? Generate Language Package
function create_new_languge_pack() {
    const languageName = window.prompt("Welche Sprache möchtest du lernen?")
    let language_already_exists = false;

    for(let i = 0; i < languages.length; i++) {
        if(languageName === languages[i]) {
            alert("Du hast bereits ein Sprachpaket mit diesem Namen")
            language_already_exists = true;
            break;
        }
    }

    if(language_already_exists === false) {
        voc_Saveobject.languagePacks.push(new LanguagePack(create_Id(), languageName))
        console.log('Save_Obj', voc_Saveobject);
    }
}