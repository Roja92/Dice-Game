import styled from "styled-components";

const RollDice = ({ selectDice, roleDice }) => {
  return (
    <RollDiceContainer>
      <div className="rolldice_img">
        <img
          src={`images/dice/dice_${selectDice}.png`}
          alt="Dice"
          onClick={() => roleDice(1, 7)}
        />
      </div>
      <p>Click on Dice to roll</p>
    </RollDiceContainer>
  );
};

export default RollDice;

const RollDiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  .rolldice_img img {
    width: 250px;
    cursor: pointer;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
