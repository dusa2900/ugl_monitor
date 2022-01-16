type GreetProps = {
    name:string,
    days:number,
    isShowValid:boolean
}

export const Greet=(props:GreetProps)=> {
    return(
        <>
        {
            props.isShowValid ? ` Welcome ${props.name}!. how are you?. ${props.days}days` : `Welcome to Country`
        }</>
    )
}