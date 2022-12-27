import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div className='cart'>
            <div className="my-info">
                <h2>Mahmudul Hasan</h2>
                <p>
                    Munshiganj, Bangladesh.
                </p>
            </div>
            <div className="age-info">
                <h3>75kg</h3>
                <h3>5.2</h3>
                <h3>21Yrs</h3>

                <p>Weight</p>
                <p>Height</p>
                <p>Age</p>
            </div>

            <h2>Add A Break</h2>
            <div className="breakTime-part">
                <div className="btn-break">
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>

            <h2>Exercise Details</h2>
            <h3 className='exercise-time'>Exercise Time : </h3>
            <h3 className='break-time'>Break Time : </h3>
            <button className='activity-btn'> Activity Completed</button>

        </div>
    );
};

export default Cart;