/**
 * Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.
 */

function sumPrimes(n) {
    if (typeof n === 'number' && Number.isInteger(n)) {
        if (n => 2) {
            let primos = []
            let hayPrimo = [] //Array validador para saber si hay un primo o no en dicha posicion y tendra N cantidad de elementos booleanos

            for (let i = 1; i <= n + 1; ++i) {
                hayPrimo.push(true)

            }
            for (let i = 2; i <= n; i++) {
                if (hayPrimo[i]) {
                    primos.push(i)

                    //Usar Criba de erastotenes
                }
                console.log(primos)
                for (let j = 1; j * i <= n; j++) { //Con esta linea iteramos sobre los multiplos del indice 'i', la primera iteracion devuelve [2,4,6,8,10]
                    console.log(j * i)
                    hayPrimo[i * j] = false //y establece en falso todos aquellos multiplos de nuestro numero base (i)

                }

            }
            return primos.reduce((previus, current) => previus + current, 0)
        } else {
            throw TypeError('El numero debe ser mayor o igual a 2.')
        }
    } else {
        throw TypeError('El argumento debe de ser un numero entero.')
    }
}

try {
    console.log(sumPrimes(10))
} catch (e) {
    console.log(e.message)
}
