import { useContext, useEffect } from 'react'
import { useState } from 'react'
import Card from '../Card'
import { FilterContext } from '../../provider/filter.context'

const listFromLocal = JSON.parse(localStorage.getItem('toDoTask')) || []
const listId = JSON.parse(localStorage.getItem('id')) || 1

function CardToDo() {

    /**Variable que guarda el Area Text, se usa para mostrar y esconder  */
    const [tarea, updateTarea] = useState([])

    /**Esto añade una clase al boton add para darle opacidad si no hay nada escrito */
    const [opacity, updateOpacity] = useState('opacity')

    /**Varibale que guarda el contenido del texto */
    const [tareaText, updateTareaText] = useState([])
    
    const [list, updateList] = useState(listFromLocal)
    
    localStorage.setItem('toDoTask', JSON.stringify(list))
    
    const [filter, updateFilter] = useContext(FilterContext)
    const [enable, setEnable] = useState(true)
   
  
    
    const [id,updateId] = useState(listId)
    console.log(listId)


    localStorage.setItem('id', id)

    let fecha = new Date()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    let year = fecha.getFullYear()
    let hour = fecha.getHours()
    let minutes = fecha.getMinutes()
    let seconds = fecha.getSeconds()

    let taskCard = {
        task:tareaText,
        id:id,
        day:day,
        month:month,
        year:year,
        hour:hour,
        minutes:minutes,
        seconds:seconds
    }


    const handleAddTask = e => {
       
            updateId(id + 1)
            updateList(list => [...list, taskCard]) 
            updateFilter(list => [...list,taskCard]) 
            updateTareaText('') 
            updateTarea(false)
            setEnable(true)
    }
   
    const handleTextTask = e => {
        updateTareaText(e.target.value)
        updateOpacity('newOpacity')
        setEnable(false)
      
    }




    const handleAdd = () => {

        updateTarea(true)
        if (tarea === true) {
            updateTarea(false)
            updateTareaText('')
            console.log('oculta')
        } else {
            console.log('enseña el texto')
        }
    }

    const handleCancel = () => {
        updateTarea(false)
    }

    


    return (
        <Card cardId='cardToDo' title='To do' handleAdd={handleAdd} handleTextTask={handleTextTask} handleAddTask={handleAddTask}
              tarea={tarea} list={filter} id={id}  opacity={opacity} day={day} month={month} enable={enable}
              value={tareaText} year={year} hour={hour} minutes={minutes} seconds={seconds} handleCancel={handleCancel} >
        </Card>
    )
}

export default CardToDo

/**
 * const [list, updateList] = useState(listFromLocal)
    
    
const listFromLocal = JSON.parse(localStorage.getItem('toDoTask')) || []

    localStorage.setItem('task', list)
    
 * 
 */