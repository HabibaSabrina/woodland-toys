import React from 'react';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyToyRow = ({userToy, handleToyDelete}) => {
    const {_id, toyPhoto, toyName, subCategory, price, quantity, ratings, description} = userToy
    

    return (
        <tr className='font-semibold text-center border-b-2 border-green-200 bg-[#f3f9f6]'>
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {toyPhoto && <img src={toyPhoto} className='p-2 rounded-xl' alt={toyName} />}
                </div>
            </div>
        </td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}$</td>
        <td>{quantity}</td>
        <td>{ratings}</td>
        <td className='w-56 p-3'>{description}</td>
        <td><Link to={`/updatetoy/${_id}`}><button className='p-3  bg-green-500 hover:bg-green-800  font-semibold text-white rounded-full'><FaEdit></FaEdit></button></Link></td>
        <td><button onClick={() => handleToyDelete(_id)} className='p-3 mr-5 bg-green-500 hover:bg-green-800  font-semibold text-white rounded-full'><FaRegTrashAlt></FaRegTrashAlt></button></td>
    </tr>
    );
};

export default MyToyRow;