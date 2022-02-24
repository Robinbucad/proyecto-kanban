
import './App.css';
import CreateCard from './components/Card-Done';
import SubHeader from './components/Subheader';
import CardToDo from './components/Card-To-Do';

function App() {
  return (
    <div className="App">
      <header>Aqui va el header de Juan</header>
      <SubHeader></SubHeader>
      <main className='card-container'>
      <CardToDo></CardToDo>
      <p>Aqui va card progress</p>
      <p>Aqui va card Done</p>
      </main>
    </div>
  );
}

export default App;
