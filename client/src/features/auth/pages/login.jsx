import React from 'react'
import "../auth.form.scss"
import { Link, useNavigate } from 'react-router';
const login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  }
  return (
    <div>
    <main>
        
        <form onSubmit={handleSubmit}>
            <div className='input-container'>
                  <h1 class="header">Login</h1>
       <h1 class="input-label">Email</h1>
        <input className='input-field' type="text" placeholder='email' />
    <h1 class="input-label">Password</h1>
        <input className='input-field' type="password" placeholder='password' />
        <button className='btn-primary' type='submit'>Login</button>
        </div>
        </form>
        <p>Don't have an account? <Link className='btn-link' to="/register">Register</Link></p>
    </main>

    </div>
  )
}

export default login
