import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import {
  Flex,
  Box
} from 'grid-styled';

const SearchInputField = styled.input `
  background: white;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  width: 280px;
  border-radius: 10px;
`;

const TodoList = ({
  todos,
  filter,
  removeTodo,
  searchTodos
}) => {
  let filtered = todos.filter(todo => todo.title.match(filter));
  if (filtered.length > 0) {
    return ( < div >
      <
      Flex >
      <
      Box >
      <
      ul > {
        " "
      } {
        filtered.map((todo, index) => {
          return ( <
            TodoItem key = {
              index
            }
            todo = {
              todo
            }
            removeTodo = {
              () => removeTodo(index)
            }
            />
          );
        })
      } {
        " "
      } <
      /ul>{" "} < /
      Box > <
      Box >
      <
      SearchInputField placeholder = "search"
      onChange = {
        searchTodos
      }
      />{" "} < /
      Box > <
      /Flex>

      <
      /div>
    );
  } else {
    return filter ? ( <
      div >
      <
      p > No matches found < /p>{" "} <
      input placeholder = "search"
      onChange = {
        searchTodos
      }
      />{" "} < /
      div >
    ) : (
      "No todos to complete"
    );
  }
};

export default TodoList;