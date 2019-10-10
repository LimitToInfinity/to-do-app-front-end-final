import React, { Component } from 'react';

import ToDoForm from "./ToDoForm.js"
import ToDoContainer from './ToDoContainer.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      toDos: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/to_dos")
      .then(response => response.json())
      .then(toDos => this.setState({ toDos, }))
  }

  addToDo = (toDo) => {
    const { toDos } = this.state
    const newToDo = {...toDo, id: Date.now()}

    // this.setState({
    //   toDos: [...toDos, newToDo]
    // })
    
    fetch("http://localhost:3000/to_dos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToDo)
    }).then(response => response.json())
      .then(newToDo => this.setState({ toDos: [...toDos, newToDo] }))
      
  }

  deleteToDo = (id) => {
    const { toDos } = this.state
    const newToDos = toDos.filter(toDo => toDo.id !== id)

    this.setState({
      toDos: newToDos
    })

    fetch(`http://localhost:3000/to_dos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
  })
}

  render(){
    const { toDos } = this.state

    return (
      <div className="App">
        <h1>ToDo App</h1>
        <ToDoForm addToDo={this.addToDo} />
        <ToDoContainer toDos={toDos} deleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

export default App;
