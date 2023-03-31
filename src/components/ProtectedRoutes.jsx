import React from 'react';
import { Navigate, Outlet } from 'react-router';
const ProtectedRoutes = () => {
    if(10>0){
        return <Outlet/>
    }
    else{
        return <Navigate to='/'/>
    }
};

export default ProtectedRoutes;