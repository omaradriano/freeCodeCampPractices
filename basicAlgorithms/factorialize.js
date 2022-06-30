/**
 * Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

Los factoriales suelen representarse con la abreviatura n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Sólo se proporcionarán a la función los enteros mayores o iguales a cero.
 */

function factorialize(num) {
    return num === 1 ? 1 : num*factorialize(num-1)
    //Por concepto básico de recursividad se usa el caso base y en caso de no cumplirse se mete en el caso recursivo
    
}

console.log(factorialize(5))