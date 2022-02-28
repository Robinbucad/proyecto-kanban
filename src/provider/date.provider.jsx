import { useState } from 'react'
import { dateContext } from './date.contex'


const dateFromLocal = localStorage.getItem('date')

function DateProvider({children}){

    const date = useState(dateFromLocal)
   

    return(
        <dateContext.Provider value={date}>
            {children}
        </dateContext.Provider>
    )
}

export default DateProvider