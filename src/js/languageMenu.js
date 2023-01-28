const lngLabel = document.getElementById("lngLabel");
const langMenu = document.getElementById("langMenu");
const new_Words_Area = document.getElementById("new_Words_Area")
const menu_Area = document.getElementById("menu_Area")
const addVocable_1 = document.getElementById("addVocable_1")
const addVocable_2 = document.getElementById("addVocable_2")

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



function showInputArea() {
    menu_Area.style.display = 'none;'
    new_Words_Area.style.display = 'flex'
}