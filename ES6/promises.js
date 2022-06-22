/**Como usar una promesa en JS 
 * 
 * CONSIDERACIONES:
 * 
 * Fetch es una promesa
 * Esta cuenta con 3 estados los cuales son: pending, fulfilled, rejected
*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer;

    if (responseFromServer) {
        resolve('We got the data')
    } else {
        reject('Data not received')
    }
});