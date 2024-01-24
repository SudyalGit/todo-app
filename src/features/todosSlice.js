import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.unshift({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload)

            if (todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id != action.payload)
        },
        editTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload.id)

            if (todo) {
                todo.text = action.payload.newText
            }
        },
    },
})

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions

export default todosSlice.reducer