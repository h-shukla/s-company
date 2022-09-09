import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])
  const navigate = useNavigate()
  const handleOnClick = () => {
    localStorage.clear()
    alert('Logged out successfully')
    navigate('/')
  }

  const handleLoginOnClick = () => {
    navigate('/login')
  }

  if (isLoggedIn) {
    return (
      <div>
        <button onClick={handleOnClick} className='btn btn-primary' type='submit' >logout</button>
      </div>
    )
  } else {
    return (
      <div className="container mt-4">
        <h5>You are not logged in!!</h5>
        <p>Go to login page to either login or register</p>
        <button className='btn btn-primary' onClick={handleLoginOnClick}>Go to Login</button>
      </div>
    )
  }
}

export default Profile