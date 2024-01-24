import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../features/todosSlice'

const TodoItem = (props) => {
    const { id, text, } = props.todo
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <input type="checkbox" onChange={() => {
                    dispatch(toggleTodo(id));
                }}/>
                <span>{text}</span>
            </div>
        </>
    )
}

export default TodoItem