/**
 * Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidación.
 */

function steamrollArray(arr) {
    let acum = []
    let test = arr
    for (let i = 0; i < test.length; i++) {
        if(Array.isArray(test[i])){
            acum.push(...steamrollArray(arr[i]))
        }else{
            acum.push(test[i])
        }
        
    }
    return acum
}
console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([1, {}, [3, [[4]]]]))