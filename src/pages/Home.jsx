import React from 'react';
import 'boxicons'
import Username from '../components/Username';
const Home = () => {
    return (
        <div className='home'>
            <h1>Hello trainer!</h1>
            <img src='/pokeball.png' alt="" className='pokeball'/>
            <img src="/Ash.png" alt="" id='ash'/>
            <h2>Give me your name to start</h2>
            <Username></Username>
        </div>
    );
};

export default Home;