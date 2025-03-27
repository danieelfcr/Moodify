import React from 'react'
import Button from '@mui/material/Button';
import logo from '../assets/moodify.png'
import './Header.css'

export const Header = () => {
  return (
    <div className="header-container">
        <img src={logo} alt="Moodify" className="moodify-logo" />
        <Button variant='outlined' size='medium'>Log in</Button>
    </div>
  )
}
