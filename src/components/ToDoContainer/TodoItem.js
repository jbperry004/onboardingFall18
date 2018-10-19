import React from "react";
import styled from "styled-components";

const DeleteButton = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
`;

const TodoItem = ({ index, todo, removeTodo }) => (
  <li key={index}>
    {" "}
    {todo.title} <DeleteButton onClick={removeTodo}> Delete </DeleteButton>{" "}
  </li>
);

export default TodoItem;
