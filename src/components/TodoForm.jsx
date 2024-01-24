import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todosSlice'

const TodoForm = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()
    const handleAddTodo = (e) => {
        e.preventDefault()
        console.log(text)
        dispatch(addTodo(text))
    }

    return (
        <>
            <div>
                TodoForm
                <form onSubmit={handleAddTodo}>
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} name="" id="" />
                    <button type="submit">Add todo</button>
                </form>
            </div>
        </>
    )
}

export default TodoForm