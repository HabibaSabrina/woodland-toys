import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../pages/Shared/ScrollToTop/ScrollToTop';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../pages/Shared/Footer';
const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <div className='md:mx-32 mx-5 mt-10'>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
        <Footer></Footer>
        <Toaster></Toaster>

        </div>
    );
};

export default Main;