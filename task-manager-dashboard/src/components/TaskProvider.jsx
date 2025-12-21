import { useEffect, useState } from "react"
import { TaskContext } from "../context/TaskContext"
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskStats from "./TaskStats";

const TaskProvider = () => {

    const [tasks, setTasks] = useState([
        {id:1, title:"Do A", completed:true},
        {id:2, title:"Do B", completed:false},
        {id:3, title:"Do C", completed:true},
        {id:4, title:"Do D", completed:false},
        {id:5, title:"Do E", completed:false},
        {id:6, title:"Do F", completed:true},
    ]);

    const addTask = (title) => {
        setTasks(prev => [...prev, {id:Date.now(), title, completed:false}])
    } 

    const toggleTask = (id) => {
        setTasks(prev => prev.map(task => task.id === id ? {...task, completed : !task.completed} : task))
    }

    const deleteTask = (id)  => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    useEffect(() => {
        console.log("Task list updated");
        
        return () => {
            console.log("TaskProvider cleanup");
        }
    }, [tasks])

  return (
    <TaskContext.Provider value={{tasks, addTask, toggleTask, deleteTask}}>
        <AddTask />
        <TaskList />
        <TaskStats />
    </TaskContext.Provider>
  )
}

export default TaskProvider