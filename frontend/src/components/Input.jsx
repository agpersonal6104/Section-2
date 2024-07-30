import React from 'react'

const Input = ({label,type,id,disabled}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={type}
        className='block w-full px-3 py-1 border-2 border-gray-500 rounded' />
    </div>
  )
}

export default Input;