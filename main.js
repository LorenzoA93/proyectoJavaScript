let nombreDelPrimerOperario = prompt ("Ingrese el nombre del Primer Operario");
let talleDelPrimerOperario = parseInt(prompt ("Ingrese el talle del Primer Operario"));
let nombreDelSegundoOperario = prompt ("Ingrese el nombre del Segundo Operario");
let talleDelSegundoOperario = parseInt(prompt ("Ingrese el talle del Segundo Operario"));
let nombreDelTercerOperario = prompt ("Ingrese el nombre del Tercer Operario");
let talleDelTercerOperario = parseInt(prompt ("Ingrese el talle del Tercer Operario"));
console.log ("El nombre del primer operario es: " + nombreDelPrimerOperario + " y su talle es " + talleDelPrimerOperario);
console.log ("El nombre del segundo operario es: " + nombreDelSegundoOperario + " y su talle es " + talleDelSegundoOperario);
console.log ("El nombre del tercer operario es: " + nombreDelTercerOperario + " y su talle es " + talleDelTercerOperario);
function promedio(valorA, valorB, valorC) {
    let resultado = (valorA + valorB +valorC) / 3;
    return resultado;
}
let resultadoPromedio = promedio (talleDelPrimerOperario, talleDelSegundoOperario, talleDelTercerOperario);
switch (resultadoPromedio) {
    case resultadoPromedio > 60:
        return ccccc
    case 60 > resultadoPromedio > 40:
        return jjjj
    case resultadoPromedio < 40:
        return ttttt
}
console.log (resultadoPromedio);
