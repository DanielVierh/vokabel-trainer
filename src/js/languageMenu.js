const lngLabel = document.getElementById("lngLabel");
const langMenu = document.getElementById("langMenu");


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

