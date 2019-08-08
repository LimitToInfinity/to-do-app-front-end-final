import React, { Component } from 'react'

class ToDoForm extends Component {
  constructor({ addToDo }) {
    super()
    this.state = {
      title: "",
      text: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addToDo(this.state)
    this.setState({
      title: "",
      text: ""
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { title, text } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter ToDo title"
          name="title"
          value={title}
          onChange={this.handleChange}
          className="form-input"/>
        <input
          placeholder="Enter ToDo text"
          name="text"
          value={text}
          onChange={this.handleChange}
          className="form-input"/>
        <button>Save ToDo!</button>
      </form>
    )
  }
}

export default ToDoForm;