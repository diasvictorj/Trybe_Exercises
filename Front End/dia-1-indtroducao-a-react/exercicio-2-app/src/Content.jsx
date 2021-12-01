import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const finalList = conteudos.map((element) => {
  return <div key = {element.conteudo}>
    <p> O conteúdo é : {element.conteudo}</p>
    <p> Status: {element.status}</p>
    <p> Bloco: {element.bloco}</p>
  </div>

});
class content extends React.Component {
  render() {
    return (
      <div>
        {finalList}
      </div>
    )
  }
}
export default content