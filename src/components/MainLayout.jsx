import React from 'react';
import { Outlet } from 'react-router';
const MainLayout = () => {
    return (
        <div className='general-container'>
            <aside className='aside'>
                Aside
            </aside>
            <Outlet/>
        </div>
    );
};

export default MainLayout;