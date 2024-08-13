import React, { useState, useEffect } from 'react';
import rules from './assets/rock-paper-scissors-game-rules.png';
import {Game} from './game/Game';
import './App.css';

function App() {
  const [passedTutoial, setPassedTutoial] = useState(false);

  useEffect(() => {
    console.log('PassedTutorial changed:', passedTutoial);
  }, [passedTutoial]);

  if (passedTutoial)
    return (<div>
        <div className='GameHeader'>
            <button className='PlayBtn' style={{fontSize: "3vh"}} onClick={() => setPassedTutoial(false)}>Rules</button>
        </div>
        <Game></Game>
      </div>)
  else
  
  return (
    <div className="App">
        <img src={rules} className="RulesImg" alt=''/>
        <button className='PlayBtn' onClick={() => setPassedTutoial(true)}>
          Got it !!!
        </button>
    </div>
    
  );
}

export default App;
