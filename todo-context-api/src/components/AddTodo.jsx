import { useContext } from 'react';
import { useState } from 'react'
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {

    const [title, setTitle] = useState("");
    const {addTodo} = useContext(TodoContext);

  return (
    <>
        <input type="text" 
        placeholder= "Enter Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>

        <button 
        onClick={() => {
            if(title.trim() === "") return;
            addTodo(title);
            setTitle("");
        }}>Add</button>
    </>
  )
}

export default AddTodo;