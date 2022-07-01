/**
 * Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:

- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.

- Si una palabra comienza con una vocal, solo añade way al final.
 */

function translatePigLatin(str) {
    let string = str, finalString, consonant = /^[^aeiou]*/g, vowel = /^[aeiou]/g
    if (vowel.test(string)) {
        finalString = string.concat('way')
    } else if (consonant.test(string)) {
        let matchConsonant = string.match(consonant).join()
        let rest = string.substring(matchConsonant.length)
        finalString = `${rest.concat(matchConsonant)}ay`
    }
    return finalString;
}

//No encontré la respuesta de por que consonant.test('eight') devuelve TRUE

console.log(translatePigLatin("consonant"))
console.log(translatePigLatin("california"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("eight"))


