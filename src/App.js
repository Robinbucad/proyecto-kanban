
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
import { filterDone } from './provider/filterdone.context';







function App() {

  const listToDo = JSON.parse(localStorage.getItem('toDoTask')) || []
  const listProgressFromLocal = JSON.parse(localStorage.getItem('inProgressTask')) || []
  const listDoneLocal = JSON.parse(localStorage.getItem('done'))



  const [toDo, updateToDo] = useState(listToDo)
  const [inProg, updateInProg] = useState(listProgressFromLocal)

  const [filter, updateFilter] = useContext(FilterContext)
  const [filterProg, updateFilterProg] = useContext(FilterProgessContext)
  const [filterDoneCard, updateFilterDoner] = useContext(filterDone)

  
  

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
      inProgList = filterProg,
      doneList = filterDoneCard
     

    if (source.droppableId === 'To-do-list') {
      add = active[source.index] 
      active.splice(source.index, 1) 


    } else if(source.droppableId === 'inProg-list') {
      add = inProgList[source.index]
      inProgList.splice(source.index, 1)

     
    }else if(source.droppableId === 'card-doneDrag'){
      add = doneList[source.index] 
      doneList.splice(source.index, 1) 
    }

    if (destination.droppableId === 'To-do-list') {
      active.splice(destination.index, 0, add)

     

    } else if(destination.droppableId === 'inProg-list'){
      inProgList.splice(destination.index, 0, add)


    }else if(destination.droppableId === 'card-doneDrag'){
      doneList.splice(destination.index,0,add)
    }
    
   
    updateFilter(active)
    updateFilterProg(inProgList)
    updateInProg(inProgList)
    updateToDo(active)
    
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
