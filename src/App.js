
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
import { FilterContext } from './provider/filter.context';
import { FilterProgessContext } from './provider/progress.context';
import { act } from '@testing-library/react';






function App() {

  const listFromLocal = JSON.parse(localStorage.getItem('toDoTask')) || []
  const listProgressFromLocal = JSON.parse(localStorage.getItem('inProgressTask')) || []

  const [toDo, updateToDo] = useState(listFromLocal)
  const [inProg, updateInProg] = useState(listProgressFromLocal)

  const [filter, updateFilter] = useContext(FilterContext)
  const [filterProg, updateFilterProg] = useContext(FilterProgessContext)

  

  const OnDragEnd = (res) => {
    const { source, destination } = res

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    let add,
      active = filter,
      inProgList = filterProg;


    if (source.droppableId === 'To-do-list') {
      add = active[source.index]
      active.splice(source.index, 1)
      updateToDo(add)
      updateInProg(add)
    } else {
      add = inProgList[source.index]
      inProgList.splice(source.index, 1)
   
    }

    if (destination.droppableId === 'To-do-list') {
      active.splice(destination.index, 0, add)
 
    } else {
      inProgList.splice(destination.index, 0, add)
   
    }
    
   
    updateFilter(active)
    updateFilterProg(inProgList)


  }

  return (

    <DateProvider>
      
      <DragDropContext onDragEnd={OnDragEnd}>
        <IdProvider>
          <Header></Header>
          <SubHeader></SubHeader>
          <main className='card-container'>
            <CardToDo></CardToDo>
            <CardIndProgress></CardIndProgress>
            <Done></Done>
          </main>
        </IdProvider>
      </DragDropContext>
      
    </DateProvider>



  );
}

export default App;
