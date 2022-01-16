// type StatusPros = {
//     status:string
// }
type StatusPros = {
    status: 'loading' | 'success' | 'err';
}
export const StatusView= (props:StatusPros)=> {
    let message;
    if(props.status === 'loading')
    {
        message = 'Loading...'
    }else if(props.status === 'success'){
        message = 'Data fetched successfully'
    }else if(props.status === 'err'){
        message = 'Data error'
    }
    return(
        <>
        <h2>{message}</h2>
        </>
    )
}