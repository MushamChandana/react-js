import React from 'react'
import {useHistory} from 'react-router-dom'
//using useHistory hook 
//useHistory hook use in only function component only dont use in class component

function Dashbord() {
    let history =useHistory();
   

    return (
        <div>
            <h1>
            Dispaying Dashboard screen page
            </h1>
            <button onClick={()=>history.push('/about')}>go to a bout</button>
        </div>
    )
}

export default Dashbord
