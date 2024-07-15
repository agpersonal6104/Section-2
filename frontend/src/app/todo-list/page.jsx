'use client';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const TodoList = () => {

    // const [num, setNum] = useState(10);

    const [taskList, setTaskList] = useState([]);
    console.log(taskList);
    const addTask = (e) => {

        if (e.code === 'Enter') {

            if (!e.target.value) {
                alert('Enter a value to add');
                return;
            }

            console.log(e.target.value);

            const newTask = { text: e.target.value, completed: false, createdAt: new Date() };

            setTaskList([...taskList, newTask]);

            e.target.value = '';
            toast.success('New Task Added Successfully');
        }
    };

    const deleteTask = (index) => {
        console.log(index);

        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
        toast.success('Task Deleted Successfully');
    }

    const toggleComplete = (index) => {
        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        setTaskList([...temp]);
    }

    return (
        <div className='max-w-[80%] mx-auto'>
            {/* {num} */}
            {/* <button onClick={() => { setNum(num + 1); console.log(num); }}>add number</button> */}
            <h1 className='text-5xl font-bold text-center'>ToDo List</h1>

            <div className='mt-5 border-2 rounded-md shadow'>
                <div className='p-4 border-b-2 border-gray-600'>
                    <input
                        placeholder='Add a new task'
                        className='w-full p-3 border-2 border-blue-500 rounded'
                        type="text"
                        onKeyDown={addTask}
                    />
                </div>

                <div className='p-5'>
                    {
                        taskList.map((task, index) => {
                            return <div key={index} className='p-4 mb-5 border-2 rounded-lg shadow-md'>
                                {task.completed ? (
                                    <p className='px-3 text-sm text-white bg-green-500 rounded-full w-fit'>Complete</p>
                                ) : (
                                    <p className='px-3 text-sm text-white bg-yellow-500 rounded-full w-fit'>Pending</p>
                                )}
                                <p className={task.completed ? 'line-through' : ''}>{task.text}</p>
                                <div className='flex justify-end gap-3 mt-3'>
                                    <button
                                        onClick={() => { toggleComplete(index) }}
                                        className='px-3 text-white bg-blue-500 rounded-full'>Edit</button>
                                        
                                    <button
                                        onClick={() => { deleteTask(index) }}
                                        className='px-3 text-white bg-red-500 rounded-full'>Delete</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList;