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

    let cidStatus = { //Estado que debe de ser retorado por el Cid
        status: null,
        change: []
    }

    let toRefund = Math.round((cash - price) * 100) //Cantidad de dinero total a devolver

    let cashRefounded = { //Objeto del dinero que debe de ser devuelto en denominacion
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

    let cashInCid = {} //Arreglo que almacena el dinero que hay almacenado en el Cid
    cid.reverse().forEach(elem => {
        cashInCid[elem[0]] = Math.round(elem[1] * 100)
    })
    let totalCashInCid = 0 //Contador del dinero actual en el cid
    for (let val in cashInCid) {
        totalCashInCid += cashInCid[val]
    }
    console.log(totalCashInCid)
    console.log(toRefund)

    if (totalCashInCid > toRefund && totalCashInCid > Math.round(price*100)) {
        cidStatus.status = 'OPEN'
        //De esta linea no salimos hasta pasar el dinero del cid al refounded
        DENOMINATIONS.forEach(elem => {
            while (toRefund >= elem[1] && cashInCid[elem[0]] !== 0) {
                cashRefounded[elem[0]] = cashRefounded[elem[0]] + elem[1]
                toRefund -= elem[1]
                cashInCid[elem[0]] -= elem[1]
            }
        })
        for(let ref in cashInCid){
            if(cashRefounded[ref] != 0){
                cidStatus.change.push([ref, cashRefounded[ref]/100])
            }
        }

    } else if (totalCashInCid === toRefund) {
        cidStatus.status = 'CLOSED'
        DENOMINATIONS.forEach(elem => {
            while (toRefund >= elem[1] && cashInCid[elem[0]] !== 0) {
                cashRefounded[elem[0]] = cashRefounded[elem[0]] + elem[1]
                toRefund -= elem[1]
                cashInCid[elem[0]] -= elem[1]
            }
        })
        for(let ref in cashInCid){
            cidStatus.change.push([ref, cashRefounded[ref]/100])
            // cidStatus.change.reverse()
        }
        let invertedChange = []
        for (let i = cidStatus.change.length-1; i >= 0 ; i--) {
            invertedChange.push(cidStatus.change[i])
            
        }
        cidStatus.change = invertedChange

    } else if (totalCashInCid < toRefund || totalCashInCid < Math.round(price*100)) {
        cidStatus.status = 'INSUFFICIENT_FUNDS'
        cidStatus.change = []
    }

    
    return cidStatus

}

// console.log(checkCashRegister(19.5, 32.49, [
//     ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
//     ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
//     ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
// ))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))