// import { Flex } from "grid-styled";
import styled from "styled-components";

export const Input = styled.input`
  width: 175px;
  height: 24px;
  margin-top: 6px;
  border-radius: 8px;
  border: 2px solid black;
  border-width: 3px;

  :focus {
    border: 2px solid blue;
    border-width: 3px;
    border-radius: 8px;
    outline-color: transparent;
    outline-style: none;
  }
`;
