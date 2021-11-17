import React from "react";

const Ffilter = () =>{
    const arr =["jannu","jarry","jumb","kaveri","kanimal","lamni","lahari"]
    const number =[10,20,30,40,50,60,70]
    const filterd=arr.filter(arr=>arr.includes('j'))
    const numberd=number.filter(number=>number>20)
    return(
        <div>
            hello hai
            {
                filterd.map(
                    item=><li>{item}</li>
                )
            }
            <br/>
            {
                numberd.map(
                    item=><li>{item }</li>

                )
            }
        </div>
    )
}
export default Ffilter