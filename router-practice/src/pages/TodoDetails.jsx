import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TodoDetails = () => {

    const {id} = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => setTodo(data))
    }, [id])

    if(!todo) return <p>Loading...</p>;

  return (
    <>
    <div>
        <h2>Todo Details</h2>
        <p>ID : {todo.id}</p>
        <p>Title : {todo.title}</p>
        <p>Status : {todo.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
    </>
  )
}

export default TodoDetails