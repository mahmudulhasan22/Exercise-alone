import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    } ,[]);

    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product => (
                    <Product
                        key = {product.id}
                        product = {product}
                    ></Product>
                ))}
            </div>
            <div className='cart-container'>
                <h1>cart container</h1>
            </div>
        </div>
    );
};

export default Shop;