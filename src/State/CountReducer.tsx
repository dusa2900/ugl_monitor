import { useReducer } from "react";

type StateProps={
    count:number
}

type ActionProps={
    type:string,
    payload:number
}
const initialState={count:0}

function reducer(state:StateProps,action:ActionProps) {
    switch(action.type){
        case 'increment' : return {count: state.count + action.payload}
        case 'decrement' : return {count: state.count - action.payload}
        default : return state
    }
}

export const CountReducer=()=> {
const [state, dispatch] =useReducer(reducer,initialState);
    return(<>
        <h2>Counter:{state.count}</h2>
        <button onClick={()=> dispatch({type:'increment',payload:10})}>INCREMENT BY 10</button>
        <button onClick={()=> dispatch({type:'decrement',payload:10})}>DECREMENT BY 10</button>
    </>)
}


// import { useReducer } from "react";

// type StateProps={
//     count:number
// }

//  type UpdateProps={
 //   type:'increment' | 'decrement'
 //   payload: number
// }
// type ResetProps = {
//   type: 'reset'
//}
// type ActionProps= UpdateProps | ResetProps
// const initialState={count:0}

// function reducer(state:StateProps,action:ActionProps) {
//     switch(action.type){
//         case 'increment' : return {count: state.count + action.payload}
//         case 'decrement' : return {count: state.count - action.payload}
//         case 'reset' : return initialState
//         default : return state
//     }
// }

// export const CountReducer=()=> {
// const [state, dispatch] =useReducer(reducer,initialState);
//     return(<>
//         <h2>Counter:{state.count}</h2>
//         <button onClick={()=> dispatch({type:'increment',payload:10})}>INCREMENT BY 10</button>
//         <button onClick={()=> dispatch({type:'decrement',payload:10})}>DECREMENT BY 10</button>
//         <button onClick={()=> dispatch({type:'reset'})}>RESET</button>
//     </>)
// }