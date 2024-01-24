import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const { todos } = props

    return (
        <>
            <div>
                TodoList
                {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            </div>
        </>
    )
}

export default TodoList