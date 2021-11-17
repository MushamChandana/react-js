import React,{Component} from "react";
   
export class Onclick extends Component{
    constructor(){
        super()
        this.state={
            name:"chandana",
            surname:"musham"
        }
    }
        render()
        {
            return(
                <div>
                    <h1>hello world</h1>
                    <h1>{this.state.name}</h1>
                    <button onClick={()=> {this.setState({name:'gouthami'})}}> change </button>
                    <h1>{this.state.surname}</h1>
                    <button onClick={()=>{this.setState({surname:'ele'})}}>change</button>

                </div>
            )
        }
    
}
export default Onclick