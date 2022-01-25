import React, { useState } from 'react'
 
const Unittest = (props) => {

    const [data,setdata]=useState(10)

    return(
        <div>
            <h1>chandu</h1>
            <h2>Sudha</h2>
            <div id="hello">
                welcome to {props.name}

            </div>
            <div id="value">{data}</div>
            <button onClick={()=>setdata(data+1)}></button>
        </div>
    )

}
export default Unittest