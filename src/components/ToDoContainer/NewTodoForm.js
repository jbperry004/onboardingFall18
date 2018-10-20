import React from "react";
import { Flex, Box } from "grid-styled";
import { AddInputField, SubmitButton } from "./styles";

const NewTodoForm = ({ formSubmitted, newTodoChanged, newTodo }) => (
  <div>
    <Flex>
      <Box ml={550} mt={50}>
        <AddInputField
          onChange={newTodoChanged}
          id="newTodo"
          name="newTodo"
          placeholder="Add todo"
          value={newTodo}
        />{" "}
        <SubmitButton type="submit" onClick={formSubmitted}>
          Add{" "}
        </SubmitButton>{" "}
      </Box>{" "}
    </Flex>{" "}
  </div>
);

export default NewTodoForm;
