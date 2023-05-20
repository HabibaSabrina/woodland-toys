import React from 'react';

const ToyRow = ({toy}) => {
    const {toyPhoto, sellerName, toyName, subCategory, price, quantity} = toy
    return (
        <tr className='font-semibold text-center border-b-2 border-green-200 bg-[#f3f9f6]'>
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {toyPhoto && <img src={toyPhoto} className='p-2 rounded-xl' alt="Avatar Tailwind CSS Component" />}
                </div>
            </div>
        </td>
        <td>
            {sellerName && sellerName}
        </td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}$</td>
        <td>{quantity}</td>
        <td><button className='p-3 px-6 bg-green-500 hover:bg-green-800  font-semibold text-white rounded-full'>View Details</button></td>
    </tr>
    );
};

export default ToyRow;