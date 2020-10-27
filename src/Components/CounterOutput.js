import React from 'react'
import { useSelector } from 'react-redux'

function CounterOutput() {
    
    const Counter = useSelector(state => state.counter)

    return (
        <div>
            <h1>Counter: {Counter}</h1>
        </div>
    )
}

export default CounterOutput
