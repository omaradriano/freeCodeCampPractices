function filteredArray(arr, elem) {
    let newArr = [];
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(elem)===-1){
            newArr.push(arr[i])
        }
    }
    // Cambia solo el código encima de esta línea
    return newArr;
}

// Pruebas

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 'flutes'))