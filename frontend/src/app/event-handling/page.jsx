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
    <div className='max-w-5xl mx-auto'
    onMouseMove={ (e) => {
        document.getElementById('circle').style.left = e.clientX-20 + 'px';
        document.getElementById('circle').style.top = e.clientY-20 + 'px';
    }
    }>

        <div id='circle'
            onMouseDown={(e)=> {
                e.target.style.height = '30px';
                e.target.style.width = '30px';
                }
            }
            onMouseUp={(e)=>{
                e.target.style.height = '46px';
                e.target.style.width = '46px';
                }
            } 
            className='absolute border border-black rounded-full size-12 big-black'>
                
        </div>

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