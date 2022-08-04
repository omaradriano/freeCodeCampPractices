/**
 * Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.

El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato de un número estadounidense válido. Los siguientes ejemplos son de formatos válidos para números estadounidenses (consulte las pruebas a continuación para otras variantes):
 */


function telephoneCheck(str) {
    let telCheck = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/g
    return telCheck.test(str)
}

console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("1 555-555-5555"))
console.log(telephoneCheck("1 (555) 555-5555"))
console.log(telephoneCheck("5555555555"))
console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("555-5555"))
console.log(telephoneCheck("1 555)555-5555"))
console.log(telephoneCheck("1 555 555 5555"))
console.log(telephoneCheck("1 456 789 4444"))
console.log(telephoneCheck("1(555)555-5555"))
console.log(telephoneCheck("(275)76227382"))