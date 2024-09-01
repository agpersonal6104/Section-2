'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const UpdateUser = () => {

    const { id } = useParams();

    const getUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getbyid/' +id);
        console.log(res.data);
        
    }

    useEffect(() => {
        getUserData();
    }, []);

  return (
    <div>
        <div className='max-w-xl p-5 mx-auto border rounded-lg shadow'>
            <h1 className='text-2xl font-bold text-center'>Update User Details</h1>
            
            <form>

                <input
                className='w-full p-3 mt-5 bg-gray-100 border rounded-lg' type="text"
                id='name' placeholder='Enter your Name' />
                <input
                className='w-full p-3 mt-5 bg-gray-100 border rounded-lg' type="email"
                id='email' placeholder='Enter your Email' />
                <input
                className='w-full p-3 mt-5 bg-gray-100 border rounded-lg' type="password"
                id='password' placeholder='Enter your Password' />
                <input
                className='w-full p-3 mt-5 bg-gray-100 border rounded-lg' type="text"
                id='city' placeholder='Enter your City' />

                <button className='block p-3 mt-6 text-white bg-blue-500 rounded-lg m1-auto'>Update User</button>
                
                
            </form>
        </div>
    </div>
  )
}

export default UpdateUser;