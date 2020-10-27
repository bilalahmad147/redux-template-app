import React from 'react'
import { useDispatch } from 'react-redux'
import { decreValue, increValue } from './action'

function CounterInput() {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=> dispatch(increValue())}>+</button>
            <button onClick={()=> dispatch(decreValue())}>-</button>
        </div>
    )
}

export default CounterInput
