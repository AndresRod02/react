import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>navigate('/characters')}>Ir a lista</button>
        </div>
    );
};

export default Home;