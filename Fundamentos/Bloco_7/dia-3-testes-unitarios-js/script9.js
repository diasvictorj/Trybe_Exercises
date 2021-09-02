/* Escreva a função findTheNeedle para passar nos testes já implementados. */
const assert = require('assert');
// escreva a função findTheNeedle aqui

function findTheNeedle(words, string) {
    let result = -1;
    for (let index in words) {
        if (string === words[index]){
            result = parseInt(index);
            return result; 
        }
     
    }
    return result; 
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);