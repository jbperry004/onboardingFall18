import React from "react";

const NewTodoForm = ({ formSubmitted, newTodoChanged, newTodo }) => (
  <form onSubmit={formSubmitted}>
    <input
      onChange={newTodoChanged}
      id="newTodo"
      name="newTodo"
      placeholder="Add todo"
      value={newTodo}
    />
    <button type="submit">Add Todo</button>
  </form>
);

export default NewTodoForm;
