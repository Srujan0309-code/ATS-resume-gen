import React from 'react'
import "../auth.form.scss"
import { Link, useNavigate } from 'react-router';

const register = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  }
  return (
    <div>
    <main>
        <form onSubmit={handleSubmit}>
            <div className='input-container'>
                  <h1 class="header">Register</h1>
               <h1 class="input-label">Name</h1>
        <input className='input-field' type="text" placeholder='name' />
        <h1 class="input-label">Email</h1>
        <input className='input-field' type="text" placeholder='email' />
        <h1 class="input-label">Password</h1>
        <input className='input-field' type="password" placeholder='password' />
        <button className='btn-primary' type='submit'>Register</button>
        </div>
        </form>
        <p>Already have an account? <Link className='btn-link' to="/login">Login</Link></p>
    </main>

    </div>
  )
}

export default register
