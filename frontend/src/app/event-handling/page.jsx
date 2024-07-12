'use client';
import React from 'react';

const EventHandling = () => {
  return (
    <div className='max-w-5xl mx-auto'>
        <h1 className='my-5 text-3xl font-bold text-center'>Event Handling in React</h1>
        <hr />

        <button 
            className='p-3 mt-5 text-white rounded-md bg-violet-400'
            onClick={ () => { alert('Button was clicked'); } }>
        Click me</button>

        <input 
            className='w-full px-3 py-1 mt-3 border-2 border-gray-500 rounded-md'
            onChange={ () => { console.log('Something changed'); } }
        type="text" />
    </div>
  )
}

export default EventHandling;