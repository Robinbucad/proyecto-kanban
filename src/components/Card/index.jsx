
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Card(props) {


    return (

        <article className='card'>
            <header className='header__card'>
                <div className='left__header__card'>
                    <p>1</p>
                    <h3>{props.title}</h3>
                </div>

                <button className='btn__header__add' onClick={props.handleAdd}>+</button>

            </header>
            <section className='card-list'>

                {props.tarea === true ? <div className='add-tarea'>
                    <textarea value={props.value} rows='4' className='text-area' onChange={props.handleTextTask}></textarea>
                    <div className='btn-divs'>
                    <button type="button"  id={props.opacity} class="btn btn-success btn-lg  custom"  onClick={props.handleAddTask}  disabled={props.enable}>Add</button>
                        <button className='btn-tarea-cancel' onClick={props.handleCancel}>Cancel</button>
                    </div>
                </div> : ''}

                {props.list.map((e, i) => <div key={i} className='tarea'>
                <div className='title-div-task'>
                    {props.title === 'To do' || 'In progress' ? <div className='taskIconPending'> <div className='innerPending'></div></div> : 
                    <div className='taskIconDone'><div className='innerDone'></div></div>}

                    
                   <h4 className='title-task'>{e.task}</h4>
                    </div>
                    <div className='dated-list'>
                        <p id='id'>#{e.id}</p>
                        <p className='time-creation'>{`created on ${e.day}/${e.month}/${e.year} ${e.hour}:${e.minutes}:${e.seconds}`}</p>
                        <div>
                            <button className='btn__header__add' value={e.id} onClick={props.handleRemove}>-</button>
                        </div>
                    </div>
                </div>)}

               

            </section>
        </article>

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