import React from 'react'
import { useReducer } from 'react'

const initialState = {count: 0}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return {count: initialState.count}
        case '42': 
            return {count: action.payload}
        default: 
            throw new Error()
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>Counter: {state.count}</h1>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        <button onClick={() => dispatch({type: '42', payload: 42})}>42</button>
    </div>
  )
}

export default Counter