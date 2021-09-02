/* Escreva a função sumAllNumbers para passar nos testes já implementados. */
const assert = require('assert');
// escreva a função sumAllNumbers aqui
function sumAllNumbers(numbers) {
    let result =0 ;
    for (let index in numbers) {
        result = numbers[index] + result; 
    }
    return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);