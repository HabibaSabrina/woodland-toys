import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
const ShopTab = ({subData}) => {
    const {toyPhoto, toyName, price, ratings} = subData
    return (
        <div className='flex gap-10 p-10 items-center bg-sky-100 my-10 rounded-xl border-8 border-gradient-to-r from-cyan-500 to-blue-500'>
            <img src={toyPhoto} className='border-2 border-red-800 w-60 rounded-xl m-5' alt="" />
            <div>
            <p className='text-2xl font-bold'>{toyName}</p>
            <p className='my-5 text-xl font-semibold'>Price: {price}$</p>
            <div className='flex items-center'>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={Math.round(ratings || 0)} readOnly />
                    <span className='ml-2'> {ratings}</span>
                </div>
                <div className='my-5 text-center'>
                    <button className='p-3 px-12 bg-green-500 border-2 border-green-800 hover:bg-green-800 text-xl font-semibold text-white rounded-full'>View Details</button>
                    </div>
            </div>


        </div>
    );
};

export default ShopTab;