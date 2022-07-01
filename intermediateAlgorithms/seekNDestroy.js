/**
 * Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

Nota: Tienes que utilizar el objeto arguments.
 */

function destroyer(arr) {
    const test1 = [...arr]
    const args = [...arguments]
    const finalArr = []
    args.shift()
    for (let i = 0; i < test1.length; i++) {
        args.indexOf(test1[i]) === -1 ? finalArr.push(test1[i]) : null
    }
    return finalArr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))