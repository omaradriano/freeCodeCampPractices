/**Invierte la cadena proporcionada.

Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

Tu resultado debe ser una cadena. */

function reverseString(str) {
    return str.split('').reverse().join('')
    /**
     * 1.- str se convierte en un array
     * 2.- El ahora array se aplica un metodo reverse que literalmente la voltea (El final es el principio)
     * 3.- Usamos Join para convertir el array en un string sin ningún espacio de por medio
     */
}

console.log(reverseString("hello"))