let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1 
for (let index=0; index <= numbers.length; index++){
    
    let numeroComparado = numbers[index];
    let score = 0;
    
    for (let indexComparador = 0 ;indexComparador <=10; indexComparador++ ){

    
        if( numeroComparado > numbers[indexComparador]){
            score = score + 1;
        } else{}
       
    } 
    switch (score){
            
        case 9 :
            console.log ("maior número é: " + numeroComparado);
        break;
    }
}

