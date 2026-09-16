import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 220px;
  height: 44px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
export const OutlineButton = styled(ButtonContainer)`
  background-color: white;
  color: black;
  border: 1px solid black;
`;
