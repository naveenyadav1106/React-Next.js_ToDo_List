"use client"
import React, { useState } from 'react'
import Input from './Components/Input'
import Todo from './Components/Todo'

const page = () => {

    const [todos, settodos] = useState([])

    function addtodo(input) {
        settodos(prevalues => [...prevalues, input])
    }

    function handleDelete(index) {
        settodos(prevalues => prevalues.filter((_, Todoindex) => {
            return index != Todoindex
        }))
    }

    return (
        <>
            <h1>To Do List</h1>
            <Input addtodo={addtodo} />
            <div className="container">
                {todos.map((todo, index) => (
                    <Todo key={index} todo={todo} index={index} handleDelete={handleDelete} />
                ))}
            </div>
        </>
    )
}

export default page