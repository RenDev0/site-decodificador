/* 
A letra "a" é convertida para "ai"
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat" */

// listas de vogais normais e vogais criptografadas
let vogais = ["a", "e", "i", "o", "u"];
let subVogais = ["ai", "enter", "imes", "ober", "ufat"];
let regSubVogais = /ai|enter|imes|ober|ufat/g; // regular expression para função match()

//função pegar palavras do textarea
function getFromUser() {
    var textarea = document.getElementById('Input');
    var valor = textarea.value;

    return valor;
}

function criptografar() {
    let string = getFromUser();
    let novaString = string.split('');

    for (let i = 0; i < novaString.length; i++) {
        let indice = vogais.indexOf(novaString[i].toLowerCase());
        if (indice !== -1) {
            novaString[i] = subVogais[indice];
        }
    }
    
    novaString = novaString.join('');

    return novaString;
}

function descriptografar() {
    let string = getFromUser();
    let novaString = "";
    let i = 0;

    while (i < string.length) {
        let encontrou = false;
        for (let j = 0; j < subVogais.length; j++) {
            if (string.startsWith(subVogais[j], i)) {
                novaString += vogais[j];
                i += subVogais[j].length;
                encontrou = true;
                break;
            }
        }
        if (!encontrou) {
            novaString += string[i];
            i++;
        }
    }

    return novaString;
}

// resultados de cada um
function resultadoCripto() {
    let a = document.getElementById('Input2').value = criptografar();
    return a;
}

function resultadoDescripto() {
    let b = document.getElementById('Input2').value = descriptografar();
    return b;
}