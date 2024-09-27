import { Flex } from "grid-styled";
import styled from "styled-components";

export const SubmitButton = styled.button`
  border: 2px solid blue;
  border-radius: 8px;
  border-width: 3px;
  height: 24px;
  :hover {
    background-color: blue;
    color: white;
  }
  outline-color: transparent;
  outline-style: none;
`;

export const Container = styled(Flex)`
  /* justify-content: space-between; */
`;

export const Input = styled.input`
  margin-right: 4px;
  height: 16px;
  border: 2px solid black;
  border-radius: 8px;
  border-width: 3px;

  :focus {
    border: 2px solid blue;
    border-radius: 8px;
    border-width: 3px;
    outline-color: transparent;
    outline-style: none;
  }
`;
