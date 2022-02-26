



import { useState } from 'react'

import { FilterProgessContext } from './progress.context'



const listFromProgress = JSON.parse(localStorage.getItem('inProgressTask')) || []

function ProgressFilter({children}){

 

    const filterProgres = useState(listFromProgress)

    return(
        <FilterProgessContext.Provider value={filterProgres} >
            {children}
        </FilterProgessContext.Provider>
    )
}

export default ProgressFilter