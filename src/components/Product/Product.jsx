import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product;
    const handlerAddToCart = props.handlerAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <dir className='product-info'>
                <p >Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} start</p>
            </dir>
            <button onClick={ () => handlerAddToCart(props.product)} className='btn-cart'>Add to Cart  <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};
import './Product.css'
export default Product;