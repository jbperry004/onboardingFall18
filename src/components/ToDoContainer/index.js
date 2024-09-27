import React, { Component } from "react";
import AddTodo from "./AddTodo/index.js";
import TodoItems from "./TodoItems/index.js";
import SearchTodos from "./SearchTodos/index.js";
import { Container, Text, SubContainer } from "./styles";

class ToDoContainer extends Component {
  // Set up the state
  constructor() {
    super();
    this.state = {
      items: [], // Will store all the todos and display
      currentID: 1,
      searchText: ""
    };
  }

  // Delete an item from the list
  deleteTodo = id => {
    // id.preventDefault();

    // Filter to create new array that doesn't include deleted item
    const newList = this.state.items.filter(obj => {
      return obj.id !== id;
    });

    this.setState({
      items: newList
    });
  };

  // Update parent state
  updateParent = (items, currentID) => {
    this.setState({ items: items, currentID: currentID });
  };

  // Handle inputs from search
  handleSearch = text => {
    const item = text.target.value;
    const searchText = item;
    this.setState({ searchText });
  };

  render() {
    return (
      <Container id="root">
        <SubContainer>
          <Text>Current Todos:</Text>
          <TodoItems
            todos={this.state.items}
            deleteTodo={this.deleteTodo}
            searchText={this.state.searchText}
          />
        </SubContainer>
        <SubContainer>
          <AddTodo
            addTodo={this.addTodo}
            handleInput={this.handleInput}
            updateParent={this.updateParent}
            parentState={this.state}
          />
          <SearchTodos
            currentText={this.state.searchText}
            handleSearch={this.handleSearch}
          />
        </SubContainer>
      </Container>
    );
  }
}

export default ToDoContainer;
