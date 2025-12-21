import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskStats = () => {

    const {tasks} = useContext(TaskContext);

  return (
    <>
        <h2>Task Stats</h2>
        <h3>Total Tasks</h3><br />
        <ul style={{listStyleType: 'none'}}>
            {tasks.map((task) => (
                <li key={task.id}><h4>{task.title}</h4></li>
            ))}
        </ul>
        <h3>Completed Tasks</h3><br />
        <ul style={{listStyleType: 'none'}}>
            {tasks.filter((task) => task.completed === true)
            .map(task => (
               <li key={task.id}><h4>{task.title}</h4></li> 
            ))}
        </ul><br />
        
        <h3>Pending tasks</h3><br />
        <ul style={{listStyleType: 'none'}}>
            {tasks.filter(task => task.completed === false)
            .map(task => (
                <li key={task.id}><h4>{task.title}</h4></li>
            ))}
        </ul>
    </>
  )
}

export default TaskStats;