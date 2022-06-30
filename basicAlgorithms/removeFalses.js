/**
 * Quita todos los valores falsos de un arreglo.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano.
 */

function bouncer(arr) {
    let testArray = []
    arr.forEach(elem => {
        elem ? testArray.push(elem) : null
    })
    return testArray

    //Tener en cuenta la descripción del problema en cuanto a cuales son los valores falsos
}

console.log(bouncer([7, "ate", "", false, 9]))