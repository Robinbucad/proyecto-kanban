import { useState } from 'react'
import './style.css'

function CardToDo(){

    /**Funcion que enseña la opcion de añadir tareas */

    const [tarea, updateTarea] = useState([])
    
    const handleAdd = () => {
        updateTarea(true)
        if(tarea === true){
            updateTarea(false)
            console.log('oculta')
        }else {   
            console.log('enseña el texto')
        }     
    }

    return(
        <article className='card'>
            <header className='header__card'>
                <div className='left__header__card'>
                    <p>1</p>
                    <h3>To do</h3>
                </div>

                <button className='btn__header__add' onClick={handleAdd}>+</button>
            </header>
            <section className='card-list'>

                {tarea === true ?  <div className='add-tarea'>
                   <textarea rows='4'className='text-area'></textarea>
                    <div className='btn-divs'>
                        <button className='btn-tarea-add'>Add</button>
                        <button className='btn-tarea-cancel'>Cancel</button>
                    </div>
                </div> : ''}

                <div className='tarea'>
                    <h4 className='title-task'>Title Tarea</h4>
                    <p>Fecha creacion</p>

                </div>

            </section>
        </article>
    )
}

export default CardToDo