import React from 'react';
import logo from '../assets/moodify.png';
import './Header.css';

export const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="Moodify" className="moodify-logo" />
      <div className="buttons-container">
        <button className="btn btn-login">Log in</button>
        <button className="btn btn-signup">Sign up</button>
      </div>
    </header>
  );
};
