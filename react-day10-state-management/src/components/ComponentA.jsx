import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/action";

function ComponentA() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>ComponentA - {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())} disabled={count === 0}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default ComponentA