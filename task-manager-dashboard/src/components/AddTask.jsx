import { useContext, useEffect, useRef, useState } from "react"
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {

    const [task, setTask] = useState("");
    const {addTask} = useContext(TaskContext);
    const taskRef = useRef(null);

    useEffect(() => {
        if(taskRef.current){
            taskRef.current.focus();
        }
    }, [])

  return (
    <>
        <input type="text"
        placeholder="Add Task"
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        ref={taskRef} />

        <button 
            onClick={() => {
                if(task.trim() === "") return;
                addTask(task);
                setTask("");
                taskRef.current.focus();
            }}
        >Add Task</button>
    </>
    
  )
}

export default AddTask