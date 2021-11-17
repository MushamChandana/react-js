import React,{Component} from "react";
export class Conchange extends Component {
    constructor(props){
        super(props)
        this.state={
            user:"  chandu"
        }
        
    }
 handler = e =>{
      this.setState({user:e.target.value})
  } 
        render(){
            return(
                <div>
                    <center>
                    <input
                    type="text"
                    placeholder="enter the name"
                 value={this.state.user}
                 name="user"
                    onChange={this.handler}

                    />

                    {this.state.user}
                    </center>
                    
                </div>
            )
        
    }
}

export default Conchange
