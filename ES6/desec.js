/**Prueba para desestructurar un arreglo 
 * 
 * CONSIDERACIONES: 
 * No podemos sacar un sub arreglo con rest tal que [a,b,...rest,c], asi que rest solo funciona como la ultima variable de la lista
*/

const newArray = [1,2,3,4,5,6,7,8,9]

const [a,b,...rest] = newArray;

console.log(a)
console.log(b)
console.log(rest)
