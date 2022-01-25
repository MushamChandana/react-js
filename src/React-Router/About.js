import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
  const About = () =>{
      let {search}=useLocation();
      let params=new URLSearchParams(search)

    const user="siri"
     return (
         <div>
             <h1> All About page this ..! </h1>
             <h2>Name:{params.get('name')}</h2>
             <h2>Age:{params.get('age')}</h2>
             <Link to={`/dashboard/${user}`}>Dashboard</Link>{"   "}
             <Link to='/'>back to Home</Link>
         </div>
     )
 }

 export default About;