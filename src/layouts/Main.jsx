import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='md:mx-32 mx-5 mt-10'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;