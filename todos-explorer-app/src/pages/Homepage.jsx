import React from 'react'
import { useState } from 'react'
import { getTodos, getTodosById } from '../api/todoService';
import {useNavigate} from 'react-router-dom'

const Homepage = () => {

    const [todos, setTodos] = useState([]);
    const [todoId, setTodoId] = useState('');
    const navigate = useNavigate();

    const handleTodos = () => {
        getTodos().then(res => setTodos(res.data));
    }

    const handleSearch = () => {
        if(!todoId) return;
        navigate(`/todos/${todoId}`);
        setTodoId('');
    }   

  return (
    <>
        <button onClick={handleTodos}>Load All Todos</button>

        <input type="number"
        placeholder='Enter ID'
        value={todoId}
        onChange={(e) => setTodoId(e.target.value)} />

        <button onClick={handleSearch}>Search Todo</button>

        {todos.map(todo => (
            <div key={todo.id}>{todo.id} - {todo.title}</div>
        ))}
    </>
  )
}

export default Homepage