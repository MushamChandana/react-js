import React from "react";

const Reuseimg = (props) => {
    return(
        <div style={{display:'inline'}}>

            <img  src={props.src} height="150px" width="150px"/>
       
        </div>
    )
}

export default Reuseimg;