/**
 * Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5) debe devolver 1 por que este valor es más grande que 1 (índice 0), pero menor que 2 (índice 1).

De esta forma, getIndexToIns([20,3,5], 19) debe devolver 2 porque una vez ordenado el arreglo, éste se verá así [3,5,20] y 19 es menor que 20 (índice 2) y mayor que 5 (índice 1).
 */

function getIndexToIns(arr, num) {
    let testArray = [...arr]
    testArray.push(num)
    testArray.sort((a, b) => {
        return a - b
    })
    return testArray.indexOf(num)
}

console.log(getIndexToIns([40, 60], 50))
console.log(getIndexToIns([2, 5, 10], 15))