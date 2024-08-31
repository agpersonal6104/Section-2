'use client';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const manageUser = () => {
  
  const [userList, setUserList] = useState([]);
  const fetchUsersData = async () => {

    
    const res = await axios.get('http://localhost:5000/user/getall');
    console.log(res.status);
    console.table(res.data);
    setUserList(res.data);
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  const displayusers = () => {
    
    if(userList.length === 0)
    {
      return <p>Loading.... Please Wait!</p>
    }
    else
    {
      return <table className='w-full border-2 border-blue-500'>
        <thead className='text-left text-white bg-blue-500'>
          
          <tr>
            <th className='p-3 text-lg'>ID</th>
            <th className='p-3 text-lg'>Name</th>
            <th className='p-3 text-lg'>Email</th>
            <th className='p-3 text-lg'>City</th>
            </tr>
          
        </thead>
        
        <tbody>
          {
            userList.map((user) => {
              return <tr key={user._id} className='border border-blue-500'>
                
                <td className='p-3'> {user._id} </td>
                <td className='p-3'>{user.name}</td>
                <td className='p-3'>{user.email}</td>
                <td className='p-3'>{user.city}</td>
                
              </tr>
            } )
          }
        </tbody>
      </table>  
    }
  }
    
  return (
    <div>
      <div className='max-w-[80%] mx-auto shadow-lg rounded-lg p-5'>
        <h1 className='mt-5 text-3xl font-bold text-center'>ManageUser</h1>
        {displayusers()}
      </div>
    </div>
  )
}

export default manageUser;