import { FiTrash2 } from 'react-icons'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Droppable } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'


function Card(props) {



    return (

        <Droppable droppableId={props.dragTable}>

            {
                (provided, i) => (
                    <article className='card' ref={provided.innerRef} {...provided.droppableProps} key={i.toString()} >
                        <header className='header__card'>
                            <div className='left__header__card'>
                                <div className='div-counter'>
                                    <p className='counter-tasks'>{props.arrCounter}</p>
                                </div>
                                <h3 className='title-card-header'>{props.title}</h3>
                            </div>
                            


                            <div>

                                <button className='btn__header__add' onClick={props.handleAdd}>+</button>
                            </div>
                        </header>
                        <section className='card-list'>

                            {props.tarea === true ? <div className='add-tarea'>
                                <textarea value={props.value} rows='4' className='text-area' onChange={props.handleTextTask}></textarea>
                                <div className='btn-divs'>
                                    <button type="button" id={props.opacity} class="btn btn-success btn-lg  custom" onClick={props.handleAddTask} disabled={props.enable}>Add</button>
                                    <button className='btn-tarea-cancel' onClick={props.handleCancel}>Cancel</button>
                                </div>
                            </div> : ''}

                            {props.list.map((e, i) => (

                                <Draggable draggableId={`${e.id} + id`} key={e.id} index={i}>

                                    {
                                        (provided) => (
                                            <div key={i} className='tarea' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <div className='header-task-info'>
                                                    <div className='title-div-task'>
                                                        {props.title === 'To do' || 'In progress' ? <div className='taskIconPending'> <div className='innerPending'></div></div> :
                                                            <div className='taskIconDone'><div className='innerDone'></div></div>}

                                                        <h4 className='title-task'>{e.task}</h4>
                                                    </div>
                                                    <div>
                                                        <button className='btn__header__remove' value={e.id} onClick={() => props.handleRemove(e.id)}> <img className='trash__btn' src="https://img.icons8.com/metro/26/000000/trash.png" /> </button>
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
                            ))}



                        </section>
                        {provided.placeholder}
                    </article>
                )
            }


        </Droppable>

    )
}

export default Card

/**
 *  {props.list.map((e, i) => <div key={i} className='tarea'>
                    <h4 className='title-task'>{e}</h4>
                    <div className='dated-list'>
                        <p>{props.id}</p>
                        <p className='time-creation'>{`created on ${props.day}/${props.month}/${props.year} ${props.hour}:${props.minutes}:${props.saveSec}`}</p>
                        <div>
                            <button className='btn__header__add' onClick={props.handleRemove}>-</button>
                        </div>
                    </div>
                </div>)}
 */

/**
 *  <button className='btn-tarea-add' id={props.opacity} onClick={props.handleAddTask}>Add</button>
 */