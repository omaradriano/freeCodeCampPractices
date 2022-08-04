/**
 * Comprueba si el predicado (segundo argumento) es truthy en todos los elementos de una colección (primer argumento).

En otras palabras, se te da una colección de arreglos de objetos. El predicado pre será una propiedad del objeto y debe devolver true si su valor es truthy. De lo contrario, devuelve false.

En JavaScript, los valores truthy son valores que se traducen en true cuando se evalúan en un contexto booleano.

Recuerda, puedes acceder a las propiedades del objeto mediante la notación de puntos o la notación de corchetes [].


 */

function truthCheck(collection, pre) {
    let test = collection
    let tested = true
    test.forEach(elem => {
        if(elem[pre]){
            // console.log('Todo va bien')
        }else{
            tested = false
        }
    })
    return tested
}

console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"))
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))