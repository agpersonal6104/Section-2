'use client';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const manageUser = () => {
  
  const fetchUsersData = async () => {

    const [userList, setUserList] = useState([]);
    
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
      return <table>
        <thead>
          
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            </tr>
          
        </thead>
        
        <tbody>
          {
            userList.map((user) => {
              return <tr key={user._id}>
                
                <td> {user._id} </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                
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
      </div>
    </div>
  )
}

export default manageUser;