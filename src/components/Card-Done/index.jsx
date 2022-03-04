import './style.css'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import Card from '../Card'
import { filterDone } from '../../provider/filterdone.context'
import { IdContext } from '../../provider/id.context'
import { Droppable } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'
const listFromLocal = JSON.parse(localStorage.getItem('done')) || []



function Done() {

    const [featureDone, updateFeatureDone] = useContext(filterDone)


    const [tarea, updateTarea] = useState([])


    const [opacity, updateOpacity] = useState('opacity')


    const [tareaText, updateTareaText] = useState([])

    const [list, updateList] = useState(listFromLocal)
    const [id, updateId] = useContext(IdContext)
    localStorage.setItem('done', JSON.stringify(list))


    const [enable, setEnable] = useState(true)


    let fecha = new Date()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    let year = fecha.getFullYear()
    let hour = fecha.getHours()
    let minutes = fecha.getMinutes()
    let seconds = fecha.getSeconds()

    let taskCard = {
        task: tareaText,
        id: id,
        day: day,
        month: month,
        year: year,
        hour: hour,
        minutes: minutes,
        seconds: seconds
    }


    const handleAddTask = e => {

        updateId(id + 1)
        updateList(list => [...list, taskCard])
        updateFeatureDone(list => [...list, taskCard])
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
    const handleRemove = id => {
        // Filtro otra vez la lista pidiendo todos los que no tengan el mismo id cuando haga click
        const removeArr = list.filter(d => d.id !== id.target.value)
        const length = removeArr.length
        removeArr.splice(0, length)
        updateList(removeArr)
        updateFeatureDone(removeArr)
    }



    const handleRemoveOne = id => {

        console.log(id)
        const remOne = list.filter(b => b.id !== id)

        updateList(remOne)
        updateFeatureDone(remOne)

    }


    const handleCancel = () => {
        updateTarea(false)
    }

    const title = 'Done'




    return (

        <Droppable droppableId='card-doneDrag'>

            {
                (provided, i) => (
                    <article className='card' ref={provided.innerRef} {...provided.droppableProps} key={i.toString()} >
                        <header className='header__card'>
                            <div className='left__header__card'>
                                <div className='div-counter'>
                                    <p className='counter-tasks'>{list.length}</p>
                                </div>
                                <h3 className='title-card-header'>{title}</h3>
                            </div>
                            <div className='div-btns-done'>
                                <button className='btn__header__add' onClick={handleAdd}>+</button>
                                <button className='btn__header__clearAll' onClick={handleRemove}>Clear All</button>
                            </div>
                        </header>
                        <section className='card-list'>

                            {tarea === true ? <div className='add-tarea'>
                                <textarea value={tareaText} rows='4' className='text-area' onChange={handleTextTask}></textarea>
                                <div className='btn-divs'>
                                    <button type="button" id={opacity} class="btn btn-success btn-lg  custom" onClick={handleAddTask} disabled={enable}>Add</button>
                                    <button className='btn-tarea-cancel' onClick={handleCancel}>Cancel</button>
                                </div>
                            </div> : ''}

                            {featureDone.map((e, i) => (

                                <Draggable draggableId={`${e.id} + id`} key={e.id} index={i} >

                                    {
                                        (provided) => (
                                            <div key={i} className='tarea' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <div className='header-task-info'>
                                                    <div className='title-div-task'>
                                                        {title === 'To do' || 'In progress' ? <div className='taskIconDone'> <p className='v'> ✓ </p> </div> :
                                                            <div className='taskIconDone'><div className='innerDone'></div></div>}

                                                        <h4 className='title-task'>{e.task}</h4>
                                                    </div>
                                                    <div>
                                                        <button className='btn__header__remove' onClick={() => handleRemoveOne(e.id)}><img className='trash__btn' src="https://img.icons8.com/metro/26/000000/trash.png" /></button>
                                                    </div>

                                                </div>
                                                <div className='dated-list'>
                                                    <div className='id-info-card'>
                                                        <p id='id'>#{e.id}</p>
                                                        <p className='time-creation'>{`created on ${e.day}/${e.month}/${e.year} ${e.hour}:${e.minutes}:${e.seconds}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                </Draggable>
                            )
                            )}



                        </section>
                        {provided.placeholder}
                    </article>
                )
            }


        </Droppable>
    )
}
export default Done

/**
 * 
 * <img className='trash__btn' src="https://img.icons8.com/metro/26/000000/trash.png" />
 */