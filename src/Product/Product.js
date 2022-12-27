import React from 'react';
import './Product.css';

const Product = (props) => {
    const {exerciseName,age,time,details,img}=props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{exerciseName}</h3>
                <p className='details'>{details}</p>
                <div className='p-tags'>
                    <p>For Age : {age}</p>
                    <p>Time Required : {time}</p>
                </div>
                <button className='btn-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;