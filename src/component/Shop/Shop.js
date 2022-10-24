import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Product/Products';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

 
    useEffect(() => {
        const storedCart = getStoredCard();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            
            saveCart.push(addedProduct);
         }
    }
       
   setCart(saveCart);
    },[products])
     
    const handleAddToCart = (selectedproduct) =>{   
        console.log(selectedproduct);
        let newCart = [];
        const exists= cart.find(product =>product.id === selectedproduct.id);
        if(!exists){
            selectedproduct.quantity = 1;
            newCart = [...cart, selectedproduct];
        }
        else{
            const rest = cart.filter(product =>product.id !== selectedproduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }
      
        setCart(newCart);
        addToDb(selectedproduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
             {
             products.map(product=><Product 
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)   
             }  
            
            </div>
            <div className="cart-container">
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;