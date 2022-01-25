import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

  

const Login = () =>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const [project,setProject]=useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handlername = e=>{
        setName(e.target.value)
    }
    const handleremail = e => {
        setEmail(e.target.value)
    }
    const handlernumber =e =>{
        setNumber(e.target.value)
    }
    const handlerproject =e =>{
        setProject(e.target.value)
    }
    return(
        <div>
            <h1> To DO List</h1>
            <input 
            type="text"
            placeholder="enter your user name"
            value={name}
            name="name"
            onChange={handlername}
            style={{width:'70%',height:50,marginTop:20}}
            />
            <div style={{flexDirection:'row'}}>
            <input 
            type="email"
            placeholder="enter your email"
            value={email}
            name="email"
            onChange={handleremail}
            style={{width:'30%',height:50,margin:20}}
            />
               <input 
            type="text"
            placeholder="enter your mbl number"
            value={number}
            name="number"
            onChange={handlernumber}
            style={{width:'30%',height:50,margin:20}}
            />
                
            </div>
            <input 
            type="text"
            placeholder="enter your project name"
            value={project}
            name="project"
            onChange={handlerproject}
            style={{width:'70%',height:50,marginTop:20}}
            />
            <div style={{flexDirection:'row'}}>
                <div> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
            //   calendarContainer={{margin:10}}
               /></div>
             <div>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}
            //   calendarContainer={{margin:10}}
               />
               </div>
               </div>
              
            


         <br/>
         {name}
         <br/>
         {email}
         <br/>
         {number}
        </div>
    )
}
export default Login