import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCreditCard } from '@fortawesome/free-solid-svg-icons'
const Orders = () => {

    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handlerRemoveFromCart = (id) => {
        const remainig = cart.filter(product => product.id !== id);
        setCart(remainig);
        removeFromDb(id);

    }
    const handlerClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handlerRemoveFromCart={handlerRemoveFromCart}>
                    </ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handlerClearCart={handlerClearCart}>
                    <Link className='procced-link' to='/checkout'>
                        <button className='btn-proceed'>Proceed Checkout
                            <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;