import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AdminPage.css'

const AdminPage = () => {
  return (
    <div>
      <ul className='admin-list'>
        <li><Link to='/admin/createproduct' className="btn btn-primary">Create product</Link></li>
        <li><Link to='/admin/manageproduct' className="btn btn-primary">Manage products</Link></li>
        <li><Link to='/admin/orders' className="btn btn-primary">View Orders</Link></li>
      </ul>
    </div>
  )
}

export default AdminPage