import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from './ToyRow';
import { FaSearch } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';


const AllToys = () => {
    const allToys = useLoaderData()
    const [search, setSearch] = useState([...allToys])
    useTitle('All Toys')
    const handleSearch = event => {
        event.preventDefault()
        const form = event.target;
        const search = form.search.value;
        const searchedToys = allToys.filter(toys => toys.toyName == search)
        setSearch([...searchedToys])
        

    }
    return (
        <div >
            <div className=''>
            <form onSubmit={handleSearch} className='text-center mt-20'  action="">
                <input className='border-2 border-green-300 w-96 p-3 rounded-xl mx-5' name='search' placeholder='Search Text' type="text" />
                <button className='bg-green-600 p-3 rounded-full text-white'><FaSearch className='text-xl'></FaSearch></button>
            </form>
            </div>
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
                            search.map(toy => <ToyRow key={toy._id} toy={toy}></ToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;