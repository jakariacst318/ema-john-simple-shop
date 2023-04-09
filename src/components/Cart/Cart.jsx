import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = ({cart, handlerClearCart, children}) => {
    // const cart = props.cart  option.1
    // const { cart } = props;

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        // if( product.quantity === 0){
        //     product.quantity =1;
        // }
        // uporer nicer comment kora aki jinis ## update onno vabe kora jai seta  kora hlo
        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 / 100;

    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>

            <button onClick={ handlerClearCart} className='btn-clear-cart'> 
                <span >Clear Cart</span>
                <FontAwesomeIcon  icon={faTrashAlt}/>
            </button>
            {children}
        </div>
    );
};

export default Cart;