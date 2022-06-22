/**
 * Ya no es necesario crear una funcion constructor con objetos, solo usaremos class
 */

// Cambia solo el código debajo de esta línea
class Vegetable {
    constructor(name) {
        this.name = name
    }
}
// Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'