var articulos = [

    { nombre: "Bici", costo: 3000 },
    { nombre: "Televisión", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },

];
//Metodos para recorrer los arrays de objetos
var articulosFiltrados = articulos.filter(
    function(articulo){
        return articulo.costo <= 500;
    }
);

//Segundo método ''Mapeado''

var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre;
});