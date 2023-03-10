import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const RickYMorty = () => {
   const [api, setApi] = useState({})
   const [search, setSearch] = useState("")
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * (126) + 1)}`)
        .then((result)=>{ 
            console.log(result.data)
            setApi(result.data)
        })
        .catch((error)=> console.error(error))
    }, [])
    const searchId = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
        .then((result)=>{
            setApi(result.data)
        })
        .catch((error)=> console.error(error))
    }
    return (
        <div>
        <input type="text" onChange={(e)=>{setSearch((e.target.value))}}/>
        <button onClick={searchId}>Search</button>
        <h1>{api.name}</h1>
        <ul>
            {api.map((api)=>{
                <li>
                    {api.name}
                </li>
            })}
        </ul>
        </div>
    );
};

export default RickYMorty;