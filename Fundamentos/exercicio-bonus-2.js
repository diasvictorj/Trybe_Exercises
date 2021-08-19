/* 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Copiar
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
******* */
let n = 5;
let ka = n-1
let fdp = 1;

for(let index = 1 ; index <= (3) ; index += 1){
    console.log(" ".repeat(ka/2) + "*".repeat(fdp));
    
    ka -= 2;
    fdp += 2;
    
    
}