import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateMyToys = () => {
    const toyToUpdate = useLoaderData()
    const {_id, toyPhoto, toyName, sellerName, sellerEmail, subCategory, ratings, price, quantity, description } = toyToUpdate
    const handleToyUpdate = event =>{
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedToy = {toyName, toyPhoto, sellerName, sellerEmail, subCategory, price, ratings, quantity, description}
        // const updatedToy = { price, quantity, description}
        fetch(`https://woodland-toys-server-habibasabrina.vercel.app/toys/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                toast.success("Toy info is updated")
                form.reset()
            }
        })
    }
    return (
        
        <div className='-mt-10'>
            <img src="/updatepeek.png" className='w-72 -mb-24 mx-auto' alt="" />

            <form onSubmit={handleToyUpdate} className='bg-green-200 p-10 md:mx-96 rounded-xl'>
                <h1 className='text-center mb-10 text-3xl font-bold text-[#673c0b]'>Update {toyName} Toy</h1>
                <img src={toyPhoto} className='w-28 border-2 border-red-800 rounded-full mx-auto' alt="" />
                <div>
                    <div className='text-center'>
                        <p className='font-bold text-[#673c0b] mt-5'>Price</p>
                        <input className='text-center focus:text-center  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="price" required />
                    </div>
                    <div className='text-center'>
                        <p className='font-bold mt-5 text-[#673c0b]'>Available Quantity</p>
                        <input className='text-center focus:text-center focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="number" name="quantity" required />
                    </div>
                </div>
                <div className='my-10'>
                    <p className='font-bold text-center text-[#673c0b]'>Detail Description</p>
                    <textarea name='description' className='focus:outline-0 mt-5 w-full p-5 border-2 border-red-800 rounded-xl'></textarea>
                </div>
                <div className='text-center'>
                    <button className='bg-[#673c0b] w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg- mt-10'>Update</button>

                </div>
            </form>
        </div>
    );
};

export default UpdateMyToys;