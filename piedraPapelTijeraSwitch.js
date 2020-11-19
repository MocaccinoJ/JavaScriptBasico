console.log("¡Bienvenido a piedra, papel o tijera!");

let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";

let opcionHumano = papel;
let opcionMaquina = papel;

switch (opcionMaquina, opcionHumano){
    case opcionMaquina, papel:
        console.log("¡Es un empate!");
        break;
    case opcionMaquina, piedra:
        console.log("¡Te han derrotado, mejor suerte la próxima!");
        break;
    case opcionMaquina, tijera:
        console.log("¡Increíble, eres un ganador!");
        break;
    default :
    console.log("¡Lo sentimos, esa no es una opción valida!");
        
}
