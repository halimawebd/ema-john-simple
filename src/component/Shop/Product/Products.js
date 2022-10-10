import React from 'react';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div>
            <img src={img} alt=""></img>
        </div>
    );
};

export default Product;