import styled from "styled-components";

export const SubmitButton = styled.button`
  background: white;
  color: black;
  font-size: 1em;
  margin: ;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 10px;
  &:hover {
    background: blue;
    color: white;
  }
`;

export const AddInputField = styled.input`
  background: white;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 10px;
  width: 180px;
  &:hover {
    border: 2px solid blue;
  }
`;

export const SearchInputField = styled.input`
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

export const Text = styled.p`
  margin: 1em;
  padding: 0.25em 1em;
`;

export const DeleteButton = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
  &:hover {
    background: palevioletred;
    color: white;
  }
`;
