import React from 'react';
import './ReviewItems.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({ product, handlerRemoveFromCart }) => {
    const { id, img, name, price, quantity } = product

    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-deteils">
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Shopping Charge: <span className='orange-text'>${quantity}</span></p>
            </div>
            <button onClick={() => handlerRemoveFromCart(id)} className='btn-delete'> <FontAwesomeIcon className='delete-icone' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItems;