import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
const ToyDetails = () => {
    const singleToyData = useLoaderData()
    const {toyPhoto, toyName, sellerName, sellerEmail, ratings, price, quantity, description } = singleToyData
    return (
        <div className='bg-green-200 p-20'>
            <div className='flex justify-center mx-20 items-center gap-20 bg-white p-20 rounded-xl '>
            <img className='w-64' src={toyPhoto} alt="" />
            <div className='border-l-2 border-green-300'>
                <div className='ml-10'>
                <h1 className='text-3xl font-bold text-green-800'>{toyName}</h1>
                <p className='text-2xl font-semibold mt-5 mb-3'><span className='text-green-800'>Seller Name:</span> {sellerName}</p>
                <p className='text-xl font-semibold my-3'><span className='text-green-800'>Seller Email:</span> {sellerEmail}</p>
                <div className='flex items-center my-3'>
                    <p className='font-semibold text-green-800'>Ratings: </p>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={Math.round(ratings || 0)} readOnly />
                    <span className='ml-2'> {ratings}</span>
                </div>
                <p className='font-semibold my-3'><span className='text-green-800'>Price:</span> {price}$</p>
                <p className='font-semibold my-3'><span className='text-green-800 '>Available Quantity:</span> {quantity}</p>
                <p className='font-semibold my-3'><span className='text-green-800'>Description:</span> {description}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ToyDetails;