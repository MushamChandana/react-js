import React,{useEffect,useState} from 'react'

function Fuseeffect() {
    const [count,setCount]=useState(0)
    useEffect(() =>
    console.log(count)
    // {

    //    return(
    //        <div>
    //            <h1>hello welcome </h1>
    //        </div>
    //    )
    // }
       
    , [])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)} >press</button>
            
        </div>
    )
}

export default Fuseeffect
