"use client"
import React from 'react'

const Todo = ({ todo, index, handleDelete }) => {
    return (
        <>
            <div className="todo">
                <p>{todo}</p>
                <div className="actions">
                    <input type="checkbox" />
                    <button onClick={() => { handleDelete(index) }}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Todo