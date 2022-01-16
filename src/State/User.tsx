import { useState } from "react"

type AuthUser={
    name:string,
    email:string
}

export const User=()=> {
    const [user,setUser]=useState<AuthUser | null>(null)
    const handleLogin=()=>{
        setUser({
            name:"Dusa Goutham",
            email:"goutham.dusa@techwave.net"
        })
    }
    const handleLogout=()=>{
        setUser(null)
    }
    return(
        <>
        <button onClick={handleLogin}>Log-in</button>
        <button onClick={handleLogout}>Log-out</button>
        <div>User Name is -{user?.name}</div>
        <div>User Email is -{user?.email}</div>
        </>
    )
}