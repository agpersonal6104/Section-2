'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const manageProduct = () => {

    const updateProduct = () => {
        
        const id=useParams();
        const [productData, setProductData] = useState(null);

        const router = useRouter();

        const getProductData = async () => {
            const res = await axios.get('http://localhost:5000/user/getbyid/' +id);
            console.log(res.data);
            setProductData(res.data);
        }
        
    }
    
  return (
    <div className='max-w-xl p-5 mx-auto border rounded-lg shadow'>
        <div className='text-2xl font-bold text-center'>Update Product Details</div>
        {
            pro
        }
    </div>
  )
}

export default manageProduct;