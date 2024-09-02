'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateUser = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState(null);
    
    const router = useRouter();

    const getUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getbyid/' +id);
        console.log(res.data);
        setUserData(res.data);
    }

    useEffect(() => {
        getUserData();
    }, []);

    const submitForm = (values) => {
        console.log(values);

        axios.put('http://localhost:5000/user/update/'+id, values)
        .then((result) => {
            toast.success('UserUpdated Successfully!;')
            router.push('/manageuser');
        }).catch((err) => {
            console.log(err);
            toast.error('Failed to update user!');
        });
        
    }

  return (
    <div>
        <div className='max-w-xl p-5 mx-auto border rounded-lg shadow'>
            <h1 className='text-2xl font-bold text-center'>Update User Details</h1>

            {
                userData !== null ? (

                <Formik initialValues={userData} onSubmit={submitForm}>
                    {
                        ( updateForm ) => { return(
                            <form onSubmit={updateForm.handleSubmit}>

                <input
                className='w-full p-3 mt-5 bg-gray-100 border rounded-lg' 
                type="text"
                id='name'
                onChange={updateForm.handleChange}
                value={updateForm.values.name}
                placeholder='Enter your Name' />
                
                <input
                className='w-full p-3 mt-5 bg-gray-100 border rounded-lg' 
                type="email"
                id='email'
                onChange={updateForm.handleChange}
                value={updateForm.values.email}
                placeholder='Enter your Email' />
                
                <input
                className='w-full p-3 mt-5 bg-gray-100 border rounded-lg' 
                type="password"
                id='password'
                onChange={updateForm.handleChange}
                value={updateForm.values.password}
                placeholder='Enter your Password' />
                
                <input
                className='w-full p-3 mt-5 bg-gray-100 border rounded-lg' 
                type="text"
                id='city'
                onChange={updateForm.handleChange}
                value={updateForm.values.city}
                placeholder='Enter your City' />

                <button className='block p-3 mt-6 text-white bg-blue-500 rounded-lg m1-auto'>Update User</button>
                 
                </form>
                        ) }
                    }
                </Formik>
                    
                
                    
                ) : <p className='mt-5 text-3xl font-bold text-center text-gray-300'>Loading...</p>
            }
            
        </div>
    </div>
  )
}

export default UpdateUser;