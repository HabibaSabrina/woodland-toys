import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <FaSpinner className='animate-spin text-green-600 w-8 h-8 mx-auto mt-20'></FaSpinner>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;