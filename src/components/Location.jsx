import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Location = ({dimensionData}) => {
    const [dimension, setDimension] = useState({})
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${dimensionData}`)
        .then((result)=>{
            setDimension(result.data)
        })
    })
    return (
        <div className='cardDimension'>
            <div className='dimensionSub'>
            <h1>Name:</h1>
            <h1>Type:</h1>
            <h1>Dimension:</h1>
            <h1>Population:</h1>
            </div>
            <div className='dimensionInfo'>
            <h2>{dimension.name}</h2>
            <h2>{dimension.type}</h2>
            <h2>{dimension.dimension}</h2>
            <h2 className='population'>{dimension.residents?.length}</h2>
            </div>
        </div>
    );
};

export default Location;