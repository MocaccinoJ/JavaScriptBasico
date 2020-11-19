let miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    anho: 2020
};

//Acceder a un dato específico dentro del objeto

miAuto.anho;

//Agregar propiedad extra que será una función al objeto.


let miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    anho: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anho}`);
    } 
};