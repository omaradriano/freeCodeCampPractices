/**Uso del parametro REST
 * 
 * CONSIDERACIONES:
 * 
 * El parametro REST puede tener cualquier nombre
 * Este se almacena como arreglo por lo cual podemos aplicar metodos de array (map, filter, reduce, entre otros)
 */

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}