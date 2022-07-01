/**
 * Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.
 */

function spinalCase(str) {
    let regEx = /[-_ \s]|(?<=[a-z])(?=[A-Z])/g
    let newArr = str.split(regEx)
    let lowerCaseArr = newArr.map(elem => {
        return elem.toLowerCase()
    })
    return lowerCaseArr.join('-')
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))