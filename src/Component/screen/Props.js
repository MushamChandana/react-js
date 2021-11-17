import React,{Component} from "react";

export class Props extends Component {
state ={
    age:30,

    
}
    render() {
        return(
            <div>
            <h1>hello</h1>
            <h1>{this.state.age}</h1>
            <h1>{this.props.surname}</h1>
            
      
            
            </div>
        )
    }
}
export default Props;