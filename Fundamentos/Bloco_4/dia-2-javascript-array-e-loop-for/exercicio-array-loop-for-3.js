let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somador = 0;
let resultado;
//exercicio 1 
for (let index=0; index < numbers.length; index++){

    somador = somador + numbers[index];
    resultado = somador/numbers.length;

    
}

console.log(resultado);