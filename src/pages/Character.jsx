import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Character = () => {
    const [data, setData] = useState({})
    const {name} = useParams()
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((resp)=>setData(resp.data))
        .catch((error)=>console.error(error))
    }, [name])
    const colors = {
        normal : '#616161',
        fighting: '#dd5a5a',
        flying: '#55b6e2',
        poison: '#5555e2',
        ground: '#613b13',
        rock: '#9a9997',
        bug: '#7c3795',
        ghost: '#05033f',
        steel: '#303030',
        fire: '#e21313',
        water: '#5683ff',
        grass: '#48da8f',
        electric: '#dbe43d',
        psychic: '#3dbae4',
        ice: '#07c8f3',
        dragon: '#f38107',
        dark: '#111111',
        fairy: '#ef2fe5',
        unknown: '#0f4a1f',
        shadow: '#4a0f41'
      }
    return (
        <div className='containerDetails'>
            <img src="/pokeball.png" alt="" className='pokeball'/>
            <Link to='/characters'>
            <img src="/pokemon.webp" alt="" className='pokemonImg'/>
            </Link>
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
                        <li key={index} style={{listStyleType: 'none'}}>{move.move.name}</li>
                    ))}
                </ul>
            </div>
            <div className='typeDetails'>
                <h2>Types</h2>
                {data.types?.map((type, index) => (
                <h3 key={index} style={{backgroundColor: colors[type.type.name]}}>{type.type.name}</h3>
                ))}
            </div>
        </div>
    );
};

export default Character;