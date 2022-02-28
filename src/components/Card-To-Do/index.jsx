import { useContext, useEffect } from 'react'
import { useState } from 'react'
import Card from '../Card'
import { FilterContext } from '../../provider/filter.context'
import { IdContext } from '../../provider/id.context'
import { dateContext } from '../../provider/date.contex'


const listFromLocal = JSON.parse(localStorage.getItem('toDoTask')) || []


function CardToDo() {

    /**Variable que guarda el Area Text, se usa para mostrar y esconder  */
    const [tarea, updateTarea] = useState([])

    /**Esto añade una clase al boton add para darle opacidad si no hay nada escrito */
    const [opacity, updateOpacity] = useState('opacity')

    /**Varibale que guarda el contenido del texto */
    const [tareaText, updateTareaText] = useState([])
    
    /**Variable que actualiza la lista de tareas, se inicializa con las lista guardada en el local para que al reiniciar no se borre */
    const [list, updateList] = useState(listFromLocal)
    

    /**Almaceno la lista en el local storage */
    localStorage.setItem('toDoTask', JSON.stringify(list))
    
    /**Use el contexto del filtro para poder filtrar la lista To-DO */
    const [filter, updateFilter] = useContext(FilterContext)

    /**Variable que activa y desactiva el boton de añadir tarea */
    const [enable, setEnable] = useState(true)
    
    /**Variable que actualiza el id del producto, guardo el Id en el local y lo inicializo en el contexto para que al reiniciar la pagina no se reinicie el Id a 1 */
    const [idLocal, updateIdLocal] = useContext(IdContext)

    const [date,updateDate] = useContext(dateContext)

    /** Creo el localStorage del id */
    localStorage.setItem('id', idLocal)

    let fecha = new Date()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    let year = fecha.getFullYear()
    let hour = fecha.getHours()
    let minutes = fecha.getMinutes()
    let seconds = fecha.getSeconds()

    let monthUpdate = fecha.toLocaleString('default', {month:'short'})

    let taskCard = {
        task:tareaText,
        id:idLocal,
        day:day,
        month:month,
        year:year,
        hour:hour,
        minutes:minutes,
        seconds:seconds
    }
    

   //const date = `${day} ${monthUpdate}`
    
    const dateSec = `${day} ${monthUpdate} at ${hour}:${minutes}:${seconds}`

    console.log(date)
   


    const handleAddTask = e => {
       
            updateIdLocal(idLocal + 1)
            updateList(list => [...list, taskCard]) 
            updateFilter(list => [...list,taskCard]) 
            updateTareaText('') 
            updateTarea(false)
            setEnable(true)
            updateDate(dateSec)
            localStorage.setItem('date', dateSec) 
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
        <Card dragTable='To-do-list' indexDrag={idLocal} cardId='cardToDo' title='To do' handleAdd={handleAdd} handleTextTask={handleTextTask} handleAddTask={handleAddTask}
              tarea={tarea} list={filter} value={idLocal} id={idLocal}   opacity={opacity} day={day} month={month} enable={enable} 
              value={tareaText} year={year} hour={hour} minutes={minutes} seconds={seconds} handleCancel={handleCancel} >
        </Card>
    )
}

export default CardToDo

