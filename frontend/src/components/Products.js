import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/Product.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [productsCount, setProductsCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    if (loading) {
      (async () => {
        const prod = await axios.get(`http://localhost:5000/api/v1/products?page=${page}`, null)
        setProducts(prod.data.products)
        setProductsCount(prod.data.productsCount)
        setLoading(false)
      })()
    }
    const pages = Math.ceil(productsCount / 8)
    setTotalPages(pages)
    // eslint-disable-next-line
  }, [loading])

  const onClickNextPage = () => {
    setPage(page + 1);
    setLoading(true)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const onPreviousClick = () => {
    setPage(page - 1)
    setLoading(true)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const getFilteredProducts = (products) => {
    return products.filter(product => product.name.includes(search))
  }

  const onSearchChange = (e) => {
    setSearch(e.currentTarget.value)
  }

  return (
    <div className='container d-flex flex-wrap center product-container'>
      <div className="search">
        <input type="text" className='form-control' style={{ "minWidth": "30vw" }} value={search} id="searchBar" placeholder='Search products in this page' onChange={onSearchChange} />
        {!loading && <p>{page}/{totalPages} pages</p>}
      </div>
      <div className='container d-flex flex-wrap m-2 center'>
        {!loading &&
          getFilteredProducts(products).map((product) => (
            <div className="card m-3" style={{ width: '18rem' }} key={product._id}>
              <img src={product.image} className="card-img-top rounded" alt="" />
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
      <div className='container d-flex flex-col center'>
        {page < totalPages && <button type="button" className="btn btn-primary m-1 " onClick={onClickNextPage}>Load more</button>}
        {page > 1 && <button type='button' className='btn btn-secondary m-1' onClick={onPreviousClick}>Previous page</button>}
      </div>
    </div>
  )
}

export default Products