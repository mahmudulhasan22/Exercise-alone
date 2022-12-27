import React from 'react';
import './Product.css';

const Product = (props) => {
    const {exerciseName,age,time,details,img}=props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{exerciseName}</h3>
                <p><small>{details}</small></p>
                <p>For Age : {age}</p>
                <p>Time Required : {time}</p>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Product;