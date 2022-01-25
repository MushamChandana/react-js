import React from 'react'
import Hoc from './Hoc'

const Hocapp = (props) =>{
    return(
        <div>
            <h1>welcome to sudha{props.name}</h1>
        </div>
    )
}
export default Hoc(Hocapp);