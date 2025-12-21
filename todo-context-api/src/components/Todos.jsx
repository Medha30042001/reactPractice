
import { TodoContext } from '../context/TodoContext'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { useState } from 'react'

const Todos = () => {

    const [todos, setTodos] = useState([
        {id:1, title:"Do A"},
        {id:2, title:"Do B"},
        {id:3, title:"Do C"},
        {id:4, title:"Do D"},
        {id:5, title:"Do E"}
    ]);

    const addTodo = (title) => {
        setTodos(prev => [...prev, {id:Date.now(), title}]);
    }

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

  return (
    <TodoContext.Provider value = {{todos, addTodo, deleteTodo}}>
        <AddTodo />
        <TodoList />
    </TodoContext.Provider>
  )
}

export default Todos