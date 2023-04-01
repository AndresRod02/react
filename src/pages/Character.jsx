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
            <img src={data.sprites?.front_default} alt="" />
            <div>
                <h1 className='pokemon-name'>{data.name}</h1>
                <h3>{data.id}</h3>
            </div>
            <div>
                <h3>{data.weight}</h3>
                <h3>{data.height}</h3>
            </div>
            <div>
                <h2>Abilities</h2>
                {data.abilities ? (
                data.abilities.map((ability, index) => (
                <h3 key={index}>{ability.ability.name}</h3>
                ))
                ) : (
            <p>No abilities found.</p>
                )}
            </div>
            <div>
                <h2>Movements</h2>
                <ul>
                    {data.moves && data.moves.map((move, index) => (
                        <li key={index}>{move.move.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Types</h2>
                {data.types?.map((type, index) => (
                <h3 key={index}>{type.type.name}</h3>
                ))}
            </div>
        </div>
    );
};

export default Character;