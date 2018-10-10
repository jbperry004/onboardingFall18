import React, {
  Component
} from "react";

class ToDoContainer extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: []
    }
  }
  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    })

  }
  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }
  render() {
    return (
      <div className="app">
        <h3>Todo List</h3>
        <form onSubmit={this.formSubmitted.bind(this)}>
          <label htmlFor='newTodo'>new Todo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default ToDoContainer;