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
    let actualCidStatus = {
        status: 'OPEN',
        change: []
    }
    let cidBox = {}
    let actualFunds = 0;
    cid.forEach(elem => {
        actualFunds += elem[1]
        cidBox[elem[0]] = elem[1]
    })
    actualFunds = actualFunds.toFixed(2)

    let toRefund = cash - price
    if (toRefund > actualFunds) { //Verificar si el dinero a devolver es mayor a la cantidad de dinero que hay en la caja
        actualCidStatus = {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    } else if (toRefund === actualFunds) { //Verificar si la cantidad de dinero a devolver es la misma que hay en la caja
        actualCidStatus = {
            status: "CLOSED",
            change: []
        }
    // }else if( actualFunds > toRefund){
    //     while(toRefund > 0){
            
    //     }
    }

    console.log(toRefund)
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// console.log(checkCashRegister(60, 60, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 50], ["TWENTY", 0], ["ONE HUNDRED", 0]]))