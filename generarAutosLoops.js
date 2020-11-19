function auto(marca, numeroSerie, anho){
    this.marca = marca;
    this.numeroSerie = numeroSerie;
    this.anho = anho;
};

for(var i = 0; i < 30; i++){
    if (i < 10){

        anho = 2020;
        marca = "Tesla";

        var autoNuevo = new auto (marca, i, anho);
    } else if(i>=10 && i<20){

        anho = 2018;
        marca = "Toyota";
        var autoNuevo = new auto(marca, i, anho);
    } else {
        anho = 2017;
        marca = "Chevrolet"
        var autoNuevo = new auto(marca, i, anho);
    }
    console.log(autoNuevo);
}
