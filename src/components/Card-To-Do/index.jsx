import { useState } from 'react'
import './style.css'
import CardList from '../Card-List-Done'

function CardToDo() {

    /**Variable que guarda el Area Text, se usa para mostrar y esconder  */
    const [tarea, updateTarea] = useState([])

    /**Esto añade una clase al boton add para darle opacidad si no hay nada escrito */
    const [opacity, updateOpacity] = useState('opacity')

    /**Varibale que guarda el contenido del texto */
    const [tareaText, updateTareaText] = useState([])
    /**Varibale que hace un array de la lista */
    const [list, updateList] = useState([])


    let fecha = new Date()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    let year = fecha.getFullYear()
    let hour = fecha.getHours()
    let minutes = fecha.getMinutes()
    let seconds = fecha.getSeconds()


    let secondsSave = localStorage.setItem('seconds', seconds)
    let minutesSave = localStorage.setItem('minutes', minutes)
    let hoursSave = localStorage.setItem('hours', hour)

    let takeSeconds = localStorage.getItem('seconds')




    const handleAddTask = e => {

        {
            tareaText === '' ? console.log('escribe algo') :
            list.push(tareaText)
            updateList(list)
            updateTareaText('')
        }

    }


    const handleTextTask = e => {
        updateTareaText(e.target.value)
        updateOpacity('newOpacity')
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


    console.log(tareaText)


    return (
        <article className='card'>
            <header className='header__card'>
                <div className='left__header__card'>
                    <p>1</p>
                    <h3>To do</h3>
                </div>

                <button className='btn__header__add' onClick={handleAdd}>+</button>
            </header>
            <section className='card-list'>

                {tarea === true ? <div className='add-tarea'>
                    <textarea rows='4' className='text-area' onChange={handleTextTask}></textarea>
                    <div className='btn-divs'>
                        <button className='btn-tarea-add' id={opacity} onClick={handleAddTask}>Add</button>
                        <button className='btn-tarea-cancel'>Cancel</button>
                    </div>
                </div> : ''}

                {list.map((e, i) => <div key={i} className='tarea'>
                    <h4 className='title-task'>{e}</h4>
                    <p className='time-creation'>{`created on ${day}/${month}/${year} ${hour}:${minutes}:${takeSeconds}`}</p>
                </div>)}

            </section>
        </article>
    )
}

export default CardToDo

/**
 * {list.map((e, i) => <div key={i} className='tarea'>
                    <h4 className='title-task'>{e}</h4>
                    <p>Fecha creacion</p>
                </div>)}
 */

/**
 * updateTareaText(e.target.value)
 */