import React, { useState } from 'react'

const Fonchange = () => {
    const [user, setUser] = useState("hello ")
    const handler  = e => {
        setUser(e.target.value)
    }
    return (
        <div>
            <center>
                <h1>hello this chandu</h1>
              <input
              type="text"
              placeholder="enter the name"
              value={user}
              name="user"
              onChange={handler}/><br/>
              {user}
            </center>

        </div>
    )
}

export default Fonchange