import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { addTodo } from './features/todosSlice'

function App() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  console.log(todos);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text))
  }

  return (
    <>
      <TodoForm addTodo={handleAddTodo} />
      <br />
      <TodoList todos={todos} />
    </>
  )
}

export default App
