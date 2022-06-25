/**Validador de nombres de usuario
 * 
 *  1.-Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

    2.-Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.

    3.-Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

    4.-Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.


 */

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|[a-z]*\d{2,})$/gi; // Cambia esta línea
let result = userCheck.test(username);