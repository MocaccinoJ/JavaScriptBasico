var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; 

console.log(frutas);

//Manipular los valores de los valores de los arrays


//Agregar elementos al array al final
var masFrutas = frutas.push("Uvas");
//Eliminar el ultimo valor del array
var ultimo = frutas.pop();
//Agragar elementos al array al principio 
var longitud = frutas.unshift("Uva");
//Eliminar el primer elemento de un array
var borrarFruta = frutas.shift("Uvas");
//Posición de un elemento
var posicion = frutas.indexOf("Cereza");