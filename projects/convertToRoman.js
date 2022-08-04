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

    console.log(romanLetters['M'])

    while(test>0){
        console.log(test)
        if(test>=1000){
            finalStr = finalStr + 'M'
            test -= romanLetters['M']
        }else if(test>=900){
            finalStr = finalStr + 'CM'
            test -= romanLetters['CM']
        }
        else if(test>=500){
            finalStr = finalStr + 'D'
            test -= romanLetters['D']
        }
        else if(test>=400){
            finalStr = finalStr + 'CD'
            test -= romanLetters['CD']
        }
        else if(test>=100){
            finalStr = finalStr + 'C'
            test -= romanLetters['C']
        }
        else if(test>=90){
            finalStr = finalStr + 'XC'
            test -= romanLetters['XC']
        }
        else if(test>=50){
            finalStr = finalStr + 'L'
            test -= romanLetters['L']
        }
        else if(test>=40){
            finalStr = finalStr + 'XL'
            test -= romanLetters['XL']
        }
        else if(test>=10){
            finalStr = finalStr + 'X'
            test -= romanLetters['X']
        }
        else if(test>=9){
            finalStr = finalStr + 'IX'
            test -= romanLetters['IX']
        }
        else if(test>=5){
            finalStr = finalStr + 'V'
            test -= romanLetters['V']
        }
        else if(test>=4){
            finalStr = finalStr + 'IV'
            test -= romanLetters['IV']
        }
        else if(test>=1){
            finalStr = finalStr + 'I'
            test -= romanLetters['I']
        }
    }
    return finalStr
}

console.log(convertToRoman(36))
console.log(convertToRoman(2000))