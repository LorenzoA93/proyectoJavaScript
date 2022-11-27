let nombreDelPrimerOperario = prompt ("Ingrese el nombre del Primer Operario");
let talleDelPrimerOperario = parseInt(prompt ("Ingrese el talle del Primer Operario"));
let nombreDelSegundoOperario = prompt ("Ingrese el nombre del Segundo Operario");
let talleDelSegundoOperario = parseInt(prompt ("Ingrese el talle del Segundo Operario"));
let nombreDelTercerOperario = prompt ("Ingrese el nombre del Tercer Operario");
let talleDelTercerOperario = parseInt(prompt ("Ingrese el talle del Tercer Operario"));
let trabajadores = {
    primero: nombreDelPrimerOperario,
    segundo: nombreDelSegundoOperario,
    tercero: nombreDelTercerOperario,
};
for (let clave in trabajadores){
    console.log("El nombre del operario es: " + trabajadores[clave])
};
function promedio(valorA, valorB, valorC) {
    let resultado = (valorA + valorB +valorC) / 3;
    return resultado;
};
let resultadoPromedio = promedio (talleDelPrimerOperario, talleDelSegundoOperario, talleDelTercerOperario);
function calculoPromedio(resultadoPromedio) {
    if (resultadoPromedio > 60) {
        return "El resultado es demaciado alto, prueba ingresando de nuevo los datos"
    }else{
        return "El resultado es correcto, se enviará la orden a Recursos Humanos"
    }
};
let promedios = calculoPromedio (resultadoPromedio);
console.log(promedios);
