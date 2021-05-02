// 1. Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
// Crear 5 autos en un array
// Iterar el array y mostrar los autos por pantalla
// Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms
// Hacer casos de prueba

const Auto = require('./Auto');

const arrayAutos = [];

arrayAutos.push(new Auto("Renault", "11 Turbo", 1400, 240));
arrayAutos.push(new Auto("Renault", "9", 1600, 180));
arrayAutos.push(new Auto("Fiat", "Uno", 1600, 140));
arrayAutos.push(new Auto("Fiat", "Siena", 2000, 200));
arrayAutos.push(new Auto("BMW", "Serie 1", 3000, 350));

arrayAutos.forEach(auto => {
    console.log(auto.verAuto());
    console.log("\n");
});

let kilometros = 1000;

arrayAutos.forEach(auto =>{
    console.log(`El auto ${auto.marca} modelo ${auto.modelo} se demorara ${auto.calcularTiempo(kilometros)}hs en recorrer ${kilometros} km`);
})

module.exports = arrayAutos;