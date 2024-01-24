import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '../features/todosSlice'

const TodoItem = (props) => {
    const { id, text, } = props.todo
    const [edit, setEdit] = useState(false)
    const [newText, setNewText] = useState(text);
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <input type="checkbox" onChange={() => {
                    dispatch(toggleTodo(id));
                }} />
                {edit ?
                    <>
                        <input type="text" value={newText} onChange={e => setNewText(e.target.value)} name="" id="" /><span><button onClick={() => {
                            dispatch(editTodo({newText, id}))
                            setEdit(false)
                        }}>save</button></span>
                    </>
                    :
                    <>
                        <span>{text}</span>
                        <span><button onClick={() => {
                            dispatch(deleteTodo(id));
                        }}>delete</button></span>
                        <span><button onClick={() => {
                            setEdit(true)
                        }}>edit</button></span>
                    </>}


            </div>
        </>
    )
}

export default TodoItem