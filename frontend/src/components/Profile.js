import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  const getUserDetails = async () => {
    const res = await axios.get('http://localhost:5000/api/v1/me', {
      params: {
        token: localStorage.getItem('token')
      }
    })
    const user = res.data.user
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
      if (isLoggedIn) {
        getUserDetails()
      }
    }
  }, [isLoggedIn])
  const navigate = useNavigate()
  const handleOnClick = () => {
    localStorage.clear()
    alert('Logged out successfully')
    navigate('/')
  }

  const handleLoginOnClick = () => {
    navigate('/login')
  }

  const handleProfileEdit = () => {
    navigate('/editprofile')
  }

  if (isLoggedIn) {
    return (
      <div>
        <h3>User detials</h3>
        <p><b>Name</b>: {user.name}</p>
        <p><b>Email</b>: {user.email}</p>
        <button className='btn btn-primary mb-2' onClick={handleProfileEdit}>Edit Profile</button> <br />
        <button onClick={handleOnClick} className='btn btn-primary'>logout</button>
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