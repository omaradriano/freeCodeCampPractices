/**
 * Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

cid es un arreglo 2D que enumera las monedas disponibles.

La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.

En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.
 */

//{status: "INSUFFICIENT_FUNDS", change: []} CUANDO EL EFECTIVO EN CAJA ES MENOR AL EFECTIVO NECESARIO

//PRIMER ARGUMENTO ES EL VALOR DEL PRODUCTO
//SEGUNDO ARGUMENTO ES EL DINERO QUE SE PAGA
//TERCER ARGUMENTO ES EL DINERO EN LA CAJA DISPONIBLE

function checkCashRegister(price, cash, cid) {
    const DENOMINATIONS = [ //Guardamos las denominaciones del valor de cada moneda
        ['ONE HUNDRED', 10000],
        ['TWENTY', 2000],
        ['TEN', 1000],
        ['FIVE', 500],
        ['ONE', 100],
        ['QUARTER', 25],
        ['DIME', 10],
        ['NICKEL', 5],
        ['PENNY', 1]
    ]
    let actualCidStatus = {}
    cid.forEach(elem => {
        actualCidStatus[elem[0]] = Math.round(elem[1] * 100)
    })
    let toRefund = Math.round((cash - price) * 100) //Variable que guarda el cambio que hay que devolver
    let change = [] //Variable donde se guarda el cambio en forma de array
    let totalCid = 0 //Variable que almacena el total de la caja/cid
    for (let total in actualCidStatus) {
        totalCid += actualCidStatus[total]
    }
    console.log('Disponible en la caja: ' + totalCid)
    let returnData = {
        status: null,
        change: change
    }
    let cashRefounded = {
        'ONE HUNDRED': 0,
        'TWENTY': 0,
        'TEN': 0,
        'FIVE': 0,
        'ONE': 0,
        'QUARTER': 0,
        'DIME': 0,
        'NICKEL': 0,
        'PENNY': 0,
    }
    console.log('Cash to refund: ' + toRefund)

    DENOMINATIONS.forEach(elem => {
        while (toRefund >= elem[1]) {
            cashRefounded[elem[0]] = cashRefounded[elem[0]] + elem[1]
            toRefund -= elem[1]
        }
    }) //YA NO LE MUEVAS A ESTO MECARDO
    console.log(cashRefounded)

    for (let deno in cashRefounded) {
        if (cashRefounded[deno] !== 0) {
            change.push([deno, cashRefounded[deno] / 100])
        }
    } //Esto tambien esta listo


    return returnData

}

console.log(checkCashRegister(19.5, 32.49, [
    ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
))
