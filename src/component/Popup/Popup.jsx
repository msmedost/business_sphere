import React from 'react';
import './Popup.css';

const Popup = ({ messages, onClose }) => {
    return (
        <div className=' w-screen h-screen bg-black bg-opacity-85 fixed z-[999] top-0'>
            <div className="popup">
                <div>
                    <img
                        src='https://img.freepik.com/free-vector/birthday-chocolate-cake-with-red-chary-three-candles-confetti-background_1035-23604.jpg?t=st=1720008622~exp=1720012222~hmac=3945c6ac6cfd546fc80cf861e81963680eb0e6620e33b4a80acbdfca8fdb62d1&w=740'
                        className='birthday-image'
                    />
                </div>
                <div className="popup-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <p className='wish-text'>
                        We hope your day is filled with joy, love, and wonderful memories. Thank you for being a valued part of our journey. Cheers to many more amazing years ahead!
                    </p>
                    <p><em>Warm wishes,</em></p>
                    <p><strong><em>-MSME DOST</em></strong></p>
                    {messages.map((message, index) => (
                        <div className='message-client-name-container'>
                            <p key={index}>{message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Popup;
