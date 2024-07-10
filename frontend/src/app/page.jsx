import React from 'react';

const page = () => {
  return (
    <div>

      <h1 style={{ color:'red', fontSize: '50px', textAlign: 'center' }}>
        Home Page
      </h1>

      <input type="text" />

      <button className='p-3 m-5 text-white bg-blue-500 rounded-md'>Learn More</button>

      <img src="/vercel.svg" alt="" />

    </div>
  )
}

export default page