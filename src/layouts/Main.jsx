import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../pages/Shared/ScrollToTop/ScrollToTop';

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <div className='md:mx-32 mx-5 mt-10'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Main;