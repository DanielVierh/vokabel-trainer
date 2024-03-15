export let voc_Saveobject = {
    languagePacks: [],
    settings: {
        appeareance: 'light',
        name_of_my_language: 'Deutsch'
    },
    showLanguage: ''
}

window.onload = load_Data_from_LocalStorage()

function load_Data_from_LocalStorage() {
    if (localStorage.getItem('vocableTrainer_save_Object') != null) {
        voc_Saveobject = JSON.parse(localStorage.getItem('vocableTrainer_save_Object'));
        return voc_Saveobject
    } else {
        // Keine Einträge vorhanden
        console.warn('Keine Daten geladen')
    }
}

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

export { add_Language_to_SaveObj, save_Data_into_LocalStorage, load_Data_from_LocalStorage, updateSaveObj};