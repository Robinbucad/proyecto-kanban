

import { useState } from 'react'
import { FilterContext } from './filter.context'



const listFromLocal = JSON.parse(localStorage.getItem('toDoTask')) || []


function ProviderFilter({children}){

    const filter = useState(listFromLocal)

   

    return(
        <FilterContext.Provider value={filter} >
            {children}
        </FilterContext.Provider>
    )
}

export default ProviderFilter