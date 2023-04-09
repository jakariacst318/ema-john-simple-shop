import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storeCart = getShoppingCart();
        const saveCart = [];
        // step :1 get id
        for (const id in storeCart) {
            // step: 2 get the product by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {

                // step:3  get quantity of the product
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                // step:4 add the product to the save cart
                saveCart.push(addedProduct)
            }
        }
        // step: 5 set the cart
        setCart(saveCart);

    }, [products]);

    const handlerAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        const exists = cart.find(pd => pd.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remainig = cart.filter(pd => pd.id !== product.id);
            newCart = [...remainig, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }
    const handlerClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}
                    handlerClearCart={handlerClearCart}
                    >
                    <Link className='procced-link' to='/orders'>
                        <button className='btn-proceed'>Review Order <FontAwesomeIcon  icon={faArrowRight}/></button>
                    </Link>
                    </Cart>
            </div>

        </div>
    );
};

export default Shop;