'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [num, setNum] = useState(10)

    const addtask = ( e ) => {
        if(e.code === 'Enter')
        {
            console.log(e.target.value);
        }
    }
    
  return (
    <div className='max-w-[80%] mx-auto'>

        {num}
        <button onClick={ () => { setNum(num + 1); console.log(num); } }>add number</button>

        <h1 className='text-5xl font-bold text-center'>ToDo List</h1>

        <div className='mt-5 border-2 rounded-md shadow'>

            <div className='border-b-2 border-gray-600'>
                
                <input 
                    className='w-full p-3 border-2 border-blue-500 rounded' 
                    placeholder='Add a new Task'
                    type="text" 
                    onKeyDown={addtask}
                />
                
            </div>
            
            <div className='p-5'></div>
            
        </div>
        
    </div>
  )
}

export default TodoList;