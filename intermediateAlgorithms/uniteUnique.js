/**
* Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.

En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.

Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.

Revisa las pruebas de afirmación para ver ejemplos.
*/

function uniteUnique(arr) {
    let acumulatedArrays = [...arguments];
    let finalArray = []
    for (let i = 0; i < acumulatedArrays.length; i++) {
        for (let j = 0; j < acumulatedArrays[i].length; j++) {
            finalArray.indexOf(acumulatedArrays[i][j]) === -1 ? finalArray.push(acumulatedArrays[i][j]) : null
        }
    }
    return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]))
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))