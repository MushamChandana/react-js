import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Task = () => {

    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            response=>response.json()
        ).then(
            value=>setData(value)
        )

        },[])
    return (
        <div>
            <h1>this is a task</h1>
            {data.length>=1 ? data.map(data=>
                    {
                    return(
                            <div style={{border:'1px solid black',padding:10,margin:10}}>
                                <Link to={'/task/${data.id}'}>{data.title}</Link>

                            </div>
                    )
                        
                    }):null }
                    {/* {data.map(item=><li key={item.id}>{item.title}</li>)} */}

            
        </div>
    )
}

export default Task
