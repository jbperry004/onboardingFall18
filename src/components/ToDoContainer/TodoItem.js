import React from "react";

const TodoItem = ({ index, todo, removeTodo }) => {
  return (
    <li key={index}>
      {todo.title}
      <button onClick={removeTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
