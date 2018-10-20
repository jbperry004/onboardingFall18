import React, { Component } from "react";

import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

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
    let id = this.state.todos.length;
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          id: id,
          title: this.state.newTodo
        }
      ]
    });
  };

  // Remove clicked todolist
  removeTodo = index => {
    let arr = this.state.todos.filter(todo => todo.id !== index);
    let todos = arr.map(todo => {
      todo.id = todo.id - 1;
      return todo;
    });
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
    const Header = styled.h1`
      margin: 1em;
      padding: 0.25em 1em;
    `;

    return (
      <div className="app">
        <Flex justifyContent="Center">
          <Box>
            <Header>Todo List</Header>
          </Box>
        </Flex>
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
        />{" "}
      </div>
    );
  }
}

export default ToDoContainer;
