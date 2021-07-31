let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;

//exercicio 1 
for (let index=0; index <= numbers.length; index++){
    
    let numeroComparado = numbers[index];

        if( numeroComparado %2 === 1 ){
            numerosImpares += 1;
        } else{}
       
     
}
switch (numerosImpares){
        
    case 0 :
        console.log ("Nenhum valor impar encontrado" );
    break;

    default :
        console.log ("A quantida de números ímpares é: " +numerosImpares);
    break;
}   

