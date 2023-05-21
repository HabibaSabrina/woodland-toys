import React from 'react';
import { FaArrowRight, FaTwitter, FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-700'>
            <div className='flex gap-2 pt-10 items-center justify-center'>
                    <img src="/logo.png" className='w-16' alt="" />
                    <h1 className='h-12 text-4xl font-bold animate-text bg-gradient-to-r from-[#d0001f] via-white to-[#3c22e7] bg-clip-text text-transparent'>Woodland Toys</h1>
                </div>
                <div className=' text-white md:flex gap-36 justify-center items-center py-5 max-sm:p-5'>
                <div>
                    <h1 className='text-2xl font-semibold my-5'>Contacts</h1>
                    <p><b>Email:</b> woodlandtoysr@gmail.com</p>
                    <p className='my-3'><b>Phone:</b> 01923333333</p>
                    <p className='mb-3'><b>Fax:</b> +1 (0) 000 0000 002</p>
                    <h1 className='my-5 text-2xl font-semibold'>Follow</h1>
                    <div className='flex gap-3'>
                        <Link to='https://www.facebook.com/'><button className='p-3 rounded-full bg-blue-400 text-white'><FaFacebook className='w-6 h-6'></FaFacebook></button></Link>
                        <Link to='https://www.instagram.com/'><button className='bg-red-700 text-white p-3 rounded-full bg-'><FaInstagram className='w-6 h-6'></FaInstagram></button></Link>
                        <Link to='https://www.google.com/'><button className='p-3 bg-green-600 text-white rounded-full bg-'><FaGoogle className='w-6 h-6'></FaGoogle></button></Link>
                    </div>
                   
                </div>
                <div>
                    <h1 className='text-2xl font-semibold my-5'>About Us</h1>
                    <p className='leading-7 w-80'>This website is all about bangladeshi chefs and bangladeshi cuisine recipes. You can find different types of bangladeshi cuisine recipes here. Thank you for visiting us.</p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold my-5'>Address</h1>
                    <p className='leading-7 w-80'>32, Justice SM Morshed Sharany Agargoan Sher-e-Bangla Nagar Dhaka-1207, Bangladesh</p>
                </div>
                </div>
                <div className='bg-slate-900 text-white border-t-2 max-sm:p-5'>
                <p className='font-semibold text-center p-3'>Copyright © 2014-2023. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;