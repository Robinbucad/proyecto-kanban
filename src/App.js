
import './App.css';
import CreateCard from './components/Card-Done';
import SubHeader from './components/Subheader';
import CardToDo from './components/Card-To-Do';

function App() {
  return (
    <div className="App">
      <CreateCard></CreateCard>
      <SubHeader></SubHeader>
      <main className='card-container'>
      <CardToDo></CardToDo>
      </main>
    </div>
  );
}

export default App;
