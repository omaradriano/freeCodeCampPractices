/**
 * Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo, si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog
 */

let myReplace = (str, before, after) => {
    let string = str.split(' ');
    let mayusRegex = /^[A-Z]/g
    string.forEach((elem) => {
        if (elem === before && mayusRegex.test(elem)) {
            string.splice(string.indexOf(before), 1, after.charAt(0).toUpperCase().concat(after.substring(1)))
        } else if (elem === before) {
            string.splice(string.indexOf(before), 1, after.charAt(0).toLowerCase().concat(after.substring(1)))
        }
    })
    return string.join(' ')
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"))
console.log(myReplace("I think we should look up there", "up", "Down"))

//Solucion alternativa

function myReplacev2(str, before, after) {
    return str
        .split(" ")
        .map((x) => (x == before) ?
            (x[0] == x[0].toUpperCase()) ?
                (after[0].toUpperCase() + after.slice(1)) : after.toLowerCase()
            : x)
        .join(" ");

}