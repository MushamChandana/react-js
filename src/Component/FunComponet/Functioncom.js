
// declare useState in function
import React, { useState } from 'react'



const Functioncom = () =>{

    const [data,setData] = useState('chandu')
    return(
        <div>
            <h1>hello function</h1>
            <h1>{data} function</h1>
        </div>
    )
}
export default Functioncom