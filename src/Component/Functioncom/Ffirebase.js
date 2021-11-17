import React, { useState } from "react";
import axios from "axios";

const Ffirebase = () => {
    const [data, setData] = useState({
        name: '',
        password: '',
        email: '',
        confirmpassword: ''
    })
    const { name, email, password, confirmpassword } = data
    const changehandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const submithandler = e =>{
        e.preventDefault()
        if(password!==confirmpassword)
        {
        alert("passwords are not matching")
        }
        else if(name.length<=5){
            alert("name is musy to be 5 char")
        }
        else{
            axios.post('https://react-js-practie-default-rtdb.firebaseio.com/studentdetails.json',data).then
            (
                ()=>alert("submit successfully")
            )
          
        }

          
        
    }
    return (
        <div>
            <center>
                <h1>Singup Form</h1><br/>
                <form onSubmit={submithandler}>
                    <input type="text" placeholder="enter the name"
                        value={name} name="name" onChange={changehandler} /><br/>
                    <input type="email" placeholder="enter the email"
                        value={email} name="email" onChange={changehandler} /><br/>
                    <input type="password" placeholder="enter the password"
                        value={password} name="password" onChange={changehandler} /><br/>
                    <input type="password" placeholder="enter the confirmpass"
                        value={confirmpassword} name="confirmpassword" onChange={changehandler} /><br/>
{password!==confirmpassword ? <p style={{color:'red'}}>passwords not matching</p>:null}
                    <input type="submit" name="submit"/>
                </form>
            </center>

        </div>
    )
}
export default Ffirebase