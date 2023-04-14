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
        <div className='containerDetails'>
            <img src="/pokeball.png" alt="" className='pokeball' />
            <img src="/pokemon.webp" alt="" className='pokemonImg'/>
            <div className='principalDetails'>
                <img src={data.sprites?.other.dream_world.front_default} alt="" />
                <h1 className='pokemon-name'>{data.name}</h1>
                <h3 className='weight'>{data.weight} <br /> <span>Weight</span></h3>
                <h3 className='height'>{data.height} <br /> <span>Height</span> </h3>
                <h3 className='idDetail'>#{data.id}</h3>
            </div>
            <div className='abilities'>
                <h2>Abilities</h2>
                {data.abilities ? (
                data.abilities.map((ability, index) => (
                <h3 key={index}>{ability.ability.name}</h3>
                ))
                ) : (
            <p>No abilities found.</p>
                )}
            </div>
            <div className='movements'>
                <h2>Movements</h2>
                <ul>
                    {data.moves && data.moves.map((move, index) => (
                        <li key={index}>{move.move.name}</li>
                    ))}
                </ul>
            </div>
            <div className='typeDetails'>
                <h2>Types</h2>
                {data.types?.map((type, index) => (
                <h3 key={index}>{type.type.name}</h3>
                ))}
            </div>
        </div>
    );
};

export default Character;