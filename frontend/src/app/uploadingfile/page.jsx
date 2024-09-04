'use client';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const UploadingFile = () => {

  const handleUpload = (e) => {
    const file = e.target.files[0];
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mypreset');
    formData.append('cloud_name', 'dv8josqjy');

    axios.post('https://api.cloudinary.com/v1_1/dv8josqjy/image/upload',formData,{
      headers: { 'Content-type' : 'multipart/form-data' }
    })
    .then((result) => {
      console.log(result.data);
      toast.success('File Uploaded Successfully');
    }).catch((err) => {
      console.log(err);
      toast.error('Failed to uplaod file');
    });
  }
  
  return (
    <div className='flex justify-center max-w-2xl p-8 mx-auto mt-3 border-4 border-blue-300 rounded-lg'>

        <label htmlFor="uploadfile" className='text-5xl font-vold '>⚡ Upload your File</label>
        <input
        onChange={handleUpload}
        id='uploadfile' type="file" className='hidden' />
    </div>
  )
}

export default UploadingFile;