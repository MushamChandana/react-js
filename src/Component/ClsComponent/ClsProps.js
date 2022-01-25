import React,{Component} from 'react';
import Classcom from './Classcom';
 
class ClsProps extends Component {
    constructor(){
        super()
        this.state={
            name:"chandu",
            age:25,
        email:'chandu@gmail.com'        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.email}</h1>
                <Classcom  email={this.state.email}/>
            </div>
        )
    }

}
export default ClsProps;