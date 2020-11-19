//Formas de ciclos
var estudiantes = ["Juan", "Jose", "Maria", "Daniel"];
function saludarEstudiantes(estudiante){
console.log(`Hola ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);

}

//Segunda forma de recorrer el arreglo

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}