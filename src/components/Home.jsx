import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { useState } from 'react';

const Home = ({toggle}) => {

const [gameStarted,isGameStarted]=useState(false);



  return (
    <HomeContainer>
<div>
    <img src="images/Dices.png" alt="Dices"/>
</div>
        <div className="home_content">
            <h1>DICE GAME</h1>
             <ButtonContainer onClick={toggle}>Play Now</ButtonContainer>
        </div>
      
    </HomeContainer>
  )
}

export default Home


const HomeContainer=styled.div`
    max-width:1182px;
    margin:0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:100px;
    gap:4px;
    .home_content{
            display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    }
    h1{
        font-size:96px;
        font-weight:700;
        white-space: nowrap;

    }
    img{
        width: 649px;
        height:512px;
    }
`
