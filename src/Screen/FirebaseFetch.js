import React, { useState } from 'react'

const FirebaseFetch = () =>{

    const [data,setData]=useState({
        email:'',
        password:''
    })
const {email,password} =data;
   const onChangehandler = (e) => {
        setData({...data,[e.target.name] : e.target.value })
    }
    const onSubmithandler = (e) =>{
        e.preventDefault();
       fetch('https://reactjs-8ab9e-default-rtdb.firebaseio.com/data.json',
       {
           method :'POST',
           body:JSON.stringify(data)
       }
       ).then(
           response => alert('data posted')).catch(err=>console.log(err))}
    return(
        <div>
            <h1>Firebase using Fetch</h1>
     <form onSubmit={onSubmithandler}>
         <input   type='email' name="email" value={email} onChange={onChangehandler} /><br/><br/>
         <input  type="password" name="password" value={password} onChange={onChangehandler} /><br/><br/>
         <input type="submit" />
     </form>

     {email}
        </div>
    )
}
export default FirebaseFetch;