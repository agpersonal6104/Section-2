import React from 'react'

const TodoList = () => {
  return (
    <div>

        <h1 className='text-5xl font-bold text-center'>ToDo List</h1>

        <div className='mt-5 border-2 rounded-md shadow'>

            <div className='border-b-2 border-gray-600'>
                
                <input 
                className='w-full p-3 border-2 border-blue-500 rounded' 
                placeholder='Add a new Task'
                type="text" />
                
            </div>
            
            <div className='p-5'></div>
            
        </div>
        
    </div>
  )
}

export default TodoList;