
import { useContext, useEffect } from 'react';
import { useState } from 'react'
import Draggable from 'react-draggable';
import { dateContext } from '../../provider/date.contex';
import { IdContext } from '../../provider/id.context';
import { FilterProgessContext } from '../../provider/progress.context';
import Card from '../Card';


const listFromLocal = JSON.parse(localStorage.getItem('inProgressTask')) || []

function CardIndProgress() {


    /**Variable que guarda el Area Text, se usa para mostrar y esconder  */
    const [tarea, updateTarea] = useState([])

    /**Esto añade una clase al boton add para darle opacidad si no hay nada escrito */
    const [opacity, updateOpacity] = useState('opacity')

    /**Varibale que guarda el contenido del texto */
    const [tareaText, updateTareaText] = useState([])

    const [list, updateList] = useState(listFromLocal)

    const [idLocal, updateIdLocal] = useContext(IdContext)

    

    
    localStorage.setItem('inProgressTask', JSON.stringify(list))


    const [filterProgres, updateProgress] = useContext(FilterProgessContext)
    const [enable, setEnable] = useState(true)
    const [,updateDate] = useContext(dateContext)


    let fecha = new Date()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    let year = fecha.getFullYear()
    let hour = fecha.getHours()
    let minutes = fecha.getMinutes()
    let seconds = fecha.getSeconds()

    let monthUpdate = fecha.toLocaleString('default', {month:'short'})
    const dateSec = `${day} ${monthUpdate} at ${hour}:${minutes}:${seconds}`

    let taskCard = {
        task: tareaText,
        id: idLocal,
        day: day,
        month: month,
        year: year,
        hour: hour,
        minutes: minutes,
        seconds: seconds
    }


    const handleAddTask = e => {
        updateIdLocal(idLocal + 1)
        updateList(list => [...list, taskCard])
        updateProgress(list => [...list, taskCard])
        updateTareaText('')
        updateTarea(false)
        setEnable(true)
        updateDate(dateSec)
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

        <Card dragTable='inProg-list'  indexDrag={idLocal} cardId='cardProgress' title='In progress' handleAdd={handleAdd} handleTextTask={handleTextTask} handleAddTask={handleAddTask}
            tarea={tarea} list={filterProgres} id={idLocal} opacity={opacity} day={day} month={month}  enable={enable}
            value={tareaText} year={year} hour={hour} minutes={minutes} seconds={seconds} handleCancel={handleCancel}>
        </Card>

    )

}

export default CardIndProgress;