import React, { Component } from "react";
import { ListItem, DeleteButton, Text } from "./styles";

class TodoItems extends Component {
  // Function to create the list
  makeList = todo => {
    if (todo.text.match(this.props.searchText) != null) {
      return (
        <ListItem key={todo.id}>
          {todo.text} {"  "}
          {/* When button is clicked, run anonymous function delete */}
          <DeleteButton onClick={() => this.props.deleteTodo(todo.id)}>
            <Text>Delete </Text>
          </DeleteButton>
        </ListItem>
      );
    }
  };

  render() {
    // Message if there are no todos
    if (this.props.todos.length === 0) {
      return <p>No todos to complete</p>;
    }

    // Otherwise, create the list of todos
    const listed = this.props.todos.map(this.makeList);
    return <ul>{listed}</ul>;
  }
}

export default TodoItems;
