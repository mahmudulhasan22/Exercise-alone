import React, { useEffect, useState } from 'react';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  getLocalItems = () => {
    let breakTime = localStorage.getItem('Break Time');
    if(breakTime){
        return JSON.parse(localStorage.getItem('Break Time'));
    }
    else{
        return [];
    }
}
const Cart = (props) => {
    const{cart} =props;
    const[count , setCount] = useState(getLocalItems());

    const increaseCount = () => setCount(10);
    const increaseCount20 = () => setCount(20);
    const increaseCount30 = () => setCount(30);
    const increaseCount40 = () => setCount(40);
    const increaseCount50 = () => setCount(50);
    
    useEffect(()=>{
        localStorage.setItem('Break Time', JSON.stringify(count))
    },[count]);

    let total = 0 ;
    for(const product of cart){
        total = total + parseInt(product.time) ;
    }

    const notifyToast = () => toast("wow ! well done.");

    return (
        <div className='cart'>
            <div className="my-info">
                <h2>Mahmudul Hasan</h2>
                <p>
                    Munshiganj, Bangladesh
                </p>
            </div>
            <div className="personal-info">
                <h3 className='personal'>75kg</h3>
                <h3 className='personal'>5.2</h3>
                <h3 className='personal'>21Yrs</h3>
                <p>Weight</p>
                <p>Height</p>
                <p>Age</p>
            </div>

            <h2>Add A Break</h2>
            <div className="breakTime-part">
                <div className="btn-break">
                    <button onClick={increaseCount}>10s</button>
                    <button onClick={increaseCount20}>20s</button>
                    <button onClick={increaseCount30}>30s</button>
                    <button onClick={increaseCount40}>40s</button>
                    <button onClick={increaseCount50}>50s</button>
                </div>
            </div>

            <h2>Exercise Details</h2>
            <h3 className='exercise-time'>Exercise Time : {total}</h3>
            <h3 className='break-time'>Break Time : {count}</h3>
            <button onClick={notifyToast} className='activity-btn'> Activity Completed</button>
            <ToastContainer />

        </div>
    );
};

export default Cart;