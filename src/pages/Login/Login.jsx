import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='mt-10'>
            <img src="/peek.png" className='w-60 mx-auto -mb-5' alt="" />
            <div className='bg-green-300 p-10 md:mx-96 rounded-xl'>
                <h1 className='text-center text-3xl font-bold text-[#673c0b]'>Login</h1>
                <form>
                    <div className='text-center mt-10'>
                        <p className='font-bold text-[#673c0b]'>Email</p>
                        <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-full' type="email" name="email" required />
                        <br />
                        <p className='font-bold mt-10 text-[#673c0b] '>Password</p>
                        <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-full' type="password" name="password" required />
                        <br />
                        <button className='bg-[#673c0b] w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-orange-500 mt-10'>Login</button>
                        <button className='mx-auto bg-[#673c0b] w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-orange-500 mt-10 flex items-center gap-3 justify-center'><FaGoogle></FaGoogle><span>Google Sign in</span></button>
                        <p className='my-5 text-[#673c0b] font-semibold'>Don't Have an Account? Please <Link to="/register"><span className='text-orange-700 font-semibold'>Register</span></Link></p>
                    </div>
                </form>
                {/* <p className='text-center text-red-500 font-semibold'>{error}</p> */}
                {/* <p className='text-center text-green-500 font-semibold'>{success}</p> */}
            </div>
        </div>
    );
};

export default Login;