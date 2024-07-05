import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './birthday.css'; 
import Popup from '../Popup/Popup';

function BirthDay() {
    const [birthdays, setBirthdays] = useState([]);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        axios.get('https://business-sphere-backend.onrender.com/api/forms/getdata')
            .then(response => {
                
                const logosData = response.data.map(eachData => ({
                    name: eachData.name,
                    dob: eachData.dob
                }));
               

                setBirthdays(logosData);

            })
            .catch(error => {
                console.error('Error fetching the brands:', error);
                setError('Error fetching the brands');
            });
    }, []);

    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10); 
  
        const birthdaysToday = birthdays.filter(birthday => birthday.dob === today);

        if (birthdaysToday.length > 0) {
            const messages = birthdaysToday.map(birthday => `Happy Birthday ${birthday.name}!`);
            setPopupMessage(messages);
            setShowPopup(true);
        }
    }, [birthdays]);

    const closePopup = () => {
        setShowPopup(false);
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {showPopup && <Popup messages={popupMessage} onClose={closePopup} />}
        </div>
    );
}

export default BirthDay;
