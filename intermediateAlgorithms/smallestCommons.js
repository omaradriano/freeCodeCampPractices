/**
 * Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos, así como por todos los números consecutivos del rango entre estos parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido por todos los números entre 1 y 3. La respuesta sería 6.
 */


function smallestCommons(arr) {
    let test = arr.sort((a, b) => a - b)
    let numList = []
    let primesList = returnPrimes(test[1])
    let multArray = []

    for (let i = test[0]; i <= test[1]; i++) {
        numList.push(i)
    }
    // while (numList.reduce((a, b) => a + b) !== numList.length) {
    //     for (let i = 0; i < primesList.length; i++) {

            
    //     }
    // }
    for (let i = 0; i < numList.length; i++) {
        for (let j = 0; j < primesList.length; j++) {
        }
    }

    console.log('multArray :')
    console.log(multArray)
    console.log("numlist")
    console.log(numList)
    console.log("Primes list")
    console.log(primesList)
}

function returnPrimes(n) {
    if (typeof n === 'number' && Number.isInteger(n)) {
        if (n => 2) {
            let primos = []
            let hayPrimo = []

            for (let i = 1; i <= n + 1; ++i) {
                hayPrimo.push(true)

            }
            for (let i = 2; i <= n; i++) {
                if (hayPrimo[i]) {
                    primos.push(i)
                    //Usar Criba de erastotenes
                }
                for (let j = 1; j * i <= n; j++) { //Con esta linea iteramos sobre los multiplos del indice 'i', la primera iteracion devuelve [2,4,6,8,10]
                    hayPrimo[i * j] = false //y establece en falso todos aquellos multiplos de nuestro numero base (i)
                }
            }
            return primos
        } else {
            throw TypeError('El numero debe ser mayor o igual a 2.')
        }
    } else {
        throw TypeError('El argumento debe de ser un numero entero.')
    }
}

console.log('RES ' + smallestCommons([1, 5]))
console.log('testing 2')
console.log('RES ' + smallestCommons([2, 10]))
// console.log('testing 3')
// console.log(smallestCommons([23, 18]))