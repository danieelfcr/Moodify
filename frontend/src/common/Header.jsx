import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/moodify.png';
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header-container">
      <img src={logo} alt="Moodify" className="moodify-logo" onClick={() => navigate('/home')}/>
      <div className="buttons-container">
        <button className="btn btn-login" onClick={() => navigate('/login')}>Log in</button>
        <button className="btn btn-signup" onClick={() => navigate('/signup')}>Sign up</button>
      </div>
    </header>
  );
};
