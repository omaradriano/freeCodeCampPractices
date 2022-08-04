/**
 * Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.
 */

function addTogether() {
    const [first, second] = arguments;
    if (typeof (first) !== "number") //Valida el primer argumento
        return undefined;
    if (second === undefined) //En este punto ha sido validado el primer argumento, si no existe un segundo argumento devuelve el resultado solo con el primer argumento
        return (second) => addTogether(first, second);
    if (typeof (second) !== "number")
        return undefined;
    return first + second;
}

console.log(addTogether(2, 3))