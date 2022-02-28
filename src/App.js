
import './App.css';
import CreateCard from './components/Card-Done';
import SubHeader from './components/Subheader';
import CardToDo from './components/Card-To-Do';
import Header from './components/Header';
import CardIndProgress from './components/Card-In-Progress';
import ProviderFilter from './provider/filter.provider';
import ProgressFilter from './provider/progress.provider'
import Done from './components/Card-Done';
import IdProvider from './provider/id.provider';
import { DragDropContext } from 'react-beautiful-dnd';
import { useContext, useState } from 'react';
import DateProvider from './provider/date.provider';

const listFromLocal = JSON.parse(localStorage.getItem('toDoTask')) || []
const listProgressFromLocal = JSON.parse(localStorage.getItem('inProgressTask')) || []


function App() {

  const [toDo, updateToDo] = useState(listFromLocal)
  const [inProg, updateInProg] = useState(listProgressFromLocal)

  

  const OnDragEnd = (res) => {
    const { source, destination } = res

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    let add,
      active = toDo,
      inProgList = inProg;


    if (source.droppableId === 'To-do-list') {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = inProgList[source.index]
      inProgList.splice(source.index, 1)
    }

    if (destination.droppableId === 'To-do-list') {
      active.splice(destination.index, 0, add)

    } else {
      inProgList.splice(destination.index, 0, add)

    }

    updateToDo(active)
    updateInProg(inProgList)
    console.log(active)
    console.log(inProgList)

  }

  return (

<DateProvider>
    <DragDropContext onDragEnd={OnDragEnd}>
      <ProgressFilter>
        <ProviderFilter>
          <IdProvider>
            <Header></Header>
            <SubHeader></SubHeader>
            <main className='card-container'>
              <CardToDo></CardToDo>
              <CardIndProgress></CardIndProgress>
              <Done></Done>
            </main>
          </IdProvider>
        </ProviderFilter>
      </ProgressFilter>
    </DragDropContext>
  </DateProvider>


  );
}

export default App;
