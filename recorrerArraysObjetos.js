var articulos = [

    { nombre: "Bici", costo: 3000 },
    { nombre: "Televisión", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },

];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Bici";
});

//foreach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some (Devuelve un Booleano)
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});