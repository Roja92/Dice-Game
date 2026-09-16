import styled from "styled-components";

const ShowRules = () => {
  return (
    <ShowRulesContainer>
      <div className="rules_data">
        <h1>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </ShowRulesContainer>
  );
};

export default ShowRules;

const ShowRulesContainer = styled.div`
  max-width: 776px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: #fbf1f1;
  padding: 20px;
  gap: 24px;

  h1 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
  }
`;
