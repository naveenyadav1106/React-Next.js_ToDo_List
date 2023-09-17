"use client"
import React, { useState } from 'react'

const Input = (props) => {

    const [input, setinput] = useState("")

    function handleinput(event) {
        setinput(event.target.value)
    }

    return (
        <div className="input-container">
            <input type="text" value={input} onChange={handleinput} />
            <button onClick={() => {
                props.addtodo(input);
                setinput("")
            }}>+</button>
        </div>
    )
}

export default Input;