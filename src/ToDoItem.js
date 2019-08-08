import React from 'react'

const ToDoItem = ({ title, text, deleteToDo, id }) => {
  return(
    <div className="todo-item-div">
      <h2>{title}</h2>
      <p>{text}</p>
      <button onClick={() => deleteToDo(id)}>Delete ToDo</button>
    </div>
  )
}

export default ToDoItem;