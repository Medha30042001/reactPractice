import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Todos = () => {

    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data.slice(0, 10)))
    }, [])

    const handleLogout = () => {
        navigate('/login');
    }

  return (
    <>
        <h1>Todos</h1>

        <button onClick={handleLogout}>Logout</button>

        <div>
            {todos.map(todo => (
                <div>
                    <Link to={`/todos/${todo.id}`}
                    key={todo.id}>{todo.title}</Link>
                </div>
            ))}
        </div>
    </>
  )
}

export default Todos