/**
 * Convierte el número proporcionado en un número romano.
 */

function convertToRoman(num) {
    let test = num
    let finalStr = ''
    const romanLetters = {
        M : 1000,
        CM : 900,
        D : 500,
        CD : 400,
        C : 100,
        XC : 90,
        L : 50,
        XL : 40,
        X : 10,
        IX : 9,
        V : 5,
        IV : 4,
        I : 1
    }
    for(let romman in romanLetters){
        while(num >= romanLetters[romman]){
            finalStr += romman
            num -= romanLetters[romman]
        }
    }
    return finalStr

}

console.log(convertToRoman(36))
console.log(convertToRoman(2000))