import React from "react";

const NewTodoForm = ({ formSubmitted, newTodoChanged, newTodo }) => (
  <div>
    <input
      onChange={newTodoChanged}
      id="newTodo"
      name="newTodo"
      placeholder="Add todo"
      value={newTodo}
    />
    <button type="submit" onClick={formSubmitted}>
      Add Todo
    </button>
  </div>
);

export default NewTodoForm;
