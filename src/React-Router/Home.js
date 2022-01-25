import React from "react";
import {Link} from 'react-router-dom'
 
const Home = () => {
    const user="snehitha"
    return(
        <div>
            <h1>home page here ...!</h1>
            <Link to={`/about/?name=${user}&age=${26}`}>About</Link> {"   "}
             <Link to='/dashboard/chandana'>Dashboard</Link>
        </div>
    )
}

export default Home;