/**
 * Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.
 */

function frankenSplice(arr1, arr2, n) {
    let testArray2 = [...arr2]
    testArray2.splice(n, 0, ...arr1)
    return testArray2
    
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))