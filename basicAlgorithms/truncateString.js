/**
 * Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.
 */

function truncateString(str, num) {
    return str.length > num ? `${str.slice(0,num)}...` : str //Uso de operador ternario y template 
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))