import React, { useState } from 'react'
import { fetchAllTodos, fetchTodosById } from '../api/todos.api'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState('');
  const navigate = useNavigate();

  const handleLoads = () => {
    fetchAllTodos().then(res => setTodos(res.data));
  }

  const handleSearch = () => {
    if(!todoId) return;
    else if(todoId <= 0) navigate('/error');
    else{
      navigate(`/todos/${todoId}`);
      setTodoId('');
    }
  }

  return (
    <>
      <button onClick={handleLoads}>Load Todos</button>

      <input type="text"
      placeholder='Enter an ID'
      value={todoId}
      onChange={(e) => setTodoId(e.target.value)} />

      <button onClick={handleSearch}>Search Todo</button>

      {todos.map(todo => (
        <h4 key={todo.id}>{todo.title}</h4>
      ))}
    </>
  )
}

export default Home