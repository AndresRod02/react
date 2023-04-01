import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
const ProtectedRoutes = () => {
    const username = useSelector(state => state.username)
    if(username){
        return <Outlet/>
    }
    else{
        return <Navigate to='/'/>
    }
};

export default ProtectedRoutes;