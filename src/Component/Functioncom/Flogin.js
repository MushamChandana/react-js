import React, { useState } from 'react';

const Flogin = () =>{

    const [data,setData]=useState({
        username:'',
        password:''

    })

    const {username,password}=data


    const changehandler = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submithandler =e =>{
        e.preventDefault()
        console.log(data)
    }


    return(
        <div>
            <center>
            <h1>Login form</h1>
            <form  onSubmit={submithandler}>
            <input
            type="text"
            placeholder="enter the name"
            value={username}
            name="username"
            onChange={changehandler}
            /><br/>
             <input
            type="password"
            placeholder="enter the password"
            value={password}
            name="password"
            onChange={changehandler}
            /><br/>
             <input
            type="submit"
            name="submit"
            />
            </form>
            </center>
        </div>
    )
}
export default Flogin