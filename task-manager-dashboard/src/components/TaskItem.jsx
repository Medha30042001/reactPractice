import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskItem = ({task}) => {

    const {deleteTask, toggleTask} = useContext(TaskContext);

  return (
    <div>
        <h4 style={{textDecoration : task.completed ? 'line-through' : 'none'}}>{task.title}</h4>

        <button 
            onClick={() => deleteTask(task.id)}
            style={{backgroundColor:'red', color:'white'}}
        >Delete</button>

        <button 
        onClick={() => toggleTask(task.id)}
        style={{backgroundColor: task.completed?  'green' : 'blue', color: 'white'}}
        >{task.completed?"Undo":"Done"}</button>
    </div>
  )
}

export default TaskItem;