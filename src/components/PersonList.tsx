import {Bio} from './Person.type'

type PersonListProps = {
 arr1:Bio[]   
}


export const PersonList= (props:PersonListProps)=> {
    return(
        <>
        {
            props.arr1.map( (res)=>
            {
                return(
                    <p key={res.first}>{res.first}-{res.last}</p>
                )
            })
        }
        </>
    )
}