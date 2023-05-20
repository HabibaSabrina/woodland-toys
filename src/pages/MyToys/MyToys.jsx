import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyRow from './MyToyRow';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [userToys, setUserToys] = useState([])
    console.log(user)
    const url = `http://localhost:5000/toys?sellerEmail=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserToys(data))
    }, []);
    const handleToyDelete = _id =>{
        fetch(`http://localhost:5000/toys/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                alert("deleted successfully")
                const remaining = userToys.filter(toy => toy._id !==_id)
                setUserToys(remaining)
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full mt-20">
                <table className=" my-5 w-full">
                    <thead className='bg-green-300 text-red-800'>
                        <tr >
                            <th className='py-5'>Image</th>
                            <th className='py-5'>Toy Name</th>
                            <th className='py-5'>Sub-category</th>
                            <th className='py-5'>Price</th>
                            <th className='py-5'>Available Quantity</th>
                            <th className='py-5'>Rating</th>
                            <th className='py-5'>Description</th>
                            <th className='py-5'></th>
                            <th className='py-5'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userToys.map(userToy => <MyToyRow key={userToy._id} userToy={userToy} handleToyDelete={handleToyDelete}></MyToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;