import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Stylesheets/Dashboard.css'

function Dashboard() {
  return (
    <div>
       <div className='navbar-container'>
        <h1 className='title'>My Blog</h1>
        <div className='links-container'>
          <div className="navbar">
            
                <NavLink to='/' className='link-text'>Home</NavLink>
                <NavLink to='/blog' className='link-text'> Create Blog</NavLink>
                <NavLink to='/posts' className='link-text'>Show Posts</NavLink>
                <NavLink to='/contact Us' className='link-text'>Contact</NavLink>
                <NavLink to='/login' className='link-text'>Login</NavLink>
            
              </div>
              {/* <div className='social-container'>
                <p>F</p>
                <p>T</p>
                <p>In</p>
                <p>in</p>

              </div> */}
          </div>
       </div>
    </div>
  )
}

export default Dashboard
