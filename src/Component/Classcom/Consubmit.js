import React, { Component } from 'react';
//error coming

class Consubmit extends Component {
    constructor() {
        super()
        this.state = {
                name:' ',
                password:' '
            
        
          
        }
    }
    

   
    handler = e => {
        this.setState({ name: e.target.value })
    }
    passhandler = e => {
        this.setState({ password: e.target.value })
    }
    submit =e=>{
        e.preventDefault();
        console.log(this.state.name)
    }
    render() {
        return (
            <div>
                <center>
                    <form onSubmit={this.submit}>
                        <input
                            type="text"
                            placeholder="enter the name"
                            value={this.state.name}
                            name="name"
                            onChange={this.handler} /><br />
                        <input
                            type="text"
                            placeholder="enter the name"
                            value={this.state.password}
                            name="password"
                         onChange={this.handler}
                        /><br />

                        <input
                         type="submit"
                         name="submit"
                         />
                        {this.state.name}
                        <br/>
                        {this.state.password}


                    </form>
                </center>

            </div>
        )
    }
}
export default Consubmit