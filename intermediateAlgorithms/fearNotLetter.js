/**
 * Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined.
 */

function fearNotLetter(str) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let test = str.split('')
    let returnLetter
    // console.log(abc[abc.indexOf(test[0])])
    // console.log(abc[abc.indexOf(test[test.length-1])])
    for (let i = abc.indexOf(test[0]); i < abc.indexOf(test[test.length-1]); i++) { //Aqui es cuando los ciclos for agregan detalles para mas complejidad xd
        test.indexOf(abc[i]) === -1 ? returnLetter = abc[i] : console.log('nothing happens')
    }
    
    return returnLetter;
}

console.log(fearNotLetter("abce"))
console.log(fearNotLetter("stvwx"))