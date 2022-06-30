/**
 * Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.
 */

function chunkArrayInGroups(arr, size) {
    let testArray = []
    while (arr != false) {
        testArray.push(arr.splice(0, size))
    }
    return testArray;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))