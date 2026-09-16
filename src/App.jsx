
import './App.css';
import Home from './components/Home';
import GamePlay from './components/GamePlay';
import { useState } from 'react';

function App() {
   
  const [isgameStarted,setIsGameStarted]=useState(true);
  
  const toggleGame=()=>{
setIsGameStarted((prev)=>!prev)

}
  return (
<div>
{isgameStarted ? <GamePlay /> : <Home toggle={toggleGame} />}
</div>
  )
}

export default App
