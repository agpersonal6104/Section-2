'use client';
import React from 'react';

const EventHandling = () => {
  return (
    <div className='max-w-5xl mx-auto'>
        <h1 className='my-5 text-3xl font-bold text-center'>Event Handling in React</h1>
        <hr />

        <button className='p-3 text-white rounded-md bg-violet-400'
        onClick={ () => { alert('Button was clicked'); } }>Click me</button>
    </div>
  )
}

export default EventHandling;