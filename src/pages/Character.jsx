import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
const Character = () => {
    const [data, setData] = useState({})
    const {name} = useParams()
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((resp)=>setData(resp.data))
        .catch((error)=>console.error(error))
    }, [name])
    return (
        <div className='view-container'>
            <h1 className='pokemon-name'>{data.name}</h1>
            <img src={data.sprites?.front_default} alt="" />
        </div>
    );
};

export default Character;