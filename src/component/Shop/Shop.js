import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products , setProducts] = useState([]);
    const[cart , setCart]= useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    } ,[]);

    const handleAddToCart = product => {
        const newCart = [...cart , product];
        setCart(newCart);
    }

    return (
        <div className='shop-back'>
            <div className='shop-container'>
                <div className="product-container">
                    {products.map(product => (
                        <Product
                            key = {product.id}
                            product = {product}
                            handleAddToCart = {handleAddToCart}
                        ></Product>
                    ))}
                </div>
                <div className='cart-container'>
                    <Cart cart = {cart}></Cart>
                </div>
            </div>

            {/* blog section  */}
            
            <div className='blog-section'>
                <h3 className='blog-header'>Blog Part</h3>
                <div className="blog-questions">
                    <div className='question'>
                    <h3>1. How does ReactJS Works?</h3>
                    <p>Ans : ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering our code.</p>
                    </div>
                    <div className='question'>
                    <h3>2. What are the differences between props and state?</h3>
                    <p>Ans : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
                    </div>
                    <div className='question'>
                    <h3>3. Where using useEffect?</h3>
                    <p>Ans : The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;