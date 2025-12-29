import React, { useReducer } from 'react'

const initialState = {
    count : 0,
    step : 1
}

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return{
                ...state, 
                count:state.count + state.step
            };
        case "DECREMENT":
            return{
                ...state,
                count:state.count - state.step
            };
        case "SET_STEP":
            return{
                ...state,
                step:action.value
            };
        case "RESET" : 
            return initialState;

        default:
            return state;

    }
}

const ReducerCounter = () => {

    
    const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
        <h2>Count: {state.count}</h2>
        <h3>Step: {state.step}</h3>

        <button onClick={() => dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>-</button>

        <input type="number"
        value={state.step}
        onChange={(e) => 
            dispatch({
                type: "SET_STEP",
                value: Number(e.target.value)
            })
        } />
        <button onClick={() => dispatch({type:"RESET"})}>Reset</button>
    </>
  )
}

export default ReducerCounter