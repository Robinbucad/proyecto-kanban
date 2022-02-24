
import './App.css';
import CreateCard from './components/Card-Done';
import SubHeader from './components/Subheader';
import CardToDo from './components/Card-To-Do';
import Header from './components/Header';
import CardIndProgress from './components/Card-In-Progress';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SubHeader></SubHeader>
      <main className='card-container'>
      <CardToDo></CardToDo>
      <CardIndProgress></CardIndProgress>
      <p>Aqui va card Done</p>
      </main>
    </div>
  );
}

export default App;
