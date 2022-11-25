const languages = ['Englisch', 'Spanisch', 'Französisch'];
const langContainer = document.getElementById("langContainer");

window.onload = init();

function init() {
    renderLanguages();
}

function renderLanguages() {
    for(let i = 0; i < languages.length; i++) {
        let atag = document.createElement("a");
        atag.innerHTML = languages[i];
        langContainer.appendChild(atag);
    }
}