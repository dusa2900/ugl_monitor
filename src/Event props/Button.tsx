import React from "react"

type ButtonProps= {
    handleClick : (event:React.MouseEvent<HTMLButtonElement>,id:number)=> void
}

export const Button=(props:ButtonProps)=> {
    return <button onClick={(ev)=>props.handleClick(ev,1)}>Submit</button>
}