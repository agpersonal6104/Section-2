import React, { Children } from 'react'

const Button = ({children}) => {
  return (
    <button className='px-4 py-2 text-black bg-gray-700 border border-black rounded'>
        {children}
    </button>
  )
}

export default Button