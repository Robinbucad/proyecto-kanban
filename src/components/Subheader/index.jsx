import { useContext, useEffect, useState } from 'react'
import { dateContext } from '../../provider/date.contex'
import { FilterContext} from '../../provider/filter.context'
import { FilterProgessContext } from '../../provider/progress.context'
import { filterDone } from '../../provider/filterdone.context'


import './style.css'



function SubHeader(){
/**Esto lo metere en una funcion para que actualize la fecha cuando actualizo una card */
    

const [date] = useContext(dateContext)


    const [filter, updateFilter] = useContext(FilterContext)
    const [filterProgres,updateProgress] = useContext(FilterProgessContext)
    const [filterDoneValue, updateDoneValue]= useContext(filterDone)
   

    const listFromLocal = JSON.parse(localStorage.getItem('toDoTask'))
    const listFromLocalProgress = JSON.parse(localStorage.getItem('inProgressTask'))
    const listFromLocalDone = JSON.parse(localStorage.getItem('done'))
    
    

    const filterTasks = e => {
        const filter = listFromLocal.filter(p => p.task.toLowerCase().includes(e.target.value))
        const filterProgress = listFromLocalProgress.filter( p => p.task.toLowerCase().includes(e.target.value))
        const filterDone = listFromLocalDone.filter(p=> p.task.toLowerCase().includes(e.target.value))
        updateFilter(filter)
        updateProgress(filterProgress)
        updateDoneValue(filterDone)
    }
    console.log(filterDoneValue)
   
    
  
    return(
        <section className="sub-header">
            <div className='update-info-subheader'>
                <h3 className='version-subheader'>Version 1.0</h3>
                <p className='date-subheader'>Updated on {date} </p>
                
            </div>
            <input type='text' className='input-filter' placeholder='Search task...' onChange={filterTasks} ></input>
        </section>
    )

}

export default SubHeader 