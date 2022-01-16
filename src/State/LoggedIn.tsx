import { useState } from "react"

export const LoggedIn=()=>{
const [ userState,setUserState ]=useState(false);
    const handleLogin=()=>{
        setUserState(true)
    }
    const handleLogout=()=>{
        setUserState(false)
    }
    return(
        <div>
            
            <button onClick={handleLogin}>Logged-In</button>
            <button onClick={handleLogout}>Logged-Out</button>
            <div>User in-{userState? 'logged-In':'logged-out'}</div>
        </div>
    )
}