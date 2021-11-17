import React , {Component} from "react";
import Props from "./Props";
   
export class Display extends Component{
  constructor(){
      super()
      this.state = {
          name:'chandana',
          surname:'musham'
      }
    }
   
  
    unchange = () =>{
        this.setState({surname:'ele'})
    
    }
    render(){
        return(
            <div>
                <h1>hello to display</h1>
                <h1>{this.state.name}</h1>
                <button onClick={()=>{this.setState({name:'sudhakar gouthami'})}}> clicke me</button><br/>

                <h1>{this.state.surname}</h1>
                <button onClick={this.unchange}> clicke me</button>


                <Props />

            </div>

        )
    }

}
export default Display;


