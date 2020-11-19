//Recorrer un arreglo
numeros = [1, 2, 3, 4, 5];
console.log(numeros);
let count = 0;

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > count){
        count = numeros[i];
    }
}
console.log(count);

