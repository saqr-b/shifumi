import React, { useState, useEffect } from 'react';
import rockImg from '../assets/rock.png';
import paperImg from '../assets/paper.png';
import scissorsImg from '../assets/scissors.png';
import './Game.css';

export function Game() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  // 0 = rock; 1 = paper; 2 = scissors
  const [choice, setChoice] = useState(-1);
  const [botChoice, setBotChoice] = useState(-1);

  const [botChoiceImg, setBotChoiceImg] = useState(rockImg);
  const [choiceImg, setChoiceImg] = useState(rockImg);
  const [message, setMessage] = useState("Ready ?");

  useEffect(() => {
    console.log('Player chose:', choice);
    }, [choice]);

    useEffect(() => {

    if (choice != -1 && botChoice != -1)
        {
        if (choice == botChoice)
            setMessage("It's a draw");
        else if ((choice + 1) % 3 === botChoice)
        {
          setMessage("You lost")
          setLosses(losses + 1)
        }
        else
        {
          setMessage("You won !!!")
          setWins(wins + 1)
        }
    }
    setBotChoice(-1)
      }, [botChoice]);


  function botChoiceMaker()
 {
  const tmp = Math.floor(Math.random() * 3);
  console.log(tmp)
  setBotChoice(tmp)
  
  switch (tmp){
    case 0:
        setBotChoiceImg(rockImg);
        break;
    case 1:
        setBotChoiceImg(paperImg);
        break;
    default:
        setBotChoiceImg(scissorsImg);
        break;
  }

  const timer = setTimeout(() => {
    setChoice(-1); // Show the message after 3 seconds
  }, 1500);
  
 }

  if (choice === -1)
    return (
        <div className="Game">
        <div>
            <p style={{fontSize: "4vh"}}>Chose your hand</p>
            <div className='Choices'>
                <img src={rockImg} style={{maxWidth: "20%", width: "30vh"}} className='Choice' alt='' onClick={() => {setChoice(0); setChoiceImg(rockImg); botChoiceMaker()}}></img>
                <img src={paperImg} style={{maxWidth: "20%", width: "32vh"}} className='Choice' alt='' onClick={() => {setChoice(1); setChoiceImg(paperImg); botChoiceMaker()}}></img>
                <img src={scissorsImg} style={{maxWidth: "21%", width: "34vh"}} className='Choice' alt='' onClick={() => {setChoice(2); setChoiceImg(scissorsImg); botChoiceMaker()}}></img>
            </div>
        </div>
        <div className='Score'>
            {wins} - {losses}
        </div>
        </div>
    );
  else
  {

    
  return (
    
    <div className="Game">
    <div>
        <p style={{fontSize: "4vh"}}>{message}</p>
        <div className='Choices'>
            <img src={choiceImg} style={{width: "23%"}} alt=''></img>
            <div style={{display: 'flex', alignItems: 'center', padding: '3vw', fontSize: '15vh'}}>VS</div>
            <img src={botChoiceImg} style={{width: "23%"}} alt=''></img>
        </div>
    </div>
    <div className='Score'>
        {wins} - {losses}
    </div>
    </div>
);
  }
}