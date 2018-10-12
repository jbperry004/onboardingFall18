import React, { Component } from "react";

import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

class ToDoContainer extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todos: [],
      filter: ""
    };
  }

  // Create new todo
  newTodoChanged = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  // Form submission event handler
  formSubmitted = event => {
    event.preventDefault();
    // Add new todo to array
    let id = this.state.todos.length;
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          id,
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  };

  // Remove clicked todolist
  removeTodo = index => {
    let todos = this.state.todos.filter(todo => todo.id !== index);
    this.setState({
      todos
    });
  };

  // Search todolist by substring
  searchTodos = event => {
    console.log(event.target.value);
    this.setState({
      filter: event.target.value
    });
  };

  render() {
    return (
      <div className="app">
        <h3>Todo List</h3>
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted}
          newTodoChanged={this.newTodoChanged}
        />

        <TodoList
          todos={this.state.todos}
          filter={this.state.filter}
          removeTodo={this.removeTodo}
          searchTodos={this.searchTodos}
        />
      </div>
    );
  }
}

export default ToDoContainer;
