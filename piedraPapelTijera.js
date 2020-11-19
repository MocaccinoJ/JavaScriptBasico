//Juego de piedra papel o tijera

console.log("Bienvenido a piedra, papel o tijera. ¡Escoge alguna opción!");

let opcionHumano = "Papel";
let opcionComputador = "Papel";
let piedra = "Piedra";
let tijera = "Tijera";

if(opcionHumano === opcionComputador){
    console.log("¡Es un empate!");
}else if(opcionHumano === piedra) {
    console.log("¡Has perdido, vuelve a intentarlo!");
}else{
    console.log("¡Felicidades, eres un ganador esta vez!");
}

