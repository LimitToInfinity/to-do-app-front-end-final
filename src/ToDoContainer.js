import React from 'react'

import ToDoItem from './ToDoItem'

const ToDoContainer = ({ toDos, deleteToDo }) => {
  const displayedToDos = toDos.map(toDo => {
    return <ToDoItem
            key={toDo.id}
            title={toDo.title}
            text={toDo.text}
            deleteToDo={deleteToDo}
            id={toDo.id}
          />
  })

  return(
    <div className="todo-container">
      {displayedToDos}
    </div>
  )
}

export default ToDoContainer;
