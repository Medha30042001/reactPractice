import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { getTodosById } from '../api/todoService';
import { useState } from 'react';

const TodoDetails = () => {

    const {id} = useParams();
    const [todo, setTodo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getTodosById(id).then(res => setTodo(res.data))
    }, [id]);

    const handleBack = () => {
        navigate('/');
    }

    if(!todo) return <p>Loading...</p>;

  return (
    <>
        <div>
            <h4>{todo.id}</h4>
            <h4>{todo.title}</h4>
            <h4>{todo.completed?"Completed":"Not Completed"}</h4>
        </div>
        
        <button onClick={handleBack}>Back to Home</button>
    </>
  )
}

export default TodoDetails