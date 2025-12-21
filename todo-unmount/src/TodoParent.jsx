import { useState } from "react";
import TodoList from "./TodoList";

function TodoParent() {
    const [showTodo, setShowTodo] = useState(true);

  return (
    <>
        <button onClick={() => setShowTodo(false)}>Unmount</button>
        <h2>Todo List</h2>
        {showTodo && <TodoList />}
    </>
  )
}

export default TodoParent;