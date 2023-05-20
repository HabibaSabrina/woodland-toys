import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [userToys, setUserToys] = useState([])
    console.log(user)
    const url = `http://localhost:5000/toys?sellerEmail=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setUserToys(data))
    },[])
    return (
        <div>
            <h1>{userToys.length}</h1>
        </div>
    );
};

export default MyToys;