import React from 'react'

const TodoItem = (props) => {
    const { todo } = props

    return (
        <>
            <div>
                <input type="checkbox" checked={todo.completed} />
                <span>{todo.text}</span>
            </div>
        </>
    )
}

export default TodoItem