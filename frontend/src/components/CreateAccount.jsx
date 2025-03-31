import React from 'react'
import './CreateAccount.css'
import { Form } from 'react-router-dom'

export const CreateAccount = () => {
  return (
    <>
    <div className='forms-ca'>
      <form>
        <div className='text-ca'>
            <div className='h1-ca'>
                <h1>Sign Up</h1>
            </div>
            <div className='p-ca'>
                <p>Ingresa a tu cuenta para continuar con Moodify</p>
            </div>
        </div>
        <div className='forms-items-ca'>     
                <label className='lbl-name-ca'>Name: </label>
                <input className='inpt-name-ca' type="text" placeholder="Name"/> 

                <label className='lbl-account-login'>Email Account: </label>
                <input className='inpt-account-login' type="text" placeholder="Email"/>

                <label className='lbl-password-ca'>Password: </label>
                <input className='inpt-password-ca' type="password" placeholder="Password"/>

                <label className='lbl-cpassword-ca'>Confirm password: </label>
                <input className='inpt-cpassword-ca' type="password" placeholder="Password"/>

                <button className='btn-account-login' type="submit">Enviar</button>
                <div>
                <label className='lbl-si-ca'>¿Ya tienes una cuenta?  </label>  
                <button className='btn-si-ca' type="submit">Iniciar sesión</button>         
                </div>
        </div>
      </form>
    </div>
  </>
);
};