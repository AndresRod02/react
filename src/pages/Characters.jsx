import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [pages, setPages] = useState({next: null, prev: null})
    useEffect(()=>{
        getData('https://pokeapi.co/api/v2/pokemon/')
    }, [])
   const getData = (url)=>{
    axios.get(url)
    .then(resp => {setCharacters(resp.data.results)
    setPages({next: resp.data.next, prev: resp.data.previous})})
    .catch(error=>console.error(error))
   }
    return (
        <div>
            <h1>Pokedex</h1>
            <h3>Welcome John, here you cand find your favorite pokemon</h3>
            <ul>
            {characters?.map((characters)=>(
                <li key={characters.name}>
                    <Link to={characters.name}>
                    <h3>{characters.name}</h3>
                    </Link>
                </li>
            ))}
            </ul>
            <button onClick={()=>getData(pages.prev)} disabled={!pages.prev}>Anterior</button>
            <button onClick={()=>getData(pages.next)} disabled={!pages.next}>Siguiente</button>
        </div>
    );
};

export default Characters;