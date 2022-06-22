/**Podemos prevenir que un objeto sea alterado a pesar de haber declarado con CONST 
 * 
 * CONSIDERACIONES:
 * Uso del metodo freeze()
 *
*/

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS) //Congelamos el objeto MATH_CONSTANTS para evitar cambios de cualquier manera


    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();