
function TodoCard({userId, title, completed}) {
  return (
    <div>
        <p>User Id : {userId}</p>
        <h2>Title : {title}</h2>
        <p>Status : {completed ? "Completed" : "Not Completed"}</p>
    </div>
  )
}

export default TodoCard;