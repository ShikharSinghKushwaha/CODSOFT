import React from 'react'
import axios from'axios'
import { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom'
import '../Stylesheets/form.css'

function Login() {

  //  const [ err, setErr ]= useState('');
  const navigate = useNavigate();
     
  const [ message, setMessage ] = useState('');
  const [ serverMessage, setServerMessage ] = useState('');
 
    const [ login, setLogin ] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) => {
       const { name, value } = e.target;
       setLogin({...login ,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       // if(!login.email == '' || !login.password === ''){

        axios.post('http://localhost:3001/login',login)
        .then(success => {
            setServerMessage('Succesfully logged in' ,success)
           
             setMessage(success.data.message)

             const jwtToken = success.data.jwt;
             
             localStorage.setItem('jwt',jwtToken);
             localStorage.setItem('userId',success.data.userId)
             localStorage.setItem('username',success.data.userEmail)
             const userId = localStorage.getItem('userId');
             if(jwtToken){
              navigate(`/posts/${userId}`)
             }

        }).catch(err => {
           // setErr(err)
            setServerMessage('Some error occured' + err);
        })
  

    }

    const handleDisable = login.email.trim() === '' || login.password.trim() === '';
  return (
    <div>
       <div className='main-form-container'>
        <div className='form-container'>

            <h1 className='heading'>Login Page</h1>

            <form onSubmit={handleSubmit} className='form-content'>
                <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={login.email}
                onChange={handleChange}
                className='input-field'
                />

                <input 
                type="password"
                name="password"
                placeholder='Your Password'
                value={login.password}
                onChange={handleChange}
                className='input-field'
                />
            <h3 style={{color:'red'}}>{message}</h3>
                
                <button type="submit" 
                disabled={handleDisable  ? true : false}
                className={`submit-btn ${handleDisable ? 'disabled' : ''}`}>Login</button>
                
            </form>
            <h3>{serverMessage}</h3>
            <p className='redirect'>Don't have a Account
            <NavLink to='/signup' className='link'> Signup </NavLink></p>
        </div>
       </div>
    </div>
  )
}

export default Login
