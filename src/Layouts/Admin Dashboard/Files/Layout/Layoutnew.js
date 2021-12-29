import React from 'react'
import Sidebar from '../Views/Sidebar'

const Layoutnew = (props) => {
    return(
        <div>
            <Sidebar>
            {props.children}
            </Sidebar>
        </div>
    )
}


export default Layoutnew
