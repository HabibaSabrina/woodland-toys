import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from './ToyRow';

const AllToys = () => {
    const allToys = useLoaderData()
    console.log(allToys)
    return (
        <div>
            <div className="overflow-x-auto w-full mt-20">
                <table className=" my-5 w-full">
                    <thead className='bg-green-300 text-red-800'>
                        <tr >
                            <th className='py-5'>Image</th>
                            <th className='py-5'>Seller Name</th>
                            <th className='py-5'>Toy Name</th>
                            <th className='py-5'>Sub-category</th>
                            <th className='py-5'>Price</th>
                            <th className='py-5'>Available Quantity</th>
                            <th className='py-5'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy => <ToyRow key={toy._id} toy={toy}></ToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;