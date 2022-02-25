
import { useEffect } from 'react';
import { useState } from 'react'
import Card from '../Card';

const listFromLocal = JSON.parse(localStorage.getItem('progressTask')) || []

// PRUEBA BORRADO --> let borradoTask = JSON.parse(localStorage.getItem('tasking'))

function CardIndProgress() {

    
    /**Variable que guarda el Area Text, se usa para mostrar y esconder  */
    const [tarea, updateTarea] = useState([])

    /**Esto añade una clase al boton add para darle opacidad si no hay nada escrito */
    const [opacity, updateOpacity] = useState('opacity')

    /**Varibale que guarda el contenido del texto */
    const [tareaText, updateTareaText] = useState([])
    /**Varibale que hace un array de la lista */
    const [list, updateList] = useState(listFromLocal)
    

    
    let fecha = new Date()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    let year = fecha.getFullYear()
    let hour = fecha.getHours()
    let minutes = fecha.getMinutes()
    let seconds = fecha.getSeconds()

    const [saveSec, updateSec] = useState()

    localStorage.setItem('seconds', seconds)
    let takeSeconds = localStorage.getItem('seconds')

    const handleRemove = e => {
  
     
    }
    
    

    const handleAddTask = e => {

        {
            tareaText === '' ? console.log('escribe algo') :
            list.push(tareaText)
            updateList(list)
            updateTareaText('')
            localStorage.setItem('progressTask',JSON.stringify(list))
 
        }

    }

    const handleTextTask = e => {
        updateTareaText(e.target.value)
        updateOpacity('newOpacity')
    }




    const handleAdd = () => {

        updateTarea(true)
        if (tarea === true) {
            console.log(tarea)
            updateTarea(false)
            updateTareaText('')
            console.log('oculta')
        } else {
            console.log('enseña el texto')
        }
    }

    
    
    

    return <Card title='In progress' handleAdd={handleAdd} handleTextTask={handleTextTask} handleAddTask={handleAddTask}
                tarea={tarea} list = {list} opacity={opacity} day={day} month={month} year={year} hour={hour} minutes={minutes} saveSec={saveSec} handleRemove={handleRemove}>
                    
            </Card>
      

    
    
}

export default CardIndProgress;