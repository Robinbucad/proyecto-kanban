import { useState } from "react"
import { IdContext } from './id.context'


const listFromLocal = JSON.parse(localStorage.getItem('id')) || 1

function IdProvider({children}){

    const idLocal = useState(listFromLocal)

    return(
        <IdContext.Provider value={idLocal}>
            {children}
        </IdContext.Provider>
    )
}

export default IdProvider