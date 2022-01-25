import React, { useState } from 'react'
import firebaseDB from './Firebase'

const Firehome = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })

    const { firstname, lastname, email } = data

   const changehandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submithandler = e =>{
        e.preventDefault();
        firebaseDB.child('reactjslist').push(
            data,
            err=>{
                if(err){
                    console.log(err)
                }
            }
        )
    } 
    return (
        <div>

            <h1>student List</h1>
            {/* <form submit={submithandler}> */}
            <form onSubmit={submithandler}>

                <input
                    type="text"
                    placeholder='enter your firstname'
                    name="firstname"
                    value={firstname}
                    onChange={changehandler}
                /> <br></br>
                <input
                    type="text"
                    placeholder='enter your lastname'
                    name="lastname"
                    value={lastname}
                    onChange={changehandler}

                /> <br></br>
                <input
                    type="email"
                    placeholder='enter your email'
                    name="email"
                    value={email}
                    onChange={changehandler}

                /> <br></br>
                <input
                type="submit"
           
                  
                /> <br></br>
            </form>

            {firstname}
            <br/>
            {lastname}
            <br/>
            {email}
            <br/>

        </div>
    )
}
export default Firehome