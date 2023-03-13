import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import Loader from './Loader';
import 'boxicons'
import Swal from 'sweetalert2';
const RickYMorty = () => {
   const [search, setSearch] = useState("")
   const [residents, setResidents] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [random, setRandom] = useState(Math.floor(Math.random() * (126) + 1)) 
   const [isEmpty, setIsEmpty] = useState(true)
   useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then((result)=>{
            if(result.data?.residents.length === 0){
                axios.get(`https://rickandmortyapi.com/api/location/1`)
                .then((result)=> {
                    setResidents(result.data?.residents)
                    setIsEmpty(false)
                })
                .catch((error)=> console.error(error))
            }
            else{
                setIsEmpty(false)
                console.log(result.data?.residents)
                setResidents(result.data?.residents)
            }
        })
        .catch((error)=> console.error(error))
    }, [])
    const searchId = () => {
        if(!search){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes colocar un número',
                color: 'white',
                iconColor: '#8EFF8B',
                confirmButtonColor: '#8EFF8B',
                background: '#00000082'
              })
        }
        else{
            setResidents([])
            setIsLoading(true)
            axios
              .get(`https://rickandmortyapi.com/api/location/${search}`)
              .then((result) => {
                if(result.data?.residents.length === 0){
                    axios.get('https://rickandmortyapi.com/api/location/1')
                    .then((result)=>{
                        setIsEmpty(true)
                        setResidents(result.data?.residents);
                        setTimeout(()=>{
                        setIsEmpty(false) 
                        }, 3000) 
                    })
                    .catch((error)=> console.error(error))
                }
                else{
                    setIsLoading(false)
                    setResidents(result.data?.residents)
                }
            })
                .catch((error) => console.error(error));
        }
      };
        //Loader con TimeOut porque la api carga los datos muy rápido y no se alcanza a apreciar
    setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    return (
        <div>
            {isLoading && <Loader/>}
            {isEmpty && <Loader/>}
            {isEmpty && <h1 className='empty'>La dimensión a la que haces referencia no tiene residentes, serás redirigido a Earth(C-137)</h1>}
        <div className='header'>
        <img src="/logo.svg" alt="" />
        <input className='input' min='0'type="number" required placeholder='     Type a location id...' onChange={(e)=>{setSearch((e.target.value))}}/>
        <button type='submit' onClick={searchId} className='search'>Search    <box-icon name='search' color='aliceblue' size='12px' className='boxicon'></box-icon></button>
        </div>
        <ul className='cardContainer'>
        {residents.map((resident, index) => (
            <li key={index} id={index} className='card'>
                <Character residentsData={resident} />
            </li>
            ))}
        </ul>
        </div>
    );
};

export default RickYMorty;