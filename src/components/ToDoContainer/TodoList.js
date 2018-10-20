import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const SearchInputField = styled.input`
  background: white;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  width: 280px;
  border-radius: 10px;
  &:hover {
    border: 2px solid blue;
  }
`;

const Text = styled.p`
  margin: 1em;
  padding: 0.25em 1em;
`;

const TodoList = ({ todos, filter, removeTodo, searchTodos }) => {
  let filtered = todos.filter(todo => todo.title.match(filter));
  if (filtered.length > 0) {
    return (
      <div>
        <Flex>
          <Box width={[1, 1 / 2, 1 / 4]} ml={200}>
            <ul>
              {" "}
              {filtered.map((todo, index) => {
                return (
                  <TodoItem
                    key={index}
                    todo={todo}
                    removeTodo={() => removeTodo(index)}
                  />
                );
              })}{" "}
            </ul>{" "}
          </Box>{" "}
          <Box ml={0} pl={0}>
            <SearchInputField placeholder="search" onChange={searchTodos} />{" "}
          </Box>{" "}
        </Flex>
      </div>
    );
  } else {
    return filter ? (
      <Flex>
        <Box ml={550}>
          <Text> No matches found </Text>{" "}
          <SearchInputField placeholder="search" onChange={searchTodos} />{" "}
        </Box>
      </Flex>
    ) : (
      <Flex>
        <Box ml={550}>
          <Text> No Todos to complete </Text>{" "}
        </Box>
      </Flex>
    );
  }
};

export default TodoList;
