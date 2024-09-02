import React from 'react'

const UploadingFile = () => {
  return (
    <div className='flex justify-center max-w-2xl p-8 mx-auto mt-3 border-4 border-blue-300 rounded-lg'>

        <label htmlFor="uploadfile" className='text-5xl font-vold '>⚡ Upload your File</label>
        <input id='uploadfile' type="file" className='hidden' />
    </div>
  )
}

export default UploadingFile;