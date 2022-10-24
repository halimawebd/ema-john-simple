import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Shop/Cart/Cart';

const Orders = () => {
    const {products, initialCart} = useLoaderData();// {products: products, initialCart:initialCart}
    const [cart, setCart] = useState(initialCart)
    return (
        <div className='shop-container'>
            <div className='orders-container'>
             {
              cart.map(product => <ReviewItem
              key={product.id}
              product={product}
              ></ReviewItem>)
             }
            </div>
          <div className='cart-container'>
            <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Orders;