import React from 'react';
import { FaRegGrinWink } from 'react-icons/fa';

const ParentsTips = () => {
    return (
        <div className='my-20 p-20 bg-green-200 rounded-xl'>
            <h1 className='text-center text-3xl mb-10 font-bold'>Pro Tips for Parents</h1>
            <div className='flex gap-10 items-center justify-center'>
            <img className='w-96 rounded-full' src="/parent.jpg" alt="" />
            <div>
                <p className='mb-4 flex items-center gap-3 text-xl'><FaRegGrinWink className='text-blue-900'></FaRegGrinWink>Set Limits and Be Consistent With Your Discipline</p>
                <p className='mb-4 flex items-center gap-3 text-xl'><FaRegGrinWink className='text-blue-900'></FaRegGrinWink>Boost Your Child's Self-Esteems</p>
                <p className='mb-4 flex items-center gap-3 text-xl'><FaRegGrinWink className='text-blue-900'></FaRegGrinWink>Catch Kids Being Good</p>
                <p className='mb-4 flex items-center gap-3 text-xl'><FaRegGrinWink className='text-blue-900'></FaRegGrinWink>Make Time for Your Kids</p>
                <p className='mb-4 flex items-center gap-3 text-xl'><FaRegGrinWink className='text-blue-900'></FaRegGrinWink>Be a Good Role Model</p>
                <p className='mb-4 flex items-center gap-3 text-xl'><FaRegGrinWink className='text-blue-900'></FaRegGrinWink>Make Communication a Priority</p>
                <p className='mb-4 flex items-center gap-3 text-xl'><FaRegGrinWink className='text-blue-900'></FaRegGrinWink>Be Flexible and Willing to Adjust Your Parenting Style</p>
                <p className='mb-4 flex items-center gap-3 text-xl'><FaRegGrinWink className='text-blue-900'></FaRegGrinWink>Show That Your Love Is Unconditional</p>
            </div>
        </div>
        </div>
    );
};

export default ParentsTips;