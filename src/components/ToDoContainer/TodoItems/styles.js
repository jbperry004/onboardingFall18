import { Flex } from "grid-styled";
import styled from "styled-components";

export const Container = styled(Flex)`
  background-color: blue;
  width: 100%;
  margin-top: 10px;
`;

export const DeleteButton = styled.button`
  border: 2px solid red;
  border-radius: 8px;
  border-width: 3px;
  display: inline-block;
  :hover {
    background-color: red;
    color: white;
  }
  outline-color: transparent;
  outline-style: none;
`;

export const ListItem = styled.li`
  text-align: left;
  font: Arial;
  font-size: 14px;
  width: 200px;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 5px;
  /* align-items: flex-end; */
  word-wrap: break-word;
`;

export const Text = styled(Flex)`
  font-size: 14px;
  font: Arial;
`;
