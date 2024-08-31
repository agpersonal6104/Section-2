'use client';
import axios from 'axios'
import React, { useEffect } from 'react'

const manageUser = () => {
  
  const fetchUsersData = async () => {
    
    const res = await axios.get('http://localhost:5000/user/getall');
    console.log(res.status);
    console.log(res.data);
    
  }

  useEffect(() => {
    
    fetchUsersData();
    
  }, [])
  
  
  return (
    <div>
      <div className='max-w-[80%] mx-auto shadow-lg rounded-lg p-5'>
        <h1 className='mt-5 text-3xl font-bold text-center'>ManageUser</h1>
      </div>
    </div>
  )
}

export default manageUser;