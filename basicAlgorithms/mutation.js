/**
 * Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.
 */

function mutation(arr) {
    let validation = true
    for (let i = 0; i < arr[1].length; i++) {
        arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) >= 0 ? null : validation = false 
    }
    return validation
}

console.log(mutation(["hello", "hey"]))
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))