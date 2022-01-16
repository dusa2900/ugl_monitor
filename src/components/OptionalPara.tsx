type OptionalParaProps = {
    name:string,
    days?:number,
    isShowValid:boolean
}

export const OptionalPara=(props:OptionalParaProps)=> {
    const {days=0} =props;
    return(
        <>
        {
            props.isShowValid ? ` Welcome ${props.name}!. how are you?. ${days} days` : `Welcome to Country`
        }</>
    )
}