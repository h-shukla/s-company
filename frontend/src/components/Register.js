import React from 'react'

const Register = () => {
  return (
    <form className='login-form mt-5'>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">Enter your name</label>
        <input type="password" className="form-control" id="nameInput" placeholder='Name' />
      </div >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Enter your Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Enter Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
      </div >
      <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2" placeholder='Confirm Password' />
      </div >
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form >
  )
}

export default Register