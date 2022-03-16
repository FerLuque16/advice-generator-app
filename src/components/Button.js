import React from 'react';

const Button = ({handleClick})=>{
    return(
        <div className='button' onClick={handleClick}>
            <img src='./images/icon-dice.svg' alt='icon'/>
        </div>
    )
}

export default Button;