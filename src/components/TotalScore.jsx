import styled from "styled-components";

const TotalScore = ({ score }) => {
  const arrValues = [1, 2, 3, 4, 5, 6];
  return (
    <TotalScoreContainer>
      <div className="score_content">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </TotalScoreContainer>
  );
};
export default TotalScore;

const TotalScoreContainer = styled.div`
  .score_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 135px;

    height: 151px;
  }
  h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 100%;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
