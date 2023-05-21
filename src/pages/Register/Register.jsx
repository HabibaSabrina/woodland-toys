import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    useTitle('Register')
    const handleUserRegister = event =>{
        event.preventDefault();
        // getting data from registration form
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // validation
        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        else if(email.length == 0 || password.length == 0){
            setError('')
        }
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
            setError('')
            event.target.reset()
            setSuccess('user has created successfully')
            updateUserData(result.user, photo, name)
        })
        .catch(error =>{
            setError('Please fill up both email and password field')
            setSuccess('')
        })
        // setting user info data
        const updateUserData = (user, photo, name) =>{
            updateProfile(user, {
                photoURL: photo,
                displayName: name
              })
              .then(() => {
                console.log("user name updated")
              })
              .catch((error) => {
                setError(error.message)
              });
              
        }
    }
    return (
        <div>
            <div className='mt-10'>
            <img src="/peek.png" className='w-60 mx-auto -mb-5' alt="" />
            <div className='bg-green-300 p-10 md:mx-96 rounded-xl'>
                <h1 className='text-center text-3xl font-bold text-[#673c0b]'>Register</h1>
                <form onSubmit={handleUserRegister}>
                    <div className='text-center mt-10'>
                    <p className='font-bold text-[#673c0b]'>Name</p>
                        <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-full' type="text" name="name" required />
                        <br />
                        <p className='font-bold mt-10 text-[#673c0b]'>Email</p>
                        <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-full' type="email" name="email" required />
                        <br />
                        <p className='font-bold mt-10 text-[#673c0b] '>Password</p>
                        <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-full' type="password" name="password" required />
                        <br />
                        <p className='font-bold mt-10 text-[#673c0b]'>Photo URL</p>
                        <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-full' type="text" name="photo" required />
                        <br />
                        <button className='bg-[#673c0b] w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-green-900 mt-10'>Register</button>
                        <p className='my-5 text-green-950 font-semibold'>Already have an account? <Link to="/login"><span className='text-red-800 font-semibold'>Login</span></Link></p>
                    </div>
                </form>
                <p className='text-center text-red-500 font-semibold'>{error}</p>
                <p className='text-center text-blue-800 font-semibold'>{success}</p>
            </div>
        </div>
        </div>
    );
};

export default Register;