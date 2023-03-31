import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Hello trainer!</h1>
            <img src="https://images.wikidexcdn.net/mwuploads/wikidex/0/02/latest/20221113131941/Ash_%28Viajes_Pok%C3%A9mon%29_2.png" alt="" />
            <h2>Give me your name to start</h2>
            <input type="text" required/>
            <button onClick={()=>navigate('/characters')}><box-icon name='send' type='solid' color='#ffffff' ></box-icon></button>
        </div>
    );
};

export default Home;