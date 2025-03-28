import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { LandingPage, DashboardPage } from '../views'


export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/home' element = {<LandingPage/>} />
                <Route path='/dashboard' element = {<DashboardPage/>} />

                <Route path="/*" element={ < Navigate to="/home" /> } />  
            </Routes>
        </BrowserRouter>
    </>
  )
}
