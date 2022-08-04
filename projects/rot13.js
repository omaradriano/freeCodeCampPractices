/**
 * Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.
 */

//Son 26 letras en el alfabeto
//77(para sumar) y 78(para restar) son los limites

function rot13(str) {
    let test = str.split('')
    let regEx = /[A-Z]/g
    console.log(test)
    let newAlphabet = test.map(elem => {
        if(elem.charCodeAt() <= 77){
            return elem.replace(regEx, elem.charCodeAt()+13)
        }else if(elem.charCodeAt() >= 77){
            return elem.replace(regEx, elem.charCodeAt()-13)
        }       
    })
    console.log(newAlphabet)
    let finalAlphabet = newAlphabet.map(elem => {
        return elem.replace(/\d/g, String.fromCharCode(elem))
    }).map(elem => {
        return elem.replace(/[A-Z]$/g, '')
    }).join('')

    return finalAlphabet
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))