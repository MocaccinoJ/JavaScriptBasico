var estudiantes = ["Maria", "Jose", "Daniel", "Rosa", "Gregorio"];

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);

}

while(estudiantes.length > 0){
    console.log(estudiantes);
var estudiante = estudiantes.shift();
saludarEstudiantes(estudiante);
}