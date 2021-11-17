import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ol style={{textAlign:'right'}}>
                <Link to="/"><li style={{display:'inline',margin:'20px'}}>Home</li></Link>
                <Link to="/dashboard"><li style={{display:'inline',margin:'20px'}}>Dasboard</li></Link>
                <Link to="/about"><li style={{display:'inline',margin:'20px'}}>About</li></Link>
                <Link to="/task"><li style={{display:'inline',margin:'20px'}}>Task</li></Link>
                <Link to="/task/:id"><li style={{display:'inline',margin:'20px'}}>IndividualTask</li></Link>
            </ol>
            
        </div>
    )
}

export default Navbar
