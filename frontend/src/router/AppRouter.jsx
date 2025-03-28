import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { LandingPage } from '../views'


export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/home' element = {<LandingPage/>} />

                <Route path="/*" element={ < Navigate to="/home" /> } />  
            </Routes>
        </BrowserRouter>
    </>
  )
}
