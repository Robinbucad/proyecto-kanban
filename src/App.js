
import './App.css';
import CreateCard from './components/Card-Done';
import SubHeader from './components/Subheader';
import CardToDo from './components/Card-To-Do';
import Header from './components/Header';
import CardIndProgress from './components/Card-In-Progress';
import ProviderFilter from './provider/filter.provider';
import ProgressFilter from './provider/progress.provider'


function App() {
  return (
    <ProgressFilter>
      <ProviderFilter>
        <Header></Header>
        <SubHeader></SubHeader>
        <main className='card-container'>
          <CardToDo></CardToDo>
          <CardIndProgress></CardIndProgress>
          <p>Aqui va card Done</p>
        </main>
      </ProviderFilter>
    </ProgressFilter>
  );
}

export default App;
