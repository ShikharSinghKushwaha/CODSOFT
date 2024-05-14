import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {NavLink, useNavigate } from 'react-router-dom'
import '../Stylesheets/form.css'
function Signup() {

    let navigate = useNavigate();

    const [ successMsg, setSuccessMsg ] = useState('');
    let [ form, setForm ] = useState({
      name: '', 
      email: '',
      password:''
    })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form , [name]:value} )
    }

    const handleSubmit = (e) => {
    
      e.preventDefault();
          axios.post('http://localhost:3001/signup',form)
          .then(success => {
            setSuccessMsg('Data sended succceffully')
            navigate('/login')
          })
        .catch(err => {
          setSuccessMsg('Sorry something went wrong',err)
        })

        form = '';

    }
 const handleDisable = form.name === '' || form.email === '' || form.password === '';

 
  
  return (
    <div>
      <div className='main-form-container'>
        <div className='child-container'>
        <h1 className='heading'>Sign Up</h1>

            <form onSubmit={handleSubmit} className='form-content'>
            
                <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Username'
                className='input-field'
                required
                 /> 

                 <input  
                type='email' 
                name='email' 
                value={form.email} 
                onChange={handleChange} 
                placeholder='Your Email' 
                className='input-field' 
                required
                 /> 

                 <input  
                type='password' 
                name='password' 
                value={form.password} 
                onChange={handleChange}
                placeholder='Password'
                className='input-field'
                required
                 />
                 <button type="submit" 
                 disabled={handleDisable ? true : false}  
                 
                 className={`submit-btn ${handleDisable ? 'disabled' : ''}`}>Register</button>
            </form>
            <h3>{successMsg}</h3>
            <p className='redirect'>Already have and Account
            <NavLink to='/login' className='link'> Login </NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
