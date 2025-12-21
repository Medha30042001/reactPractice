import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

const TodoItem = ({todo}) => {

    const {deleteTodo} = useContext(TodoContext);

  return (
    <>
        <li>
            {todo.title}
            <button
                onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    </>
  )
}

export default TodoItem