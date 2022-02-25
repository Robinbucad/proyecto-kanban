
import './style.css'

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
                    <textarea rows='4' className='text-area' onChange={props.handleTextTask}></textarea>
                    <div className='btn-divs'>
                        <button className='btn-tarea-add' id={props.opacity} onClick={props.handleAddTask}>Add</button>
                        <button className='btn-tarea-cancel'>Cancel</button>
                    </div>
                </div> : ''}

                {props.list.map((e, i) => <div key={i} className='tarea'>
                    <h4 className='title-task'>{e.task}</h4>
                    <div className='dated-list'>
                        <p id='id'>#{e.id}</p>
                        <p className='time-creation'>{`created on ${props.day}/${props.month}/${props.year} ${props.hour}:${props.minutes}:${props.saveSec}`}</p>
                        <div>
                            <button className='btn__header__add' onClick={props.handleRemove}>-</button>
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