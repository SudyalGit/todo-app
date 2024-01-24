import React, { useState } from 'react'

const TodoForm = (props) => {
    const {addTodo} = props
    const [text, setText] = useState('')

    const handleTodoForm = (e)=>{
        e.preventDefault();
        console.log(text);
        addTodo(text)
    }

    return (
        <>
            <div>
                TodoForm
                <form onSubmit={handleTodoForm}>
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} name="" id="" />
                    <button type="submit">Add todo</button>
                </form>
            </div>
        </>
    )
}

export default TodoForm