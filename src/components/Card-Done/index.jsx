import { useContext, useEffect } from 'react'
import { useState } from 'react'
import Card from '../Card'


const listFromLocal = JSON.parse(localStorage.getItem('done')) || []


function Done() {

    
    const [tarea, updateTarea] = useState([])

    
    const [opacity, updateOpacity] = useState('opacity')

    
    const [tareaText, updateTareaText] = useState([])
    
    const [list, updateList] = useState(listFromLocal)
    const [id,updateId] = useState(1)
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
       
            updateId(id +1)
            updateList(list => [...list, taskCard]) 
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
    const handleRemove =() =>{
        localStorage.removeItem('done')

    }
    // const key_id= id
    // const handleRemoveItem = JSON.parse(localStorage.getItem("key_name")) || [];           
    //         $.each(item_detail, function(index, obj){
    //             if (key_id == data('key')) {
    //                 item_detail.splice(index,1);
    //                 localStorage["key_name"] = JSON.stringify(item_detail);
    //                 return false;
    //             }
    //         });
 

    const handleCancel = () => {
        updateTarea(false)
    }

    const title='done'

    


    return (
        <article className='card'>
        <header className='header__card'>
            <div className='left__header__card'>
                <p>1</p>
                <h3>{title}</h3>
            </div>

            <button className='btn__header__add' onClick={handleAdd}>+</button>

        </header>
        <section className='card-list'>

            {tarea === true ? <div className='add-tarea'>
                <textarea value={tareaText} rows='4' className='text-area' onChange={handleTextTask}></textarea>
                <div className='btn-divs'>
                    <button type="button" id={opacity} class="btn btn-success btn-lg  custom" onClick={handleAddTask} disabled={enable}>Add</button>
                    <button className='btn-tarea-cancel' onClick={handleCancel}>Cancel</button>
                </div>
            </div> : ''}

            {list.map((e, i) => <div key={i} className='tarea'>
                <div className='header-task-info'>
                    <div className='title-div-task'>
                        {title === 'To do' || 'In progress' ? <div className='taskIconPending'> <div className='innerPending'></div></div> :
                            <div className='taskIconDone'><div className='innerDone'></div></div>}

                        <h4 className='title-task'>{e.task}</h4>
                    </div>
                    <div>
                        <button className='btn__header__remove' onClick={handleRemove}><img className='trash__btn' src="https://img.icons8.com/metro/26/000000/trash.png" /></button>
                    </div>

                </div>
                <div className='dated-list'>
                    <div className='id-info-card'>
                        <p id='id'>#{e.id}</p>
                        <p className='time-creation'>{`created on ${e.day}/${e.month}/${e.year} ${e.hour}:${e.minutes}:${e.seconds}`}</p>
                    </div>
                </div>
            </div>)}



        </section>
    </article>
    )
}
export default Done