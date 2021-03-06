import React,{useEffect,useState} from 'react'

const IndividualTask = ({match}) => {

    const[individual,setIndividual]=useState(null)

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/${match.params.id}').then(
            response=>response.json()).then(
                value=>setIndividual(value)
            )
         },[])
    return (
        <div style={{border:'1px solid black',padding:10,margin:10}}>
{individual!==null ?
<div>
    id:{individual.id}<br/>
    title:{individual.title}<br/>
    </div>
    :null
}            
            
        </div>
    )
}

export default IndividualTask
