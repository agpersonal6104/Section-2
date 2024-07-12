'use client';
import React from 'react';

const EventHandling = () => {

    const previewImage = (e) =>{
        const file = e.target.files[0];
        // initialize file reader
        const reader = new FileReader();
        
        // what do do when image is loaded
        reader.onload = (data) => {
            const img = new Image();
            img.src = data.target.result;
            document.body.append(img);
        };

        // load the image
        reader.readAsDataURL(file);
    }
    
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
            onChange={ ( e ) => { console.log(e.target.value); } }
        type="text" />

        <input type="color" className='mt-5'
        onChange={ ( e ) => { document.body.style.backgroundColor = e.target.value } } />

        <input type="file"
            onChange={ (e) => { console.log(e.target.files); } }        
        />

        <input type="file" 
            onChange={ previewImage }
        />
    </div>
  )
}

export default EventHandling;