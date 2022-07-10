/**
 * Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.
 */

function convertHTML(str) {
    let test = str.split('')
    let converted = test.map(el => {
        if(el === '&'){
            return '&amp;'
        }else if(el === '<'){
            return '&lt;'
        }else if(el === '>'){
            return '&gt;'
        }else if(el === '\"'){
            return '&quot;'
        }else if(el === '\''){
            return '&apos;'
        }else{
            return el
        }
    })
    return converted.join('')
}

console.log(convertHTML("Dolce & Gabbana"))
console.log(convertHTML("Hamburgers < Pizza < Tacos"))