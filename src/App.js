import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [advice, setAdvice] = useState({
    id:117,
    advice:"It is easy to sit up and take notice, what's difficult is getting up and taking action"
  });

  const changeAdvice= ()=>{

    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setAdvice(data.slip))
  }
  return (
    <div className='main'>
      <div className="wrapper">
        <h3>Advice #{advice.id}</h3>
        <p>"{advice.advice}"</p>
        <div className='pattern-divider pattern-desktop'>
          <img src='./images/pattern-divider-desktop.svg'/>
        </div>
        <div className='pattern-divider pattern-mobile'>
          <img src='./images/pattern-divider-mobile.svg'/>
        </div>
        <Button handleClick = {changeAdvice}/>
      </div>
    </div>

  );
}

export default App;
