import { useState } from "react"

type AuthUser={
    name:string,
    email:string
}

export const UserLogin=()=> {
    const [user,setUser]=useState<AuthUser>({} as AuthUser)
    const handleLogin=()=>{
        setUser({
            name:"Dusa Goutham",
            email:"goutham.dusa@techwave.net"
        })
    }
   
    return(
        <>
        <button onClick={handleLogin}>Log-in</button>
        <div>User Name is -{user.name}</div>
        <div>User Email is -{user.email}</div>
        </>
    )
}