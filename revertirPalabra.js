//revertir una palabra

let palabra = "andrea";
let palabraInvertida = "";

function invertir (palabra){
    var a = palabra.length;

    while( a > -1 ){
        palabraInvertida = palabraInvertida + palabra.charAt(a);
        a--;
    }
    return palabraInvertida;
}

//Intento con for
let palabra = "andrea";
let palabraInvertida = "";

function invertir(palabra){
    var a = palabra.length;

for(var i = a; i = -1; i++){
    palabraInvertida = palabraInvertida + palabra.charAt(a);
    a--;
}
return palabraInvertida;

}