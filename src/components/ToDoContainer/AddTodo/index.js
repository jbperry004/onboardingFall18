import React, { Component } from "react";
import { SubmitButton, Container, Input } from "./styles";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      currentText: "" // Todo inputted by user
    };
  }

  // Update what the current item is based on user input
  handleInput = item => {
    const todo = item.target.value;
    const currentText = todo;
    this.setState({ currentText });
  };

  // Add an item to the list
  addTodo = obj => {
    obj.preventDefault();

    // Make sure the current item is not empty before adding
    if (this.state.currentText !== "") {
      const items = [
        ...this.props.parentState.items,
        {
          id: this.props.parentState.currentID + 1,
          text: this.state.currentText
        }
      ];
      this.setState({
        currentText: "" // Reset text the next user input
      });
      this.props.updateParent(items, this.props.parentState.currentID + 1);
    }
  };

  render() {
    return (
      /* When the user clicks submit, call the addTodo func */
      <Container>
        <Input value={this.state.currentText} onChange={this.handleInput} />
        <SubmitButton type="submit" onClick={this.addTodo}>
          Add
        </SubmitButton>
      </Container>
    );
  }
}

export default AddTodo;
