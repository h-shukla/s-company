import React, { Fragment } from 'react'
import { CgMouse } from 'react-icons/all'
import './Home.css'
import Product from './Product.js'

const product = {
    name: 'Blue Shoes',
    images: [{ url: 'https://media.istockphoto.com/photos/sneakers-picture-id495204892?b=1&k=20&m=495204892&s=170667a&w=0&h=y85L50Hoiw245Vy9UDA1Wd6ggCjDWC1u9_bfoZyRskM=' }],
    price: '4000',
    _id: 'alphabeta'
}
const Home = () => {
    return (
        <Fragment>
            <div className="banner">
                <p>Welcome to S-company</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
                <a href="#container">
                    <button>
                        Scroll <CgMouse />
                    </button>
                </a>
            </div>

            <h2 className="homeHeading">
                Featured Products
            </h2>

            <div className="container" id="container">
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
        </Fragment>
    )
}

export default Home