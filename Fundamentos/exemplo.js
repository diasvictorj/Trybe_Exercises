/* Para fixar
Agora vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos no video anterior! 😉
1 - Crie um objeto player contendo as variáveis listadas abaixo.
Copiar
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
Copiar
[2006, 2007, 2008, 2009, 2010, 2018]
4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.
 */




let womanPlayer = {
    name: 'Marta',
    lastName: 'Silva',
    age : 34,
    medals : {golden : 2, silver: 3}

}
console.log('A jogadora ' + womanPlayer.name + ' '  + womanPlayer.lastName + ' tem ' + womanPlayer.age + ' anos de idade.');

womanPlayer ['bestInTheWorld'] = [2006,2007,2008,2009,2010,2018];

console.log("Ela foi melhor do mundo  "+  womanPlayer['bestInTheWorld'].length  +" vezes"  +" nos anos de: " + womanPlayer.bestInTheWorld + '.');
console.log("A jogadora possui "+ womanPlayer.medals.golden + " medalhas de ouro e " + womanPlayer.medals.silver + " medalhas de prata." );
