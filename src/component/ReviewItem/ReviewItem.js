import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviwItem.css';
const ReviewItem = ({product}) => {
    const {name, price, quantity, shipping, img } = product;
    return (
        <div className='review-item'>
            <div>
               <img src={img} alt="" />
            </div>
                <div className="review-details-container">
                    <div className="review-details">
                        <p>{name}</p>
                        <p><small>Price: ${price}</small></p>
                        <p><small>shipping: ${shipping}</small></p>

                        <p><small>Quantity: {quantity}</small></p>
                 </div>
                 <div className="delete-container">
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                 </div>
                </div>
        </div>
    );
};

export default ReviewItem;