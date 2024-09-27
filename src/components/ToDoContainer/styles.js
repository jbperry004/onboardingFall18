import { Flex } from "grid-styled";
import styled from "styled-components";

export const Container = styled(Flex)`
  justify-content: space-between;
  flex-direction: row;
  width: 50%;
  margin: auto;
  margin-top: 15px;
`;

export const SubContainer = styled(Container)`
  flex-direction: column;
  width: 177.9px;
`;

export const Text = styled(Flex)`
  font: Arial;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid black;
`;
