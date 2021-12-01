
import './App.css';
import data from './data.js';

const pokeList = data.map((pokemon) => {
  return (
    <div className='pokemon'>
      <h1>{pokemon.name}</h1>
      <ul>
        <li>{pokemon.type}</li>
        <li>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</li>
      </ul>
      <img src={pokemon.image} alt={pokemon.name}></img>
    </div>
  )
});
function App() {
  return (
    pokeList
  );
}

export default App;
