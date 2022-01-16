type ContainerProps={
    styles : React.CSSProperties
}
export const Container=(props:ContainerProps)=>{
    return <p style={props.styles}>styling through props</p>
}