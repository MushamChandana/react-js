import React,{Component} from "react";

class Cmap extends Component{
    render(){
        const arry =["Html","css","javascript","react js","react native"]

        const details =[
            {
                id:1,
                title:"chandana"
            },
            {
                id:2,
                title:"sudhakar"
            },
            {
                id:1,
                title:"snehitha"
            },
            {
                id:1,
                title:"musham"
            },
            {
                id:1,
                title:"ele"
            },
        ]
        return(
            <div>
             {
                 arry.map(
                     (value,index) => <li key={index}>{value}</li>
                 )
             }
             hello sudhakar welcome to india

             {
                 details.map(
                     (value,index) => {
    
                     <li key={index}>{value.id}</li>
                    
                    }
                 )
             }
            </div>
        )
    }
}
export default Cmap