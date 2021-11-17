import React from "react";

const Fmap = () =>{

    const arry=["chandu","sudha","siri","musham","ele"]

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
        hello this is map
        {
            arry.map(
                (value,index) => <li key={index}>{value}</li>
            )
            }

            {
                details.map(
                    (value)=> <li key={value.id}>{value.title}</li>
                )
            }
    </div>
)
}

export default Fmap;