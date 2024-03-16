const brandInput = document.getElementById("Input");

brandInput.addEventListener("keypress", function (e) {
    if(!checkChar(e)) {
        e.preventDefault();
    }
})

function checkChar(e) {
    const char = e.key;

    const padrao = '[a-z0-9 ]'

    if(char.match(padrao)) {
        return true;
    }
}

function apagar() {
    document.getElementById("Input").value = "";
}