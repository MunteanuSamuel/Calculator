
function adunare (x, y){
    return x + y;
}

function scadere (x, y){
    /*let max= 0;
    let min= 0;
    if (x>y){
        max = x;
        min = y;
    }else {
        max = y;
        min = x;
    }*/
    return x - y;
}

function inmultire (x, y){
    return x * y;
}

function impartire (x, y){
    return x/y;
}

function afiseazaAdunare (){
    x = document.querySelector("#x").value;
    y = document.querySelector("#y").value;
    let rezultat = Number.parseInt(x) + Number.parseInt(y);
    document.querySelector("h4").innerHTML = "Rezultatul operatiei este: " + rezultat;
}

function afiseazaScadere () {
    x = document.querySelector("#x").value;
    y = document.querySelector("#y").value;
    let rezultat = Number.parseInt(x) - Number.parseInt(y);
    document.querySelector("h4").innerHTML = "Rezultatul operatiei este: " + rezultat;
}

function afiseazaInmultire (){
    x = document.querySelector("#x").value;
    y = document.querySelector("#y").value;
    let rezultat = Number.parseInt(x) * Number.parseInt(y);
    document.querySelector("h4").innerHTML = "Rezultatul operatiei este: " + rezultat;
}

function afiseazaImpartire () {
    x = document.querySelector("#x").value;
    y = document.querySelector("#y").value;
    let rezultat = Number.parseInt(x) / Number.parseInt(y);
    document.querySelector("h4").innerHTML = "Rezultatul operatiei este: " + rezultat;
}

function reseteazaRezultat() {
    document.querySelector("h4").innerHTML = "Rezultatul operatiei este: ";
}