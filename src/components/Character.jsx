import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BoxIconElement } from 'boxicons';
const Character = ({residentsData}) => {
    const [residents, setResidents] = useState([])
    useEffect(()=>{
        axios.get(`${residentsData}`)
        .then((result)=>{
            console.log(result.data)
            setResidents([])
            setResidents(result.data)})
        .catch((error)=> console.error(error))
    }, [])
    let color = residents.status === 'Dead'
    ? 'red'
    : residents.status === 'unknown'
      ? 'gray'
      : 'green';
    return (
        <div className='details'>
        <h3 className='status'> <span><box-icon name='circle' type='solid' color={color} size='12px'></box-icon></span><span>{residents.status}</span></h3>
        <img src={`${residents.image}`} alt="" className='character'/>
        <h2 className='name'>{residents.name}</h2>
        <div className='info'>
        <h3 className='origin'>Origin <span>{residents.origin?.name}</span></h3>
        <h3 className='specie'>Specie <span>{residents.species}</span></h3>
        <h3 className='appear'>Times appear <span>{residents.episode?.length} time</span></h3>
        </div>
        </div>
    );
};

export default Character;