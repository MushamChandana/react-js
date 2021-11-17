import React,{useState} from 'react'
import { Redirect } from 'react-router'
//using Redirect 

function Home() {

    const[auth,setAuth]=useState(false)

    if(auth){
        return(
            <Redirect to='/dashboard'/>
        )
    }
    return (
        <div>
            <center>
            <h1>
                
          welcome to home page

            </h1>

            <button onClick={()=>setAuth(true)}>Login</button>
            </center>
        </div>
    )
}

export default Home
