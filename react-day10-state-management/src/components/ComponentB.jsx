import React from 'react'
import {useSelector} from "react-redux";

function ComponentB() {
    const count = useSelector(state => state.count);
    return (
        <div>
            <h1>ComponentB - {count}</h1>
        </div>
    )
}

export default ComponentB