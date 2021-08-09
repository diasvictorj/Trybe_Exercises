document.getElementsByTagName('p')[0].innerText = 'Meu nome é João Dias, tenho 25 anos. Dormi 5 horas essa noite, então não vou escrever muito mais.';
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';

let text = document.getElementsByTagName('p')[0];
text.innerHTML = text.innerHTML.toUpperCase();


let i = document.getElementsByTagName('p').length;


for (index=0; index < i; index +=1) {
    let exibirNoConsole = document.getElementsByTagName('p')[index].innerText;
    console.log(exibirNoConsole);
}