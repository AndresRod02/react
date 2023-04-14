import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { setNewValue } from '../store/slices/username.slice';
const Username = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const username = useSelector(state => state.username)
    const dispatch = useDispatch()
    const changeValue = ()=>{
        dispatch(setNewValue(value))
        navigate('/characters')
    }
    return (
        <div className='username'>
            <input type="text" required value={value} onChange={e =>setValue(e.target.value)}/>
            <button onClick={changeValue}>
                <box-icon name='send' type='solid' color='#ffffff' ></box-icon>
            </button>
        </div>
    );
};

export default Username;