import React from 'react'
import './Login.css'
import { Form } from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <div className='forms-login'>
      <form>
        <div className='text-login'>
            <div className='h1-login'>
                <h1>Sign In</h1>
            </div>
            <div className='p-login'>
                <p>Ingresa a tu cuenta para continuar con Moodify</p>
            </div>
        </div>
        <div className='forms-items-login'>     
                <label className='lbl-account-login'>Email Account: </label>
                <input className='inpt-account-login' type="text" placeholder="Email"/>

                <label className='lbl-password-login'>Password: </label>
                <input className='inpt-password-login' type="password" placeholder="Password"/>

                <button className='btn-account-login' type="submit">Enviar</button>
                <div>
                <label className='lbl-si-login'>¿No tienes una cuenta?  </label>  
                <button className='btn-si-login' type="submit">Registrate</button>         
                </div>
        </div>
      </form>
    </div>
  </>
);
};