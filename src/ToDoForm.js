import React, { Component } from 'react'

class ToDoForm extends Component {
  constructor({ addToDo }) {
    super()
    this.state = {
      title: "",
      content: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addToDo(this.state)
    this.setState({
      title: "",
      content: ""
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { title, content } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter ToDo title"
          name="title"
          value={title}
          onChange={this.handleChange}
          className="form-input"/>
        <input
          placeholder="Enter ToDo content"
          name="content"
          value={content}
          onChange={this.handleChange}
          className="form-input"/>
        <button>Save ToDo!</button>
      </form>
    )
  }
}

export default ToDoForm;