import { useSelector } from 'react-redux'
import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    console.log(todos)

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