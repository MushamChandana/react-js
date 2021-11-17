import React from 'react'
import ComponentB from './ComponentB';

 export const usercontext = React.createContext();

const ComponentA = () => {
    return (
        <div>
            <usercontext.Provider  value={"musham chandana"}>
                <ComponentB/>
            </usercontext.Provider>

            
        </div>
    )
}

export default ComponentA
