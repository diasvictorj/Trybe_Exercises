/* O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags <script> e </script> .
Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
Adicione a tag main com a classe main-content como filho da tag body ;
Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
Adicione a classe title na tag h1 criada;
Adicione a classe description nas 3 tags h3 criadas;
Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
 */


let titulo = document.querySelector('body'); 
let tituloNaPagina = document.createElement('h1');
tituloNaPagina.innerText = 'Exercício 5.2 - JavaScript DOM';  
titulo.appendChild(tituloNaPagina);


let mainContent = document.querySelector('body'); 
let tagMain = document.createElement('main');
tagMain.className = 'main-content';
mainContent.appendChild(tagMain);


let centerContent = document.querySelector('main'); 
let centerSection = document.createElement('section');
centerSection.className = 'center-content';
centerContent.appendChild(centerSection);


let textSection = document.querySelector('section'); 
let elementP = document.createElement('p');
elementP.innerText = 'Nesse momento estou ouvindo The Killers, se você não conhece, eu recomendo!';
textSection.appendChild(elementP);


let leftContent = document.querySelector('main'); 
let leftSection = document.createElement('section');
leftSection.className = 'left-content';
leftContent.appendChild(leftSection);


let rightContent = document.querySelector('main'); 
let rightSection = document.createElement('section');
rightSection.className = 'right-content';
rightContent.appendChild(rightSection);


let imgPlace = document.querySelector('.left-content');
let imgContent = document.createElement('img');
imgContent.src = 'https://picsum.photos/200';
imgPlace.appendChild(imgContent);


let listPlace = document.querySelector('.right-content');
let ulContent = document.createElement('ul');
let umContent = document.createElement('li');
umContent.innerText = 'um';
let doisContent = document.createElement('li');
doisContent.innerText = 'dois';
let tresContent = document.createElement('li');
tresContent.innerText = 'tres';
listPlace.appendChild(umContent);
listPlace.appendChild(doisContent);
listPlace.appendChild(tresContent);



