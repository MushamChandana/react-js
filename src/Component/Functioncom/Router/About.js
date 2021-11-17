import React from 'react'

function About({match}) {
    return (
        <div>
            <center>
            <h1>
                Dispaying About screen page:{match.params.name}
            </h1>
            </center>
            
        </div>
    )
}

export default About
