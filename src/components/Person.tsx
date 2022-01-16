import { PersonProps } from './Person.type'

export const Person=(props:PersonProps)=> {
    return(
        <>
        <label htmlFor="">FirstName:</label>{props.bio.first}
        <label htmlFor="">LastName:</label>{props.bio.last}
        </>
    )
}