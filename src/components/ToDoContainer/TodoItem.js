import React from "react";
import { DeleteButton } from "./styles";

const TodoItem = ({ index, todo, removeTodo }) => (
  <li key={index}>
    {" "}
    {todo.title} <DeleteButton onClick={removeTodo}> Delete </DeleteButton>{" "}
  </li>
);

export default TodoItem;
