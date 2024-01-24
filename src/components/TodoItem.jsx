import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../features/todosSlice'

const TodoItem = (props) => {
    const { todo } = props
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <input type="checkbox" value={'po'} onChange={() => {
                    dispatch(toggleTodo(todo.id));
                }}/>
                <span>{todo.text}</span>
            </div>
        </>
    )
}

export default TodoItem