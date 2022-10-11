import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Product/Products';
import './Shop.css'

const Shop = () => {
    const [Products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
       fetch('products.json') 
       .then(res=> res.json())
       .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getStoredCard();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = Products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            
            saveCart.push(addedProduct);
         }
    }
       
   setCart(saveCart);
    },[Products])
     
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
        }
      
        setCart(newCart);
        addToDb(selectedproduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
             {
             Products.map(product=><Product 
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