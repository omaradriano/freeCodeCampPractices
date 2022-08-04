/**
 * Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.

Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.

Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.

También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.
 */


function palindrome(str) {
    let deleteRegex = /[^\w]|[_]/gi
    let newEx = str.replace(deleteRegex, '').toLowerCase()
    console.log(newEx)
    let first
    let second
    let validator = true
    
    if(newEx.length % 2 === 0){
        first = newEx.slice(0, newEx.length/2)
        second = newEx.slice(newEx.length/2).split('').reverse().join('')
    }else{
        let position = Math.round(newEx.length / 2) - 1;
        first = newEx.slice(0, position)
        second = newEx.slice(position+1).split('').reverse().join('')
    }
    first === second ? validator = true : validator = false

    return validator
}

console.log(palindrome("eye"))
console.log(palindrome("A man, a plan, a canal. Panama"))
console.log(palindrome('paap'))
console.log(palindrome("0_0 (: /-\ :) 0-0"))
console.log(palindrome("not a palindrome"))