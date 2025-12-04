/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  let result = '';
  let numberInBrackets =  0;

    for (let i = 0; i < code.length; i++) {
        const char = code[i];
        if(char === '[') 
        {
            numberInBrackets = 0;
        }
        else if (char >= '0' && char <= '9')
        { 
            numberInBrackets = parseInt(char);
        }
        else if (char === '+')
        { 
            numberInBrackets++;
        }
         else if (char === '-')
        { 
            numberInBrackets--;
        }
         else if (char === '<')
        { 
            numberInBrackets= result.length > 0 ? parseInt(result[result.length - 1] ) : '';
        }
        else if (char === ']') 
        {
            result += numberInBrackets == '' ? numberInBrackets : numberInBrackets < 0 ? (numberInBrackets + 10).toString() : (numberInBrackets % 10).toString();
        }
    }
    
    return result.length < 4 ? null : result;
}

console.log(decodeSantaPin('[1++][2-][3+][<]'))
// "3144"

console.log(decodeSantaPin('[9+][0-][4][<]'))
// "0944"

console.log(decodeSantaPin('[1+][2-]'))
// null (solo 2 dígitos)