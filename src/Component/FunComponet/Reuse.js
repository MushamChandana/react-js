import React from 'react'
import Reuseimg from './Reuseimg';

const Reuse = () => {

    const Image =[
        "https://via.placeholder.com/600/771796",
        "https://via.placeholder.com/600/1fe46f",
        "https://via.placeholder.com/600/d32776",
        "https://via.placeholder.com/600/771796",
        "https://via.placeholder.com/600/24f355",
        "https://via.placeholder.com/600/d32776",
        ]


    return (
        <div>
            {Image.map((item,index) => 

            <Reuseimg key={index} src={item}/>

            )}
        </div>
   
    )
}
export default Reuse;