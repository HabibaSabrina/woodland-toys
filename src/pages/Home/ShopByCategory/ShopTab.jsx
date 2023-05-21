import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
const ShopTab = ({subData}) => {
    const {_id, toyPhoto, toyName, price, ratings} = subData
    const {user} = useContext(AuthContext)
    const handle = () =>{
        if(!user){
            toast.error("You have to login first to see details")
        }
    }
    return (
        <div className='flex gap-10 p-10 items-center bg-sky-100 my-10 rounded-xl'>
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
                    <Link to={`/toy/${_id}`}><button onClick={handle} className='p-3 px-12 bg-green-500 border-2 border-green-800 hover:bg-green-800 text-xl font-semibold text-white rounded-full'>View Details</button></Link>
                    </div>
            </div>


        </div>
    );
};

export default ShopTab;