/**Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número. */

function findLongestWordLength(str) {
    let longestWord = 0
    const wordArray = str.split(" ")
    wordArray.forEach(word => {
        if(word.length >= longestWord){
            longestWord = word.length
        }
    })
    return longestWord
}

console.log(findLongestWordLength("The quick brown fox kjkkugjasdhfklajsdhlkf jumped over the lazy dog kkdprroe"))