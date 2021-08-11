/* Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai . */
 
 let exibir = document.querySelector('#elementoOndeVoceEsta');
 console.log (exibir);


 document.querySelector('#elementoOndeVoceEsta').parentNode.style.backgroundColor = 'red';

 document.querySelector('#primeiroFilhoDoFilho').innerText = 'Exemplo concluído com sucesso';
 
 let exibirAPartirDoPai = document.querySelector('#pai').firstChild;
 console.log (exibirAPartirDoPai); 


 let exibirAPartirDoIrmao = document.querySelector('#elementoOndeVoceEsta').previousSibling;
 console.log (exibirAPartirDoIrmao);


 let nomeMtoDificil = document.querySelector('#elementoOndeVoceEsta').parentNode.nextSibling;
 console.log (nomeMtoDificil);

 let acesseAtencao = document.querySelector('#elementoOndeVoceEsta').parentNode.nextElementSibling;
 console.log  (acesseAtencao);
