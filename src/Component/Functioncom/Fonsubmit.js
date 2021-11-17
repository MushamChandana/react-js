import React,{useState}  from "react";

const Fonsubmit = ()=> {
    const[data,setData]=useState({
        name:'',
        password:''
    })
    const {name,password}=data;
    const handler = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submit= e =>{
        e.preventDefault();
        console.log(data)
    }
    return(
        <div>
            <center>
                <form onSubmit={submit}>
          <input
          type="text"
          placeholder="enter the name"
          value={name}
          name="name"
          onChange={handler}
           /><br/>
            <input
          type="text"
          placeholder="enter the password"
          value={password}
          name="password"
          onChange={handler}

           /><br/>
           <input
           type="submit"
           name="submit"/>
           </form>

           <br/>
           {name}
           <br/>
           {password}
            </center>
        </div>
    )
}
export default Fonsubmit;