import React, { useReducer } from 'react'
import DisplayCounter from './DisplayCounter';


const initialValue = {count : 0};

function reducer(state, action) {
    
    switch (action.type) {
        case 'increment':
            return {count : state.count + 1}
        case 'decrement':
            return {count : state.count - 1}
        case 'reset':
            return {count : 0}
        default:
            return state;
    }


}




function CounterReducer() {
   

    const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
       <DisplayCounter count={state.count} dispatch={dispatch}/>
    
    </>
  )
}

export default CounterReducer