/**
 * Los pares de las cadenas de ADN consisten en pares de base de proteínas. Los pares de base son representados por los caracteres AT y CG, que forman bloques de doble hélix ADN.

A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que coincida con los pares de base faltantes para la hebra de ADN proporcionada. Para cada carácter de la cadena proporcionada, encuentra el carácter de par base. Devuelve los resultados como un arreglo 2d.

Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.
 */

function pairElement(str) { 
    let test = str.split('')
    const pairs = {
        A:'T',
        T:'A',
        C:'G',
        G:'C'
    }
    return test.map(x => 
        [x, pairs[x]]
    )
}

console.log(pairElement("GCG"))