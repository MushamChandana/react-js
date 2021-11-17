import React,{useEffect,useState} from 'react'

const Ffetch = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos').then(
                response=>response.json()
            ).then (json=>setData(json))

        },[])
    return (
        <div>
<h1>hello fetch</h1>
{data.map(item=><li key={item.id}>{item.title}</li>)}
            
        </div>
    )
}

export default Ffetch
