import React from "react";
import styled from "styled-components";
import {
  Flex,
  Box
} from 'grid-styled';

const SubmitButton = styled.button `
  background: white;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 10px;
`;

const AddInputField = styled.input `
  background: white;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 10px;
`;

const NewTodoForm = ({
  formSubmitted,
  newTodoChanged,
  newTodo
}) => ( <
  div >
  <
  Flex >
  <
  Box >
  <
  AddInputField onChange = {
    newTodoChanged
  }
  id = "newTodo"
  name = "newTodo"
  placeholder = "Add todo"
  value = {
    newTodo
  }
  />{" "} <
  SubmitButton type = "submit"
  onClick = {
    formSubmitted
  } >
  Add {
    " "
  } <
  /SubmitButton>{" "} < /
  Box > <
  /Flex> < /
  div >
);

export default NewTodoForm;