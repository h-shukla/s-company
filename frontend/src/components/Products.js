import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/Product.css'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const prod = await axios.get('http://localhost:5000/api/v1/products', {
        params: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTRhODZlZjg5Y2U5ZTMyMmE2MWFlYiIsImlhdCI6MTY2MjI5ODIyMiwiZXhwIjoxNjYyNzMwMjIyfQ.H7rfYjUnN1G5GUyyH_X5uxDRCM3H8ZAoiKjjBWQw7KA'
        }
      })
      setProducts(prod.data.products)
    }
    getProducts()
  }, [])

  return (
    <div className='container d-flex flex-wrap m-2 center'>
      {
        products.map((product) => (
          <div className="card m-3" style={{ width: '18rem' }}>
            <img src={product.image} className="card-img-top rounded" alt="Product image" />
            <div className="card-body">
              <h5 className="card-title" >{product.name}</h5>
              <h6 >{product.price}</h6>
              <p className="card-text" >{product.description}</p>
              <Link to="#" className="btn btn-primary">Add to Cart</Link>
            </div>
          </div>
        ))
      }
    </div >
  )
}

export default Products