import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <form className='login-form mt-5'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div >
      <p>New here?</p>
      <Link to='/register'><button type='submit' className='btn btn-primary'>Sign Up?</button></Link>
    </form >
  )
}

export default Login