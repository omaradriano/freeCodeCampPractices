/**Descripcion general
 * Funcion disenada para eliminar elementos especificos de una cantidad indefinidad de arrays
 * 
 * Instrucciones:
 * En el primer parametro el arrays o arrays que desean ser filtrados
 * El segundo parametro es aquel que deseamos suprimir de los arrays ingresados
 * 
 * Limitantes:
 * Solo se puede ingresar un elemento como segundo parametro
 * Los array deben estar dentro de otro array, solo se admite uno
 * 
 * Observaciones: se supone que el ejercicio consistia en borrar el array completo si tiene presencia del
 * segundo parametro, pero no entendi y me fui un detalle mas lejos
 */

function filteredArray(arr, elem) {
    let newArr = [];
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i].indexOf(elem)!=-1) {
                arr[i].splice(arr[i].indexOf(elem),1)    
            }
        }
        newArr.push(arr[i])
    }
    // Cambia solo el código encima de esta línea
    return newArr;
}

// Pruebas

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 'flutes'))