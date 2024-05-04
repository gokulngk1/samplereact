// src/RandomUserComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomUserComponent = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
            .then(response => {
                setUserData(response.data.results[0]);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className='css'>
            {userData ? (
                <div>
                    <img src={userData.picture.large} alt="User" />
                    <p>Name: {userData.name.first} {userData.name.last}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone: {userData.phone}</p>
                    <p>Location: {userData.location.city}, {userData.location.country}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RandomUserComponent;
