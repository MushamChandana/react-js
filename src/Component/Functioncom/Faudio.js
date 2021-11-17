import React from 'react'
import audioplay from './siri.ogg'

function Faudio() {
    return (
        <div>
            <center>
            <h1>audio player</h1>
            <audio controls>
                <source src={audioplay} type="audio/ogg"  />
            </audio>
            </center>


        </div>
    )
}

export default Faudio
