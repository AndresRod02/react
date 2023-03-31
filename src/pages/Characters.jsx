import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Characters = () => {
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/ability/')
        .then((resp)=>console.log(resp.data.results))
        .catch(error=>console.error(error))
    }, [])
    return (
        <div>
            <h1>Lista de pokemones</h1>
        </div>
    );
};

export default Characters;