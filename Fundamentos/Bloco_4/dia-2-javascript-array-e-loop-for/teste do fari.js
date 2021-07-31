let numbers = [5000, 9, 3, 19, 70, 8, 100, 2, 35, 270];

//exercicio 1 
let numeroMax = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > numeroMax) {
    numeroMax = numbers[index];
  }
}

console.log(numeroMax);