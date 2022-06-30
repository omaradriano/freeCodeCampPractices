/**
 * Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.
 */

function titleCase(str) {
    let noCapitalizedArray = str.split(' ')
    let capitalizedArray = []
    noCapitalizedArray.forEach(elem =>{ //Usamos forEach solo para iterar sobre cada elemento si alterar el array base
        capitalizedArray.push(elem[0].toUpperCase()+elem.substring(1).toLowerCase())
    })
    return capitalizedArray.join(' ')
}

console.log(titleCase("I'm a little tea pot"))