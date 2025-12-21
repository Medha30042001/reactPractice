import { useState } from "react";
import { useEffect } from "react";
import TodoCard from "./TodoCard";

function TodoList() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => setTodos(data.splice(0, 15)));

        return() => { 
            alert("Unmount Successful!")
        }
    }, [])

  return (
    <>
        {todos.map(todo => (
            <TodoCard 
               key={todo.id}
               userId={todo.userId}
               title={todo.title}
               completed={todo.completed}
            />
        ))}
    </>
  )
}

export default TodoList;