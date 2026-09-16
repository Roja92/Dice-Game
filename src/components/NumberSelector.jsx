import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  numberSelected,
  setNumberSelected,
}) => {
  const arrValues = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (values) => {
    setNumberSelected(values);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <div className="main_content">
        <p className="error_msg">{error}</p>
        <div className="number_select">
          {arrValues.map((values, i) => (
            <Box
              isSelected={values === numberSelected}
              key={i}
              onClick={() => numberSelectorHandler(values)}
            >
              {values}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
      </div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .main_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .error_msg {
    color: red;
    font-weight: 400;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    text-align: end;
  }
  .number_select {
    display: flex;
    gap: 24px;
  }
`;
const Box = styled.div`
  border: 1px solid black;
  width: 72px;
  height: 72px;
  cursor: pointer;
  font-weight: 700;
  font-size: 24px;
  display: grid;
  place-content: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
