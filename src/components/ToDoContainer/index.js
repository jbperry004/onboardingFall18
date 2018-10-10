import React, {
  Component
} from "react";

class ToDoContainer extends Component {

  formSubmitted(event) {
    event.preventDefault();
    console.log("Form Submitted")
  }
  render() {
    return (
      <div className="app">
        <h3>Todo List</h3>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor='newTodo'>new Todo</label>
          <input id="newTodo" name="newTodo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default ToDoContainer;