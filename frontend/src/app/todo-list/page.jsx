'use client';
import React, { useState } from 'react';

function TodoList() {
    // const [num, setNum] = useState(10);

    const [taskList, setTaskList] = useState([]);

    const addtask = (e) => {
        if (e.code === 'Enter') {

            if (!e.target.value) {
                alert('Please enter a task');
                return;
            }

            console.log(e.target.value);

            const newTask = { text: e.target.value, completed: false, createdAt: new Date() };

            setTaskList([...taskList, newTask]);

            e.target.value = '';
        }
    };

    const deleteTask = (index) => {
        console.log(index);
        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    };

    const toggleComplete = (index) => {
        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        setTaskList([...temp]);
    };

    return (
        <div className='max-w-[80%] mx-auto'>

            {/* {num} */}
            {/* <button onClick={ () => { setNum(num + 1); console.log(num); } }>add number</button> */}

            <h1 className='text-5xl font-bold text-center'>ToDo List</h1>

            <div className='mt-5 border-2 rounded-md shadow'>

                <div className='border-b-2 border-gray-600'>

                    <input
                        className='w-full p-3 border-2 border-blue-500 rounded'
                        placeholder='Add a new Task'
                        type="text"
                        onKeyDown={addtask} />

                </div>

                <div className='p-5'>
                    {taskList.map((task, index) => {
                        return <div className='p-4 rounded-lg shadow-md' key={index}>
                            <p className={ task.completed ? 'line-through' : ''} >{task.text}</p>
                            <div className='flex justify-end gap-3 mt-3'> 
                                <button 
                                onClick={() => { toggleComplete(index); } } className='px-3 text-white bg-blue-500 rounded-full'>Edit</button>

                                <button
                                    onClick={() => { deleteTask(index); } }
                                    className='px-3 text-white bg-red-500 rounded-full'
                                >Delete</button>
                            </div>
                        </div>;
                    })}
                </div>

            </div>

        </div>
    );
}

export default TodoList;