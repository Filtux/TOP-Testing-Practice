export function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
}

export function reverseString(input) {
    return input.split("").reverse().join("");
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (a === 0 || b === 0){
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}

export function caesarCipher(str, shift) {

    shift = shift % 26;

    return str.split('').map(char => {
        // Check if the character is a letter
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);

            // Handle uppercase letters
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }

            // Handle lowercase letters
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        return char;
    }).join('');
}

export function analyzeArray(array) {
    if (array.length === 0)
        return {
          average: undefined,
          min: undefined,
          max: undefined,
          length: 0,
        };
    const sum = array.reduce((a, b) => a + b);
    array.sort((a, b) => a - b);
    const object = {
        average: sum / array.length,
        min: array[0],
        max: array[array.length - 1],
        length: array.length,
    };
    return object;
}