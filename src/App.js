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
          <img src='./images/pattern-divider-desktop.svg' alt='divider-desktop'/>
        </div>
        <div className='pattern-divider pattern-mobile'>
          <img src='./images/pattern-divider-mobile.svg' alt='divider-mobile'/>
        </div>
        <Button handleClick = {changeAdvice}/>
      </div>
      <p className='rights'>Challenge by <a href='https://www.frontendmentor.io/home' target='_blank'>Frontend Mentor</a>. Coded by <a href='https://github.com/FerLuque16' target='_blank'>Fernando Luque</a></p>
    </div>

  );
}

export default App;
