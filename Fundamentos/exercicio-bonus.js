/* 6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */



let numeroInserido = 2;
let contador = 0;
for(index = 1; index <= numeroInserido; index +=1){
    if (numeroInserido%index === 0){
        contador +=1;
    }
}
if(contador ===2){

    console.log("Numero inserido é primo, o número é:" +numeroInserido);
}else{
    console.log("Numero inserido não é primo, o número é:" +numeroInserido);
}

