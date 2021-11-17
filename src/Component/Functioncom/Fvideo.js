import React from 'react'
import sirivideo from './sirivideo.mp4'

const Fvideo = () => {
    return (
        <div>
            <center>
                <h1>video player</h1>
                <video width="300" height="250" controls>
                    <source src={sirivideo} type="video/mp4"/>
                </video>
            </center>
            
        </div>
    )
}

export default Fvideo
