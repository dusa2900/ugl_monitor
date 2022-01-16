import React from "react"

type InputProps= {
    value:string,
    handleChange: (ev:React.ChangeEvent<HTMLInputElement>)=> void //void doesnot return anything
}

export const InputView=(props:InputProps)=> {

    // return <input type="text" value={props.value} onChange={props.handleChange} />
    const handleInputChange= (ev:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(ev)
    }
    return <input type="text" value={props.value} onChange={handleInputChange} />
}