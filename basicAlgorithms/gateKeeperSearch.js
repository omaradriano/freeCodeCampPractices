/**
 * Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.
 */

function findElement(arr, func) {
    return arr.find(func)

    //Método find devuelve el primer elemento que satisfaga la condicion (O sea devuelva true)
    //La funcion pasada puede ser de forma independiente o escrita dentro de la misma función find
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)) //El primer elemento del array que cumpla con la condicion de la funcion callback