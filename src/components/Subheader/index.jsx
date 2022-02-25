import { useEffect, useState } from 'react'
import './style.css'

function SubHeader(){
/**Esto lo metere en una funcion para que actualize la fecha cuando actualizo una card */
    let fecha = new Date()
    let month = fecha.toLocaleString('default', {month:'short'})
    let day = fecha.getDate()

 

    return(
        <section className="sub-header">
            <div className='update-info-subheader'>
                <h3>Version 1.0</h3>
                <p>Updated on {day} {month}</p>
            </div>
            <input type='text' className='input-filter' placeholder='Filter cards'></input>
        </section>
    )

}

export default SubHeader 