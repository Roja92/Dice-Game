import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import ShowRules from "./ShowRules";
import RollDice from "./RollDice";
import { useState } from "react";
import { ButtonContainer, OutlineButton } from "./Button";

const GamePlay = () => {
  const [selectDice, setSelectDice] = useState(1);
  const [numberSelected, setNumberSelected] = useState(1);
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const selectNumber = (values) => {
    console.log(values);
    setNumberSelected(values);
  };
  const roleDice = () => {
    if (!numberSelected) {
      setError("You have not selected any number");
      return;
    }
    const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    const randomNumber = generateRandomNumber(1, 7);
    console.log(randomNumber);
    setSelectDice((prev) => randomNumber);

    if (randomNumber === numberSelected) {
      setScore((prev) => prev + randomNumber);
      return;
    } else {
      setScore((prev) => prev - 2);
    }
    setNumberSelected(undefined);
  };

  const reSetScore = () => {
    setScore(0);
    return;
  };
  const ShowTheRules = () => {
    setShowRules((prev) => !prev);
    return;
  };

  return (
    <GamePlayContainer>
      <div className="gameplay_content">
        <TotalScore score={score} />
        <NumberSelector
          numberSelected={numberSelected}
          setNumberSelected={setNumberSelected}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice selectDice={selectDice} roleDice={roleDice} />

      <div className="butns">
        <OutlineButton onClick={reSetScore}>Reset Score</OutlineButton>
        <ButtonContainer onClick={() => ShowTheRules()}>
          {showRules ? "Hide" : "Show"} Rules
        </ButtonContainer>
      </div>
      {showRules && <ShowRules />}
    </GamePlayContainer>
  );
};

export default GamePlay;
const GamePlayContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding-top: 30px;
  .gameplay_content {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .butns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
