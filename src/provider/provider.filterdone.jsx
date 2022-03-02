import { useState } from "react"
import { filterDone } from "./filterdone.context"

const localDoneValue= JSON.parse(localStorage.getItem('done')) || []


function ProviderDone({children}){

    const filterDoneValue= useState(localDoneValue)
    
    return(
        <filterDone.Provider value={filterDoneValue}>
            {children}
        </filterDone.Provider>
    )

}

export default ProviderDone;