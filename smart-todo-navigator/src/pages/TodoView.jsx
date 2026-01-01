import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTodosById } from '../api/todos.api';

const TodoView = () => {

  const {id} = useParams();
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    fetchTodosById(id).then(res => setTodo(res.data));
  },[id])

  if(!todo) return <p>Loading...</p>;

  return (
    <>
      <h4>Id : {todo.id}</h4>
      <h4>Title : {todo.title}</h4>
      <h4>Status : {todo.completed ? 'Completed' : 'Not Completed'}</h4>
    </>
  )
}

export default TodoView