import './style.css'

function CardToDo(){
    return(
        <article className='card'>
            <header className='header__card'>
                <div className='left__header__card'>
                    <p>1</p>
                    <h3>To do</h3>
                </div>

                <p>+</p>
            </header>
            <section className='card-list'>
                <div className='tarea'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>Fecha creacion</p>

                </div>

            </section>
        </article>
    )
}

export default CardToDo