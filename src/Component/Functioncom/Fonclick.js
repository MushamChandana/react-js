import React,{useState} from "react";


const Fonclick= () => {
    const [name,setName]=useState("chandana")
    
  
    return(
        <div>
            <h1>hello world</h1>
            <h1>{name}</h1>
            <button onClick={()=>{setName('gouthami')}}>click me</button>
        </div>
    )
}
export default Fonclick