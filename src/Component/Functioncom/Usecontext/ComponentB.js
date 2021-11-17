import React from 'react'
import {usercontext} from './ComponentA'

const ComponentB = () => {
    return (
        <div>
            <center>
                <h1>UserContext hooke</h1>
            <usercontext.Consumer>
                {value=><div>{value}</div>}
            </usercontext.Consumer>
            <h2>we can use pass the data one component to another component</h2>
            </center>
            
        </div>
    )
}

export default ComponentB
