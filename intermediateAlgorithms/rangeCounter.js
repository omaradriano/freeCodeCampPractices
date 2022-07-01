/**
 * Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.
 */

let sumAll = arr => {
    let testArray = [...arr]
    testArray.sort((a,b)=>{return a-b})
    console.log(testArray)
    let counter = 0
    for (let i = testArray[0]; i <= testArray[1]; i++) {
        counter += i
        console.log(counter)
    }
    return counter
}

console.log(sumAll([1, 4]))
console.log(sumAll([10, 5]))