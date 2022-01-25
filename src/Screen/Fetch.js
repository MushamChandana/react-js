import React,{useEffect, useState} from 'react'

const Fetch = () => {

    const [data,setData]=useState([])

    useEffect (
        ()=>{
            fetch(' https://jsonplaceholder.typicode.com/todos').then(
                response=>response.json() ).then(
                    json=>setData(json)
                )},[]

    )

return(
    <div>
        <h1>hello</h1>
        {data.map( (item,index) => (
            <div key={index}>
                <p>{item.title}</p>
            </div>
        )

        )}
    </div>
)

}
export default Fetch