import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [registrationSuccessfull, setIsregistrationSuccessfull] = useState(false)

  // Reference definitions
  const nameRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()
  const confirmPassRef = useRef()

  const postData = async (name, email, password) => {
    const response = await fetch('http://localhost:5000/api/v1/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    return response.json()
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if (passRef.current.value === confirmPassRef.current.value) {
      const name = nameRef.current.value
      const email = emailRef.current.value
      const password = passRef.current.value
      const res = await postData(name, email, password)
      if (res.success === true) {
        setIsregistrationSuccessfull(true)
        localStorage.setItem('token', res.token)
      }
    } else {
      alert('Passwords do not match')
    }
    e.target.reset()
  }

  const handleOnchange = (e) => {
    e.target.name = e.target.value
  }

  if (!registrationSuccessfull) {
    return (
      <form className='login-form mt-5' onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Enter your name</label>
          <input ref={nameRef} type="text" onChange={handleOnchange} name='' className="form-control" id="nameID" placeholder='Name' />
        </div >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter your Email address</label>
          <input ref={emailRef} type="email" onChange={handleOnchange} name='' className="form-control" id="emailID" aria-describedby="emailHelp" placeholder='Email' />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Enter Password</label>
          <input ref={passRef} type="password" onChange={handleOnchange} name='' className="form-control" id="passID" placeholder='Password' />
        </div >
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
          <input ref={confirmPassRef} type="password" onChange={handleOnchange} name='' className="form-control" id="confirmPassID" placeholder='Confirm Password' />
        </div >
        <button type="submit" className="btn btn-primary mt-3" >Submit</button>
      </form >
    )
  } else {
    return (
      <div className='d-flex flex-column m-5'>
        <p>Registration successfull</p>
        <Link to='/products' className='btn btn-primary'>Go to products page?</Link>
      </div>
    )
  }

}

export default Register