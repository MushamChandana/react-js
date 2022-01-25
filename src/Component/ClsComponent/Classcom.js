
//declare state in class
import React from 'react'


class Classcom extends React.Component {
    constructor(){

        super()

        this.state={
            name:'chandu',
            age:25
        }
    }


    render(){
        return(
            <div>
                <h1>hello</h1>
                <h1>Name:{this.state.name} age : {this.state.age} email:{this.props.email}</h1>
            </div>
        )
    }
}
export default Classcom