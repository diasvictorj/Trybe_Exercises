
import './App.css';

const monthTasks = ['Dia 10/10 - Show Sunset','Dia 16/10 - Show Especial Pearl Jam','Dia 17/10 - Show Acústico','Dia 23/10 - Show PopRock Night'];
const Task = (element) => {
    return (
      <li>{element}</li>
    )
}
function App() {
  const finalList = monthTasks.map((element) => Task(element));
  return (
    <ul>
      {finalList}
    </ul>
  );
}

export default App;
