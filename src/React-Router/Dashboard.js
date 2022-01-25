import React from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
 const Dashboard = () => {
     let params=useParams();
     return(
         <div>
             <h1>this is Dashboard page</h1>
             <h2>Name:{params.name}</h2>
             <Link to='/about'>About</Link> {"   "}
             <Link to='/'>back to Home</Link>

          
         </div>
     )
 }
 export default Dashboard