import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <img
                        src='https://images-platform.99static.com/MZXWaRAM0hdFsoiV5rl9WUctJq0=/500x500/top/smart/99designs-contests-attachments/57/57274/attachment_57274394'
                        alt=''
                    />
                    <h1>Exercise Alone</h1>
                </div>
            <div className='menu'>
                <a href='/home'>Home</a>
                <a href='/blog.html'>Blog</a>
                <a href='/about us'>About us</a>
            </div>
            </div>
        </div>
    );
};

export default Header;