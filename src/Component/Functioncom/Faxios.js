import axios from 'axios'
import React,{useEffect,useState} from 'react'

function Faxios() {

    const [value,setValue]=useState([])
    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            response=>setValue(response.data)
        )

        },[] )
    return (
        <div>
            <h1>hello</h1>
            {
                value.map(item => <li key={item.id}>{item.id}</li>)
            }
            
        </div>
    )
}

export default Faxios
