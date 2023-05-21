import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='md:flex gap-10 items-center justify-center my-20 rounded-xl bg-green-100 md:p-20 p-5'>
            <img className='w-5/12 rounded-xl max-sm:mx-auto' src="/bannerimg/banner.jpeg" alt="" />
            <div className='md:mr-20'>
                <h1 className='md:h-12 text-4xl font-bold animate-text bg-gradient-to-r from-[#225a04] via-[#38f771] to-[#114066] bg-clip-text text-transparent'>Welcome to Woodland Toys</h1>
                <p className='text-green-700 mb-10 mt-5'>Here you can get various types of animal toys. Also you can upload to sell you own toys. Thank you for visiting us!</p>
                <div className='md:flex max-sm:grid max-sm:grid-cols-2 gap-5'>
                    <img className='w-24 rounded-xl' src="/bannerimg/cat ready.jpg" alt="" />
                    <img className='w-24 rounded-xl' src="/bannerimg/doghouse.jpg" alt="" />
                    <img className='w-24 rounded-xl' src="/bannerimg/brownhorse.jpg" alt="" />
                    <img className='w-24 rounded-xl' src="/bannerimg/pinkted.jpg" alt="" />
                    <img className='w-24 rounded-xl' src="/bannerimg/sleepcow.jpg" alt="" />
                </div>
                <div className=' my-8'>
                <Link to='/alltoys'><button className='bg-green-700 hover:bg-green-900 p-3 px-10 rounded-xl text-white font-semibold'>Show All Toys</button></Link>
                {
                    !user && <Link to='/register'><button className='bg-green-700 hover:bg-green-900 p-3 px-10 rounded-xl ml-5 text-white font-semibold'>Register</button></Link>
                }
                </div>
            </div>
            
        </div>
    );
};

export default Banner;