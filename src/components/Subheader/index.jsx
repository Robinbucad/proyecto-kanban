import { useContext, useEffect, useState } from 'react'
import { FilterContext} from '../../provider/filter.context'
import { FilterProgessContext } from '../../provider/progress.context'

import './style.css'


function SubHeader(){
/**Esto lo metere en una funcion para que actualize la fecha cuando actualizo una card */
    let fecha = new Date()
    let month = fecha.toLocaleString('default', {month:'short'})
    let day = fecha.getDate()
/*
    const [filterToDoTask, updateFilterToDoTask] = useState([])

    const listFromLocal = JSON.parse(localStorage.getItem('toDoTask'))
    const listFromLocalProgess = JSON.parse(localStorage.getItem('inProgressTask'))

    localStorage.setItem('filtered', JSON.stringify(filterToDoTask) )


    const filterTasks = e => {
        const filter = listFromLocal.filter(p => p.task.toLowerCase().includes(e.target.value))
        const filter2 = listFromLocalProgess.filter(p => p.task.toLowerCase().includes(e.target.value))
        filter.push(filter2)
        updateFilterToDoTask(filter)  
    }
*/
    const [filter, updateFilter] = useContext(FilterContext)
    const [filterProgres,updateProgress] = useContext(FilterProgessContext)
   

    const listFromLocal = JSON.parse(localStorage.getItem('toDoTask'))
    const listFromLocalProgress = JSON.parse(localStorage.getItem('inProgressTask'))
 
    

    const filterTasks = e => {
        const filter = listFromLocal.filter(p => p.task.toLowerCase().includes(e.target.value))
        const filterProgress = listFromLocalProgress.filter( p => p.task.toLowerCase().includes(e.target.value))
        
        updateFilter(filter)
        updateProgress(filterProgress)
        
    }

   
    
  
    return(
        <section className="sub-header">
            <div className='update-info-subheader'>
                <h3>Version 1.0</h3>
                <p>Updated on {day} {month}</p>
            </div>
            <input type='text' className='input-filter' placeholder='Filter cards' onChange={filterTasks} ></input>
        </section>
    )

}

export default SubHeader 