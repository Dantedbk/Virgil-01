import React, { useState } from 'react';
import './styles/objects/_button.css';
import 'animate.css/animate.min.css';

function Button(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (props.onClick) {
      props.onClick();
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <button
      className={`button animate__animated ${isClicked ? 'animate__shakeX' : 'animate__bounce'}`}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
