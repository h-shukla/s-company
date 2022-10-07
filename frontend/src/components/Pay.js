import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Pay = () => {
  const navigate = useNavigate();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const pinRef = useRef();
  const phoneRef = useRef();

  const [payment, setPayment] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const c = localStorage.getItem('cart');
    if (!c.isEmpty) {
      const parsedC = JSON.parse(c)
      setCartItems(parsedC);
    }
  }, [])

  const getCartCost = () => {
    let cost = 0;
    cartItems.forEach(item => cost += item.price);
    return cost;
  }

  const postData = async (data) => {
    const res = await axios.post('http://localhost:5000/api/v1/order/new', data, {
      params: {
        token: localStorage.getItem('token')
      }
    });
    return res.data;
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const shippingInfo = {
      'address': addressRef.current.value,
      'city': cityRef.current.value,
      'state': stateRef.current.value,
      'country': countryRef.current.value,
      'pinCode': pinRef.current.value,
      'phoneNo': phoneRef.current.value,
    };
    const data = {
      'shippingInfo': shippingInfo,
      'orderItems': cartItems,
      'paymentInfo': payment,
      'itemsPrice': getCartCost(),
    };

    const res = await postData(data);
    if (res.success !== true) {
      alert('Some Error occurred');
    } else {
      alert('Your Order has been placed');
      clearCart();
      navigate('/profile');
    }
  }

  return (
    <div className='m-4'>
      <div className="mb-3" style={{ 'minWidth': '30vw' }}>
        <h5>Address</h5>
        <textarea ref={addressRef} className="form-control" id="address" rows="4" placeholder='Enter the shipping address'></textarea>
        <h5>City</h5>
        <input type='text' ref={cityRef} className="form-control" id="address" rows="4" ></input>
        <h5>State</h5>
        <input type='text' ref={stateRef} className="form-control" id="address" rows="4" ></input>
        <h5>Country</h5>
        <input type='text' ref={countryRef} className="form-control" id="address" rows="4" ></input>
        <h5>Pin Code</h5>
        <input type='number' ref={pinRef} className="form-control" id="address" rows="4" ></input>
        <h5>Phone Number</h5>
        <input type='number' ref={phoneRef} className="form-control" id="address" rows="4" ></input>

      </div >
      <div className="dropdown">
        <h5>Payment method</h5>
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {payment !== '' ? payment : 'Payment method'}
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" onClick={() => { setPayment('Cash On Delivery') }}>Cash On Delivery</button></li>
          <li><button className="dropdown-item disabled">Credit Card</button></li>
          <li><button className="dropdown-item disabled">UPI</button></li>
        </ul>
      </div>
      <button className='m-4 btn btn-success' onClick={handlePlaceOrder}>Place Order</button>
    </div >
  )
}

export default Pay