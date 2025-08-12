let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function parOuImpar(numero) {

    if (numero % 2 === 0) {
        console.log(`${numero} è par`);
    } else {
        console.log(`${numero} è impar`);
    }
}
console.log("=== Verificando números pares e ímpares ===");
numeros.forEach(parOuImpar);