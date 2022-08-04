/**
 * Dado el arreglo arr, itera y elimina cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función func devuelva true cuando el elemento iterado se pasa a través de él.

Luego devuelve el resto del arreglo una vez que se cumpla la condición, de lo contrario, arr debe devolverse como un arreglo vacío.
 */

function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

console.log(dropElements([1, 2, 3], function (n) { return n < 3; }))