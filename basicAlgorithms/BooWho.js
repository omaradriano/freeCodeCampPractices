/**
 * Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

Booleanos primitivos son true y false.
 */

function booWho(bool) {
    return typeof bool === 'boolean' ? true : false //Considerar que hay que poner el tipo de dato como String 
}

console.log(booWho(null))
console.log(booWho(false))