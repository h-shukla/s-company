import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState({});
    useEffect(() => {
        const cItems = localStorage.getItem('cartItems');
        setCartItems(cItems);
        console.log(cartItems);
    }, [cartItems]);
    return (
        <div>Cart</div>
    );
};

export default Cart;
