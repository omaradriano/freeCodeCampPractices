/**
 * Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

**Nota:**Puedes devolver el arreglo con sus elementos en cualquier orden.
 */

let diffArray = (arr1, arr2) => {
    const dArray = []
    const test1 = [...arr1], test2 = [...arr2]
    for (let i = 0; i < test1.length; i++) {
        test2.indexOf(test1[i]) === -1 ? dArray.push(test1[i]) : null
    }
    for (let i = 0; i < test2.length; i++) {
        test1.indexOf(test2[i]) === -1 ? dArray.push(test2[i]) : null
    }
    return dArray

}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))